import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navLinks } from '../data/project'

function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNavigate = () => setOpen(false)

  return (
    <header className="navbar-wrap">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#top" className="brand" aria-label="AgroNode homepage">
          AGRONODE
        </a>

        <button
          className="mobile-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <div id="nav-links" className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleNavigate}>
              {link.label}
            </a>
          ))}
          <a
            className="button secondary"
            href="https://github.com/osmanhadzic/agronode"
            target="_blank"
            rel="noreferrer"
            onClick={handleNavigate}
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
