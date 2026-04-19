import { motion } from 'framer-motion'
import { useLang } from '../lang'

export default function Clients() {
  const { t } = useLang()
  const c = t.clients

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="container-xl">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="eyebrow">The work</p>
          <h2 className="display-2 text-balance">
            {c.h2a} <span className="text-sub">{c.h2b}</span>
          </h2>
          <p className="mt-5 body-lg max-w-xl text-pretty">{c.sub}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-hair rounded-[20px] overflow-hidden border border-hair mb-16 md:mb-24">
          {c.items.map((item) => (
            <div
              key={`logo-${item.name}`}
              className="bg-bg px-4 py-8 flex flex-col items-center justify-center text-center min-h-[96px]"
            >
              <div className="font-display font-semibold text-[17px] md:text-[19px] tracking-tight">{item.name}</div>
              <div className="mt-1 text-[10.5px] text-sub font-medium uppercase tracking-wider">{item.kind.split(',')[0]}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {c.items.slice(0, 4).map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
              className="card p-7 md:p-8 flex flex-col"
            >
              <blockquote className="text-[16px] md:text-[17px] leading-[1.55] text-fg text-pretty">
                “{item.quote}”
              </blockquote>

              <figcaption className="mt-6 pt-6 border-t border-hair flex items-end justify-between gap-4">
                <div>
                  <div className="font-display font-semibold text-[15px] tracking-tight">{item.name}</div>
                  <div className="text-[12px] text-sub mt-0.5">{item.kind}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-[22px] tracking-tight tabular-nums">{item.result}</div>
                  <div className="text-[10.5px] text-sub font-medium mt-0.5">{item.metric}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
