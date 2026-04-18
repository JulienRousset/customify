import { motion } from 'framer-motion'
import { ArrowUpRight, TrendingUp } from 'lucide-react'
import { useLang } from '../lang'

export default function Clients() {
  const { t } = useLang()
  const c = t.clients

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="container-xl">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <div className="eyebrow-sub">{c.eyebrow}</div>
          <h2 className="font-display text-giga tracking-tightest">
            {c.h2a}<br />
            <span className="text-sub">{c.h2b}</span>
          </h2>
          <p className="mt-5 body-lg">
            {c.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {c.items.map((item, i) => (
            <motion.a
              key={item.name}
              href="#contact"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
              className="group card card-lift p-7 md:p-8 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-[20px] font-semibold tracking-tight">{item.name}</h3>
                  <div className="text-[13px] text-sub mt-0.5">{item.kind}</div>
                </div>
                <ArrowUpRight size={18} className="text-sub transition-all duration-500 group-hover:text-accent group-hover:rotate-45" />
              </div>

              <blockquote className="font-display text-[18px] leading-[1.4] tracking-tight text-fg mb-5">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <p className="text-[14px] text-fg2 leading-[1.6] mb-6">{item.desc}</p>

              <div className="mt-auto pt-5 border-t border-hair">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-sub text-[12px] mb-1">
                      <TrendingUp size={12} className="text-accent" />
                      {item.metric}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.stack.map((s) => (
                        <span key={s} className="text-[11px] text-sub bg-surface rounded-full px-2 py-0.5">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="font-display text-3xl font-semibold tracking-tight text-accent tabular-nums leading-none">
                    {item.result}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
