import { useEffect } from 'react'
import { useLang } from '../lang'
import FAQ from '../components/FAQ'
import VerticalFooter from '../components/vertical/VerticalFooter'
import { useRouteHead } from '../lib/head'

const HEAD = {
  en: {
    title: 'FAQ · Customy — timelines, pricing, ownership',
    description:
      'Answers to the questions we always get: how long a build takes, what it costs, what happens if you leave, and what to do if you’re not sure what you need.'
  },
  fr: {
    title: 'FAQ · Customy — délais, tarifs, propriété',
    description:
      'Les réponses aux questions qu’on nous pose tout le temps : délais, tarifs, ce qui se passe si vous partez, et quoi faire si vous ne savez pas ce qu’il vous faut.'
  }
} as const

export default function FAQPage() {
  const { lang, t } = useLang()
  useRouteHead({ ...HEAD[lang], path: '/faq' })

  // FAQPage structured data is injected on the route where the Q&A actually
  // renders (Google requires the marked-up content to be visible on the same
  // page). Built from the live dictionary so EN/FR stay in sync.
  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.faq = 'true'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
    return () => {
      script.remove()
    }
  }, [t])

  return (
    <>
      <div className="pt-12 md:pt-16">
        <FAQ />
      </div>
      <VerticalFooter />
    </>
  )
}
