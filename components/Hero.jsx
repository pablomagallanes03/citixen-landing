export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge fade-up">
            <span className="dot"></span>
            Lanzando en Argentina · 2026
          </div>
          <h1 className="fade-up delay-1">
            Por primera vez, lo que pagás vuelve como decisión.
          </h1>
          <p className="fade-up delay-2">
            Por cada impuesto municipal que pagás, recibís Civic Credits.
            Con esos créditos elegís qué proyectos de tu ciudad merecen
            financiamiento real del municipio.
          </p>
          <div className="hero-buttons fade-up delay-3">
            <a href="#acceso" className="btn-primary">
              Quiero acceso anticipado
            </a>
            <a href="#como-funciona" className="btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8"/>
              </svg>
              Cómo funciona
            </a>
          </div>
        </div>

        <div className="hero-mockup fade-up delay-2">
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="phone-notch"></div>
              <div className="phone-screen-content">
                <div className="mock-avatar"></div>
                <div className="mock-greeting">Hola, Vecino</div>
                <div className="mock-subtitle">Ciudadano activo · tu ciudad</div>
                <div className="mock-card">
                  <div className="mock-card-title">🌳 Reforestación Parque Norte</div>
                  <div className="mock-card-bar">
                    <div className="mock-card-bar-fill" style={{ width: '72%' }}></div>
                  </div>
                  <div className="mock-card-text">72% financiado · 180 CC de 250</div>
                </div>
                <div className="mock-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="mock-card-title" style={{ margin: 0 }}>Tus Civic Credits</div>
                    <div className="mock-cc-badge">🪙 340 CC</div>
                  </div>
                </div>
                <div className="mock-card">
                  <div className="mock-card-title">📚 Biblioteca Comunitaria</div>
                  <div className="mock-card-bar">
                    <div className="mock-card-bar-fill" style={{ width: '45%', background: 'linear-gradient(90deg,#F7794E,#FFD700)' }}></div>
                  </div>
                  <div className="mock-card-text">45% financiado · 90 CC de 200</div>
                </div>
              </div>
              <div className="mock-nav">
                <div className="mock-nav-dot active"></div>
                <div className="mock-nav-dot"></div>
                <div className="mock-nav-dot"></div>
                <div className="mock-nav-dot"></div>
              </div>
            </div>
          </div>

          <div className="floating-card card-cc">
            <div className="floating-icon" style={{ background: '#FFF8E1', color: '#E6A800' }}>🪙</div>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '10px' }}>Civic Credits acreditados</div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 700 }}>+50 CC recibidos</div>
            </div>
          </div>
          <div className="floating-card card-project">
            <div className="floating-icon" style={{ background: 'rgba(52,199,89,0.1)', color: '#34C759' }}>✓</div>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '10px' }}>Proyecto aprobado</div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Parque Norte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
