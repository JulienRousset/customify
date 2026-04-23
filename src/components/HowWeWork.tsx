import { motion } from 'framer-motion'
import { PhoneCall, Hammer, Wrench } from 'lucide-react'
import { useLang } from '../lang'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'

const stepIcons = [PhoneCall, Hammer, Wrench]
const stepColors = ['text-[#0071e3]', 'text-[#ff9f0a]', 'text-[#34c759]']

export default function HowWeWork() {
  const { t } = useLang()
  const p = t.process

  return (
    <section id="process" className="relative py-24 md:py-32 border-t border-hair">
      <div className="container-xl">
        <motion.div
          variants={staggerParent(0.08, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mb-14 md:mb-16"
        >
          <motion.p variants={staggerItem} className="eyebrow">{p.eyebrow}</motion.p>
          <motion.h2 variants={staggerItem} className="display-2 text-balance">
            {p.h2a} <span className="text-sub">{p.h2b}</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="mt-5 body-lg max-w-xl text-pretty">
            {p.sub}
          </motion.p>
        </motion.div>

        <motion.ol
          variants={staggerParent(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {p.steps.map((s, i) => {
            const Icon = stepIcons[i] ?? PhoneCall
            const color = stepColors[i] ?? 'text-fg'
            return (
              <motion.li
                key={s.title}
                variants={staggerItem}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, ease: easeApple }}
                className="card p-7 md:p-8 flex flex-col gap-5 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-full bg-surface2 border border-hair flex items-center justify-center">
                    <Icon size={18} strokeWidth={1.7} className={color} />
                  </div>
                  <div className="font-display font-semibold text-[34px] text-sub/40 tracking-tight leading-none">
                    0{i + 1}
                  </div>
                </div>

                <div>
                  <div className="font-display font-semibold text-[18px] md:text-[20px] tracking-tight">{s.title}</div>
                  <div className="mt-1 text-[11.5px] font-medium text-sub uppercase tracking-[0.16em]">{s.duration}</div>
                </div>

                <p className="text-[14.5px] text-fg2 leading-[1.55] text-pretty">{s.desc}</p>
              </motion.li>
            )
          })}
        </motion.ol>
      </div>
    </section>
  )
}
