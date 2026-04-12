import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          <Logo height={36} />
          <span>citixen</span>
        </a>
        <ul className={`navbar-links${open ? ' active' : ''}`}>
          <li><a href="#como-funciona" onClick={close}>Cómo funciona</a></li>
          <li><a href="#municipios" onClick={close}>Para municipios</a></li>
          <li>
            <a href="#acceso" className="navbar-cta" onClick={close}>
              Acceso anticipado
            </a>
          </li>
        </ul>
        <div className="navbar-toggle" onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  )
}
