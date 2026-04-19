import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useLang } from '../lang'

function parseK(k: string) {
  const usesComma = k.includes(',')
  const normalized = k.replace(',', '.').replace(/\s/g, '')
  const value = parseFloat(normalized)
  const decimalPart = normalized.split('.')[1]
  const decimals = decimalPart ? decimalPart.length : 0
  return { value, decimals, usesComma }
}

function formatValue(n: number, decimals: number, usesComma: boolean) {
  const str = n.toFixed(decimals)
  return usesComma ? str.replace('.', ',') : str
}

function CountUp({ k, start, delay = 0, duration = 1800 }: { k: string; start: boolean; delay?: number; duration?: number }) {
  const { value, decimals, usesComma } = useMemo(() => parseK(k), [k])
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf = 0
    let startTs = 0
    const tick = (now: number) => {
      if (!startTs) startTs = now
      const elapsed = now - startTs - delay
      if (elapsed < 0) { raf = requestAnimationFrame(tick); return }
      const t = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(value * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
      else setDisplay(value)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, value, delay, duration])

  return <>{formatValue(display, decimals, usesComma)}</>
}

export default function Stats() {
  const { t } = useLang()
  const s = t.stats
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section id="numbers" className="relative bg-[#0B0C24] text-cream overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 50%, #191970 0, transparent 50%), radial-gradient(circle at 90% 50%, #6E4BA5 0, transparent 50%)'
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(236,239,241,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      <div ref={ref} className="relative container-xl py-8 md:py-10">
        <div className="flex items-center gap-6 md:gap-10 flex-wrap">
          <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-cream/55 font-medium shrink-0">
            <span className="w-8 h-px bg-cream/40" />
            {s.eyebrow}
          </div>

          <div className="flex-1 min-w-0 grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-5">
            {s.items.map((item, i) => (
              <div key={item.label} className="flex items-baseline gap-3 md:gap-4 min-w-0 relative md:pl-5 md:border-l md:border-cream/15 md:first:pl-0 md:first:border-l-0">
                <div className="font-display text-[30px] md:text-[40px] font-semibold leading-none tracking-tight tabular-nums whitespace-nowrap">
                  <CountUp k={item.k} start={inView} delay={i * 120} />
                  <span className="serif-italic text-cream/55 ml-0.5">{item.suffix}</span>
                </div>
                <div className="text-[11px] md:text-[12px] text-cream/65 leading-[1.35] min-w-0">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
