const securityFlow = [
  'Device Certificate',
  'Device Registry',
  'Device Identity',
  'VerneMQ',
  'mTLS + ACL',
  'Telemetry',
]

function Security() {
  return (
    <section id="security" className="section" aria-labelledby="security-title">
      <h2 id="security-title">Secure device onboarding</h2>
      <p className="section-copy">
        Identity is attached to each device and enforced at broker boundaries before telemetry acceptance.
      </p>

      <div className="architecture-map compact" aria-label="Security flow">
        {securityFlow.map((step, index) => (
          <div key={step} className="architecture-step">
            <div className="flow-node">{step}</div>
            {index < securityFlow.length - 1 && <span className="flow-arrow architecture-arrow">→</span>}
          </div>
        ))}
      </div>

      <p className="planned-note">
        Planned components: Device Registry hardening and expanded provisioning workflows.
      </p>
    </section>
  )
}

export default Security
