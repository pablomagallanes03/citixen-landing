export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="fade-up delay-1">
            Lo que hacés ya existe.<br />Solo falta que se vea.
          </h1>
          <p className="fade-up delay-2">
            Citixen es infraestructura de gestión municipal abierta.
            Publicá lo que tu municipio hace, medilo con un índice de
            transparencia verificable, y dejá que tus vecinos lo validen.
          </p>
          <div className="hero-buttons fade-up delay-3">
            <a href="#comunidad" className="btn-primary">
              Ver cómo funciona
            </a>
            <a href="#acceso" className="btn-secondary">
              Contactanos
            </a>
          </div>
          <div className="hero-proof fade-up delay-4">
            <div className="hero-proof-item">
              <span className="hero-proof-number">1 mañana</span>
              <span className="hero-proof-label">para tener tu portal activo</span>
            </div>
            <div className="hero-proof-divider"></div>
            <div className="hero-proof-item">
              <span className="hero-proof-number">0</span>
              <span className="hero-proof-label">equipo técnico necesario</span>
            </div>
            <div className="hero-proof-divider"></div>
            <div className="hero-proof-item">
              <span className="hero-proof-number">1K – 500K</span>
              <span className="hero-proof-label">habitantes · tu municipio</span>
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
                  <div className="portal-city-sub">Mi Ciudad</div>
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
