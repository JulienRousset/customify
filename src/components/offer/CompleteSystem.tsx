import { motion } from 'framer-motion'
import { Check, Star, ArrowRight } from 'lucide-react'
import { useLang } from '../../lang'
import { openCalendly, preloadCalendly } from '../../lib/calendly'
import { staggerItem, staggerParent, viewportOnce } from '../fx/motion'
import { favicon } from '../../lib/utils'
import {
  COMPLETE,
  COMPLETE_FEATURES,
  ARCHITECTURE,
  INTEGRATIONS,
  SYSTEM_VALUES,
  formatEUR,
  perMonth,
  tr,
  type Lang
} from './offerData'

const COPY: Record<Lang, {
  eyebrow: string
  title: string
  titleAccent: string
  sub: string
  recommended: string
  perMonthLabel: string
  vsModules: string
  vsMarket: string
  oneStrategy: string
  oneTeam: string
  onePartner: string
  cta: string
  archEyebrow: string
  archTitle: string
  archTitleAccent: string
  integrations: string
  integrationsSub: string
}> = {
  fr: {
    eyebrow: 'Solution recommandée',
    title: 'Un seul système.',
    titleAccent: 'Une seule équipe. Un seul partenaire.',
    sub: 'Certaines entreprises commencent par un module. D’autres choisissent directement la solution complète pour une stratégie globale, une meilleure cohérence et un coût optimisé.',
    recommended: 'Solution recommandée',
    perMonthLabel: '/mois',
    vsModules: 'Économie vs modules séparés',
    vsMarket: 'Économie vs prix marché',
    oneStrategy: 'Une seule stratégie',
    oneTeam: 'Une seule équipe',
    onePartner: 'Un seul partenaire',
    cta: 'Parler du système complet',
    archEyebrow: 'Automatisation & intelligence',
    archTitle: 'Un cerveau IA',
    archTitleAccent: 'qui lit vos vraies données.',
    integrations: 'Intégrations réelles',
    integrationsSub: 'Connectées via vraies clés API, avec test de validité.'
  },
  en: {
    eyebrow: 'Recommended solution',
    title: 'One system.',
    titleAccent: 'One team. One partner.',
    sub: 'Some businesses start with a single module. Others go straight to the complete solution for a global strategy, better coherence and an optimised cost.',
    recommended: 'Recommended solution',
    perMonthLabel: '/mo',
    vsModules: 'Saving vs separate modules',
    vsMarket: 'Saving vs market price',
    oneStrategy: 'One strategy',
    oneTeam: 'One team',
    onePartner: 'One partner',
    cta: 'Talk about the complete system',
    archEyebrow: 'Automation & intelligence',
    archTitle: 'An AI brain',
    archTitleAccent: 'that reads your real data.',
    integrations: 'Real integrations',
    integrationsSub: 'Connected via real API keys, with validity tests.'
  }
}

export default function CompleteSystem() {
  const { lang } = useLang()
  const c = COPY[lang]
  const money = (n: number) => formatEUR(n, lang)

  return (
    <section id="complete-system" className="relative py-[4.8rem] md:py-[6.4rem] border-t border-hair overflow-hidden scroll-mt-24">
      {/* Ambient halo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[8%] right-[6%] w-[560px] h-[560px] rounded-full blur-[150px] opacity-[0.18] dark:opacity-30"
          style={{ background: 'radial-gradient(circle, rgb(var(--color-accent)), transparent 70%)' }}
        />
      </div>

      <div className="relative container-xl">
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

        {/* Recommended card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-12 card overflow-hidden shadow-[0_40px_100px_-45px_rgba(0,0,0,0.4)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left — price + savings */}
            <div className="lg:col-span-5 p-7 md:p-9 border-b lg:border-b-0 lg:border-r border-hair bg-surface/40">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/[0.06] text-accent px-3 py-1.5 text-[11.5px] font-semibold tracking-tight">
                <Star size={12} strokeWidth={2.2} fill="currentColor" /> {c.recommended}
              </div>
              <h3 className="mt-5 font-display font-semibold text-[24px] md:text-[27px] tracking-tight leading-tight">
                Complete Business System
              </h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display font-semibold text-[54px] md:text-[64px] leading-none tracking-tighter tabular-nums">
                  {money(COMPLETE.price)}
                </span>
                <span className="text-[17px] text-sub font-medium">{c.perMonthLabel}</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-surface2 border border-hair p-4">
                  <div className="font-display font-semibold text-[20px] tabular-nums">≈ {money(COMPLETE.saveVsModules)}</div>
                  <div className="text-[11px] text-sub mt-1 leading-tight">{c.vsModules}</div>
                </div>
                <div className="rounded-2xl bg-surface2 border border-hair p-4">
                  <div className="font-display font-semibold text-[20px] tabular-nums">≈ {money(COMPLETE.saveVsMarket)}</div>
                  <div className="text-[11px] text-sub mt-1 leading-tight">{c.vsMarket}</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1.5 text-[12.5px] text-fg2">
                <span className="inline-flex items-center gap-1.5"><Check size={13} className="text-accent" strokeWidth={2.6} />{c.oneStrategy}</span>
                <span className="inline-flex items-center gap-1.5"><Check size={13} className="text-accent" strokeWidth={2.6} />{c.oneTeam}</span>
                <span className="inline-flex items-center gap-1.5"><Check size={13} className="text-accent" strokeWidth={2.6} />{c.onePartner}</span>
              </div>

              <button
                type="button"
                onClick={() => openCalendly()}
                onPointerEnter={preloadCalendly}
                onFocus={preloadCalendly}
                className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-fg text-bg px-6 py-3.5 text-[14.5px] font-semibold tracking-tight hover:opacity-90 transition-opacity group"
              >
                {c.cta}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Right — included features */}
            <div className="lg:col-span-7 p-7 md:p-9">
              <motion.div
                variants={staggerParent(0.04, 0)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5"
              >
                {COMPLETE_FEATURES.map((f) => (
                  <motion.div key={f.en} variants={staggerItem} className="flex items-center gap-2.5">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-accent/12 flex items-center justify-center">
                      <Check size={12} strokeWidth={2.8} className="text-accent" aria-hidden />
                    </span>
                    <span className="text-[14px] text-fg font-medium">{tr(f, lang)}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Architecture */}
        <div className="mt-16 md:mt-20">
          <motion.div
            variants={staggerParent(0.08, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-2xl"
          >
            <motion.p variants={staggerItem} className="eyebrow">{c.archEyebrow}</motion.p>
            <motion.h3 variants={staggerItem} className="display-3 text-balance">
              {c.archTitle} <span className="text-sub">{c.archTitleAccent}</span>
            </motion.h3>
          </motion.div>

          <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-5">
            {ARCHITECTURE.map((layer) => (
              <motion.div
                key={layer.no}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                className="card p-6"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-7 h-7 rounded-lg bg-fg text-bg flex items-center justify-center text-[13px] font-semibold tabular-nums">
                    {layer.no}
                  </span>
                  <h4 className="font-display font-semibold text-[15px] tracking-tight leading-tight">{tr(layer.title, lang)}</h4>
                </div>
                <div className="space-y-4">
                  {layer.items.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.letter} className="flex gap-3">
                        <div className="shrink-0 w-9 h-9 rounded-xl bg-surface border border-hair flex items-center justify-center text-fg2">
                          <Icon size={16} strokeWidth={1.7} aria-hidden />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[13.5px] font-semibold tracking-tight">{tr(item.name, lang)}</div>
                          <p className="mt-0.5 text-[11.5px] text-sub leading-[1.45] text-pretty">{tr(item.desc, lang)}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="mt-16 md:mt-20">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-6">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-fg">{c.integrations}</h3>
            <span className="text-[12.5px] text-sub">{c.integrationsSub}</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {INTEGRATIONS.map((it) => {
              const Icon = it.icon
              return (
                <div
                  key={it.name}
                  className="inline-flex items-center gap-2.5 rounded-2xl bg-surface2 border border-hair px-4 py-2.5"
                >
                  {it.domain ? (
                    <img src={favicon(it.domain)} alt="" aria-hidden loading="lazy" className="w-5 h-5 object-contain" />
                  ) : Icon ? (
                    <Icon size={16} strokeWidth={1.8} className="text-fg2" />
                  ) : null}
                  <span className="text-[13.5px] font-medium text-fg whitespace-nowrap">{it.name}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* System value props */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {SYSTEM_VALUES.map((v) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.title.en}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
                className="card-soft p-5"
              >
                <div className="w-10 h-10 rounded-2xl bg-surface2 border border-hair flex items-center justify-center text-fg2">
                  <Icon size={18} strokeWidth={1.7} aria-hidden />
                </div>
                <h4 className="mt-4 font-display font-semibold text-[14.5px] tracking-tight leading-tight">{tr(v.title, lang)}</h4>
                <p className="mt-1.5 text-[12px] text-sub leading-[1.5] text-pretty">{tr(v.desc, lang)}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
