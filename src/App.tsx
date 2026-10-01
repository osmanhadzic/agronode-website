import { lazy, Suspense, useEffect } from 'react'
import { siteUrl } from './config/site'

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

const description =
  'AgroNode connects sensors, devices and real-world environments to modern software infrastructure.'

function App() {
  useEffect(() => {
    document.title = 'AgroNode · Open infrastructure for the physical world'

    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (metaDescription) metaDescription.content = description

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) canonical.href = `${siteUrl}/`

    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
    if (ogUrl) ogUrl.content = `${siteUrl}/`

    const twitterUrl = document.querySelector<HTMLMetaElement>('meta[name="twitter:url"]')
    if (twitterUrl) twitterUrl.content = `${siteUrl}/`
  }, [])

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
          <h2 id="contributing-title">Contributing</h2>
          <p className="section-copy">
            AgroNode welcomes contributors from embedded, backend, frontend, DevOps and research
            backgrounds. Open issues and discussions are available in the main repository.
          </p>
          <a className="button" href="https://github.com/osmanhadzic/agronode" target="_blank" rel="noreferrer">
            Start contributing
          </a>
        </section>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
