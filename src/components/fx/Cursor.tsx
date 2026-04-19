import { useEffect, useRef, useState } from 'react'

type Variant = 'default' | 'link' | 'text' | 'drag'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.innerWidth < 1024) return

    setEnabled(true)
    document.documentElement.classList.add('has-custom-cursor')

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const dot = { x: target.x, y: target.y }
    const ring = { x: target.x, y: target.y }
    let active = false
    let down = false
    let variant: Variant = 'default'
    let label = ''

    const apply = () => {
      const dotEl = dotRef.current
      const ringEl = ringRef.current
      const labelEl = labelRef.current
      if (!dotEl || !ringEl) return

      const ringSize =
        variant === 'link' ? 56 :
        variant === 'drag' ? 76 :
        variant === 'text' ? 36 :
        28
      const ringWidth = variant === 'text' ? 2 : ringSize
      const dotScale = down ? 0.6 : (variant === 'link' ? 0.6 : 1)
      const ringRadius = variant === 'text' ? 2 : 999

      ringEl.style.width = `${ringWidth}px`
      ringEl.style.height = `${ringSize}px`
      ringEl.style.borderRadius = `${ringRadius}px`
      ringEl.style.opacity = active ? (variant === 'text' ? '0.85' : '1') : '0'
      ringEl.style.background = variant === 'text' ? 'rgb(var(--color-fg))' : 'transparent'
      ringEl.style.borderColor = variant === 'text' ? 'transparent' : 'rgb(var(--color-fg))'
      ringEl.style.borderWidth = variant === 'text' ? '0' : '1.5px'
      dotEl.style.opacity = active && variant !== 'text' ? '1' : '0'
      dotEl.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%) scale(${dotScale})`
      ringEl.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`

      if (labelEl) {
        if (variant === 'drag' && label) {
          labelEl.textContent = label
          labelEl.style.opacity = '1'
        } else {
          labelEl.style.opacity = '0'
        }
      }
    }

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX
      target.y = e.clientY
      if (!active) {
        active = true
        dot.x = target.x; dot.y = target.y
        ring.x = target.x; ring.y = target.y
      }

      const el = e.target as HTMLElement | null
      if (!el) return
      const interactive = el.closest('a, button, [data-cursor], input, textarea, select')
      if (interactive) {
        const kind = (interactive as HTMLElement).dataset.cursor
        const nextVariant: Variant =
          kind === 'drag' ? 'drag' :
          kind === 'text' ? 'text' :
          interactive.matches('input, textarea') ? 'text' :
          'link'
        variant = nextVariant
        label = (interactive as HTMLElement).dataset.cursorLabel || ''
      } else {
        variant = 'default'
        label = ''
      }
    }

    const onLeave = () => { active = false }
    const onEnter = () => { active = true }
    const onDown = () => { down = true }
    const onUp = () => { down = false }

    let raf = 0
    const tick = () => {
      dot.x += (target.x - dot.x) * 0.42
      dot.y += (target.y - dot.y) * 0.42
      ring.x += (target.x - ring.x) * 0.18
      ring.y += (target.y - ring.y) * 0.18
      apply()
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    window.addEventListener('pointerenter', onEnter)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('pointerenter', onEnter)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] border border-fg transition-[width,height,opacity,border-radius,background] duration-200 ease-out flex items-center justify-center"
        style={{
          width: 28, height: 28, borderRadius: 999, opacity: 0,
          willChange: 'transform, opacity, width, height'
        }}
      >
        <span
          ref={labelRef}
          className="text-[9px] uppercase tracking-[0.22em] font-medium text-fg whitespace-nowrap"
          style={{ opacity: 0, transition: 'opacity 0.2s ease' }}
        />
      </div>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[101] w-[5px] h-[5px] rounded-full bg-accent transition-[opacity,transform] duration-150 ease-out"
        style={{ opacity: 0, willChange: 'transform, opacity' }}
      />
    </>
  )
}
