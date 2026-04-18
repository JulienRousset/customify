import { motion } from 'framer-motion'
import { BarChart3, Instagram, MessageCircle, Workflow, Sparkles, LineChart } from 'lucide-react'
import { useLang } from '../lang'

const icons = [BarChart3, Instagram, MessageCircle, Workflow, Sparkles, LineChart]

export default function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-xl">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="eyebrow-sub">{s.eyebrow}</div>
          <h2 className="font-display text-giga tracking-tightest">
            {s.h2a}<br />
            <span className="text-sub">{s.h2b}</span>
          </h2>
          <p className="mt-5 body-lg">{s.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {s.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
                className="card card-lift p-7 md:p-8 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center">
                    <Icon size={18} className="text-fg" strokeWidth={2} />
                  </div>
                  <div className="text-right">
                    <div className="font-display text-[22px] font-semibold tracking-tight text-accent tabular-nums leading-none">{item.metric}</div>
                    <div className="mt-1 text-[11px] text-sub">{item.metricLabel}</div>
                  </div>
                </div>
                <h3 className="font-display text-[20px] font-semibold mb-2 tracking-tight">{item.title}</h3>
                <p className="text-[15px] text-fg2 leading-[1.55]">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
