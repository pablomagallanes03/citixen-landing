export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-eyebrow fade-up">Gobierno</div>
          <h1 className="fade-up delay-1">
            Lo que hacés ya existe.<br />Solo falta que se vea.
          </h1>
          <p className="fade-up delay-2">
            Citixen es infraestructura de gestión municipal abierta.
            Empezá con transparencia, índice verificable y reporte mensual público
            — gratis. Y cuando tu ciudad esté lista, activá los Créditos Cívicos
            para que los vecinos prioricen la inversión.
          </p>
          <div className="hero-buttons fade-up delay-3">
            <a href="#gobierno" className="btn-primary">
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
              <div className="portal-url">portal.citixen.app/villa-maria</div>
            </div>
            <div className="portal-content">
              <div className="portal-topbar">
                <div className="portal-city-logo">VM</div>
                <div className="portal-city-info">
                  <div className="portal-city-name">Villa María</div>
                  <div className="portal-city-sub">Mi Ciudad</div>
                </div>
              </div>

              <div className="portal-report-card">
                <div className="portal-report-badge">Mayo 2026</div>
                <div className="portal-report-eyebrow">Publicado · PDF público</div>
                <div className="portal-report-title">Reporte Mensual</div>

                <div className="portal-report-metrics">
                  <div className="portal-report-metric">
                    <span className="portal-report-metric-label">Participación</span>
                    <span className="portal-report-metric-value">
                      1.247
                      <span className="portal-report-metric-trend">↑</span>
                    </span>
                  </div>
                  <div className="portal-report-metric">
                    <span className="portal-report-metric-label">Transparencia</span>
                    <span className="portal-report-metric-value">
                      78/100
                      <span className="portal-report-metric-trend">↑</span>
                    </span>
                  </div>
                  <div className="portal-report-metric">
                    <span className="portal-report-metric-label">Proyectos</span>
                    <span className="portal-report-metric-value">12 nuevos</span>
                  </div>
                  <div className="portal-report-metric">
                    <span className="portal-report-metric-label">Iniciativas</span>
                    <span className="portal-report-metric-value">4 activas</span>
                  </div>
                </div>

                <button className="portal-report-cta" type="button">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Descargar PDF público
                </button>
              </div>

              <div className="portal-tabs">
                <span>Transparencia</span>
                <span className="portal-tab--active">Reportes</span>
                <span>Proyectos</span>
                <span>Opiná</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
