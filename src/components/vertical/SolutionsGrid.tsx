import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { easeApple, staggerItem, staggerParent, viewportOnce } from '../fx/motion'
import ScrollReveal from './ScrollReveal'

export interface Solution {
  title: string
  body: string
  icon: LucideIcon
  badge?: string
}

interface SolutionsGridProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  sub?: string
  solutions: Solution[]
}

export default function SolutionsGrid({ eyebrow = 'What we build', title, titleAccent, sub, solutions }: SolutionsGridProps) {
  return (
    <section className="relative py-24 md:py-32 border-t border-hair">
      <ScrollReveal intensity="medium" className="container-xl">
        <motion.div
          variants={staggerParent(0.08, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <motion.p variants={staggerItem} className="eyebrow">{eyebrow}</motion.p>
          <motion.h2 variants={staggerItem} className="display-2 text-balance">
            {title}
            {titleAccent && <> <span className="text-sub">{titleAccent}</span></>}
          </motion.h2>
          {sub && (
            <motion.p variants={staggerItem} className="mt-5 body-lg max-w-xl mx-auto text-pretty">
              {sub}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          variants={staggerParent(0.06, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {solutions.map((s) => {
            const Icon = s.icon
            return (
              <motion.article
                key={s.title}
                variants={staggerItem}
                whileHover={{ y: -2, scale: 1.005 }}
                transition={{ duration: 0.3, ease: easeApple }}
                className="group relative bg-surface/50 hover:bg-surface2/80 backdrop-blur-md p-6 lg:p-7 rounded-[20px] border border-hair shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="w-11 h-11 rounded-full border border-hair bg-surface2 flex items-center justify-center"
                  >
                    <Icon size={18} strokeWidth={1.7} className="text-fg/75" />
                  </motion.div>
                  {s.badge && (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-sub">
                      {s.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-display font-semibold text-[18px] md:text-[20px] tracking-tight text-fg mb-2">
                  {s.title}
                </h3>
                <p className="text-[14px] text-fg2 leading-relaxed text-pretty">
                  {s.body}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </ScrollReveal>
    </section>
  )
}
