import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { useLang } from '../lang'
import { openCalendly, preloadCalendly } from '../lib/calendly'

const MOBILE_TRIGGER_MS = 45_000
const DESKTOP_ARM_DELAY_MS = 6_000

export default function ExitIntentModal() {
  const { t } = useLang()
  const m = t.contact.exitModal

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let fired = false
    const trigger = () => {
      if (fired) return
      fired = true
      setOpen(true)
    }

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger()
    }

    const isCoarse = window.matchMedia('(pointer: coarse)').matches

    const armTimer = window.setTimeout(() => {
      if (isCoarse) {
        trigger()
      } else {
        document.addEventListener('mouseleave', onMouseLeave)
      }
    }, isCoarse ? MOBILE_TRIGGER_MS : DESKTOP_ARM_DELAY_MS)

    return () => {
      window.clearTimeout(armTimer)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  const close = () => setOpen(false)

  const book = () => {
    setOpen(false)
    openCalendly()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-modal-title"
        >
          <motion.div
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-bg/70 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative card p-8 md:p-12 w-full max-w-md md:max-w-lg text-center shadow-[0_40px_100px_-30px_rgba(0,0,0,0.5)]"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 rounded-full border border-hair bg-surface2/60 flex items-center justify-center text-sub hover:text-fg hover:border-fg/30 transition-all active:scale-95"
            >
              <X size={15} strokeWidth={1.8} />
            </button>

            <p className="eyebrow">{m.eyebrow}</p>
            <h3
              id="exit-modal-title"
              className="font-display font-semibold text-[28px] md:text-[36px] tracking-tight leading-[1.05] mt-2 text-balance"
            >
              {m.title}
            </h3>
            <p className="mt-4 text-fg2 text-[14.5px] md:text-[15px] max-w-sm mx-auto leading-[1.55] text-pretty">
              {m.sub}
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <button
                type="button"
                onClick={book}
                onPointerEnter={preloadCalendly}
                onFocus={preloadCalendly}
                autoFocus
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-fg text-bg px-6 py-3.5 text-[14.5px] font-medium hover:opacity-90 transition-opacity"
              >
                {m.cta} <ArrowRight size={14} />
              </button>
              <button
                type="button"
                onClick={close}
                className="text-[12.5px] text-sub hover:text-fg transition-colors"
              >
                {m.skip}
              </button>
            </div>

            <p className="mt-5 text-[11px] text-sub leading-[1.5] max-w-xs mx-auto">
              {t.contact.legalNote}{' '}
              <a href="/privacy.html" className="underline underline-offset-2 hover:text-fg transition-colors">
                {t.contact.privacyLabel}
              </a>{' '}
              &amp;{' '}
              <a href="/terms.html" className="underline underline-offset-2 hover:text-fg transition-colors">
                {t.contact.termsLabel}
              </a>
              .
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
