import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  Check,
  Plus,
  RotateCcw,
  ArrowRight,
  CalendarClock,
  Copy,
  Sparkles,
  Layers,
  Info,
  Star,
  type LucideIcon
} from 'lucide-react'
import { useLang } from '../../lang'
import { WhatsAppGlyph } from '../icons'
import { openCalendly, preloadCalendly } from '../../lib/calendly'
import { waLink } from '../../lib/whatsapp'
import { staggerItem, staggerParent, viewportOnce } from '../fx/motion'
import {
  MODULES,
  ADDONS,
  GROUPS,
  PRESETS,
  COMPLETE,
  COMPLETE_FEATURES,
  computeTotals,
  formatEUR,
  perMonth,
  tr,
  moduleById,
  addonById,
  type Lang,
  type Module,
  type AddOn
} from './offerData'

const STORAGE_KEY = 'customy-offer-selection-v1'
const DEFAULT_CORE = ['website', 'seo', 'social']

type SummaryMode = 'custom' | 'complete'
type SendState = 'idle' | 'sending' | 'sent' | 'error'

interface CopyBlock {
  eyebrow: string
  title: string
  titleAccent: string
  sub: string
  presetsLabel: string
  selectAll: string
  reset: string
  addonsLabel: string
  addonsHint: string
  onQuote: string
  from: string
  tabCustom: string
  tabComplete: string
  yourPrice: string
  marketValue: string
  save: string
  perYear: string
  emptyTitle: string
  emptyBody: string
  bundleNudge: (amount: string) => string
  switchToComplete: string
  allIncluded: string
  vsSeparate: string
  vsMarket: string
  quoteWa: string
  bookCall: string
  copy: string
  copied: string
  leadPrompt: string
  emailPh: string
  leadSend: string
  leadSending: string
  leadSent: string
  leadError: string
  recap: string
  waIntro: string
  waModules: string
  waAddons: string
  waTotal: string
  waMarket: string
  waSave: string
  waComplete: string
  waOutro: string
  mobileTotal: string
}

const COPY: Record<Lang, CopyBlock> = {
  fr: {
    eyebrow: 'Construisez votre formule',
    title: 'Composez la solution',
    titleAccent: 'adaptée à votre entreprise.',
    sub: 'Activez les modules dont vous avez besoin, ou choisissez tout d’un coup. Les prix se mettent à jour en direct. Vous voyez exactement ce que vous payez et ce que vous économisez.',
    presetsLabel: 'Départs rapides',
    selectAll: 'Tout sélectionner',
    reset: 'Réinitialiser',
    addonsLabel: 'Modules complémentaires',
    addonsHint: 'Options à ajouter à n’importe quelle formule',
    onQuote: 'Sur devis',
    from: 'À partir de',
    tabCustom: 'Ma formule',
    tabComplete: 'Système complet',
    yourPrice: 'Votre tarif Customy',
    marketValue: 'Valeur marché',
    save: 'Vous économisez',
    perYear: 'par an',
    emptyTitle: 'Votre formule est vide',
    emptyBody: 'Activez des modules à gauche ou choisissez un départ rapide pour voir votre tarif.',
    bundleNudge: (amount) => `Vos modules dépassent le Système Complet. Passez à tout inclus et économisez ${amount} de plus.`,
    switchToComplete: 'Voir le système complet',
    allIncluded: 'Tout est inclus',
    vsSeparate: 'vs modules séparés',
    vsMarket: 'vs prix marché',
    quoteWa: 'Recevoir mon devis',
    bookCall: 'Réserver un appel',
    copy: 'Copier le récap',
    copied: 'Copié !',
    leadPrompt: 'Recevez le récap par email',
    emailPh: 'vous@marque.com',
    leadSend: 'Envoyer',
    leadSending: 'Envoi…',
    leadSent: 'C’est envoyé, on revient vers vous sous 24 h.',
    leadError: 'Échec de l’envoi. Essayez WhatsApp.',
    recap: 'Récapitulatif',
    waIntro: 'Bonjour Customy 👋 Voici la formule que j’ai composée sur votre page Offres :',
    waModules: 'MODULES',
    waAddons: 'COMPLÉMENTAIRES',
    waTotal: 'Total Customy',
    waMarket: 'Valeur marché',
    waSave: 'Économie vs marché',
    waComplete: `Je suis intéressé(e) par le Système Complet (${formatEUR(COMPLETE.price, 'fr')}${perMonth('fr')}, tout inclus).`,
    waOutro: 'Pouvez-vous me faire un devis ?',
    mobileTotal: 'Total'
  },
  en: {
    eyebrow: 'Build your package',
    title: 'Compose the solution',
    titleAccent: 'that fits your business.',
    sub: 'Toggle the modules you need, or pick everything at once. Prices update live. You see exactly what you pay and what you save.',
    presetsLabel: 'Quick starts',
    selectAll: 'Select all',
    reset: 'Reset',
    addonsLabel: 'Add-on modules',
    addonsHint: 'Options you can add to any package',
    onQuote: 'On quote',
    from: 'From',
    tabCustom: 'My package',
    tabComplete: 'Complete system',
    yourPrice: 'Your Customy price',
    marketValue: 'Market value',
    save: 'You save',
    perYear: 'per year',
    emptyTitle: 'Your package is empty',
    emptyBody: 'Toggle modules on the left or pick a quick start to see your price.',
    bundleNudge: (amount) => `Your modules exceed the Complete System. Switch to all-in and save ${amount} more.`,
    switchToComplete: 'See the complete system',
    allIncluded: 'Everything included',
    vsSeparate: 'vs separate modules',
    vsMarket: 'vs market price',
    quoteWa: 'Get my quote',
    bookCall: 'Book a call',
    copy: 'Copy summary',
    copied: 'Copied!',
    leadPrompt: 'Get the summary by email',
    emailPh: 'you@brand.com',
    leadSend: 'Send',
    leadSending: 'Sending…',
    leadSent: 'Sent, we’ll get back to you within 24h.',
    leadError: 'Could not send. Try WhatsApp.',
    recap: 'Summary',
    waIntro: 'Hi Customy 👋 Here’s the package I put together on your Offers page:',
    waModules: 'MODULES',
    waAddons: 'ADD-ONS',
    waTotal: 'Customy total',
    waMarket: 'Market value',
    waSave: 'Saving vs market',
    waComplete: `I’m interested in the Complete System (${formatEUR(COMPLETE.price, 'en')}${perMonth('en')}, all included).`,
    waOutro: 'Could you send me a quote?',
    mobileTotal: 'Total'
  }
}

/* Build the plain-text recap used for WhatsApp / email / clipboard. */
function buildRecap(
  mode: SummaryMode,
  coreIds: string[],
  addonIds: string[],
  lang: Lang,
  c: CopyBlock
): string {
  if (mode === 'complete') {
    return `${c.waIntro}\n\n${c.waComplete}\n\n${c.waOutro}`
  }

  const t = computeTotals(coreIds, addonIds)
  const lines: string[] = [c.waIntro, '']

  const cores = coreIds.map(moduleById).filter(Boolean) as Module[]
  if (cores.length) {
    lines.push(c.waModules)
    cores.forEach((m) => lines.push(`• ${tr(m.name, lang)} · ${formatEUR(m.price, lang)}${perMonth(lang)}`))
  }

  const addons = addonIds.map(addonById).filter(Boolean) as AddOn[]
  if (addons.length) {
    lines.push('', c.waAddons)
    addons.forEach((a) =>
      lines.push(
        `• ${tr(a.name, lang)} · ${a.price === null ? c.onQuote : `${a.from ? c.from + ' ' : ''}${formatEUR(a.price, lang)}${perMonth(lang)}`}`
      )
    )
  }

  lines.push('')
  lines.push(`${c.waTotal} : ${formatEUR(t.customy, lang)}${perMonth(lang)}`)
  if (t.market > 0) {
    lines.push(`${c.waMarket} : ${formatEUR(t.market, lang)}${perMonth(lang)}`)
    lines.push(`${c.waSave} : ${formatEUR(t.saveVsMarket, lang)}${perMonth(lang)}`)
  }
  lines.push('', c.waOutro)
  return lines.join('\n')
}

/* One toggleable module / add-on card. */
function ToggleCard({
  active,
  onToggle,
  icon: Icon,
  no,
  name,
  desc,
  priceLabel,
  strikeLabel
}: {
  active: boolean
  onToggle: () => void
  icon: LucideIcon
  no?: string
  name: string
  desc: string
  priceLabel: string
  strikeLabel?: string
}) {
  return (
    <motion.button
      type="button"
      variants={staggerItem}
      onClick={onToggle}
      aria-pressed={active}
      className={`group relative flex flex-col text-left rounded-[20px] border p-5 transition-all duration-300 ease-out ${
        active
          ? 'border-accent/60 bg-accent/[0.05] shadow-[0_14px_40px_-18px_rgb(var(--color-accent)/0.45)]'
          : 'border-hair bg-surface2 hover:border-fg/25 hover:-translate-y-0.5'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={`shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${
            active ? 'bg-accent text-bg' : 'bg-surface border border-hair text-fg2 group-hover:text-fg'
          }`}
        >
          <Icon size={19} strokeWidth={1.7} aria-hidden />
        </div>
        {/* Checkbox indicator */}
        <span
          className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
            active ? 'bg-accent border-accent text-bg scale-100' : 'border-hair2 text-transparent group-hover:border-fg/40'
          }`}
          aria-hidden
        >
          {active ? <Check size={13} strokeWidth={3} /> : <Plus size={13} strokeWidth={2.4} className="text-sub" />}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {no && <span className="text-[11px] font-semibold tracking-[0.14em] text-sub tabular-nums">{no}</span>}
        <h4 className="font-display font-semibold text-[15.5px] tracking-tight leading-tight">{name}</h4>
      </div>
      <p className="mt-1.5 text-[12.5px] text-fg2 leading-[1.5] text-pretty">{desc}</p>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-display font-semibold text-[17px] tracking-tight tabular-nums">{priceLabel}</span>
        {strikeLabel && <span className="text-[12px] text-sub line-through tabular-nums">{strikeLabel}</span>}
      </div>
    </motion.button>
  )
}

export default function PackageBuilder() {
  const { lang } = useLang()
  const c = COPY[lang]

  const [core, setCore] = useState<Set<string>>(new Set(DEFAULT_CORE))
  const [addons, setAddons] = useState<Set<string>>(new Set())
  const [mode, setMode] = useState<SummaryMode>('custom')
  const [copied, setCopied] = useState(false)
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [send, setSend] = useState<SendState>('idle')
  const [hydrated, setHydrated] = useState(false)
  const sentRef = useRef<HTMLParagraphElement>(null)

  // Move focus to the confirmation once a lead is sent — the form (and the
  // button that had focus) unmounts, so focus would otherwise fall to <body>.
  useEffect(() => {
    if (send === 'sent') sentRef.current?.focus()
  }, [send])

  // Restore a previous selection (survives navigation / refresh).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const saved = JSON.parse(raw) as { core?: string[]; addons?: string[]; mode?: SummaryMode }
        if (Array.isArray(saved.core)) setCore(new Set(saved.core.filter((id) => moduleById(id))))
        if (Array.isArray(saved.addons)) setAddons(new Set(saved.addons.filter((id) => addonById(id))))
        if (saved.mode === 'custom' || saved.mode === 'complete') setMode(saved.mode)
      }
    } catch {
      /* ignore corrupt storage */
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ core: [...core], addons: [...addons], mode }))
    } catch {
      /* ignore quota / private mode */
    }
  }, [core, addons, mode, hydrated])

  const coreIds = useMemo(() => MODULES.filter((m) => core.has(m.id)).map((m) => m.id), [core])
  const addonIds = useMemo(() => ADDONS.filter((a) => addons.has(a.id)).map((a) => a.id), [addons])
  const totals = useMemo(() => computeTotals(coreIds, addonIds), [coreIds, addonIds])

  const toggleCore = useCallback((id: string) => {
    setCore((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
    setMode('custom')
  }, [])

  const toggleAddon = useCallback((id: string) => {
    setAddons((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
    setMode('custom')
  }, [])

  const applyPreset = (ids: string[]) => {
    setCore(new Set(ids))
    setMode('custom')
  }
  const selectAll = () => {
    setCore(new Set(MODULES.map((m) => m.id)))
    setMode('custom')
  }
  const reset = () => {
    setCore(new Set())
    setAddons(new Set())
    setMode('custom')
  }

  // How much extra the Complete System saves over the current à-la-carte core.
  const bundleGain = totals.customy - COMPLETE.price
  const showBundleNudge = mode === 'custom' && bundleGain > 0

  const activePrice = mode === 'complete' ? COMPLETE.price : totals.customy
  const recap = () => buildRecap(mode, coreIds, addonIds, lang, c)

  const sendWhatsApp = () => window.open(waLink(recap()), '_blank', 'noopener,noreferrer')

  const doCopy = async () => {
    try {
      await navigator.clipboard.writeText(recap())
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked — silent */
    }
  }

  const submitLead = async (e: FormEvent) => {
    e.preventDefault()
    if (honeypot.trim() !== '') return // bot
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setSend('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          source: mode === 'complete' ? 'offer-complete-system' : 'offer-builder',
          lang,
          summary: recap(),
          website: honeypot
        })
      })
      setSend(res.ok ? 'sent' : 'error')
    } catch {
      setSend('error')
    }
  }

  const presetActive = (ids: string[]) =>
    ids.length === core.size && ids.every((id) => core.has(id))

  const money = (n: number) => formatEUR(n, lang)
  const pm = perMonth(lang)
  const liveMsg = send === 'sent' ? c.leadSent : send === 'error' ? c.leadError : copied ? c.copied : ''

  return (
    <section id="builder" className="relative py-[4.8rem] md:py-[6.4rem] border-t border-hair scroll-mt-24">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          variants={staggerParent(0.08, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl"
        >
          <motion.p variants={staggerItem} className="eyebrow">{c.eyebrow}</motion.p>
          <motion.h2 variants={staggerItem} className="display-2 text-balance">
            {c.title} <span className="text-sub">{c.titleAccent}</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="mt-5 body-md max-w-xl text-pretty">{c.sub}</motion.p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* LEFT — builder controls */}
          <div className="lg:col-span-8">
            {/* Presets + bulk actions */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sub mr-1">{c.presetsLabel}</span>
              {PRESETS.map((p) => {
                const on = presetActive(p.modules)
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => applyPreset(p.modules)}
                    aria-pressed={on}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-all ${
                      on ? 'border-accent/50 bg-accent/[0.06] text-fg' : 'border-hair text-fg2 hover:border-fg/30 hover:text-fg'
                    }`}
                  >
                    {on && <Check size={12} strokeWidth={2.6} className="text-accent" aria-hidden />}
                    {tr(p.label, lang)}
                  </button>
                )
              })}
              <span className="w-px h-5 bg-hair mx-1 hidden sm:inline-block" />
              <button
                type="button"
                onClick={selectAll}
                className="inline-flex items-center gap-1.5 rounded-full border border-hair px-3.5 py-1.5 text-[12.5px] font-medium text-fg2 hover:border-fg/30 hover:text-fg transition-all"
              >
                <Layers size={13} strokeWidth={1.9} /> {c.selectAll}
              </button>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1.5 rounded-full border border-hair px-3.5 py-1.5 text-[12.5px] font-medium text-fg2 hover:border-fg/30 hover:text-fg transition-all"
              >
                <RotateCcw size={13} strokeWidth={1.9} /> {c.reset}
              </button>
            </div>

            {/* Grouped module grid */}
            {GROUPS.map((g) => (
              <div key={g.key} className="mt-9">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-fg">{tr(g.label, lang)}</h3>
                  <span className="flex-1 hair-h" />
                </div>
                <motion.div
                  variants={staggerParent(0.05, 0)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {MODULES.filter((m) => m.group === g.key).map((m) => (
                    <ToggleCard
                      key={m.id}
                      active={core.has(m.id)}
                      onToggle={() => toggleCore(m.id)}
                      icon={m.icon}
                      no={m.no}
                      name={tr(m.name, lang)}
                      desc={tr(m.desc, lang)}
                      priceLabel={`${money(m.price)}${pm}`}
                      strikeLabel={`${money(m.market)}`}
                    />
                  ))}
                </motion.div>
              </div>
            ))}

            {/* Add-ons */}
            <div className="mt-10">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-fg">{c.addonsLabel}</h3>
                <span className="text-[12px] text-sub">{c.addonsHint}</span>
              </div>
              <motion.div
                variants={staggerParent(0.05, 0)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {ADDONS.map((a) => (
                  <ToggleCard
                    key={a.id}
                    active={addons.has(a.id)}
                    onToggle={() => toggleAddon(a.id)}
                    icon={a.icon}
                    name={tr(a.name, lang)}
                    desc={tr(a.desc, lang)}
                    priceLabel={
                      a.price === null
                        ? c.onQuote
                        : `${a.from ? c.from + ' ' : ''}${money(a.price)}${pm}`
                    }
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* RIGHT — sticky summary */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="card overflow-hidden shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
                {/* Mode toggle */}
                <div className="p-1.5 border-b border-hair bg-surface/60">
                  <div className="grid grid-cols-2 gap-1 rounded-full bg-surface p-1">
                    {(['custom', 'complete'] as SummaryMode[]).map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setMode(m)}
                        aria-pressed={mode === m}
                        className={`relative rounded-full py-2 text-[12.5px] font-semibold tracking-tight transition-colors ${
                          mode === m ? 'text-bg' : 'text-fg2 hover:text-fg'
                        }`}
                      >
                        {mode === m && (
                          <motion.span
                            layoutId="summary-mode"
                            className="absolute inset-0 rounded-full bg-fg"
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          />
                        )}
                        <span className="relative z-10">{m === 'custom' ? c.tabCustom : c.tabComplete}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  {mode === 'complete' ? (
                    /* Complete system summary */
                    <div>
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 text-accent px-3 py-1 text-[11px] font-semibold tracking-tight">
                        <Star size={11} strokeWidth={2.2} fill="currentColor" /> {c.allIncluded}
                      </div>
                      <div className="mt-4 flex items-baseline gap-1.5">
                        <span className="font-display font-semibold text-[42px] leading-none tracking-tight tabular-nums">
                          {money(COMPLETE.price)}
                        </span>
                        <span className="text-[15px] text-sub font-medium">{pm}</span>
                      </div>
                      <p className="mt-1.5 text-[12.5px] text-sub">Complete Business System</p>

                      <div className="mt-5 grid grid-cols-2 gap-2">
                        {COMPLETE_FEATURES.map((f) => (
                          <div key={f.en} className="flex items-center gap-1.5 text-[12px] text-fg2">
                            <Check size={12} strokeWidth={2.6} className="text-accent shrink-0" />
                            <span className="truncate">{tr(f, lang)}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-2">
                        <div className="rounded-2xl bg-surface p-3">
                          <div className="font-display font-semibold text-[16px] tabular-nums">≈ {money(COMPLETE.saveVsModules)}</div>
                          <div className="text-[10.5px] text-sub mt-0.5">{c.vsSeparate}</div>
                        </div>
                        <div className="rounded-2xl bg-surface p-3">
                          <div className="font-display font-semibold text-[16px] tabular-nums">≈ {money(COMPLETE.saveVsMarket)}</div>
                          <div className="text-[10.5px] text-sub mt-0.5">{c.vsMarket}</div>
                        </div>
                      </div>
                    </div>
                  ) : totals.coreCount === 0 && addonIds.length === 0 ? (
                    /* Empty state */
                    <div className="py-6 text-center">
                      <div className="mx-auto w-12 h-12 rounded-2xl bg-surface border border-hair flex items-center justify-center text-sub">
                        <Sparkles size={20} strokeWidth={1.6} />
                      </div>
                      <p className="mt-4 font-display font-semibold text-[15px]">{c.emptyTitle}</p>
                      <p className="mt-1.5 text-[12.5px] text-sub leading-[1.5] max-w-[15rem] mx-auto">{c.emptyBody}</p>
                    </div>
                  ) : (
                    /* Custom summary */
                    <div>
                      {/* Itemised list */}
                      <div
                        role="group"
                        aria-label={c.recap}
                        tabIndex={0}
                        className="space-y-2 max-h-[240px] overflow-y-auto pr-1 -mr-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                      >
                        {coreIds.map((id) => {
                          const m = moduleById(id)!
                          return (
                            <div key={id} className="flex items-center justify-between gap-3 text-[12.5px]">
                              <span className="text-fg2 truncate">{tr(m.name, lang)}</span>
                              <span className="tabular-nums text-fg font-medium shrink-0">{money(m.price)}</span>
                            </div>
                          )
                        })}
                        {addonIds.map((id) => {
                          const a = addonById(id)!
                          return (
                            <div key={id} className="flex items-center justify-between gap-3 text-[12.5px]">
                              <span className="text-fg2 truncate">{tr(a.name, lang)}</span>
                              <span className="tabular-nums text-fg font-medium shrink-0">
                                {a.price === null ? c.onQuote : money(a.price)}
                              </span>
                            </div>
                          )
                        })}
                      </div>

                      <div className="hair-h my-4" />

                      {/* Totals */}
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-[12.5px] text-sub">{c.yourPrice}</span>
                        {totals.market > 0 && (
                          <span className="text-[12.5px] text-sub line-through tabular-nums">{money(totals.market)}{pm}</span>
                        )}
                      </div>
                      <div className="mt-1 flex items-baseline gap-1.5">
                        <span className="font-display font-semibold text-[38px] leading-none tracking-tight tabular-nums">
                          {money(totals.customy)}
                        </span>
                        <span className="text-[15px] text-sub font-medium">{pm}</span>
                      </div>
                      {totals.hasQuoteItem && (
                        <p className="mt-1 text-[11px] text-sub">+ {c.onQuote.toLowerCase()}</p>
                      )}

                      {totals.saveVsMarket > 0 && (
                        <div className="mt-4 flex items-center justify-between rounded-2xl bg-accent/[0.06] border border-accent/15 px-3.5 py-3">
                          <div>
                            <div className="text-[11px] text-sub">{c.save}</div>
                            <div className="font-display font-semibold text-[18px] text-accent tabular-nums leading-tight">
                              {money(totals.saveVsMarket)}{pm}
                            </div>
                          </div>
                          <div className="text-right text-[10.5px] text-sub leading-tight">
                            ≈ {money(totals.saveVsMarket * 12)}<br />{c.perYear}
                          </div>
                        </div>
                      )}

                      {showBundleNudge && (
                        <button
                          type="button"
                          onClick={() => setMode('complete')}
                          className="mt-3 w-full text-left rounded-2xl bg-fg text-bg px-3.5 py-3 group"
                        >
                          <div className="flex items-start gap-2">
                            <Info size={14} strokeWidth={2} className="mt-0.5 shrink-0 opacity-80" />
                            <div className="text-[11.5px] leading-[1.45]">
                              {c.bundleNudge(money(bundleGain) + pm)}
                              <span className="mt-1 inline-flex items-center gap-1 font-semibold group-hover:gap-1.5 transition-all">
                                {c.switchToComplete} <ArrowRight size={12} />
                              </span>
                            </div>
                          </div>
                        </button>
                      )}
                    </div>
                  )}

                  {/* CTAs */}
                  <div className="mt-5 space-y-2.5">
                    <button
                      type="button"
                      onClick={sendWhatsApp}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0E7C3A] text-white px-5 py-3 text-[14px] font-semibold tracking-tight hover:brightness-105 transition-all active:scale-[0.99]"
                    >
                      <WhatsAppGlyph size={17} /> {c.quoteWa}
                    </button>
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => openCalendly()}
                        onPointerEnter={preloadCalendly}
                        onFocus={preloadCalendly}
                        className="inline-flex items-center justify-center gap-1.5 rounded-full border border-hair2 px-4 py-2.5 text-[13px] font-medium text-fg hover:bg-fg/5 transition-colors"
                      >
                        <CalendarClock size={14} strokeWidth={1.8} /> {c.bookCall}
                      </button>
                      <button
                        type="button"
                        onClick={doCopy}
                        className="inline-flex items-center justify-center gap-1.5 rounded-full border border-hair2 px-4 py-2.5 text-[13px] font-medium text-fg hover:bg-fg/5 transition-colors"
                      >
                        {copied ? <Check size={14} strokeWidth={2.4} className="text-accent" /> : <Copy size={14} strokeWidth={1.8} />}
                        {copied ? c.copied : c.copy}
                      </button>
                    </div>
                  </div>

                  {/* Lead capture */}
                  <div className="mt-5 pt-5 border-t border-hair">
                    {/* Persistent live region — announces send / copy status to assistive tech */}
                    <p aria-live="polite" role="status" className="sr-only">{liveMsg}</p>
                    {send === 'sent' ? (
                      <p ref={sentRef} tabIndex={-1} className="text-[12.5px] text-accent font-medium flex items-center gap-1.5 focus:outline-none">
                        <Check size={14} strokeWidth={2.4} aria-hidden /> {c.leadSent}
                      </p>
                    ) : (
                      <form onSubmit={submitLead}>
                        <label htmlFor="offer-lead-email" className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sub">{c.leadPrompt}</label>
                        {/* Honeypot — hidden from humans */}
                        <input
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                          aria-hidden
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                          className="hidden"
                        />
                        <div className="mt-2 flex gap-2">
                          <input
                            id="offer-lead-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={c.emailPh}
                            className="flex-1 min-w-0 rounded-full border border-hair bg-surface px-4 py-2.5 text-[13px] text-fg placeholder:text-sub focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus:border-fg/40 transition-colors"
                          />
                          <button
                            type="submit"
                            disabled={send === 'sending'}
                            className="shrink-0 inline-flex items-center justify-center rounded-full bg-fg text-bg px-4 py-2.5 text-[13px] font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
                          >
                            {send === 'sending' ? c.leadSending : c.leadSend}
                          </button>
                        </div>
                        {send === 'error' && <p role="alert" className="mt-2 text-[11.5px] text-rose dark:text-[#E06A7C]">{c.leadError}</p>}
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky action bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-hair bg-bg/90 backdrop-blur-xl">
        <div className="container-xl py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[10.5px] text-sub uppercase tracking-[0.14em]">{c.mobileTotal}</div>
            <div className="font-display font-semibold text-[19px] tracking-tight tabular-nums leading-none">
              {money(activePrice)}<span className="text-[12px] text-sub font-medium">{pm}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={sendWhatsApp}
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#0E7C3A] text-white px-5 py-2.5 text-[13.5px] font-semibold"
          >
            <WhatsAppGlyph size={16} /> {c.quoteWa}
          </button>
        </div>
      </div>
    </section>
  )
}
