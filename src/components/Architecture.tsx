import type { CSSProperties } from 'react'
import { useI18n } from '../i18n/I18nProvider'

function Architecture() {
  const { content } = useI18n()

  return (
    <section id="architecture" className="section" aria-labelledby="architecture-title">
      <h2 id="architecture-title">{content.architecture.title}</h2>
      <p className="section-copy">{content.architecture.copy}</p>

      <div className="architecture-map" aria-label={content.architecture.ariaLabel}>
        <div className="telemetry-particles" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              style={{ animationDelay: `${index * 0.4}s`, '--i': index } as CSSProperties}
            />
          ))}
        </div>

        {content.architecture.nodes.map((node, index) => (
          <div key={node} className="architecture-step">
            <div className="flow-node">{node}</div>
            {index < content.architecture.nodes.length - 1 && <span className="flow-arrow architecture-arrow">→</span>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Architecture
