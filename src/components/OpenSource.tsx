import { useI18n } from '../i18n/I18nProvider'

function OpenSource() {
  const { content } = useI18n()

  return (
    <section id="open-source" className="section" aria-labelledby="open-source-title">
      <h2 id="open-source-title">{content.openSource.title}</h2>
      <p className="section-copy">{content.openSource.copy}</p>
      <div className="card-grid">
        {content.openSource.links.map((link) => (
          <a key={link.label} className="card source-link" href={link.href} target="_blank" rel="noreferrer">
            <h3>{link.label}</h3>
            <p>{link.href.replace('https://', '')}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default OpenSource
