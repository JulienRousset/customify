import { motion } from 'framer-motion'
import { LayoutDashboard, Globe, Megaphone, Sparkles, LineChart, Workflow } from 'lucide-react'
import { useLang } from '../lang'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'

const visualStyles = [
  { icon: LayoutDashboard, bg: 'bg-[#ff9f0a]/10', color: 'text-[#ff9f0a]', border: 'border-[#ff9f0a]/20', hex: '#ff9f0a' },
  { icon: Globe, bg: 'bg-[#0071e3]/10', color: 'text-[#0071e3]', border: 'border-[#0071e3]/20', hex: '#0071e3' },
  { icon: Megaphone, bg: 'bg-[#ff375f]/10', color: 'text-[#ff375f]', border: 'border-[#ff375f]/20', hex: '#ff375f' },
  { icon: Sparkles, bg: 'bg-[#af52de]/10', color: 'text-[#af52de]', border: 'border-[#af52de]/20', hex: '#af52de' },
  { icon: LineChart, bg: 'bg-[#34c759]/10', color: 'text-[#34c759]', border: 'border-[#34c759]/20', hex: '#34c759' },
  { icon: Workflow, bg: 'bg-[#ffcc00]/10', color: 'text-[#ffcc00]', border: 'border-[#ffcc00]/20', hex: '#ffcc00' },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {s.items.map((item, i) => {
            const style = visualStyles[i % visualStyles.length]
            const Icon = style.icon
            return (
              <motion.article
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: easeApple }}
                className="group flex flex-col"
              >
                {/* Visual / Image Area */}
                <div className={`relative w-full h-48 md:h-56 rounded-[24px] mb-6 flex items-center justify-center overflow-hidden border ${style.border} ${style.bg} transition-colors duration-500`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <Icon size={64} strokeWidth={1} className={`${style.color} opacity-80`} />
                  </motion.div>
                </div>

                {/* Text Content Area */}
                <div className="flex-1 flex flex-col px-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: style.hex }} />
                      <span className="text-[12px] font-semibold text-sub uppercase tracking-wider">{item.tag}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-surface2 border border-hair px-2.5 py-1 rounded-full">
                      <span className="font-semibold text-[13px] text-fg tracking-tight">{item.metric}</span>
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-[20px] md:text-[22px] tracking-tight mb-2.5 text-fg">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] text-fg2 leading-[1.6] text-pretty">
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
