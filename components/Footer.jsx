import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <Logo height={28} variant="light" />
              <span>citixen</span>
            </div>
            <p>
              Infraestructura de confianza para gobiernos locales.
              Transparencia, participación ciudadana y
              presupuesto participativo con trazabilidad total.
            </p>
          </div>
          <div>
            <h4>Plataforma</h4>
            <ul>
              <li><Link href="/#como-funciona">Cómo funciona</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/#empezar">Empezar</Link></li>
              <li><Link href="/#acceso">Registrar municipio</Link></li>
            </ul>
          </div>
          <div>
            <h4>Recursos</h4>
            <ul>
              <li><Link href="/caso-de-estudio">Caso de estudio</Link></li>
              <li><Link href="/transparency-methodology">Metodología de transparencia</Link></li>
              <li><Link href="/#acceso">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/terms">Términos de uso</Link></li>
              <li><Link href="/privacy">Política de privacidad</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Citixen Technologies SAS. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
