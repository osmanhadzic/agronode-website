import { openSourceLinks } from '../data/project'

function OpenSource() {
  return (
    <section id="open-source" className="section" aria-labelledby="open-source-title">
      <h2 id="open-source-title">Built in the open.</h2>
      <p className="section-copy">AgroNode is developed publicly for contributors across embedded and software disciplines.</p>
      <div className="card-grid">
        {openSourceLinks.map((link) => (
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
