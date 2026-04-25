import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { useLang } from '../lang'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'

export default function Testimonials() {
  const { t } = useLang()
  const c = t.clients
  const items = c.items

  const scrollRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const scrollByPage = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const step = el.clientWidth * 0.9
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth
      setProgress(max > 0 ? el.scrollLeft / max : 0)
    }
    onScroll()
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
          <motion.div
            variants={staggerParent(0.08, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-3xl"
          >
            <motion.p variants={staggerItem} className="eyebrow">Testimonials</motion.p>
            <motion.h2 variants={staggerItem} className="display-2 text-balance">
              {c.h2a} <span className="text-sub">{c.h2b}</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-5 body-lg max-w-xl text-pretty">
              {c.sub}
            </motion.p>
          </motion.div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollByPage('left')}
              className="w-11 h-11 rounded-full border border-hair bg-surface2/60 flex items-center justify-center text-fg2 hover:text-fg hover:border-fg/30 hover:bg-surface2 transition-all active:scale-95"
            >
              <ArrowLeft size={16} strokeWidth={1.8} />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollByPage('right')}
              className="w-11 h-11 rounded-full border border-hair bg-surface2/60 flex items-center justify-center text-fg2 hover:text-fg hover:border-fg/30 hover:bg-surface2 transition-all active:scale-95"
            >
              <ArrowRight size={16} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div className="relative -mx-6 md:-mx-8 fade-x">
          <div
            ref={scrollRef}
            className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-6 md:scroll-px-8 px-6 md:px-8 pb-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            {items.map((item) => (
              <motion.figure
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: easeApple }}
                whileHover={{ y: -4 }}
                className="card p-7 md:p-9 flex flex-col snap-start shrink-0 w-[85vw] sm:w-[60vw] md:w-[calc(50%-0.75rem)] lg:w-[calc(40%-0.75rem)] hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
              >
                <Quote size={20} className="text-accent/40 mb-5" strokeWidth={1.6} />

                <blockquote className="text-[17px] md:text-[19px] leading-[1.5] text-fg text-pretty font-display">
                  “{item.quote}”
                </blockquote>

                <figcaption className="mt-auto pt-7 border-t border-hair flex flex-col gap-4">
                  <div>
                    <div className="font-display font-semibold text-[15px] tracking-tight">{item.name}</div>
                    <div className="text-[12px] text-sub mt-0.5">{item.kind}</div>
                  </div>
                  {item.stack && item.stack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.stack.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center text-[10.5px] font-medium uppercase tracking-wider text-sub px-2 py-1 rounded-full border border-hair bg-surface/40"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative h-[2px] w-40 bg-hair rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-fg rounded-full transition-[width] duration-150 ease-out"
              style={{ width: `${Math.max(12, progress * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
