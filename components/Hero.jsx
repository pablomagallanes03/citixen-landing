export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="fade-up delay-1">
            Pagás impuestos.<br />Ahora también decidís adónde van.
          </h1>
          <p className="fade-up delay-2">
            Una parte de lo que pagás se transforma en <strong>Créditos Cívicos</strong>.
            Vos los asignás a los proyectos que querés que se hagan en tu ciudad.
            Tu municipio ejecuta lo que la ciudadanía priorizó.
          </p>
          <div className="hero-buttons fade-up delay-3">
            <a href="#gobierno" className="btn-primary">
              Ver cómo funciona
            </a>
            <a href="#acceso" className="btn-secondary">
              Soy gobierno →
            </a>
          </div>
          <div className="hero-proof fade-up delay-4">
            <div className="hero-proof-item">
              <span className="hero-proof-number">Con peso real</span>
              <span className="hero-proof-label">Lo que prioriza la ciudad, el municipio ejecuta</span>
            </div>
            <div className="hero-proof-divider"></div>
            <div className="hero-proof-item">
              <span className="hero-proof-number">Trazable</span>
              <span className="hero-proof-label">Cada CC asignado queda registrado y público</span>
            </div>
            <div className="hero-proof-divider"></div>
            <div className="hero-proof-item">
              <span className="hero-proof-number">Lo elegís vos</span>
              <span className="hero-proof-label">Vos decidís a qué proyecto va cada crédito</span>
            </div>
          </div>
        </div>

        <div className="hero-mockup fade-up delay-2">
          <div className="iphone-wrapper">
            <div className="iphone-device">
              <div className="iphone-screen">
                <div className="iphone-dynamic-island"></div>
                <div className="iphone-status-bar">
                  <span>9:41</span>
                  <div className="iphone-status-icons">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 0 0-6 0zm-4-4l2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><rect x="17" y="4" width="4" height="16" rx="1"/><rect x="11" y="8" width="4" height="12" rx="1"/><rect x="5" y="12" width="4" height="8" rx="1"/></svg>
                    <div className="iphone-battery"><div className="iphone-battery-fill"></div></div>
                  </div>
                </div>
                <div className="phone-app-header phone-app-header--main">
                  <span>Mis Créditos Cívicos</span>
                  <div className="phone-app-header-avatar">P</div>
                </div>
                <div className="phone-content phone-content--receipt">
                  <div className="phone-receipt-card">
                    <div className="phone-receipt-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <polyline points="19 12 12 19 5 12"/>
                      </svg>
                    </div>
                    <div className="phone-receipt-eyebrow">Tu municipio reconoce tu aporte</div>
                    <div className="phone-receipt-amount">+180 CC</div>
                    <div className="phone-receipt-source">Por tu impuesto inmobiliario · Mayo</div>
                  </div>

                  <div className="phone-receipt-balance">
                    <span className="phone-receipt-balance-label">Saldo disponible</span>
                    <span className="phone-receipt-balance-value">375 CC</span>
                  </div>

                  <button className="phone-receipt-cta" type="button">
                    Elegir dónde apoyar
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </button>

                  <div className="phone-receipt-hint">
                    Tu municipio define el porcentaje. Vos elegís el destino.
                  </div>
                </div>
                <div className="phone-tabbar">
                  <div className="phone-tab">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    <span>Inicio</span>
                  </div>
                  <div className="phone-tab">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
                    <span>Descubrí</span>
                  </div>
                  <div className="phone-tab">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    <span>Participá</span>
                  </div>
                  <div className="phone-tab phone-tab--active">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                    <span>Mi Impacto</span>
                  </div>
                </div>
                <div className="iphone-home-indicator"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
