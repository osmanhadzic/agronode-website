import { Cpu, Leaf, Mic, Scale, Sprout, TowerControl } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'

const groupIcons = {
  Environmental: Leaf,
  Soil: Sprout,
  Weight: Scale,
  Audio: Mic,
  'Edge/Gateway': TowerControl,
}

function Hardware() {
  const { content } = useI18n()

  return (
    <section id="hardware" className="section" aria-labelledby="hardware-title">
      <h2 id="hardware-title">{content.hardware.title}</h2>
      <p className="section-copy">{content.hardware.copy}</p>

      <div className="card-grid hardware-grid">
        {content.hardware.groups.map((group) => {
          const iconKey =
            group.key === 'environmental'
              ? 'Environmental'
              : group.key === 'soil'
                ? 'Soil'
                : group.key === 'weight'
                  ? 'Weight'
                  : group.key === 'audio'
                    ? 'Audio'
                    : 'Edge/Gateway'

          const Icon = groupIcons[iconKey as keyof typeof groupIcons] ?? Cpu
          return (
            <article key={group.key} className="card">
              <h3>
                <Icon size={16} /> {group.title}
              </h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Hardware
