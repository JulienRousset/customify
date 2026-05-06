import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { staggerItem, staggerParent } from '../fx/motion'
import { openCalendly, preloadCalendly } from '../../lib/calendly'
import { waLink } from '../../lib/whatsapp'
import { WhatsAppGlyph } from '../icons'

interface VerticalHeroProps {
  eyebrow: string
  title: string
  titleAccent?: string
  sub: string
  ctaPrimary: string
  whatsappMessage: string
  industry: string
}

export default function VerticalHero({
  eyebrow,
  title,
  titleAccent,
  sub,
  ctaPrimary,
  whatsappMessage,
  industry
}: VerticalHeroProps) {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="container-xl">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-[12.5px] text-sub mb-10"
        >
          <Link to="/" className="hover:text-fg transition-colors">Home</Link>
          <span aria-hidden className="opacity-40">/</span>
          <Link to="/whatwebuild" className="hover:text-fg transition-colors">What we build</Link>
          <span aria-hidden className="opacity-40">/</span>
          <span className="text-fg">{industry}</span>
        </motion.nav>

        <motion.div
          variants={staggerParent(0.09, 0.05)}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={staggerItem} className="eyebrow">{eyebrow}</motion.p>
          <motion.h1 variants={staggerItem} className="display-1 text-balance max-w-5xl">
            {title}
            {titleAccent && <> <span className="text-sub">{titleAccent}</span></>}
          </motion.h1>
          <motion.p variants={staggerItem} className="mt-6 body-lg max-w-2xl text-pretty">
            {sub}
          </motion.p>

          <motion.div variants={staggerItem} className="mt-9 flex flex-wrap items-center gap-3">
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
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
