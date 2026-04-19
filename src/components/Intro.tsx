import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLang } from '../lang'

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useLang()
  const h = t.hero

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const monitorScale = useTransform(scrollYProgress, [0, 0.92], [1, 20])
  const monitorY = useTransform(scrollYProgress, [0, 1], [0, -32])
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const previewOpacity = useTransform(scrollYProgress, [0.08, 0.45], [1, 0])
  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])
  const veilOpacity = useTransform(scrollYProgress, [0.88, 1], [1, 0])
  const bezelOpacity = useTransform(scrollYProgress, [0.55, 0.85], [1, 0])

  return (
    <section ref={ref} className="relative h-[260vh]" aria-hidden>
      <motion.div
        style={{ opacity: veilOpacity }}
        className="sticky top-0 h-screen w-full overflow-hidden bg-bg"
      >
        <motion.div
          style={{ opacity: sceneOpacity }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a08] via-[#080608] to-bg" />

          <div
            className="absolute -top-[15%] -right-[10%] w-[65vw] h-[65vw] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(255,170,90,0.16), transparent 60%)' }}
          />
          <div
            className="absolute -top-[10%] -left-[15%] w-[55vw] h-[55vw] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(120,170,255,0.09), transparent 60%)' }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[60vh] blur-3xl"
            style={{ background: 'radial-gradient(ellipse, rgba(0,113,227,0.10), transparent 65%)' }}
          />

          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent to-bg" />
        </motion.div>

        <motion.div
          style={{ scale: monitorScale, y: monitorY }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-[60vw] max-w-[780px] aspect-[16/10]">
            <motion.div
              style={{ opacity: bezelOpacity }}
              className="absolute -inset-3 rounded-[28px] blur-2xl bg-accent/15 pointer-events-none"
            />
            <motion.div
              style={{ opacity: bezelOpacity }}
              className="absolute inset-0 rounded-[22px] bg-[#0a0a0c] p-[7px] md:p-[10px] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(255,255,255,0.04)]"
              aria-hidden
            />
            <div className="absolute inset-[7px] md:inset-[10px] rounded-[15px] bg-bg overflow-hidden flex items-center justify-center">
              <motion.div style={{ opacity: previewOpacity }} className="text-center px-[7%]">
                <div
                  className="font-display font-semibold tracking-tightest text-fg leading-[1.04]"
                  style={{ fontSize: 'clamp(12px, 2.4vw, 32px)' }}
                >
                  {h.h1a}
                </div>
                <div
                  className="font-display font-semibold tracking-tightest text-fg leading-[1.04]"
                  style={{ fontSize: 'clamp(12px, 2.4vw, 32px)' }}
                >
                  {h.h1b}
                </div>
                <div
                  className="mt-[8px] text-sub mx-auto max-w-[85%]"
                  style={{ fontSize: 'clamp(6px, 0.95vw, 12px)' }}
                >
                  {h.sub}
                </div>
                <div className="mt-[12px] flex items-center justify-center gap-[8px]">
                  <span
                    className="inline-flex items-center rounded-full bg-accent text-white font-medium"
                    style={{ fontSize: 'clamp(6px, 0.85vw, 11px)', padding: '4px 10px' }}
                  >
                    {h.ctaPrimary}
                  </span>
                  <span
                    className="text-fg2"
                    style={{ fontSize: 'clamp(6px, 0.85vw, 11px)' }}
                  >
                    {h.ctaSecondary}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sub text-[11px] tracking-[0.22em] uppercase flex flex-col items-center gap-3 pointer-events-none"
        >
          <span>Scroll</span>
          <span className="relative w-[1px] h-10 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-b from-transparent via-sub to-transparent animate-[scrollHint_2s_ease-in-out_infinite]" />
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
