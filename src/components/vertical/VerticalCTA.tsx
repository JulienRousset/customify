import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { staggerItem, staggerParent, viewportOnce } from '../fx/motion'
import { openCalendly, preloadCalendly } from '../../lib/calendly'
import { waLink, WA_NUMBER_DISPLAY } from '../../lib/whatsapp'
import { WhatsAppGlyph } from '../icons'
import ScrollReveal from './ScrollReveal'

interface VerticalCTAProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  sub?: string
  ctaPrimary: string
  whatsappMessage: string
  centered?: boolean
}

export default function VerticalCTA({
  eyebrow = 'Next step',
  title,
  titleAccent,
  sub,
  ctaPrimary,
  whatsappMessage,
  centered = true
}: VerticalCTAProps) {
  return (
    <section className="relative py-24 md:py-32 border-t border-hair">
      <ScrollReveal intensity="medium" className="container-xl">
        <motion.div
          variants={staggerParent(0.08, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className={centered ? 'max-w-3xl mx-auto text-center' : 'max-w-3xl'}
        >
          <motion.p variants={staggerItem} className="eyebrow">{eyebrow}</motion.p>
          <motion.h2 variants={staggerItem} className="display-2 text-balance">
            {title}
            {titleAccent && <> <span className="text-sub">{titleAccent}</span></>}
          </motion.h2>
          {sub && (
            <motion.p variants={staggerItem} className={`mt-5 body-lg max-w-xl text-pretty ${centered ? 'mx-auto' : ''}`}>
              {sub}
            </motion.p>
          )}

          <motion.div variants={staggerItem} className={`mt-9 flex flex-wrap items-center gap-3 ${centered ? 'justify-center' : ''}`}>
            <button
              type="button"
              onClick={() => openCalendly()}
              onMouseEnter={preloadCalendly}
              onFocus={preloadCalendly}
              className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-7 py-3.5 text-[15px] md:text-[16px] font-semibold tracking-tight transition-opacity hover:opacity-90"
            >
              {ctaPrimary}
              <ArrowUpRight size={18} />
            </button>
            <a
              href={waLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-hair px-6 py-3.5 text-[14.5px] font-medium text-fg2 hover:text-fg hover:border-fg/30 transition-colors"
            >
              <WhatsAppGlyph size={15} />
              <span className="hidden sm:inline">WhatsApp · </span>
              {WA_NUMBER_DISPLAY}
            </a>
          </motion.div>
        </motion.div>
      </ScrollReveal>
    </section>
  )
}
