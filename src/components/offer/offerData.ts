// Single source of truth for the /offer page.
// Data + copy pulled straight from the Customy offer deck (Nos Offres v3).
// Bilingual (EN/FR) so the page respects the site-wide language toggle.

import type { LucideIcon } from 'lucide-react'
import {
  Monitor,
  Search,
  Share2,
  Megaphone,
  Table2,
  LayoutDashboard,
  Radar,
  Brain,
  Users,
  Workflow,
  UtensilsCrossed,
  PhoneCall,
  Headphones,
  Code2,
  TrendingUp,
  PenLine,
  Bot,
  Plug,
  Compass,
  Database,
  Network,
  Zap,
  ShoppingCart,
  BadgeCheck,
  UserCheck,
  PieChart,
  Rocket,
  Settings,
  BarChart3,
  Sparkles
} from 'lucide-react'

export type Lang = 'en' | 'fr'
export type Bi = { en: string; fr: string }

/* ---------------------------------------------------------------------- */
/* Core modules — the 10 individual, à-la-carte modules from the deck.     */
/* Prices are €/month. `market` is the estimated market price for the same */
/* deliverable (used for the "you save" comparison).                       */
/* ---------------------------------------------------------------------- */

export type GroupKey = 'acquisition' | 'tools' | 'intelligence'

export interface Module {
  id: string
  no: string
  icon: LucideIcon
  group: GroupKey
  name: Bi
  desc: Bi
  price: number
  market: number
}

export const GROUPS: { key: GroupKey; label: Bi }[] = [
  { key: 'acquisition', label: { en: 'Acquisition & visibility', fr: 'Acquisition & visibilité' } },
  { key: 'tools', label: { en: 'Tools & dashboards', fr: 'Outils & dashboards' } },
  { key: 'intelligence', label: { en: 'Intelligence & automation', fr: 'Intelligence & automatisation' } }
]

export const MODULES: Module[] = [
  {
    id: 'website',
    no: '01',
    icon: Monitor,
    group: 'acquisition',
    name: { en: 'Website creation / redesign', fr: 'Création / refonte de site web' },
    desc: { en: 'A fast, clear, conversion-driven site.', fr: 'Site rapide, clair et orienté conversion.' },
    price: 790,
    market: 1500
  },
  {
    id: 'seo',
    no: '02',
    icon: Search,
    group: 'acquisition',
    name: { en: 'SEO / GEO', fr: 'SEO / GEO' },
    desc: { en: 'Optimised for Google and AI engines.', fr: 'Optimisation pour Google et les moteurs IA.' },
    price: 690,
    market: 1200
  },
  {
    id: 'social',
    no: '03',
    icon: Share2,
    group: 'acquisition',
    name: { en: 'Social media management', fr: 'Gestion des réseaux sociaux' },
    desc: { en: 'Strategy, content and Instagram / TikTok management.', fr: 'Stratégie, contenu et gestion Instagram / TikTok.' },
    price: 990,
    market: 1600
  },
  {
    id: 'ads',
    no: '04',
    icon: Megaphone,
    group: 'acquisition',
    name: { en: 'Google Ads / Meta Ads', fr: 'Google Ads / Meta Ads' },
    desc: { en: 'Qualified lead acquisition and campaign management.', fr: 'Acquisition de leads qualifiés et pilotage des campagnes.' },
    price: 1090,
    market: 1900
  },
  {
    id: 'excel',
    no: '05',
    icon: Table2,
    group: 'tools',
    name: { en: 'Excel to Dashboard system', fr: 'System Excel to Dashboard' },
    desc: { en: 'Automation and visualisation of your Excel data.', fr: 'Automatisation et visualisation de vos données Excel.' },
    price: 490,
    market: 900
  },
  {
    id: 'dashboard',
    no: '06',
    icon: LayoutDashboard,
    group: 'tools',
    name: { en: 'Dashboard for your business', fr: 'Dashboard pour votre business' },
    desc: { en: 'Clear dashboards and key indicators.', fr: 'Tableaux de bord clairs et indicateurs clés.' },
    price: 1190,
    market: 2200
  },
  {
    id: 'scanmap',
    no: '07',
    icon: Radar,
    group: 'tools',
    name: { en: 'ScanMap', fr: 'ScanMap' },
    desc: { en: 'Lead research, audit and management at scale.', fr: 'Recherche, audit et gestion de leads à grande échelle.' },
    price: 790,
    market: 1500
  },
  {
    id: 'chatai',
    no: '08',
    icon: Brain,
    group: 'intelligence',
    name: { en: 'AI Chat & AI Brain', fr: 'Chat IA & AI Brain' },
    desc: { en: 'AI assistant and intelligent knowledge base.', fr: 'Assistant IA et base de connaissances intelligente.' },
    price: 990,
    market: 1800
  },
  {
    id: 'crm',
    no: '09',
    icon: Users,
    group: 'intelligence',
    name: { en: 'CRM & Inbox', fr: 'CRM & Inbox' },
    desc: { en: 'Centralised contacts and conversation management.', fr: 'Centralisation des contacts et gestion des conversations.' },
    price: 990,
    market: 1700
  },
  {
    id: 'automation',
    no: '10',
    icon: Workflow,
    group: 'intelligence',
    name: { en: 'Automation & Reporting', fr: 'Automatisation & Reporting' },
    desc: { en: 'Smart workflows and automated reports.', fr: 'Workflows intelligents et rapports automatisés.' },
    price: 1290,
    market: 2300
  }
]

/* ---------------------------------------------------------------------- */
/* Add-ons — the "modules complémentaires" strip.                          */
/* `price: null` means "on quote" (Développements spécifiques / sur devis).*/
/* `from: true` means the price is a starting point (À partir de).         */
/* ---------------------------------------------------------------------- */

export interface AddOn {
  id: string
  icon: LucideIcon
  name: Bi
  desc: Bi
  price: number | null
  from?: boolean
}

export const ADDONS: AddOn[] = [
  {
    id: 'yestau',
    icon: UtensilsCrossed,
    name: { en: 'Yestau — Restaurant dashboard', fr: 'Yestau — Dashboard restaurant' },
    desc: { en: 'Acquisition, retention and message tracking for restaurants.', fr: 'Acquisition, rétention, contenu et suivi des messages pour les restaurants.' },
    price: 890
  },
  {
    id: 'phone',
    icon: PhoneCall,
    name: { en: 'AI phone agent', fr: 'Agent IA téléphonique' },
    desc: { en: 'An AI voice agent that answers and qualifies calls.', fr: 'Un agent vocal IA qui répond et qualifie les appels.' },
    price: 590,
    from: true
  },
  {
    id: 'dora',
    icon: Headphones,
    name: { en: 'Dora system / SAV automation', fr: 'Système Dora / SAV automation' },
    desc: { en: 'Automated customer support and after-sales.', fr: 'Support et service après-vente automatisés.' },
    price: 990
  },
  {
    id: 'custom',
    icon: Code2,
    name: { en: 'Custom development', fr: 'Développements spécifiques' },
    desc: { en: 'Bespoke features built for your exact workflow.', fr: 'Fonctionnalités sur mesure pour votre workflow exact.' },
    price: null
  }
]

/* ---------------------------------------------------------------------- */
/* Complete Business System — the recommended, all-in bundle.              */
/* ---------------------------------------------------------------------- */

export const COMPLETE = {
  price: 4900,
  totalModules: 9300, // ≈ value of all modules bought separately
  marketValue: 16600, // ≈ estimated market value
  saveVsModules: 4400, // 9300 - 4900
  saveVsMarket: 11700 // 16600 - 4900
}

export const COMPLETE_FEATURES: Bi[] = [
  { en: 'AI Chat', fr: 'Chat IA' },
  { en: 'Overview & Analytics', fr: 'Overview & Analytics' },
  { en: 'Brand Brain', fr: 'Brand Brain' },
  { en: 'Website', fr: 'Site web' },
  { en: 'SEO / GEO AI', fr: 'SEO / GEO IA' },
  { en: 'Paid Growth', fr: 'Paid Growth' },
  { en: 'CRM & Inbox', fr: 'CRM & Inbox' },
  { en: 'Content Studio', fr: 'Content Studio' },
  { en: 'AI Agents', fr: 'Agents IA' },
  { en: 'Support Control Center', fr: 'SAV Control Center' },
  { en: 'Integrations', fr: 'Intégrations' },
  { en: 'Strategic guidance', fr: 'Accompagnement stratégique' }
]

/* Architecture — the 3 layers of the Complete Business System (deck p.2). */

export interface ArchItem {
  letter: string
  icon: LucideIcon
  name: Bi
  desc: Bi
}

export interface ArchLayer {
  no: string
  title: Bi
  items: ArchItem[]
}

export const ARCHITECTURE: ArchLayer[] = [
  {
    no: '1',
    title: { en: 'Real-data pages', fr: 'Pages données réelles' },
    items: [
      {
        letter: 'A',
        icon: TrendingUp,
        name: { en: 'Overview', fr: 'Overview' },
        desc: { en: 'Home dashboard with KPIs and revenue charts fed by real Stripe / Shopify data.', fr: 'Tableau de bord d’accueil avec KPIs et graphiques revenus alimentés par les vraies données Stripe / Shopify.' }
      },
      {
        letter: 'B',
        icon: PieChart,
        name: { en: 'Analytics', fr: 'Analytics' },
        desc: { en: 'Real revenue, MRR, ARR and average basket auto-synced from Stripe / Shopify.', fr: 'Revenus réels, MRR, ARR et panier moyen auto-actualisés depuis Stripe / Shopify.' }
      },
      {
        letter: 'C',
        icon: Megaphone,
        name: { en: 'Paid Growth', fr: 'Paid Growth' },
        desc: { en: 'ROAS, impressions, clicks and campaign management via Meta Ads.', fr: 'ROAS, impressions, clics et gestion de campagnes via Meta Ads.' }
      },
      {
        letter: 'D',
        icon: Search,
        name: { en: 'SEO / GEO AI', fr: 'SEO / GEO IA' },
        desc: { en: 'Auto-checked on-page checklist, site audit and visibility in AI answers.', fr: 'Checklist on-page auto-vérifiée, audit du site et visibilité dans les réponses IA.' }
      }
    ]
  },
  {
    no: '2',
    title: { en: 'Knowledge read by the brain', fr: 'Connaissance lue par le cerveau' },
    items: [
      {
        letter: 'E',
        icon: Brain,
        name: { en: 'Brand Brain', fr: 'Brand Brain' },
        desc: { en: 'Tone, positioning, ICP, founding message and brand identity read by the brain.', fr: 'Ton, positionnement, ICP, message fondateur et identité de marque lus par le cerveau.' }
      },
      {
        letter: 'F',
        icon: Compass,
        name: { en: 'Strategy', fr: 'Stratégie' },
        desc: { en: 'Foundations, audience, offer, messaging and distribution: shared company knowledge.', fr: 'Fondations, audience, offre, messaging et distribution : la connaissance entreprise partagée.' }
      },
      {
        letter: 'G',
        icon: Headphones,
        name: { en: 'Support Control Center', fr: 'SAV Control Center' },
        desc: { en: 'Support & inbox, disputes, support KPIs, prevention, policy and margin protection.', fr: 'Support & Inbox, litiges, KPI SAV, prévention, policy et margin protection.' }
      },
      {
        letter: 'H',
        icon: Plug,
        name: { en: 'Integrations', fr: 'Intégrations' },
        desc: { en: 'Services connected via real API keys with validity tests: Stripe, Shopify, Meta, LLM.', fr: 'Services connectés via vraies clés API avec test de validité : Stripe, Shopify, Meta, LLM.' }
      }
    ]
  },
  {
    no: '3',
    title: { en: 'Work tools', fr: 'Outils de travail' },
    items: [
      {
        letter: 'I',
        icon: Sparkles,
        name: { en: 'AI Chat', fr: 'Chat IA' },
        desc: { en: 'Live conversation with the brain over WebSocket and streaming: the real core.', fr: 'Conversation en direct avec le cerveau en WebSocket et streaming : le vrai cœur.' }
      },
      {
        letter: 'J',
        icon: Users,
        name: { en: 'CRM & Inbox', fr: 'CRM & Inbox' },
        desc: { en: 'Sales pipeline, stage-by-stage lead management and message tracking.', fr: 'Pipeline commercial, gestion des leads par étape et suivi des messages.' }
      },
      {
        letter: 'K',
        icon: PenLine,
        name: { en: 'Content Studio', fr: 'Content Studio' },
        desc: { en: 'Content pipeline & generation: ideas, scripts, formats and production.', fr: 'Pipeline & génération de contenu : idées, scripts, formats et production.' }
      },
      {
        letter: 'L',
        icon: Bot,
        name: { en: 'AI Agents', fr: 'Agents IA' },
        desc: { en: 'Brain agents, memory, kanban, tasks and admin settings.', fr: 'Agents du cerveau, mémoire, kanban, tâches et paramètres d’administration.' }
      }
    ]
  }
]

/* Real integrations — rendered as favicon pills (deck p.2). */

export interface Integration {
  name: string
  domain?: string // favicon source; undefined → icon pill
  icon?: LucideIcon
}

export const INTEGRATIONS: Integration[] = [
  { name: 'Stripe', domain: 'stripe.com' },
  { name: 'Shopify', domain: 'shopify.com' },
  { name: 'Meta Ads', domain: 'business.facebook.com' },
  { name: 'Google', domain: 'google.com' },
  { name: 'WhatsApp', domain: 'whatsapp.com' },
  { name: 'HubSpot', domain: 'hubspot.com' },
  { name: 'Pipedrive', domain: 'pipedrive.com' },
  { name: 'Salesforce', domain: 'salesforce.com' },
  { name: 'Zapier', domain: 'zapier.com' },
  { name: 'Make', domain: 'make.com' },
  { name: 'n8n', domain: 'n8n.io' },
  { name: 'Calendly', domain: 'calendly.com' },
  { name: 'API & Webhooks', icon: Code2 }
]

/* System value props (deck p.2, bottom). */

export const SYSTEM_VALUES: { icon: LucideIcon; title: Bi; desc: Bi }[] = [
  {
    icon: Database,
    title: { en: 'Real data', fr: 'Vraies données' },
    desc: { en: 'Reliable, real data feeding every tool.', fr: 'Des données réelles et fiables qui alimentent tous vos outils.' }
  },
  {
    icon: Network,
    title: { en: 'Centralised knowledge', fr: 'Connaissance centralisée' },
    desc: { en: 'One brain to read, understand and share your knowledge.', fr: 'Un cerveau unique pour lire, comprendre et partager votre connaissance.' }
  },
  {
    icon: Users,
    title: { en: 'Admin & client in sync', fr: 'Admin & client synchronisés' },
    desc: { en: 'The right info at the right moment, for the admin and the client.', fr: 'Les bonnes informations au bon moment, pour l’admin comme pour le client.' }
  },
  {
    icon: Zap,
    title: { en: 'Faster decisions', fr: 'Décisions plus rapides' },
    desc: { en: 'Less hesitation, more impact, concrete results.', fr: 'Moins d’hésitation, plus d’impact, des résultats concrets.' }
  }
]

/* Objectives (deck p.1) + delivery pillars (deck p.3). */

export const OBJECTIVES: { icon: LucideIcon; label: Bi }[] = [
  { icon: Users, label: { en: 'Generate more leads', fr: 'Générer plus de prospects' } },
  { icon: TrendingUp, label: { en: 'Grow visibility', fr: 'Développer la visibilité' } },
  { icon: BadgeCheck, label: { en: 'Improve brand image', fr: 'Améliorer l’image de marque' } },
  { icon: ShoppingCart, label: { en: 'Increase sales', fr: 'Augmenter les ventes' } },
  { icon: UserCheck, label: { en: 'Attract qualified clients', fr: 'Attirer des clients qualifiés' } },
  { icon: PieChart, label: { en: 'Measure performance', fr: 'Mesurer les performances' } }
]

export const PILLARS: { icon: LucideIcon; label: Bi }[] = [
  { icon: Rocket, label: { en: 'Fast deployment', fr: 'Déploiement rapide' } },
  { icon: Settings, label: { en: 'Continuous optimisation', fr: 'Optimisation continue' } },
  { icon: BarChart3, label: { en: 'Durable performance', fr: 'Performance durable' } },
  { icon: Users, label: { en: 'Guided growth', fr: 'Croissance accompagnée' } }
]

/* ---------------------------------------------------------------------- */
/* Presets — one-tap bundles that pre-fill the builder.                    */
/* ---------------------------------------------------------------------- */

export interface Preset {
  id: string
  label: Bi
  modules: string[]
}

export const PRESETS: Preset[] = [
  { id: 'presence', label: { en: 'Online presence', fr: 'Présence en ligne' }, modules: ['website', 'seo', 'social'] },
  { id: 'acquisition', label: { en: 'Lead acquisition', fr: 'Acquisition de leads' }, modules: ['ads', 'seo', 'scanmap'] },
  { id: 'data', label: { en: 'Data & steering', fr: 'Data & pilotage' }, modules: ['excel', 'dashboard', 'crm', 'automation'] },
  { id: 'ai', label: { en: 'AI & automation', fr: 'IA & automatisation' }, modules: ['chatai', 'crm', 'automation'] }
]

/* ---------------------------------------------------------------------- */
/* Helpers                                                                 */
/* ---------------------------------------------------------------------- */

export function tr(v: Bi, lang: Lang): string {
  return v[lang]
}

export function formatEUR(n: number, lang: Lang): string {
  const nf = new Intl.NumberFormat(lang === 'fr' ? 'fr-FR' : 'en-US', { maximumFractionDigits: 0 })
  return lang === 'fr' ? `${nf.format(n)} €` : `€${nf.format(n)}`
}

export function perMonth(lang: Lang): string {
  return lang === 'fr' ? '/mois' : '/mo'
}

export const moduleById = (id: string): Module | undefined => MODULES.find((m) => m.id === id)
export const addonById = (id: string): AddOn | undefined => ADDONS.find((a) => a.id === id)

export interface Totals {
  coreIds: string[]
  addonIds: string[]
  coreCount: number
  customy: number // core + priced add-ons
  market: number // core market prices only
  saveVsMarket: number
  hasQuoteItem: boolean // a "sur devis" add-on is selected
}

export function computeTotals(coreIds: string[], addonIds: string[]): Totals {
  const core = coreIds.map(moduleById).filter(Boolean) as Module[]
  const addons = addonIds.map(addonById).filter(Boolean) as AddOn[]

  const coreCustomy = core.reduce((s, m) => s + m.price, 0)
  const coreMarket = core.reduce((s, m) => s + m.market, 0)
  const addonCustomy = addons.reduce((s, a) => s + (a.price ?? 0), 0)
  const customy = coreCustomy + addonCustomy

  // Add-ons have no market comparison, so they enter the market baseline at
  // their own list price (zero discount). This keeps `market >= customy` at all
  // times — the strikethrough can never fall below the headline price — while
  // the saving reflects only the real core-module discount.
  const market = coreMarket + addonCustomy

  return {
    coreIds,
    addonIds,
    coreCount: core.length,
    customy,
    market,
    saveVsMarket: Math.max(0, coreMarket - coreCustomy),
    hasQuoteItem: addons.some((a) => a.price === null)
  }
}
