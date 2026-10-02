import { useI18n } from '../i18n/I18nProvider'

function Security() {
  const { content } = useI18n()

  return (
    <section id="security" className="section" aria-labelledby="security-title">
      <h2 id="security-title">{content.security.title}</h2>
      <p className="section-copy">{content.security.copy}</p>

      <div className="architecture-map compact" aria-label={content.security.ariaLabel}>
        {content.security.flow.map((step, index) => (
          <div key={step} className="architecture-step">
            <div className="flow-node">{step}</div>
            {index < content.security.flow.length - 1 && <span className="flow-arrow architecture-arrow">→</span>}
          </div>
        ))}
      </div>

      <p className="planned-note">{content.security.plannedNote}</p>
    </section>
  )
}

export default Security
