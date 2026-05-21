import { motion } from 'framer-motion'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'

interface FloatingLabel {
  label: string
  color: string
  /** Vertical positions stay within ~0-20% of the SECTION's top or bottom strip
   *  (the strips live inside the 12rem padding around the centered title). */
  position: { top?: string; bottom?: string; left?: string; right?: string }
  float: { dur: number; dy: number; delay: number }
}

const LABELS: FloatingLabel[] = [
  // Top strip — all labels live above the title block, in the top 22% of the section
  { label: 'Spa',              color: '#34c759', position: { top: '6%',  left: '6%'  }, float: { dur: 5.6, dy: 8,  delay: 0   } },
  { label: 'Restaurant',       color: '#ff7a59', position: { top: '15%', left: '22%' }, float: { dur: 7.2, dy: 10, delay: 0.7 } },
  { label: 'Boutique',         color: '#ff375f', position: { top: '4%',  left: '42%' }, float: { dur: 6.0, dy: 7,  delay: 1.3 } },
  { label: 'Bar',              color: '#ff3b30', position: { top: '13%', left: '58%' }, float: { dur: 8.0, dy: 9,  delay: 0.3 } },
  { label: 'Influencer',       color: '#bf5af2', position: { top: '6%',  right: '6%' }, float: { dur: 6.5, dy: 8,  delay: 1.0 } },

  // Bottom strip — all labels live below the CTA, in the bottom 22% of the section
  { label: 'Villa management', color: '#0a84ff', position: { bottom: '13%', left: '4%'  }, float: { dur: 7.4, dy: 9,  delay: 0.4 } },
  { label: 'Artisan',          color: '#ff9f0a', position: { bottom: '4%',  left: '22%' }, float: { dur: 5.8, dy: 7,  delay: 1.1 } },
  { label: 'Online business',  color: '#00B67A', position: { bottom: '15%', left: '42%' }, float: { dur: 6.8, dy: 8,  delay: 0.2 } },
  { label: 'SaaS',             color: '#25D366', position: { bottom: '4%',  left: '58%' }, float: { dur: 7.0, dy: 9,  delay: 0.9 } },
  { label: 'Entrepreneur',     color: '#0071e3', position: { bottom: '15%', right: '22%'}, float: { dur: 6.2, dy: 7,  delay: 1.5 } },
  { label: 'Agency',           color: '#af52de', position: { bottom: '4%',  right: '4%' }, float: { dur: 8.2, dy: 10, delay: 0.5 } }
]

function FloatingPill({ label, color, position, float, index }: FloatingLabel & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -float.dy, 0]
      }}
      transition={{
        opacity: { duration: 0.7, delay: 0.3 + index * 0.05, ease: easeApple },
        scale: { duration: 0.7, delay: 0.3 + index * 0.05, ease: easeApple },
        y: { duration: float.dur, repeat: Infinity, ease: 'easeInOut', delay: float.delay }
      }}
      whileHover={{
        scale: 1.06,
        y: 0,
        transition: { type: 'spring', stiffness: 320, damping: 18 }
      }}
      style={{
        ...position,
        background: `linear-gradient(135deg, ${color}24, ${color}0a)`,
        borderColor: `${color}3d`,
        color,
        boxShadow: `0 0 48px ${color}28, 0 0 20px ${color}22, 0 8px 24px rgba(0,0,0,0.06)`,
        willChange: 'transform'
      }}
      className="absolute inline-flex items-center rounded-full border backdrop-blur-xl px-5 py-2.5 text-[14.5px] md:text-[15.5px] font-semibold tracking-tight cursor-default select-none whitespace-nowrap"
    >
      {label}
    </motion.div>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-[8rem] md:py-[10rem] lg:py-[12rem]"
    >
      {/* Ambient halos */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[18%] left-[18%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-30 dark:opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(191,90,242,0.18), transparent 70%)' }}
        />
        <div
          className="absolute bottom-[12%] right-[15%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-30 dark:opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(10,132,255,0.18), transparent 70%)' }}
        />
      </div>

      {/* Floating labels — anchored to the SECTION (not the title container) so
          top/bottom percentages map to the full section height including padding.
          Labels stay within the top 18% and bottom 18% strips, never inside the
          middle 64% where the title block lives. */}
      <div aria-hidden className="hidden lg:block absolute inset-0 pointer-events-none">
        {LABELS.map((l, i) => (
          <div key={l.label} className="pointer-events-auto">
            <FloatingPill {...l} index={i} />
          </div>
        ))}
      </div>

      {/* Centered content — vertically in the middle 64% strip, untouchable */}
      <div className="relative container-xl">
        <motion.div
          variants={staggerParent(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <motion.p variants={staggerItem} className="eyebrow">Who we work with</motion.p>
          <motion.h2 variants={staggerItem} className="display-2 text-balance">
            Every solution is unique, <span className="text-sub">built around your business.</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="mt-5 body-lg max-w-2xl mx-auto text-pretty">
            Our solutions are 100% customized and adapted to any business. We ship in days, around your needs.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mt-7 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-sub"
          >
            <span className="text-fg">50+ clients</span> already onboard
          </motion.p>
        </motion.div>

        {/* Mobile / tablet fallback — pills wrap below the content */}
        <div className="lg:hidden mt-12 flex flex-wrap items-center justify-center gap-2.5 max-w-xl mx-auto">
          {LABELS.map((l) => (
            <span
              key={l.label}
              className="inline-flex items-center rounded-full border backdrop-blur-xl text-[13px] font-semibold tracking-tight px-4 py-2"
              style={{
                background: `linear-gradient(135deg, ${l.color}24, ${l.color}0a)`,
                borderColor: `${l.color}3d`,
                color: l.color,
                boxShadow: `0 0 24px ${l.color}24`
              }}
            >
              {l.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
