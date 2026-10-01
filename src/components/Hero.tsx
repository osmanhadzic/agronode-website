function Hero() {
  return (
    <section id="top" className="section hero" aria-labelledby="hero-title">
      <div className="badge">OPEN SOURCE · IoT</div>
      <h1 id="hero-title">Open infrastructure for the physical world.</h1>
      <p className="lead">
        AgroNode connects sensors, devices and real-world environments to modern software
        infrastructure.
      </p>

      <div className="hero-flow" aria-label="AgroNode data flow">
        {['ESP32', 'MQTT', 'AgroNode', 'Data', 'Dashboard'].map((item, index) => (
          <div key={item} className="flow-step">
            <div className="flow-node">{item}</div>
            {index < 4 && <span className="flow-arrow">↓</span>}
          </div>
        ))}
      </div>

      <div className="hero-actions">
        <a className="button" href="https://github.com/osmanhadzic/agronode" target="_blank" rel="noreferrer">
          View on GitHub
        </a>
        <a className="button secondary" href="#live-demo">
          Live Demo
        </a>
      </div>
    </section>
  )
}

export default Hero
