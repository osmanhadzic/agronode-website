import { useI18n } from '../i18n/I18nProvider'

function Roadmap() {
  const { content } = useI18n()

  return (
    <section id="roadmap" className="section" aria-labelledby="roadmap-title">
      <h2 id="roadmap-title">{content.roadmap.title}</h2>
      <div className="card-grid two">
        <article className="card">
          <h3>2026</h3>
          <ul>
            {content.roadmap.years['2026'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h3>2027</h3>
          <ul>
            {content.roadmap.years['2027'].map((item) => (
              <li key={item}>
                {item} <span className="tag">{content.roadmap.plannedTag}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Roadmap
