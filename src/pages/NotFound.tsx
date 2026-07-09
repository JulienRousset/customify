import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../lang'
import { useRouteHead } from '../lib/head'
import VerticalFooter from '../components/vertical/VerticalFooter'

export default function NotFound() {
  const { lang } = useLang()
  const fr = lang === 'fr'

  useRouteHead({
    title: fr ? 'Page introuvable · Customy' : 'Page not found · Customy',
    description: fr
      ? 'Cette page n’existe pas ou a été déplacée.'
      : 'This page doesn’t exist or may have moved.',
    path: '/404'
  })

  // Keep soft-404s out of the index.
  useEffect(() => {
    const robots = document.querySelector('meta[name="robots"]')
    const prev = robots?.getAttribute('content') ?? null
    robots?.setAttribute('content', 'noindex, follow')
    return () => {
      if (prev !== null) robots?.setAttribute('content', prev)
    }
  }, [])

  return (
    <>
      <section className="min-h-[72vh] flex items-center justify-center px-6 pt-28 pb-20">
        <div className="text-center max-w-md">
          <p className="eyebrow">404</p>
          <h1 className="display-2 text-balance">{fr ? 'Page introuvable.' : 'Page not found.'}</h1>
          <p className="mt-5 body-md text-pretty">
            {fr
              ? 'Cette page n’existe pas ou a peut-être été déplacée.'
              : 'This page doesn’t exist or may have moved.'}
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-fg text-bg px-6 py-3 text-[14.5px] font-semibold tracking-tight hover:opacity-90 transition-opacity"
          >
            {fr ? 'Retour à l’accueil' : 'Back home'}
          </Link>
        </div>
      </section>
      <VerticalFooter />
    </>
  )
}
