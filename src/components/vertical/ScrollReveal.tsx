import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  intensity?: 'subtle' | 'medium' | 'strong'
  /** When true, content also fades / drifts out as it leaves the top of the viewport. */
  fadeOut?: boolean
}

const INTENSITY = {
  subtle: { y: 24, scale: 0.99 },
  medium: { y: 48, scale: 0.97 },
  strong: { y: 80, scale: 0.94 }
} as const

// Smoothly drives a section's opacity / y / scale based on its scroll progress
// through the viewport. Entrance only by default (steady once visible). Pass
// `fadeOut` to also fade the section as it leaves the viewport above.
export default function ScrollReveal({
  children,
  className,
  intensity = 'medium',
  fadeOut = false
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const { y: yMax, scale: scaleMin } = INTENSITY[intensity]

  // Entrance from bottom (0 → 0.45 of progress), then steady, then optional exit (0.55 → 1).
  const opacity = useTransform(
    scrollYProgress,
    fadeOut ? [0, 0.25, 0.75, 1] : [0, 0.25, 1, 1],
    fadeOut ? [0, 1, 1, 0.4] : [0, 1, 1, 1]
  )
  const y = useTransform(
    scrollYProgress,
    [0, 0.45],
    [yMax, 0]
  )
  const scale = useTransform(
    scrollYProgress,
    [0, 0.45],
    [scaleMin, 1]
  )

  return (
    <motion.div ref={ref} style={{ opacity, y, scale }} className={className}>
      {children}
    </motion.div>
  )
}
