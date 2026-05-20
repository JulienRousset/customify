import { motion } from 'framer-motion'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'

interface FloatingLabel {
  label: string
  color: string
  rotate: number
  /** Desktop position — pushed to the outer edges so the title block breathes. */
  position: { top?: string; bottom?: string; left?: string; right?: string }
  /** Float animation parameters */
  float: { dur: number; dy: number; dx: number; delay: number }
}

/* Constellation positions: labels span the full width and stay well clear of
   the centered title block. Horizontals from 3% to 80%, verticals at the very
   top + very bottom of the section. */
const LABELS: FloatingLabel[] = [
  // Top arc — pushed up + spread across the width
  { label: 'Spa',              color: '#34c759', rotate: -3, position: { top: '4%',  left: '5%'  }, float: { dur: 7.2, dy: -8,  dx: 4,  delay: 0   } },
  { label: 'Restaurant',       color: '#ff7a59', rotate: 2,  position: { top: '2%',  left: '26%' }, float: { dur: 8.0, dy: -10, dx: -5, delay: 0.3 } },
  { label: 'Boutique',         color: '#ff375f', rotate: -2, position: { top: '8%',  left: '54%' }, float: { dur: 6.6, dy: -7,  dx: 3,  delay: 0.6 } },
  { label: 'Bar',              color: '#ff3b30', rotate: 3,  position: { top: '4%',  right: '6%' }, float: { dur: 7.6, dy: -9,  dx: -4, delay: 0.2 } },

  // Mid sides — pulled to the very edges
  { label: 'Influencer',       color: '#bf5af2', rotate: -2, position: { top: '44%', left: '2%'  }, float: { dur: 9.0, dy: -11, dx: 5,  delay: 0.5 } },
  { label: 'Villa management', color: '#0a84ff', rotate: 3,  position: { top: '42%', right: '2%' }, float: { dur: 8.4, dy: -10, dx: -4, delay: 0.7 } },

  // Bottom arc — pushed down + spread
  { label: 'Artisan',          color: '#ff9f0a', rotate: -2, position: { bottom: '6%', left: '5%'  }, float: { dur: 7.4, dy: -9,  dx: 4,  delay: 0.4 } },
  { label: 'Online business',  color: '#00B67A', rotate: 1,  position: { bottom: '2%', left: '24%' }, float: { dur: 8.8, dy: -10, dx: -5, delay: 0.1 } },
  { label: 'SaaS',             color: '#25D366', rotate: -1, position: { bottom: '8%', left: '50%' }, float: { dur: 6.4, dy: -7,  dx: 3,  delay: 0.8 } },
  { label: 'Entrepreneur',     color: '#0071e3', rotate: 2,  position: { bottom: '4%', right: '24%'}, float: { dur: 7.8, dy: -9,  dx: -4, delay: 0.5 } },
  { label: 'Agency',           color: '#af52de', rotate: -3, position: { bottom: '8%', right: '5%' }, float: { dur: 9.2, dy: -11, dx: 5,  delay: 0.9 } }
]

function FloatingPill({ label, color, rotate, position, float, index }: FloatingLabel & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, float.dy, 0],
        x: [0, float.dx, 0, -float.dx, 0]
      }}
      transition={{
        opacity: { duration: 0.7, delay: 0.3 + index * 0.05, ease: easeApple },
        scale: { duration: 0.7, delay: 0.3 + index * 0.05, ease: easeApple },
        y: { duration: float.dur, repeat: Infinity, ease: 'easeInOut', delay: float.delay },
        x: { duration: float.dur * 1.4, repeat: Infinity, ease: 'easeInOut', delay: float.delay }
      }}
      whileHover={{
        scale: 1.08,
        y: 0,
        x: 0,
        transition: { type: 'spring', stiffness: 320, damping: 18 }
      }}
      style={{
        ...position,
        transform: `rotate(${rotate}deg)`,
        background: `linear-gradient(135deg, ${color}28, ${color}0d)`,
        borderColor: `${color}44`,
        boxShadow: `0 0 28px ${color}33, 0 8px 22px rgba(0,0,0,0.06)`,
        color
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
      {/* Subtle ambient halos to give the glass backdrop-blur something to work with */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] left-[20%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-30 dark:opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(191,90,242,0.18), transparent 70%)' }}
        />
        <div
          className="absolute bottom-[10%] right-[15%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-30 dark:opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(10,132,255,0.18), transparent 70%)' }}
        />
      </div>

      <div className="relative container-xl">
        {/* Constellation of floating labels (desktop) — full width, well clear of the title */}
        <div aria-hidden className="hidden lg:block absolute inset-0 pointer-events-none">
          <div className="relative w-full h-full pointer-events-none">
            {LABELS.map((l, i) => (
              <div key={l.label} className="pointer-events-auto">
                <FloatingPill {...l} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Centered content — sits above the constellation */}
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
                background: `linear-gradient(135deg, ${l.color}28, ${l.color}0d)`,
                borderColor: `${l.color}44`,
                color: l.color,
                boxShadow: `0 0 20px ${l.color}28`
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
