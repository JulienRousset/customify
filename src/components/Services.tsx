import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, LayoutDashboard, Globe, Megaphone, Sparkles, LineChart, Workflow } from 'lucide-react'
import { useLang } from '../lang'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'
import { openCalendly, preloadCalendly } from '../lib/calendly'

const visualStyles = [
  { icon: LayoutDashboard, color: 'text-fg/75' },
  { icon: Globe, color: 'text-fg/75' },
  { icon: Megaphone, color: 'text-fg/75' },
  { icon: Sparkles, color: 'text-fg/75' },
  { icon: LineChart, color: 'text-fg/75' },
  { icon: Workflow, color: 'text-fg/75' },
]

export default function Services() {
  const { t } = useLang()
  const s = t.services
  const [highlighted, setHighlighted] = useState<number | null>(null)

  useEffect(() => {
    const handler = (e: Event) => {
      const idx = (e as CustomEvent<number>).detail
      setHighlighted(idx)
      window.setTimeout(() => setHighlighted(null), 2000)
    }
    window.addEventListener('highlight-service', handler as EventListener)
    return () => window.removeEventListener('highlight-service', handler as EventListener)
  }, [])

  return (
    <section id="services" className="relative py-[4.8rem] md:py-[6.4rem]">
      <div className="container-xl">
        <motion.div
          variants={staggerParent(0.08, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <motion.p variants={staggerItem} className="eyebrow">{s.eyebrow}</motion.p>
          <motion.h2 variants={staggerItem} className="display-2 text-balance">
            {s.h2a} <span className="text-sub">{s.h2b}</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="mt-5 body-lg max-w-xl mx-auto text-pretty">
            {s.sub}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerParent(0.06, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {s.items.map((item, i) => {
            const style = visualStyles[i % visualStyles.length]
            const Icon = style.icon
            const isHot = highlighted === i
            return (
              <motion.article
                key={i}
                id={`service-${i}`}
                variants={staggerItem}
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.3, ease: easeApple }}
                className={`group relative backdrop-blur-md p-6 lg:p-7 rounded-[20px] border shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col scroll-mt-28 ${
                  isHot
                    ? 'bg-surface2/90 border-accent shadow-[0_0_0_2px_rgb(var(--color-accent)),0_20px_60px_-20px_rgba(0,0,0,0.25)] -translate-y-1'
                    : 'bg-surface/50 hover:bg-surface2/80 border-hair'
                }`}
              >
                <div className="flex flex-col mb-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="w-11 h-11 rounded-full border border-hair bg-surface2 flex items-center justify-center mb-5"
                  >
                    <Icon size={18} strokeWidth={1.7} className={style.color} />
                  </motion.div>
                  
                  <h3 className="font-display font-semibold text-[18px] md:text-[20px] tracking-tight text-fg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-fg2 leading-relaxed text-pretty">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-auto pt-5 border-t border-hair/50 flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: item.tagColor }}
                  />
                  <div className="text-[11px] font-medium text-sub uppercase tracking-wider">
                    {item.metricLabel}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: easeApple }}
          className="mt-16 md:mt-20 max-w-3xl mx-auto text-center"
        >
          {/* Three-up commitments */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {[
              { label: '50+ clients onboard' },
              { label: 'Shipped in days, not months' },
              { label: 'First month managed, on us' }
            ].map((c) => (
              <div
                key={c.label}
                className="rounded-full border border-hair bg-surface2/60 px-4 py-2.5 text-[12.5px] font-medium text-fg2"
              >
                {c.label}
              </div>
            ))}
          </div>

          <p className="text-[14px] md:text-[14.5px] text-fg2 leading-[1.6] text-pretty">
            Already shipping for spas, restaurants, agencies, boutiques, bars, villa managers, influencers, SaaS founders, online businesses and artisans.
          </p>

          <button
            type="button"
            onClick={() => openCalendly()}
            onMouseEnter={preloadCalendly}
            onFocus={preloadCalendly}
            className="mt-8 group inline-flex items-center gap-2 rounded-full bg-fg text-bg px-7 py-3.5 text-[15px] md:text-[16px] font-semibold tracking-tight hover:opacity-90 transition-opacity"
          >
            Ask for an example
            <ArrowUpRight
              size={18}
              className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
