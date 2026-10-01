import { roadmap } from '../data/project'

function Roadmap() {
  return (
    <section id="roadmap" className="section" aria-labelledby="roadmap-title">
      <h2 id="roadmap-title">Roadmap</h2>
      <div className="card-grid two">
        <article className="card">
          <h3>2026</h3>
          <ul>
            {roadmap['2026'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h3>2027</h3>
          <ul>
            {roadmap['2027'].map((item) => (
              <li key={item}>
                {item} <span className="tag">PLANNED</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Roadmap
