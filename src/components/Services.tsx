import { motion } from 'framer-motion'
import { LayoutDashboard, Globe, Megaphone, Sparkles, LineChart, Workflow } from 'lucide-react'
import { useLang } from '../lang'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'

const visualStyles = [
  { icon: LayoutDashboard, bg: 'bg-[#ff9f0a]/15', color: 'text-[#ff9f0a]', hex: '#ff9f0a' },
  { icon: Globe, bg: 'bg-[#0071e3]/15', color: 'text-[#0071e3]', hex: '#0071e3' },
  { icon: Megaphone, bg: 'bg-[#ff375f]/15', color: 'text-[#ff375f]', hex: '#ff375f' },
  { icon: Sparkles, bg: 'bg-[#af52de]/15', color: 'text-[#af52de]', hex: '#af52de' },
  { icon: LineChart, bg: 'bg-[#34c759]/15', color: 'text-[#34c759]', hex: '#34c759' },
  { icon: Workflow, bg: 'bg-[#ffcc00]/15', color: 'text-[#ffcc00]', hex: '#ffcc00' },
]

export default function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-xl">
        <motion.div
          variants={staggerParent(0.08, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl ml-auto text-right mb-14 md:mb-20"
        >
          <motion.p variants={staggerItem} className="eyebrow">What we build</motion.p>
          <motion.h2 variants={staggerItem} className="display-2 text-balance">
            {s.h2a} <span className="text-sub">{s.h2b}</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="mt-5 body-lg max-w-xl ml-auto text-pretty">
            {s.sub}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerParent(0.06, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hair rounded-[28px] overflow-hidden border border-hair"
        >
          {s.items.map((item, i) => {
            const style = visualStyles[i % visualStyles.length]
            const Icon = style.icon
            return (
              <motion.article
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.35, ease: easeApple }}
                className="group relative bg-bg p-8 md:p-10 min-h-[280px] flex flex-col overflow-hidden"
              >
                <motion.span
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundImage: `radial-gradient(circle at top right, ${style.hex}15, transparent)` }}
                />
                <div className="relative flex items-start justify-between mb-8">
                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${style.bg}`}
                  >
                    <Icon size={22} strokeWidth={2} className={style.color} />
                  </motion.div>
                  <div className="text-right">
                    <div className="font-semibold text-[22px] tracking-tight tabular-nums">{item.metric}</div>
                    <div className="text-[11px] text-sub font-medium mt-0.5">{item.metricLabel}</div>
                  </div>
                </div>

                <h3 className="relative font-display font-semibold text-[20px] md:text-[22px] tracking-tight mb-2.5">
                  {item.title}
                </h3>
                <p className="relative text-[14.5px] text-fg2 leading-[1.55] text-pretty">{item.desc}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
