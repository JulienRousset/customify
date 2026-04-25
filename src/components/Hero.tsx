import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../lang'
import { buttonHover, staggerItem, staggerParent } from './fx/motion'
import HeroNotifications from './HeroNotifications'
import LogoViewer from './LogoViewer'

const heroContainer = staggerParent(0.09, 0.1)

// Prefetch the Contact chunk on hover/focus so the click feels instant.
// Dynamic imports are cached, so this runs at most once.
const prefetchContact = () => {
  import('./Contact').catch(() => {})
}

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section id="home" className="relative pt-32 md:pt-40 pb-20 md:pb-28">
      <motion.div
        className="container-xl"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <motion.p variants={staggerItem} className="eyebrow">
              {h.eyebrow}
            </motion.p>

            <motion.h1 variants={staggerItem} className="display-1 text-balance max-w-5xl">
              {h.h1a} <span className="text-sub">{h.h1b}</span>
            </motion.h1>

            <motion.p variants={staggerItem} className="mt-6 body-lg max-w-2xl text-pretty">
              {h.sub}
            </motion.p>

            <motion.div variants={staggerItem} className="mt-9 flex flex-wrap items-center gap-4">
              <motion.a
                href="#contact"
                onMouseEnter={prefetchContact}
                onFocus={prefetchContact}
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-9 py-4 text-[17px] md:text-[18px] font-semibold tracking-tight transition-opacity hover:opacity-90"
              >
                {h.ctaPrimary}
                <ArrowUpRight size={20} />
              </motion.a>
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="mt-5 text-[12.5px] md:text-[13px] font-medium text-sub tracking-tight"
            >
              {h.engagement}
            </motion.p>
          </div>

          <motion.div
            variants={staggerItem}
            className="hidden lg:flex relative justify-center lg:justify-end w-full pl-10 min-h-[460px] items-center"
          >
            {/* Logo Viewer in background */}
            <div className="absolute inset-0 flex items-center justify-center -translate-x-12 opacity-80 pointer-events-none">
              <div className="w-[380px] h-[380px] xl:w-[460px] xl:h-[460px] 2xl:w-[540px] 2xl:h-[540px]">
                <LogoViewer />
              </div>
            </div>

            {/* Notifications overlay */}
            <div className="absolute inset-0 w-full h-full z-10 pointer-events-none mt-10 lg:mt-0">
              <HeroNotifications />
            </div>
          </motion.div>

          {/* Mobile-only visual: smaller 3D logo, no notification overlays */}
          <motion.div
            variants={staggerItem}
            className="flex lg:hidden relative justify-center w-full mt-4 h-[280px] sm:h-[340px] items-center"
            aria-hidden
          >
            <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] opacity-90 pointer-events-none">
              <LogoViewer />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
