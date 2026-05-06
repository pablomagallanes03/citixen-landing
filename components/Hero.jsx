export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge fade-up">
            <span className="dot"></span>
            Operativo en Argentina · 2026
          </div>
          <h1 className="fade-up delay-1">
            Conectá tu municipio<br />con sus vecinos.
          </h1>
          <p className="fade-up delay-2">
            Citixen es infraestructura de confianza para gobiernos locales.
            Publicá lo que hacés, activá participación ciudadana,
            y dejá que tus vecinos co-decidan cuando tu ciudad esté lista.
          </p>
          <div className="hero-buttons fade-up delay-3">
            <a href="#acceso" className="btn-primary">
              Activar mi portal
            </a>
            <a href="#como-funciona" className="btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="9 12 12 15 15 12"/>
                <line x1="12" y1="8" x2="12" y2="15"/>
              </svg>
              Cómo funciona
            </a>
          </div>
          <div className="hero-proof fade-up delay-4">
            <div className="hero-proof-item">
              <span className="hero-proof-number">1 semana</span>
              <span className="hero-proof-label">para tener tu portal activo</span>
            </div>
            <div className="hero-proof-divider"></div>
            <div className="hero-proof-item">
              <span className="hero-proof-number">0</span>
              <span className="hero-proof-label">equipo técnico necesario</span>
            </div>
            <div className="hero-proof-divider"></div>
            <div className="hero-proof-item">
              <span className="hero-proof-number">2 modos</span>
              <span className="hero-proof-label">escalás cuando quieras</span>
            </div>
          </div>
        </div>

        <div className="hero-mockup fade-up delay-2">
          <div className="portal-frame">
            <div className="portal-browser-bar">
              <div className="portal-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="portal-url">portal.citixen.app/tu-ciudad</div>
            </div>
            <div className="portal-content">
              <div className="portal-header">
                <div className="portal-city-badge">🏛️</div>
                <div>
                  <div className="portal-city-name">Tu Municipio</div>
                  <div className="portal-city-sub">Portal de Transparencia</div>
                </div>
              </div>
              <div className="portal-score">
                <div className="portal-score-label">Índice de Transparencia</div>
                <div className="portal-score-bar">
                  <div className="portal-score-fill portal-score-fill--animated"></div>
                </div>
                <div className="portal-score-value">78/100</div>
              </div>
              <div className="portal-projects">
                <div className="portal-project-item">
                  <div className="portal-project-status status-progress status-progress--pulse"></div>
                  <div className="portal-project-info">
                    <div className="portal-project-name">Repavimentación Av. Libertad</div>
                    <div className="portal-project-meta">En ejecución · 65% avance</div>
                  </div>
                </div>
                <div className="portal-project-item">
                  <div className="portal-project-status status-complete"></div>
                  <div className="portal-project-info">
                    <div className="portal-project-name">Luminaria LED zona norte</div>
                    <div className="portal-project-meta">Completado · Dic 2025</div>
                  </div>
                </div>
                <div className="portal-project-item">
                  <div className="portal-project-status status-planned"></div>
                  <div className="portal-project-info">
                    <div className="portal-project-name">Nuevo playón deportivo</div>
                    <div className="portal-project-meta">Planificado · Inicio Jun 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
