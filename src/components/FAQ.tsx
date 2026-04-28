import { motion } from 'framer-motion'
import { useLang } from '../lang'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'

export default function FAQ() {
  const { t } = useLang()
  const f = t.faq

  return (
    <section id="faq" className="relative py-24 md:py-32 border-t border-hair">
      <div className="container-xl">
        <motion.div
          variants={staggerParent(0.08, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <motion.p variants={staggerItem} className="eyebrow">{f.eyebrow}</motion.p>
          <motion.h2 variants={staggerItem} className="display-2 text-balance">
            {f.h2a} <span className="text-sub">{f.h2b}</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-0 border-t border-hair">
          {f.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: easeApple, delay: i * 0.04 }}
              className="py-7 md:py-9 border-b border-hair"
            >
              <h3 className="font-display font-semibold text-[16px] md:text-[17px] tracking-tight text-fg mb-3">
                {item.q}
              </h3>
              <p className="text-[14px] md:text-[15px] text-fg2 leading-[1.6] text-pretty">
                {item.a}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="pt-6 mt-1">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-fg hover:text-accent transition-colors"
          >
            {f.askMore}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
