import { motion } from 'framer-motion'
import { useLang } from '../lang'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'

export default function Clients() {
  const { t } = useLang()
  const c = t.clients

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="container-xl">
        <motion.div
          variants={staggerParent(0.08, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl ml-auto text-right mb-14 md:mb-20"
        >
          <motion.p variants={staggerItem} className="eyebrow">The work</motion.p>
          <motion.h2 variants={staggerItem} className="display-2 text-balance">
            {c.h2a} <span className="text-sub">{c.h2b}</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="mt-5 body-lg max-w-xl ml-auto text-pretty">{c.sub}</motion.p>
        </motion.div>

        <motion.div
          variants={staggerParent(0.04, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-hair rounded-[20px] overflow-hidden border border-hair mb-16 md:mb-24"
        >
          {c.items.map((item) => (
            <motion.div
              key={`logo-${item.name}`}
              variants={staggerItem}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: easeApple }}
              className="bg-bg px-4 py-8 flex flex-col items-center justify-center text-center min-h-[96px]"
            >
              <div className="font-display font-semibold text-[17px] md:text-[19px] tracking-tight">{item.name}</div>
              <div className="mt-1 text-[10.5px] text-sub font-medium uppercase tracking-wider">{item.kind.split(',')[0]}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerParent(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {c.items.slice(0, 4).map((item) => (
            <motion.figure
              key={item.name}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: easeApple }}
              className="card p-7 md:p-8 flex flex-col hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
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
        </motion.div>
      </div>
    </section>
  )
}
