"use client"

import { useRef, useEffect } from 'react'
import { useTheme } from 'next-themes'

// ---------------------------------------------------------------------------
// Shaders
// ---------------------------------------------------------------------------

const VERTEX_SHADER_SOURCE = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

// Fragment shader uses the Wyvill polynomial metaball function:
//   f_i(distSq) = max(0, 1 - distSq)^3
// where distSq = (dx/rx)^2 + (dy/ry)^2 (elliptical, aspect-corrected).
//
// Advantages over 1/distSq:
//   - Bounded: max contribution per blob = 1.0 (no center spike)
//   - Smooth gradient everywhere, including at the center (gradient = 0 there)
//   - Hard cutoff at distSq = 1 — blobs don't influence distant pixels at all
//
// Surface threshold is 0.20. At that threshold, each isolated blob's visual
// radius in UV space is sqrt(1 - 0.20^(1/3)) ≈ 0.64 × the rx/ry parameter.
const FRAGMENT_SHADER_SOURCE = `
  precision highp float;

  uniform vec2  u_resolution;
  uniform float u_time;
  uniform vec2  u_blobs[16];
  uniform vec2  u_radii_xy[16];
  uniform vec2  u_mouse;
  uniform float u_dark_mode; // 0.0 = light, 1.0 = dark (animated)

  // ---- Backgrounds ----

  // Dark: near-black bottom -> deep navy mid -> dark purple top
  vec3 bgDark(float t) {
    vec3 bot = vec3(0.022, 0.008, 0.050);
    vec3 mid = vec3(0.028, 0.038, 0.135);
    vec3 top = vec3(0.070, 0.016, 0.105);
    if (t < 0.5) return mix(bot, mid, t * 2.0);
    return mix(mid, top, (t - 0.5) * 2.0);
  }

  // Light: warm ivory bottom -> pale honey mid -> soft amber top (lamp oil)
  vec3 bgLight(float t) {
    vec3 bot = vec3(0.990, 0.970, 0.930);
    vec3 mid = vec3(0.975, 0.930, 0.790);
    vec3 top = vec3(0.955, 0.875, 0.640);
    if (t < 0.5) return mix(bot, mid, t * 2.0);
    return mix(mid, top, (t - 0.5) * 2.0);
  }

  // ---- Blob colors ----

  // Dark mode: deep crimson -> vivid orange -> hot amber (glowing wax in darkness)
  vec3 blobDark(float h) {
    vec3 cool = vec3(0.78, 0.08, 0.14);
    vec3 warm = vec3(0.94, 0.40, 0.04);
    vec3 hot  = vec3(0.99, 0.80, 0.06);
    if (h < 0.5) return mix(cool, warm, h * 2.0);
    return mix(warm, hot, (h - 0.5) * 2.0);
  }

  // Light mode: deep violet -> rich purple -> vivid magenta-purple
  // (opaque wax clearly visible against warm amber oil)
  vec3 blobLight(float h) {
    vec3 cool = vec3(0.26, 0.05, 0.66);
    vec3 warm = vec3(0.48, 0.07, 0.76);
    vec3 hot  = vec3(0.64, 0.10, 0.84);
    if (h < 0.5) return mix(cool, warm, h * 2.0);
    return mix(warm, hot, (h - 0.5) * 2.0);
  }

  // ---- Wyvill metaball field ----
  // Returns sum of max(0, 1 - distSq)^3 across all active blobs.
  // distSq is normalized so it equals 1.0 at the blob's ellipse boundary.
  float computeField(vec2 uv, float aspect) {
    float f = 0.0;
    for (int i = 0; i < 16; i++) {
      float rx  = u_radii_xy[i].x;
      float ry  = u_radii_xy[i].y;
      // Multiply-guard: inactive blobs have rx=0 -> guard=0 -> no contribution
      float guard = rx > 0.0001 ? 1.0 : 0.0;
      float nrx = max(rx, 0.0001);
      float nry = max(ry, 0.0001);
      float dx  = (uv.x - u_blobs[i].x) * aspect;
      float dy  =  uv.y - u_blobs[i].y;
      float dSq = (dx * dx) / (nrx * nrx) + (dy * dy) / (nry * nry);
      float t   = max(0.0, 1.0 - dSq);
      f += guard * t * t * t; // Wyvill: smooth, bounded [0,1] per blob
    }
    return f;
  }

  void main() {
    vec2  uv     = gl_FragCoord.xy / u_resolution;
    float aspect = u_resolution.x / u_resolution.y;

    // ---- Field ----
    float field = computeField(uv, aspect);

    // Weighted average blob height for color temperature (cool at bottom, hot at top)
    float wHeight = 0.0;
    float wTotal  = 0.0;
    for (int i = 0; i < 16; i++) {
      float rx  = u_radii_xy[i].x;
      float guard = rx > 0.0001 ? 1.0 : 0.0;
      float nrx = max(rx, 0.0001);
      float nry = max(u_radii_xy[i].y, 0.0001);
      float dx  = (uv.x - u_blobs[i].x) * aspect;
      float dy  =  uv.y - u_blobs[i].y;
      float dSq = (dx * dx) / (nrx * nrx) + (dy * dy) / (nry * nry);
      float w   = guard * max(0.0, 1.0 - dSq);
      wHeight += u_blobs[i].y * w;
      wTotal  += w;
    }
    float heightFrac = wTotal > 0.0 ? wHeight / wTotal : 0.5;

    // ---- Surface + glow layers ----
    // Threshold 0.20: surface forms where field > 0.20.
    // Glow layers extend below threshold for a soft halo.
    float surfaceMask = smoothstep(0.16, 0.24, field);
    float glow1 = smoothstep(0.08, 0.16, field) * (1.0 - surfaceMask) * 0.60;
    float glow2 = smoothstep(0.03, 0.08, field) * (1.0 - surfaceMask) * 0.28;
    float glow3 = smoothstep(0.005,0.030, field) * (1.0 - surfaceMask) * 0.10;

    // ---- Surface normal via finite differences ----
    // Wyvill gradient is smooth everywhere — no spike at blob centers.
    float eps = 0.008;
    float fR  = computeField(uv + vec2(eps, 0.0), aspect);
    float fU  = computeField(uv + vec2(0.0, eps), aspect);
    // z component (0.45) ensures we never normalize a zero vector
    vec3  N   = normalize(vec3(field - fR, field - fU, 0.45));

    // ---- Phong lighting ----
    vec3  L       = normalize(vec3(-0.4, 0.85, 0.65));
    float diffuse = max(dot(N, L), 0.0);
    vec3  H       = normalize(L + vec3(0.0, 0.0, 1.0));
    // Softer exponent (16) for wax-like broad highlight, not a sharp glass point
    float spec    = pow(max(dot(N, H), 0.0), 16.0) * surfaceMask;

    // ---- Cylindrical vignette (glass container walls) ----
    float ex       = abs(uv.x - 0.5) * 2.0;
    float ey       = abs(uv.y - 0.5) * 2.0;
    float vignette = 1.0
      - smoothstep(0.60, 1.00, ex) * mix(0.20, 0.55, u_dark_mode)
      - smoothstep(0.82, 1.00, ey) * 0.08;

    // ---- Theme-aware colors ----
    vec3 bgColor   = mix(bgLight(uv.y),   bgDark(uv.y),   u_dark_mode) * vignette;
    vec3 blobColor = mix(blobLight(heightFrac), blobDark(heightFrac), u_dark_mode);

    // Diffuse shading on blob surface (simulates 3D wax depth)
    blobColor *= (0.50 + 0.50 * diffuse);

    // Glow intensity: strong additive in dark mode, gentle tint in light mode
    float glowStr = mix(0.22, 1.0, u_dark_mode);
    vec3 color = bgColor;
    color += blobColor * glow3 * glowStr;
    color += blobColor * glow2 * 1.35 * glowStr;
    color += blobColor * glow1 * 1.80 * glowStr;
    // Hard surface
    color = mix(color, blobColor, surfaceMask);
    // Specular highlight — brighter in dark mode
    vec3 specColor = mix(vec3(0.90, 0.80, 1.00), vec3(1.0, 0.96, 0.88), u_dark_mode);
    color += specColor * spec * mix(0.45, 0.85, u_dark_mode);

    // ---- Gamma correction ----
    color = pow(clamp(color, 0.0, 1.0), vec3(1.0 / 2.2));

    gl_FragColor = vec4(color, 1.0);
  }
`

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface BlobState {
  x: number
  y: number
  vx: number
  vy: number
  baseRadius: number
  radiusPhase: number
  radiusSpeed: number
  heatCycle: number
}

export interface LavaLampBackgroundProps {
  blobCount?: number
  speed?: number
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function compileShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader {
  const shader = gl.createShader(type)!
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader)
    gl.deleteShader(shader)
    throw new Error(`Shader compile error: ${info}`)
  }
  return shader
}

function initBlobs(count: number): BlobState[] {
  return Array.from({ length: count }, () => ({
    x: 0.15 + Math.random() * 0.70,
    y: Math.random() * 0.30,                     // start pooled near bottom
    vx: (Math.random() - 0.5) * 0.006,
    vy: 0.006 + Math.random() * 0.010,           // slow initial rise
    // Large radius: Wyvill visual radius ≈ 0.64 × baseRadius in UV units
    baseRadius: 0.20 + Math.random() * 0.10,
    radiusPhase: Math.random() * Math.PI * 2,
    radiusSpeed: 0.25 + Math.random() * 0.60,    // slow organic pulsing
    heatCycle:  Math.random() * Math.PI * 2,
  }))
}

function updateBlobs(
  blobs: BlobState[],
  dt: number,
  speed: number,
  mouseX: number,
  mouseY: number,
  time: number,
): void {
  const MOUSE_REPEL_STRENGTH = 0.00012
  const MOUSE_REPEL_RADIUS   = 0.20
  const HORIZ_OSCILLATION    = 0.0035   // gentle convection drift
  const HEAT_BOOST           = 0.014    // heating plate at bottom
  const COOL_REVERSE         = 0.010    // cooling at top
  const MARGIN               = 0.05

  for (const blob of blobs) {
    // Mouse repulsion
    const mdx     = blob.x - mouseX
    const mdy     = blob.y - mouseY
    const mDistSq = mdx * mdx + mdy * mdy
    if (mDistSq < MOUSE_REPEL_RADIUS * MOUSE_REPEL_RADIUS && mDistSq > 0.0001) {
      const mDist = Math.sqrt(mDistSq)
      const force = MOUSE_REPEL_STRENGTH / mDistSq
      blob.vx += (mdx / mDist) * force * dt * speed
      blob.vy += (mdy / mDist) * force * dt * speed
    }

    // Heating: rising force when pooled near base
    if (blob.y < 0.18) {
      blob.vy += HEAT_BOOST * dt * speed * (1.0 - blob.y / 0.18)
    }

    // Cooling: decelerate and reverse near top
    if (blob.y > 0.78) {
      const overshoot = (blob.y - 0.78) / 0.22
      blob.vy -= COOL_REVERSE * dt * speed * overshoot * 5.0
    }

    // Slow sinusoidal horizontal sway (convection currents)
    blob.vx += Math.sin(time * 0.35 + blob.heatCycle) * HORIZ_OSCILLATION * dt * speed

    // High viscous damping (oil/wax behavior)
    blob.vx *= Math.max(0, 1.0 - 2.0 * dt)
    blob.vy *= Math.max(0, 1.0 - 1.0 * dt)

    blob.x += blob.vx * dt * speed
    blob.y += blob.vy * dt * speed

    // Horizontal wrap
    if (blob.x < -0.12) blob.x += 1.24
    if (blob.x >  1.12) blob.x -= 1.24

    // Vertical soft bounce at top/bottom (energy-absorbing pool behavior)
    if (blob.y < MARGIN) {
      blob.y = MARGIN
      blob.vy = Math.abs(blob.vy) * 0.20
    }
    if (blob.y > 1.0 - MARGIN) {
      blob.y = 1.0 - MARGIN
      blob.vy = -Math.abs(blob.vy) * 0.18
    }
  }
}

// Pack blob positions + elliptical radii into pre-allocated Float32Arrays.
// Unused slots (index >= blobs.length) keep rx=0 so the Wyvill guard zeroes them.
function packBlobUniforms(
  blobs: BlobState[],
  time: number,
  blobPositions: Float32Array,
  radii: Float32Array,
): void {
  blobPositions.fill(0)
  radii.fill(0)

  for (let i = 0; i < blobs.length; i++) {
    const blob = blobs[i]
    const spd  = Math.sqrt(blob.vx * blob.vx + blob.vy * blob.vy)

    // Slow organic radius pulse
    const pulsed = blob.baseRadius + 0.008 * Math.sin(time * blob.radiusSpeed + blob.radiusPhase)

    // Velocity-based stretch — elongate in direction of travel (mostly vertical)
    const stretchFactor = Math.min(1.0 + spd * 5.0, 1.75)
    const squishFactor  = Math.max(1.0 / stretchFactor, 0.65)

    const vLen  = Math.max(spd, 0.0001)
    const absNx = Math.abs(blob.vx / vLen)
    const absNy = Math.abs(blob.vy / vLen)

    blobPositions[i * 2 + 0] = blob.x
    blobPositions[i * 2 + 1] = blob.y
    radii[i * 2 + 0] = pulsed * (1.0 + (stretchFactor - 1.0) * absNx + (squishFactor - 1.0) * absNy)
    radii[i * 2 + 1] = pulsed * (1.0 + (squishFactor - 1.0) * absNx + (stretchFactor - 1.0) * absNy)
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function LavaLampBackground({ blobCount = 8, speed = 1.0 }: LavaLampBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  // Ref lets the render loop read the current theme without restarting the effect.
  // Animates smoothly: darkValue in render loop interpolates toward this each frame.
  const targetDarkRef = useRef<number>(1.0)
  useEffect(() => {
    targetDarkRef.current = resolvedTheme === 'light' ? 0.0 : 1.0
  }, [resolvedTheme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // ---- WebGL init ----
    let gl: WebGLRenderingContext | null = null
    try {
      gl =
        (canvas.getContext('webgl', { antialias: true, alpha: false }) as WebGLRenderingContext | null) ??
        (canvas.getContext('experimental-webgl' as 'webgl', { antialias: true, alpha: false }) as WebGLRenderingContext | null)
    } catch { /* ignore */ }
    if (!gl) return

    const precInfo      = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT)
    const precQualifier = (precInfo && precInfo.rangeMax > 0) ? 'highp' : 'mediump'
    const fragSrc       = FRAGMENT_SHADER_SOURCE.replace('precision highp float;', `precision ${precQualifier} float;`)

    let program: WebGLProgram
    try {
      const vert = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE)
      const frag = compileShader(gl, gl.FRAGMENT_SHADER, fragSrc)
      program = gl.createProgram()!
      gl.attachShader(program, vert)
      gl.attachShader(program, frag)
      gl.linkProgram(program)
      if (!gl.getProgramParameter(program, gl.LINK_STATUS))
        throw new Error(`Link error: ${gl.getProgramInfoLog(program)}`)
      gl.useProgram(program)
    } catch (e) {
      console.warn('LavaLampBackground: WebGL init failed', e)
      return
    }

    // Full-screen quad (2 triangles, clip space)
    const vbo = gl.createBuffer()!
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,-1, 1,1, -1,1]), gl.STATIC_DRAW)
    const posLoc = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    const uResolution = gl.getUniformLocation(program, 'u_resolution')
    const uTime       = gl.getUniformLocation(program, 'u_time')
    const uBlobs      = gl.getUniformLocation(program, 'u_blobs')
    const uRadiiXY    = gl.getUniformLocation(program, 'u_radii_xy')
    const uMouse      = gl.getUniformLocation(program, 'u_mouse')
    const uDarkMode   = gl.getUniformLocation(program, 'u_dark_mode')

    // Pre-allocated to avoid per-frame GC pressure
    const blobPositions = new Float32Array(32)
    const radiiData     = new Float32Array(32)

    const blobs   = initBlobs(Math.min(blobCount, 16))
    let mouseX    = 0.5, mouseY = 0.5
    let lastTime  = 0
    let rafId     = 0
    let darkValue = targetDarkRef.current

    function render(timestamp: number) {
      if (!gl) return
      const dt   = Math.min((timestamp - lastTime) / 1000, 0.05)
      lastTime   = timestamp
      const time = timestamp / 1000

      // Smooth theme transition over ~0.7s
      darkValue += (targetDarkRef.current - darkValue) * Math.min(dt * 3.0, 1.0)

      updateBlobs(blobs, dt, speed, mouseX, mouseY, time)
      packBlobUniforms(blobs, time, blobPositions, radiiData)

      if (uBlobs)    gl.uniform2fv(uBlobs, blobPositions)
      if (uRadiiXY)  gl.uniform2fv(uRadiiXY, radiiData)
      if (uTime)     gl.uniform1f(uTime, time)
      if (uMouse)    gl.uniform2f(uMouse, mouseX, mouseY)
      if (uDarkMode) gl.uniform1f(uDarkMode, darkValue)

      gl.drawArrays(gl.TRIANGLES, 0, 6)
      rafId = requestAnimationFrame(render)
    }

    function onResize() {
      if (!gl || !canvas) return
      const dpr     = Math.min(window.devicePixelRatio, 1.5)
      canvas.width  = Math.round(window.innerWidth  * dpr)
      canvas.height = Math.round(window.innerHeight * dpr)
      gl.viewport(0, 0, canvas.width, canvas.height)
      if (uResolution) gl.uniform2f(uResolution, canvas.width, canvas.height)
    }

    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(document.documentElement)
    onResize()

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouseX = (e.clientX - rect.left) / rect.width
      mouseY = 1.0 - (e.clientY - rect.top) / rect.height
    }
    window.addEventListener('mousemove', onMouseMove)

    function onVisibilityChange() {
      if (document.hidden) {
        cancelAnimationFrame(rafId)
      } else {
        lastTime = 0
        rafId = requestAnimationFrame(render)
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    function onContextLost(e: Event) {
      e.preventDefault()
      cancelAnimationFrame(rafId)
    }
    canvas.addEventListener('webglcontextlost', onContextLost)

    rafId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      canvas.removeEventListener('webglcontextlost', onContextLost)
      gl?.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [blobCount, speed])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none block w-full h-full"
      style={{ background: 'linear-gradient(to top, #06010d, #07101e 50%, #120520)' }}
    />
  )
}
