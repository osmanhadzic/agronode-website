import { useI18n } from '../i18n/I18nProvider'

function Fosdem() {
  const { content } = useI18n()

  return (
    <section id="fosdem" className="section" aria-labelledby="fosdem-title">
      <h2 id="fosdem-title">{content.fosdem.title}</h2>
      <p className="section-copy">{content.fosdem.copy}</p>
      <ul className="inline-list">
        {content.fosdem.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default Fosdem
