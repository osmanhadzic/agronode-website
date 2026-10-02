import { useI18n } from '../i18n/I18nProvider'

function TechStack() {
  const { content } = useI18n()

  return (
    <section id="tech-stack" className="section" aria-labelledby="tech-title">
      <h2 id="tech-title">{content.stack.title}</h2>
      <p className="section-copy">{content.stack.copy}</p>
      <div className="stack-grid">
        {content.stack.items.map((item) => (
          <span key={item} className="stack-badge">
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

export default TechStack
