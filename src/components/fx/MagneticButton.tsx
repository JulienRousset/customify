import { useRef, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  href?: string
  className?: string
  strength?: number
  as?: 'a' | 'button'
  type?: 'button' | 'submit'
  onClick?: () => void
}

export default function MagneticButton({
  children,
  href,
  className = '',
  strength = 18,
  as = 'a',
  type,
  onClick
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null)
  const raf = useRef(0)

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    const nx = Math.max(-1, Math.min(1, x / (rect.width / 2)))
    const ny = Math.max(-1, Math.min(1, y / (rect.height / 2)))
    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `translate(${nx * strength}px, ${ny * strength}px)`
    })
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    cancelAnimationFrame(raf.current)
    el.style.transform = 'translate(0,0)'
  }

  const common = {
    ref: ref as any,
    onPointerMove: onMove,
    onPointerLeave: reset,
    onClick,
    className: `inline-block transition-transform duration-300 ease-out will-change-transform ${className}`
  }

  if (as === 'button') {
    return (
      <button type={type ?? 'button'} {...common}>
        {children}
      </button>
    )
  }
  return (
    <a href={href} {...common}>
      {children}
    </a>
  )
}
