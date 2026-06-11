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
            <div className="footer-store-badges">
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
              <a
                href="https://apps.apple.com/ar/app/citixen-app/id6776739061"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-store-badge"
                aria-label="Descargar Citixen en el App Store"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"/>
                </svg>
                <span className="footer-store-badge-text">
                  <span className="footer-store-badge-eyebrow">Ya disponible en</span>
                  <span className="footer-store-badge-name">App Store</span>
                </span>
              </a>
            </div>
          </div>
          <div>
            <h4>Plataforma</h4>
            <ul>
              <li><Link href="/soygobierno">Soy gobierno</Link></li>
              <li><Link href="/soyvecino">Soy vecino</Link></li>
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
