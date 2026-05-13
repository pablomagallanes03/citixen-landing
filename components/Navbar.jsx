import { useState, useEffect } from 'react'
import Link from 'next/link'
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
        <Link href="/" className="navbar-logo" onClick={close}>
          <Logo height={32} variant="light" />
        </Link>
        <ul className={`navbar-links${open ? ' active' : ''}`}>
          <li><Link href="/#comunidad" onClick={close}>Modo Comunidad</Link></li>
          <li><Link href="/creditos-civicos" onClick={close}>Créditos Cívicos</Link></li>
          <li><Link href="/pricing" onClick={close}>Pricing</Link></li>
          <li>
            <Link href="/#acceso" className="navbar-cta" onClick={close}>
              Contactanos
            </Link>
          </li>
        </ul>
        <div className="navbar-toggle" onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  )
}
