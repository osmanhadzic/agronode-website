import type { CSSProperties } from 'react'

const nodes = [
  'Sensors',
  'ESP32',
  'MQTT',
  'VerneMQ',
  'AgroNode API',
  'PostgreSQL / TimescaleDB',
  'React Dashboard',
]

function Architecture() {
  return (
    <section id="architecture" className="section" aria-labelledby="architecture-title">
      <h2 id="architecture-title">Architecture</h2>
      <p className="section-copy">
        End-to-end telemetry path from embedded devices to storage and application surfaces.
      </p>

      <div className="architecture-map" aria-label="Architecture diagram">
        <div className="telemetry-particles" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              style={{ animationDelay: `${index * 0.4}s`, '--i': index } as CSSProperties}
            />
          ))}
        </div>

        {nodes.map((node, index) => (
          <div key={node} className="architecture-step">
            <div className="flow-node">{node}</div>
            {index < nodes.length - 1 && <span className="flow-arrow architecture-arrow">→</span>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Architecture
