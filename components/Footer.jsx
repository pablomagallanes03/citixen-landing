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
              Plataforma de participación ciudadana que conecta el pago de
              impuestos con la asignación directa de recursos públicos a
              proyectos reales en tu ciudad.
            </p>
          </div>
          <div>
            <h4>Plataforma</h4>
            <ul>
              <li><a href="#como-funciona">Cómo funciona</a></li>
              <li><a href="#municipios">Para municipios</a></li>
              <li><a href="#acceso">Acceso anticipado</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Términos de uso</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Citixen. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
