import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useLang } from '../lang'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'

export default function Testimonials() {
  const { t } = useLang()
  const c = t.clients
  const items = c.items.slice(0, 4)

  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="container-xl">
        <motion.div
          variants={staggerParent(0.08, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl ml-auto text-right mb-14 md:mb-20"
        >
          <motion.p variants={staggerItem} className="eyebrow">Testimonials</motion.p>
          <motion.h2 variants={staggerItem} className="display-2 text-balance">
            {c.h2a} <span className="text-sub">{c.h2b}</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="mt-5 body-lg max-w-xl ml-auto text-pretty">
            {c.sub}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerParent(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {items.map((item, i) => (
            <motion.figure
              key={item.name}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: easeApple }}
              className={`card p-7 md:p-9 flex flex-col hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] ${
                i % 3 === 0 ? 'md:translate-y-2' : ''
              }`}
            >
              <Quote size={20} className="text-accent/40 mb-5" strokeWidth={1.6} />

              <blockquote className="text-[17px] md:text-[19px] leading-[1.5] text-fg text-pretty font-display">
                “{item.quote}”
              </blockquote>

              <figcaption className="mt-7 pt-6 border-t border-hair flex items-end justify-between gap-4">
                <div>
                  <div className="font-display font-semibold text-[15px] tracking-tight">{item.name}</div>
                  <div className="text-[12px] text-sub mt-0.5">{item.kind}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-[22px] tracking-tight">{item.result}</div>
                  <div className="text-[10.5px] text-sub font-medium mt-0.5">{item.metric}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
