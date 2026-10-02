import { useI18n } from '../i18n/I18nProvider'

function UseCases() {
  const { content } = useI18n()

  return (
    <section id="use-cases" className="section" aria-labelledby="use-cases-title">
      <h2 id="use-cases-title">{content.useCases.title}</h2>
      <p className="section-copy">{content.useCases.copy}</p>

      <div className="card-grid three">
        {content.useCases.cards.map((entry) => (
          <article key={entry.title} className="card">
            <h3>{entry.title}</h3>
            <p>{entry.summary}</p>

            <div className="status-block">
              <h4>{content.useCases.implemented}</h4>
              <ul>
                {entry.implemented.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="status-block planned">
              <h4>{content.useCases.planned}</h4>
              <ul>
                {entry.planned.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default UseCases
