import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { useLang } from '../lang'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'

export default function WhoFor() {
  const { t } = useLang()
  const w = t.whoFor

  return (
    <section id="fit" className="relative py-24 md:py-32 border-t border-hair">
      <div className="container-xl">
        <motion.div
          variants={staggerParent(0.08, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mb-14 md:mb-16"
        >
          <motion.p variants={staggerItem} className="eyebrow">{w.eyebrow}</motion.p>
          <motion.h2 variants={staggerItem} className="display-2 text-balance">
            {w.h2a} <span className="text-sub">{w.h2b}</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="mt-5 body-lg max-w-xl text-pretty">
            {w.sub}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: easeApple }}
            whileHover={{ y: -3 }}
            className="card p-7 md:p-9 flex flex-col gap-5 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#34c759]/10 flex items-center justify-center">
                <Check size={18} strokeWidth={2} className="text-[#34c759]" />
              </div>
              <div className="font-display font-semibold text-[18px] md:text-[20px] tracking-tight">{w.fitTitle}</div>
            </div>
            <ul className="space-y-3">
              {w.fit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] text-fg2 leading-[1.55] text-pretty">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#34c759] shrink-0" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: easeApple, delay: 0.08 }}
            whileHover={{ y: -3 }}
            className="card p-7 md:p-9 flex flex-col gap-5 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sub/10 flex items-center justify-center">
                <X size={18} strokeWidth={2} className="text-sub" />
              </div>
              <div className="font-display font-semibold text-[18px] md:text-[20px] tracking-tight">{w.notTitle}</div>
            </div>
            <ul className="space-y-3">
              {w.not.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] text-fg2 leading-[1.55] text-pretty">
                  <span className="mt-2 w-1 h-1 rounded-full bg-sub/60 shrink-0" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
