import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, CalendarClock } from 'lucide-react'
import { useLang } from '../lang'
import { WhatsAppGlyph } from '../components/icons'
import { openCalendly, preloadCalendly } from '../lib/calendly'
import { waLink } from '../lib/whatsapp'
import { useRouteHead } from '../lib/head'
import { staggerItem, staggerParent, viewportOnce } from '../components/fx/motion'
import PackageBuilder from '../components/offer/PackageBuilder'
import CompleteSystem from '../components/offer/CompleteSystem'
import VerticalFooter from '../components/vertical/VerticalFooter'
import { OBJECTIVES, PILLARS, MODULES, COMPLETE, formatEUR, perMonth, tr, type Lang } from '../components/offer/offerData'

const COPY: Record<Lang, {
  metaTitle: string
  metaDesc: string
  eyebrow: string
  title: string
  titleAccent: string
  sub: string
  ctaBuild: string
  ctaComplete: string
  statModules: string
  statFrom: string
  statComplete: string
  statSave: string
  objectivesLabel: string
  pillarsLabel: string
  finalTitle: string
  finalAccent: string
  finalSub: string
  finalWa: string
  finalCall: string
  waHello: string
}> = {
  fr: {
    metaTitle: 'Nos offres · Customy · Choisissez la solution adaptée à votre entreprise',
    metaDesc: `Composez votre formule Customy module par module ou choisissez le Complete Business System à ${formatEUR(COMPLETE.price, 'fr')}${perMonth('fr')}. Prix en direct, économies claires, devis en un clic.`,
    eyebrow: 'Nos offres',
    title: 'Choisissez la solution',
    titleAccent: 'adaptée à votre entreprise.',
    sub: 'Toutes nos solutions peuvent être déployées individuellement ou réunies dans un écosystème complet. Composez la vôtre ci-dessous, les prix se calculent en temps réel.',
    ctaBuild: 'Composer ma formule',
    ctaComplete: 'Voir le système complet',
    statModules: 'modules à la carte',
    statFrom: 'à partir de',
    statComplete: 'système complet',
    statSave: 'jusqu’à économisés',
    objectivesLabel: 'Pour quels objectifs',
    pillarsLabel: 'Une plateforme unique pour votre croissance',
    finalTitle: 'Prêt à construire',
    finalAccent: 'votre écosystème ?',
    finalSub: 'Envoyez-nous votre formule ou réservez un appel. On revient vers vous sous 24 h avec un devis clair, sans engagement.',
    finalWa: 'Écrire sur WhatsApp',
    finalCall: 'Réserver un appel',
    waHello: 'Bonjour Customy 👋 J’aimerais discuter des offres Customy.'
  },
  en: {
    metaTitle: 'Our offers · Customy · Choose the solution that fits your business',
    metaDesc: `Build your Customy package module by module, or pick the Complete Business System at ${formatEUR(COMPLETE.price, 'en')}${perMonth('en')}. Live pricing, clear savings, one-click quote.`,
    eyebrow: 'Our offers',
    title: 'Choose the solution',
    titleAccent: 'that fits your business.',
    sub: 'Every solution can be deployed on its own or combined into one complete ecosystem. Build yours below, prices update in real time.',
    ctaBuild: 'Build my package',
    ctaComplete: 'See the complete system',
    statModules: 'à-la-carte modules',
    statFrom: 'from',
    statComplete: 'complete system',
    statSave: 'up to saved',
    objectivesLabel: 'For which goals',
    pillarsLabel: 'One platform for your growth',
    finalTitle: 'Ready to build',
    finalAccent: 'your ecosystem?',
    finalSub: 'Send us your package or book a call. We get back to you within 24h with a clear quote, no commitment.',
    finalWa: 'Message on WhatsApp',
    finalCall: 'Book a call',
    waHello: 'Hi Customy 👋 I’d like to talk about the Customy offers.'
  }
}

function OfferHero() {
  const { lang } = useLang()
  const c = COPY[lang]
  const money = (n: number) => formatEUR(n, lang)
  const minPrice = Math.min(...MODULES.map((m) => m.price))

  const stats = [
    { k: `${MODULES.length}`, v: c.statModules },
    { k: `${money(minPrice)}${perMonth(lang)}`, v: c.statFrom, muted: true },
    { k: `${money(COMPLETE.price)}${perMonth(lang)}`, v: c.statComplete },
    { k: `≈ ${money(COMPLETE.saveVsMarket)}`, v: c.statSave, accent: true }
  ]

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-4 md:pb-8">
      {/* Ambient halos */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-[10%] left-[12%] w-[560px] h-[560px] rounded-full blur-[150px] opacity-20 dark:opacity-30"
          style={{ background: 'radial-gradient(circle, rgb(var(--color-accent)), transparent 70%)' }}
        />
        <div
          className="absolute top-[20%] right-[8%] w-[480px] h-[480px] rounded-full blur-[150px] opacity-[0.12] dark:opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(110,75,165,0.5), transparent 70%)' }}
        />
      </div>

      <div className="relative container-xl">
        <motion.div
          variants={staggerParent(0.09, 0)}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p variants={staggerItem} className="eyebrow">
            <span className="num-mono text-[11.5px] uppercase tracking-[0.18em] text-sub mr-2 align-middle">03</span>
            {c.eyebrow}
          </motion.p>
          <motion.h1 variants={staggerItem} className="display-1 text-balance">
            {c.title} <span className="text-sub">{c.titleAccent}</span>
          </motion.h1>
          <motion.p variants={staggerItem} className="mt-6 body-lg max-w-2xl text-pretty">{c.sub}</motion.p>

          <motion.div variants={staggerItem} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#builder"
              className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-6 py-3 text-[14.5px] font-semibold tracking-tight hover:opacity-90 transition-opacity group"
            >
              {c.ctaBuild}
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#complete-system"
              className="inline-flex items-center gap-2 rounded-full border border-hair2 px-6 py-3 text-[14.5px] font-medium text-fg hover:bg-fg/5 transition-colors"
            >
              {c.ctaComplete}
              <ArrowRight size={15} />
            </a>
          </motion.div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={staggerParent(0.06, 0.2)}
          initial="hidden"
          animate="visible"
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px rounded-[22px] overflow-hidden border border-hair bg-hair"
        >
          {stats.map((s) => (
            <motion.div key={s.v} variants={staggerItem} className="bg-bg p-5 md:p-6">
              <div
                className={`font-display font-semibold text-[22px] md:text-[26px] tracking-tight tabular-nums leading-none ${
                  s.accent ? 'text-accent' : ''
                }`}
              >
                {s.k}
              </div>
              <div className="mt-2 text-[11.5px] text-sub leading-tight">{s.v}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Objectives */}
        <div className="mt-12">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sub mb-4">{c.objectivesLabel}</div>
          <div className="flex flex-wrap gap-2.5">
            {OBJECTIVES.map((o) => {
              const Icon = o.icon
              return (
                <span
                  key={o.label.en}
                  className="inline-flex items-center gap-2 rounded-full bg-surface2 border border-hair px-4 py-2 text-[13px] font-medium text-fg2"
                >
                  <Icon size={14} strokeWidth={1.8} className="text-fg2" aria-hidden />
                  {tr(o.label, lang)}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  const { lang } = useLang()
  const c = COPY[lang]

  return (
    <section className="relative py-[4.8rem] md:py-[6.4rem] border-t border-hair">
      <div className="container-xl">
        {/* Pillars */}
        <div className="mb-16 md:mb-20">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sub mb-6">{c.pillarsLabel}</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PILLARS.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.label.en} className="flex items-center gap-3 rounded-2xl bg-surface2 border border-hair p-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-surface border border-hair flex items-center justify-center text-fg2">
                    <Icon size={17} strokeWidth={1.7} aria-hidden />
                  </div>
                  <span className="text-[13.5px] font-medium leading-tight">{tr(p.label, lang)}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-hair bg-surface/50 p-8 md:p-14 text-center">
          <div
            aria-hidden
            className="absolute -inset-x-20 -top-24 h-64 opacity-40 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 0%, rgb(var(--color-accent) / 0.28), transparent 60%)' }}
          />
          <div className="relative">
            <h2 className="display-2 text-balance">
              {c.finalTitle} <span className="text-sub">{c.finalAccent}</span>
            </h2>
            <p className="mt-5 body-md max-w-xl mx-auto text-pretty">{c.finalSub}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={waLink(c.waHello)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0E7C3A] text-white px-6 py-3.5 text-[14.5px] font-semibold tracking-tight hover:brightness-110 transition-all"
              >
                <WhatsAppGlyph size={18} /> {c.finalWa}
              </a>
              <button
                type="button"
                onClick={() => openCalendly()}
                onPointerEnter={preloadCalendly}
                onFocus={preloadCalendly}
                className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-6 py-3.5 text-[14.5px] font-semibold tracking-tight hover:opacity-90 transition-opacity"
              >
                <CalendarClock size={16} strokeWidth={1.8} /> {c.finalCall}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function OfferPage() {
  const { lang } = useLang()
  useRouteHead({ title: COPY[lang].metaTitle, description: COPY[lang].metaDesc, path: '/offer' })

  return (
    <>
      <OfferHero />
      <PackageBuilder />
      <CompleteSystem />
      <FinalCTA />
      <VerticalFooter />
      {/* Clearance so the mobile sticky action bar never covers footer content. */}
      <div aria-hidden className="h-[72px] lg:hidden" />
    </>
  )
}
