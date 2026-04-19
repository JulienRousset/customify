import { useEffect, useRef, useState } from 'react'

const GLYPHS = '!<>-_\\/[]{}—=+*^?#'

interface Props {
  text: string
  trigger?: boolean
  duration?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export default function ScrambleText({
  text,
  trigger,
  duration = 1200,
  className,
  as: Tag = 'span'
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(text)
  const [started, setStarted] = useState(false)
  const autoTrigger = trigger === undefined

  useEffect(() => {
    if (!autoTrigger) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) setStarted(true)
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [autoTrigger, started])

  useEffect(() => {
    const go = autoTrigger ? started : !!trigger
    if (!go) return

    const finalText = text
    const chars = finalText.split('')
    const total = chars.length
    const start = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const reveal = Math.floor(progress * (total + 5))
      const out = chars
        .map((ch, i) => {
          if (ch === ' ' || ch === '\n') return ch
          if (i < reveal - 3) return ch
          if (i < reveal + 3 && progress < 1) {
            return GLYPHS[(Math.random() * GLYPHS.length) | 0]
          }
          if (progress >= 1) return ch
          return ' '
        })
        .join('')
      setDisplay(out)
      if (progress < 1) raf = requestAnimationFrame(tick)
      else setDisplay(finalText)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [trigger, started, text, duration, autoTrigger])

  const Element = Tag as any
  return (
    <Element ref={ref as any} className={className} aria-label={text}>
      <span aria-hidden>{display}</span>
    </Element>
  )
}
