import { useCases } from '../data/project'

function UseCases() {
  return (
    <section id="use-cases" className="section" aria-labelledby="use-cases-title">
      <h2 id="use-cases-title">Real-world use cases</h2>
      <p className="section-copy">Implemented capabilities are separated from planned capabilities.</p>

      <div className="card-grid three">
        {useCases.map((entry) => (
          <article key={entry.title} className="card">
            <h3>{entry.title}</h3>
            <p>{entry.summary}</p>

            <div className="status-block">
              <h4>Implemented</h4>
              <ul>
                {entry.implemented.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="status-block planned">
              <h4>Planned</h4>
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
