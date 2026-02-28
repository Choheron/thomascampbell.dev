"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"

export default function ReactiveBackground() {
  // Normalized mouse position (0–1 range), starts at center
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  // Heavy spring — blobs feel like they float in fluid
  const springX = useSpring(mouseX, { mass: 1.5, stiffness: 40, damping: 25 })
  const springY = useSpring(mouseY, { mass: 1.5, stiffness: 40, damping: 25 })

  // Convert 0–1 mouse range to pixel offsets for each blob.
  // Different direction/magnitude per blob creates a parallax depth illusion.
  // Using pixels instead of vw/vh for reliable Framer Motion interpolation.
  const b1X = useTransform(springX, [0, 1], [-80, 80])
  const b1Y = useTransform(springY, [0, 1], [-60, 60])

  const b2X = useTransform(springX, [0, 1], [100, -100])
  const b2Y = useTransform(springY, [0, 1], [60, -80])

  const b3X = useTransform(springX, [0, 1], [-50, 120])
  const b3Y = useTransform(springY, [0, 1], [80, -50])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

      {/* BLOB 1 — Teal, upper-left
          Outer motion.div: mouse parallax only (style.x/y)
          Inner motion.div: ambient drift only (animate prop)
          Keeping them on separate elements avoids transform conflicts */}
      <motion.div className="absolute inset-0" style={{ x: b1X, y: b1Y }}>
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "55vw",
            height: "55vw",
            background: "var(--blob-teal)",
            filter: "blur(100px)",
            top: "5%",
            left: "5%",
          }}
          animate={{ x: [0, 40, -30, 0], y: [0, -60, 30, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* BLOB 2 — Indigo/Blue, lower-right */}
      <motion.div className="absolute inset-0" style={{ x: b2X, y: b2Y }}>
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "50vw",
            height: "50vw",
            background: "var(--blob-blue)",
            filter: "blur(90px)",
            bottom: "10%",
            right: "5%",
          }}
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -30, 0], scale: [1, 0.9, 1.05, 1] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* BLOB 3 — Green, center */}
      <motion.div className="absolute inset-0" style={{ x: b3X, y: b3Y }}>
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "40vw",
            height: "40vw",
            background: "var(--blob-green)",
            filter: "blur(80px)",
            top: "40%",
            left: "35%",
          }}
          animate={{ x: [0, 30, -40, 0], y: [0, 50, -20, 0], scale: [1, 1.08, 0.92, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

    </div>
  )
}
