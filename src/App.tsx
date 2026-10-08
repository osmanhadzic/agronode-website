import { lazy, Suspense, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { siteUrl } from './config/site'
import { useI18n } from './i18n/I18nProvider'

const Architecture = lazy(() => import('./components/Architecture'))
const UseCases = lazy(() => import('./components/UseCases'))
const TelemetryDemo = lazy(() => import('./components/TelemetryDemo'))
const Hardware = lazy(() => import('./components/Hardware'))
const Security = lazy(() => import('./components/Security'))
const TechStack = lazy(() => import('./components/TechStack'))
const OpenSource = lazy(() => import('./components/OpenSource'))
const Roadmap = lazy(() => import('./components/Roadmap'))
const Fosdem = lazy(() => import('./components/Fosdem'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const { content, language } = useI18n()

  useEffect(() => {
    document.documentElement.lang = language
    document.title = content.meta.title

    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (metaDescription) metaDescription.content = content.meta.description

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) canonical.href = `${siteUrl}/`

    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
    if (ogUrl) ogUrl.content = `${siteUrl}/`

    const twitterUrl = document.querySelector<HTMLMetaElement>('meta[name="twitter:url"]')
    if (twitterUrl) twitterUrl.content = `${siteUrl}/`
  }, [content.meta.description, content.meta.title, language])

  return (
    <>
      <main id="content">
        <Suspense fallback={null}>
          <Architecture />
          <UseCases />
          <TelemetryDemo />
          <Hardware />
          <Security />
          <TechStack />
          <OpenSource />
          <Roadmap />
          <Fosdem />
        </Suspense>

        <section id="contributing" className="section" aria-labelledby="contributing-title">
          <h2 id="contributing-title">{content.contributing.title}</h2>
          <p className="section-copy">
            {content.contributing.copy}
          </p>
          <a className="button" href="https://github.com/osmanhadzic/agronode" target="_blank" rel="noreferrer">
            {content.contributing.cta}
          </a>
        </section>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <Analytics />
    </>
  )
}

export default App
