const levels = [
  {
    level: '1',
    name: 'Transparencia',
    tagline: 'Publicá lo que hacés',
    description: 'Portal público con tus proyectos, obras y acciones. Los vecinos ven el estado de cada iniciativa. Tu gestión gana un índice de transparencia verificable.',
    result: 'Confianza + legitimidad + defensa ante la crítica.',
    effort: 'Cargar tus proyectos actuales. Nada más.',
    color: 'var(--primary)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    level: '2',
    name: 'Participación',
    tagline: 'Los vecinos te dicen qué les importa',
    description: 'Consultas, propuestas ciudadanas y priorización desde el celular. Recibís señales reales de demanda sin encuestas manuales ni dependencia de redes sociales.',
    result: 'Información de demanda real + engagement ciudadano.',
    effort: 'Activar un switch. Los ciudadanos hacen el resto.',
    color: 'var(--secondary)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    level: '3',
    name: 'Asignación ciudadana',
    tagline: 'Los vecinos co-deciden la inversión',
    description: 'Cada vecino recibe Créditos Cívicos al cumplir con el municipio y los asigna a los proyectos que le importan. Presupuesto participativo con trazabilidad total y respaldo fiscal real.',
    result: 'Legitimidad absoluta + alineamiento gestión-demanda + diferencial político único.',
    effort: 'Configurar fuentes de ingreso. El sistema hace el resto.',
    color: 'var(--accent)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M16 8l-4 4-4-4"/>
        <path d="M12 16V8"/>
      </svg>
    ),
  },
]

export default function Progressive() {
  return (
    <section className="progressive-section" id="como-funciona">
      <div className="container">
        <div className="section-label fade-up"><span className="bar"></span> Adopción progresiva</div>
        <h2 className="section-title fade-up">Tres niveles. Empezás por el primero.<br />Avanzás cuando quieras.</h2>
        <p className="section-desc fade-up">
          No es un sistema que implementás. Es un camino que recorrés
          al ritmo de tu ciudad. Sin presión, sin compromiso.
        </p>

        <div className="progressive-grid">
          {levels.map((l, i) => (
            <div className={`progressive-card fade-up delay-${i + 1}`} key={l.level}>
              <div className="progressive-header">
                <div className="progressive-level" style={{ background: l.color }}>
                  <span className="progressive-level-icon">{l.icon}</span>
                </div>
                <div className="progressive-level-badge" style={{ color: l.color }}>
                  Nivel {l.level}
                </div>
              </div>
              <h3 className="progressive-name">{l.name}</h3>
              <p className="progressive-tagline">{l.tagline}</p>
              <p className="progressive-description">{l.description}</p>
              <div className="progressive-meta">
                <div className="progressive-meta-item">
                  <span className="progressive-meta-label">Resultado</span>
                  <span className="progressive-meta-value">{l.result}</span>
                </div>
                <div className="progressive-meta-item">
                  <span className="progressive-meta-label">Esfuerzo</span>
                  <span className="progressive-meta-value">{l.effort}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="progressive-note fade-up">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          <span>Cada nivel se activa con un switch desde tu panel. Sin migración, sin implementación nueva, sin costo adicional oculto.</span>
        </div>

        <div className="progressive-cta fade-up">
          <span>¿Listo para empezar con el Nivel 1?</span>
          <a href="#acceso" className="btn-progressive-cta">Activar mi portal</a>
        </div>
      </div>
    </section>
  )
}
