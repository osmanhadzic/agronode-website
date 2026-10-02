import { useI18n } from '../i18n/I18nProvider'

function Footer() {
  const { content } = useI18n()

  return (
    <footer className="section footer" aria-labelledby="footer-title">
      <h2 id="footer-title" className="brand">AGRONODE</h2>
      <p>{content.footer.slogan}</p>
      <div className="footer-links">
        <a href="https://github.com/osmanhadzic/agronode" target="_blank" rel="noreferrer">{content.footer.github}</a>
        <a href="https://github.com/osmanhadzic/agronode" target="_blank" rel="noreferrer">{content.footer.docs}</a>
        <a href="https://github.com/osmanhadzic/agronode" target="_blank" rel="noreferrer">{content.footer.contributing}</a>
      </div>
      <small>© 2026 AgroNode</small>
    </footer>
  )
}

export default Footer
