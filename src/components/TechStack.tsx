import { techStack } from '../data/project'

function TechStack() {
  return (
    <section id="tech-stack" className="section" aria-labelledby="tech-title">
      <h2 id="tech-title">Technology stack</h2>
      <p className="section-copy">Core technologies powering embedded, transport, backend and frontend layers.</p>
      <div className="stack-grid">
        {techStack.map((item) => (
          <span key={item} className="stack-badge">
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

export default TechStack
