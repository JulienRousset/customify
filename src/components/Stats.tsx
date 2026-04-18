import { motion } from 'framer-motion'
import { useLang } from '../lang'

export default function Stats() {
  const { t } = useLang()
  const s = t.stats

  return (
    <section id="numbers" className="relative py-24 md:py-32 bg-fg text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 10%, #0071e3 0, transparent 40%), radial-gradient(circle at 80% 90%, #34c759 0, transparent 40%)'
        }}
      />
      <div className="relative container-xl">
        <div className="grid grid-cols-12 gap-8 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-5">
            <div className="text-accent text-[13px] font-medium tracking-wide mb-4">{s.eyebrow}</div>
            <h2 className="font-display text-giga tracking-tightest">
              {s.h2a}<br />{s.h2b}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
            <p className="text-[19px] leading-[1.55] text-white/70">
              {s.sub}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/15">
          {s.items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              className={`py-10 md:py-14 px-4 md:px-6 ${i < 3 ? 'md:border-r' : ''} ${i % 2 === 0 ? 'border-r' : ''} border-white/15 ${i < 2 ? 'border-b md:border-b-0' : ''}`}
            >
              <div className="font-display text-5xl md:text-7xl font-semibold tracking-tightest tabular-nums leading-none">
                {item.k}<span className="text-accent">{item.suffix}</span>
              </div>
              <div className="mt-5 text-[13px] text-white/60 leading-snug max-w-[14rem]">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
