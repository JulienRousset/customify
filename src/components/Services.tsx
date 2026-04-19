import { motion } from 'framer-motion'
import { LayoutDashboard, Globe, Megaphone, Sparkles, GitMerge, MessageCircle } from 'lucide-react'
import { useLang } from '../lang'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'

const visualStyles = [
  { icon: LayoutDashboard, gradient: 'from-[#ff9f0a] to-[#ff375f]', color: 'text-[#ff9f0a]', glow: 'bg-[#ff9f0a]' },
  { icon: Globe, gradient: 'from-[#0071e3] to-[#40a0ff]', color: 'text-[#0071e3]', glow: 'bg-[#0071e3]' },
  { icon: MessageCircle, gradient: 'from-[#ff375f] to-[#af52de]', color: 'text-[#ff375f]', glow: 'bg-[#ff375f]' },
  { icon: Sparkles, gradient: 'from-[#af52de] to-[#0071e3]', color: 'text-[#af52de]', glow: 'bg-[#af52de]' },
  { icon: Megaphone, gradient: 'from-[#34c759] to-[#34e89e]', color: 'text-[#34c759]', glow: 'bg-[#34c759]' },
  { icon: GitMerge, gradient: 'from-[#ffcc00] to-[#ff9f0a]', color: 'text-[#ffcc00]', glow: 'bg-[#ffcc00]' },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {s.items.map((item, i) => {
            const style = visualStyles[i % visualStyles.length]
            const Icon = style.icon
            
            // Bento grid spanning logic
            let spanClass = 'lg:col-span-1'
            if (i === 0) spanClass = 'md:col-span-2 lg:col-span-2' // CRM takes 2 cols
            else if (i === 5) spanClass = 'md:col-span-2 lg:col-span-3' // Last item takes full row
            else if (i === 3 || i === 4) spanClass = 'lg:col-span-1' // Regular

            return (
              <motion.article
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.4, ease: easeApple }}
                className={`
                  group relative bg-surface2/60 backdrop-blur-xl rounded-[32px] p-8 md:p-10 
                  border border-hair/80 flex flex-col overflow-hidden shadow-sm 
                  hover:shadow-2xl transition-all duration-500
                  ${spanClass}
                `}
              >
                {/* Abstract Ambient Glow */}
                <div className={`absolute -top-32 -right-32 w-96 h-96 opacity-10 group-hover:opacity-30 transition-opacity duration-700 blur-[100px] pointer-events-none rounded-full ${style.glow}`} />
                
                {/* Giant Background Icon */}
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none rotate-[-15deg] group-hover:rotate-0 group-hover:scale-110 transform-gpu">
                  <Icon size={280} className={style.color} />
                </div>

                <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${style.gradient} shadow-lg`}
                  >
                    <Icon size={30} strokeWidth={2.5} className="text-white" />
                  </motion.div>
                  
                  <div className="text-left md:text-right bg-white/50 dark:bg-black/20 backdrop-blur-md px-4 py-2 rounded-xl border border-hair">
                    <div className="font-bold text-[24px] tracking-tight text-fg">{item.metric}</div>
                    <div className="text-[12px] text-sub font-medium mt-0.5 uppercase tracking-wide">{item.metricLabel}</div>
                  </div>
                </div>

                <div className="relative mt-auto">
                  <h3 className="font-display font-semibold text-[24px] md:text-[28px] tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[16px] text-fg2 leading-relaxed text-pretty max-w-xl">
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
