import { motion } from 'framer-motion'
import { staggerItem, staggerParent, viewportOnce } from '../fx/motion'
import ScrollReveal from './ScrollReveal'

interface ProblemsListProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  problems: string[]
}

export default function ProblemsList({ eyebrow = 'Where it goes wrong', title, titleAccent, problems }: ProblemsListProps) {
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
        </motion.div>
        <motion.ul
          variants={staggerParent(0.04, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-x-8 gap-y-3.5"
        >
          {problems.map((p, i) => (
            <motion.li
              key={p}
              variants={staggerItem}
              className="flex items-start gap-3 py-1"
            >
              <span
                aria-hidden
                className="shrink-0 mt-2 num-mono text-[10.5px] tracking-[0.14em] font-semibold text-sub"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[14.5px] md:text-[15px] text-fg2 leading-[1.55]">{p}</span>
            </motion.li>
          ))}
        </motion.ul>
      </ScrollReveal>
    </section>
  )
}
