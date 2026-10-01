import { Cpu, Leaf, Mic, Scale, Sprout, TowerControl } from 'lucide-react'
import { hardwareGroups } from '../data/project'

const groupIcons = {
  Environmental: Leaf,
  Soil: Sprout,
  Weight: Scale,
  Audio: Mic,
  'Edge/Gateway': TowerControl,
}

function Hardware() {
  return (
    <section id="hardware" className="section" aria-labelledby="hardware-title">
      <h2 id="hardware-title">Hardware</h2>
      <p className="section-copy">Reference hardware currently used across environmental and edge deployments.</p>

      <div className="card-grid hardware-grid">
        {hardwareGroups.map((group) => {
          const Icon = groupIcons[group.category as keyof typeof groupIcons] ?? Cpu
          return (
            <article key={group.category} className="card">
              <h3>
                <Icon size={16} /> {group.category}
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
