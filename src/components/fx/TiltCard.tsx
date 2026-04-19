import { useRef, type ReactNode, type CSSProperties } from 'react'

interface Props {
  children: ReactNode
  className?: string
  style?: CSSProperties
  max?: number
  glare?: boolean
  as?: 'div' | 'a' | 'article'
  href?: string
}

export default function TiltCard({
  children,
  className = '',
  style,
  max = 8,
  glare = true,
  as = 'div',
  href
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const raf = useRef(0)

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rx = (0.5 - y) * max * 2
    const ry = (x - 0.5) * max * 2
    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty('--rx', `${rx}deg`)
      el.style.setProperty('--ry', `${ry}deg`)
      el.style.setProperty('--gx', `${x * 100}%`)
      el.style.setProperty('--gy', `${y * 100}%`)
    })
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    cancelAnimationFrame(raf.current)
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  const sharedProps = {
    ref: ref as any,
    onPointerMove: onMove,
    onPointerLeave: reset,
    className: `relative [transform-style:preserve-3d] transition-transform duration-300 ease-out ${className}`,
    style: {
      transform: 'perspective(1000px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))',
      ...style
    }
  }

  const content = (
    <>
      <div className="relative z-10" style={{ transform: 'translateZ(0)' }}>
        {children}
      </div>
      {glare && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              'radial-gradient(400px circle at var(--gx,50%) var(--gy,50%), rgba(255,255,255,0.18), transparent 40%)'
          }}
        />
      )}
    </>
  )

  if (as === 'a') {
    return (
      <a href={href} {...(sharedProps as any)}>
        {content}
      </a>
    )
  }
  if (as === 'article') {
    return <article {...(sharedProps as any)}>{content}</article>
  }
  return <div {...(sharedProps as any)}>{content}</div>
}
