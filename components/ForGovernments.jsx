const features = [
  {
    icon: '🖥️',
    title: 'Panel propio de administración',
    desc: 'Aprobaciones, proyectos, comprobantes y desembolsos desde un solo lugar. Sin depender de reportes externos.',
  },
  {
    icon: '📍',
    title: 'Jurisdicción aislada',
    desc: 'Cada municipio opera en su propio espacio. Los datos, ciudadanos y proyectos no se mezclan con otras ciudades.',
  },
  {
    icon: '📋',
    title: 'Trazabilidad completa',
    desc: 'Cada acción queda registrada con timestamp y responsable. El municipio puede auditar el ciclo completo de cada Civic Credit.',
  },
]

export default function ForGovernments() {
  return (
    <section className="governments-section" id="municipios">
      <div className="container">
        <div className="governments-inner">
          <div className="governments-content">
            <div className="section-label fade-up"><span className="bar"></span> Para municipios</div>
            <h2 className="section-title fade-up">La herramienta que el presupuesto participativo necesitaba</h2>
            <p className="section-desc fade-up">
              Citixen complementa tu gestión con infraestructura técnica real,
              trazabilidad auditable y una interfaz que los ciudadanos realmente usan.
            </p>
            <div className="gov-features fade-up delay-1">
              {features.map(f => (
                <div className="gov-feature" key={f.title}>
                  <div className="gov-feature-icon">{f.icon}</div>
                  <div className="gov-feature-text">
                    <strong>{f.title}</strong>
                    <span>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <a href="#acceso" className="btn-gov fade-up delay-2">
              Registrá tu municipio
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          <div className="governments-visual fade-up delay-2">
            <div className="gov-panel-mockup">
              <div className="gov-panel-header">
                <div className="gov-panel-avatar">🏛️</div>
                <div>
                  <div className="gov-panel-title">Panel de Gobierno</div>
                  <div className="gov-panel-sub">Municipio · Vista general</div>
                </div>
              </div>
              <div className="gov-stat-row">
                <div className="gov-stat">
                  <div className="gov-stat-num">8</div>
                  <div className="gov-stat-label">Proyectos</div>
                </div>
                <div className="gov-stat">
                  <div className="gov-stat-num">47</div>
                  <div className="gov-stat-label">Ciudadanos</div>
                </div>
                <div className="gov-stat">
                  <div className="gov-stat-num">12</div>
                  <div className="gov-stat-label">Pendientes</div>
                </div>
              </div>
              <div className="gov-project-row">
                <div className="gov-project-item">
                  <span className="gov-project-name">Reforestación Parque Norte</span>
                  <span className="gov-project-badge badge-active">Activo</span>
                </div>
                <div className="gov-project-item">
                  <span className="gov-project-name">Biblioteca Comunitaria Sur</span>
                  <span className="gov-project-badge badge-review">En revisión</span>
                </div>
                <div className="gov-project-item">
                  <span className="gov-project-name">Ciclovía Centro</span>
                  <span className="gov-project-badge badge-pending">Pendiente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
