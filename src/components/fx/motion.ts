import type { Variants, Transition } from 'framer-motion'

export const easeApple = [0.22, 0.61, 0.36, 1] as const
export const easeOut = [0.2, 0.8, 0.2, 1] as const

export const springSoft: Transition = { type: 'spring', stiffness: 260, damping: 28, mass: 0.8 }
export const springSnap: Transition = { type: 'spring', stiffness: 380, damping: 24 }

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: easeApple }
  }
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: easeApple } }
}

export const staggerParent = (stagger = 0.08, delay = 0.05): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay }
  }
})

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeApple }
  }
}

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: { y: -4, scale: 1.006, transition: springSoft }
}

export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.25, ease: easeApple } },
  tap: { scale: 0.97, transition: { duration: 0.1 } }
}

export const viewportOnce = { once: true, margin: '-80px' }
