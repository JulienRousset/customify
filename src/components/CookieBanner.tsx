import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check } from 'lucide-react'
import { useLang } from '../lang'
import { acceptAll, rejectAll, setConsent, getConsent, isPending } from '../analytics/consent'

export default function CookieBanner() {
  const { t } = useLang()
  const c = t.cookies
  const [show, setShow] = useState(false)
  const [customize, setCustomize] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!isPending()) return
    const timer = window.setTimeout(() => setShow(true), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Sync local toggle state with current consent when opening Customize
    if (customize) {
      const current = getConsent()
      setAnalytics(current.analytics)
      setMarketing(current.marketing)
    }
  }, [customize])

  const onAcceptAll = () => {
    acceptAll()
    setShow(false)
  }
  const onRejectAll = () => {
    rejectAll()
    setShow(false)
  }
  const onSavePrefs = () => {
    setConsent({ analytics, marketing })
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="region"
          aria-label="Cookie notice"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 lg:right-auto lg:max-w-[440px] z-[55]"
        >
          <div className="card p-5 md:p-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)] flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34c759]" aria-hidden />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sub">
                    {c.eyebrow}
                  </span>
                </div>
                <p className="text-[13.5px] leading-[1.55] text-fg2 text-pretty">
                  {c.body}{' '}
                  <a
                    href="/privacy.html"
                    className="underline underline-offset-2 text-fg hover:text-accent transition-colors"
                  >
                    {c.readMore}
                  </a>
                  .
                </p>
              </div>
              <button
                type="button"
                onClick={onRejectAll}
                aria-label={c.close}
                className="shrink-0 w-7 h-7 rounded-full text-sub hover:text-fg hover:bg-surface transition-colors flex items-center justify-center"
              >
                <X size={14} strokeWidth={2} />
              </button>
            </div>

            {customize && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-3 pt-3 border-t border-hair"
              >
                <ToggleRow
                  label={c.necessaryLabel}
                  desc={c.necessaryDesc}
                  checked
                  disabled
                  onChange={() => undefined}
                />
                <ToggleRow
                  label={c.analyticsLabel}
                  desc={c.analyticsDesc}
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <ToggleRow
                  label={c.marketingLabel}
                  desc={c.marketingDesc}
                  checked={marketing}
                  onChange={setMarketing}
                />
              </motion.div>
            )}

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              {customize ? (
                <button
                  type="button"
                  onClick={onSavePrefs}
                  className="flex-1 inline-flex items-center justify-center rounded-full bg-fg text-bg text-[12.5px] font-medium px-4 py-2.5 hover:opacity-90 transition-opacity"
                >
                  {c.savePrefs}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onAcceptAll}
                  className="flex-1 inline-flex items-center justify-center rounded-full bg-fg text-bg text-[12.5px] font-medium px-4 py-2.5 hover:opacity-90 transition-opacity"
                >
                  {c.acceptAll}
                </button>
              )}
              <button
                type="button"
                onClick={onRejectAll}
                className="inline-flex items-center justify-center rounded-full border border-hair text-fg text-[12.5px] font-medium px-4 py-2.5 hover:bg-surface transition-colors"
              >
                {c.rejectAll}
              </button>
              <button
                type="button"
                onClick={() => setCustomize((v) => !v)}
                className="text-[12px] text-sub hover:text-fg transition-colors px-2 py-2"
              >
                {customize ? c.close : c.customize}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ToggleRow({
  label,
  desc,
  checked,
  disabled,
  onChange
}: {
  label: string
  desc: string
  checked: boolean
  disabled?: boolean
  onChange: (next: boolean) => void
}) {
  return (
    <div className="flex items-start gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`shrink-0 w-9 h-5 rounded-full transition-colors relative ${
          disabled
            ? 'bg-fg/30 cursor-not-allowed'
            : checked
            ? 'bg-fg'
            : 'bg-fg/15 hover:bg-fg/25'
        }`}
      >
        <span
          className={`absolute top-0.5 w-4 h-4 rounded-full bg-bg transition-transform ${
            checked ? 'translate-x-[18px]' : 'translate-x-0.5'
          }`}
          aria-hidden
        />
        {disabled && (
          <Check size={9} strokeWidth={3} className="absolute top-1 right-1 text-bg" aria-hidden />
        )}
      </button>
      <div className="flex-1 min-w-0">
        <div className="text-[12.5px] font-medium text-fg leading-tight">{label}</div>
        <div className="text-[11.5px] text-sub leading-snug mt-0.5">{desc}</div>
      </div>
    </div>
  )
}
