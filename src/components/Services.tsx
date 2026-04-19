import { motion } from 'framer-motion'
import { LayoutDashboard, Globe, Megaphone, Sparkles, LineChart, Workflow } from 'lucide-react'
import { useLang } from '../lang'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'

const visualStyles = [
  { icon: LayoutDashboard, bg: 'bg-[#ff9f0a]/10', color: 'text-[#ff9f0a]' },
  { icon: Globe, bg: 'bg-[#0071e3]/10', color: 'text-[#0071e3]' },
  { icon: Megaphone, bg: 'bg-[#ff375f]/10', color: 'text-[#ff375f]' },
  { icon: Sparkles, bg: 'bg-[#af52de]/10', color: 'text-[#af52de]' },
  { icon: LineChart, bg: 'bg-[#34c759]/10', color: 'text-[#34c759]' },
  { icon: Workflow, bg: 'bg-[#ffcc00]/10', color: 'text-[#ffcc00]' },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {s.items.map((item, i) => {
            const style = visualStyles[i % visualStyles.length]
            const Icon = style.icon
            return (
              <motion.article
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.3, ease: easeApple }}
                className="group relative bg-surface/50 hover:bg-surface2/80 backdrop-blur-md p-6 lg:p-7 rounded-[20px] border border-hair shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all flex flex-col"
              >
                <div className="flex flex-col mb-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className={`w-12 h-12 rounded-[14px] flex items-center justify-center mb-5 ${style.bg}`}
                  >
                    <Icon size={22} strokeWidth={2} className={style.color} />
                  </motion.div>
                  
                  <h3 className="font-display font-semibold text-[18px] md:text-[20px] tracking-tight text-fg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-fg2 leading-relaxed text-pretty">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-auto pt-5 border-t border-hair/50 flex items-center justify-between">
                  <div className="text-[11px] font-medium text-sub uppercase tracking-wider">
                    {item.metricLabel}
                  </div>
                  <div className="font-semibold text-[14px] text-fg">
                    {item.metric}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
