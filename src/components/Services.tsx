import { motion } from 'framer-motion'
import { LayoutDashboard, Globe, Megaphone, Sparkles, LineChart, Workflow } from 'lucide-react'
import { useLang } from '../lang'

const icons = [LayoutDashboard, Globe, Megaphone, Sparkles, LineChart, Workflow]

export default function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-xl">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="eyebrow">What we build</p>
          <h2 className="display-2 text-balance">
            {s.h2a} <span className="text-sub">{s.h2b}</span>
          </h2>
          <p className="mt-5 body-lg max-w-xl text-pretty">{s.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hair rounded-[28px] overflow-hidden border border-hair">
          {s.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
                className="group relative bg-bg p-8 md:p-10 min-h-[280px] flex flex-col"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center">
                    <Icon size={17} strokeWidth={1.6} className="text-fg" />
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-[22px] tracking-tight tabular-nums">{item.metric}</div>
                    <div className="text-[11px] text-sub font-medium mt-0.5">{item.metricLabel}</div>
                  </div>
                </div>

                <h3 className="font-display font-semibold text-[20px] md:text-[22px] tracking-tight mb-2.5">
                  {item.title}
                </h3>
                <p className="text-[14.5px] text-fg2 leading-[1.55] text-pretty">{item.desc}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
