"use client"

import dynamic from 'next/dynamic'
import type { LavaLampBackgroundProps } from './lava_lamp_background'

const LavaLampBackground = dynamic(
  () => import('./lava_lamp_background'),
  { ssr: false }
)

export default function LavaLampBackgroundLoader(props: LavaLampBackgroundProps) {
  return <LavaLampBackground {...props} />
}
