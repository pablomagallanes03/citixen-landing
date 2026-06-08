import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <Logo height={26} variant="light" />
            </div>
            <p>
              Una nueva relación entre tu municipio y sus vecinos.
              Participación ciudadana con peso real.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=app.citixen"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-store-badge"
              aria-label="Descargar Citixen en Google Play"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 9.291l-2.302 2.302L5.864 2.658z"/>
              </svg>
              <span className="footer-store-badge-text">
                <span className="footer-store-badge-eyebrow">Ya disponible en</span>
                <span className="footer-store-badge-name">Google Play</span>
              </span>
            </a>
          </div>
          <div>
            <h4>Plataforma</h4>
            <ul>
              <li><Link href="/soygobierno">Soy gobierno</Link></li>
              <li><Link href="/soyvecino">Soy vecino</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
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
