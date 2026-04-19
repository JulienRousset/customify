import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../lang'
import { buttonHover, easeApple, staggerItem, staggerParent } from './fx/motion'
import LogoViewer from './LogoViewer'

const heroContainer = staggerParent(0.09, 0.1)

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
              Studio Customy · Bali and Paris
            </motion.p>

            <motion.h1 variants={staggerItem} className="display-1 text-balance max-w-5xl">
              Custom AI, <span className="text-sub">made for your brand.</span>
            </motion.h1>

            <motion.p variants={staggerItem} className="mt-6 body-lg max-w-2xl text-pretty">
              {h.sub}
            </motion.p>

            <motion.div variants={staggerItem} className="mt-9 flex flex-wrap items-center gap-4">
              <motion.a
                href="#contact"
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#ff375f] to-[#ff9f0a] text-white shadow-[0_8px_20px_-6px_rgba(255,55,95,0.4)] px-6 py-3 text-[14.5px] font-medium"
              >
                {h.ctaPrimary}
                <ArrowUpRight size={15} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3, ease: easeApple }}
                className="inline-flex items-center gap-1 text-fg text-[14.5px] font-medium"
              >
                {h.ctaSecondary}
                <span aria-hidden>→</span>
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            variants={staggerItem}
            className="hidden lg:flex justify-center lg:justify-self-center w-full"
          >
            <div className="w-[380px] h-[380px] xl:w-[460px] xl:h-[460px] 2xl:w-[540px] 2xl:h-[540px]">
              <LogoViewer />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
