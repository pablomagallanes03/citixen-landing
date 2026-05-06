const modes = [
  {
    id: 'community',
    name: 'Modo Comunidad',
    tagline: 'Transparencia y participaci\u00f3n sin complejidad',
    description: 'Portal p\u00fablico de proyectos municipales, consultas ciudadanas, propuestas vecinales y un \u00edndice de transparencia verificable. Todo lo que necesit\u00e1s para conectar con tus vecinos.',
    includes: [
      'Portal de transparencia',
      'Consultas del gobierno',
      'Propuestas ciudadanas',
      '\u00cdndice de transparencia',
      'Digest autom\u00e1tico',
    ],
    result: 'Confianza + legitimidad + engagement ciudadano.',
    effort: 'Cargar tus proyectos actuales. Nada m\u00e1s.',
    color: 'var(--primary)',
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
    id: 'economy',
    name: 'Econom\u00eda Participativa',
    tagline: 'Presupuesto participativo con trazabilidad total',
    description: 'Todo lo de Comunidad + Cr\u00e9ditos C\u00edvicos: los ciudadanos reciben cr\u00e9ditos al pagar impuestos y co-deciden la inversi\u00f3n p\u00fablica. Financiamiento de proyectos, organizaciones sociales y desembolsos con trazabilidad completa.',
    includes: [
      'Todo lo de Comunidad',
      'Cr\u00e9ditos C\u00edvicos',
      'Financiamiento de proyectos',
      'Organizaciones sociales',
      'Desembolsos y tickets de cobro',
    ],
    result: 'Legitimidad absoluta + alineamiento gesti\u00f3n-demanda + diferencial pol\u00edtico \u00fanico.',
    effort: 'Activar un switch y configurar fuentes de ingreso.',
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
        <div className="section-label fade-up"><span className="bar"></span> Adopci\u00f3n progresiva</div>
        <h2 className="section-title fade-up">Un producto, dos modos.<br />Empez\u00e1 con lo que necesit\u00e1s hoy.</h2>
        <p className="section-desc fade-up">
          Empez\u00e1 con lo que necesit\u00e1s hoy. Activ\u00e1 el resto cuando est\u00e9s listo.
        </p>

        <div className="progressive-grid">
          {modes.map((m, i) => (
            <div className={`progressive-card fade-up delay-${i + 1}`} key={m.id}>
              <div className="progressive-header">
                <div className="progressive-level" style={{ background: m.color }}>
                  <span className="progressive-level-icon">{m.icon}</span>
                </div>
                <div className="progressive-level-badge" style={{ color: m.color }}>
                  {m.name}
                </div>
              </div>
              <h3 className="progressive-name">{m.tagline}</h3>
              <p className="progressive-description">{m.description}</p>
              <div className="progressive-includes">
                <span className="progressive-includes-label">Incluye</span>
                <ul className="progressive-includes-list">
                  {m.includes.map((item) => (
                    <li key={item}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="progressive-meta">
                <div className="progressive-meta-item">
                  <span className="progressive-meta-label">Resultado</span>
                  <span className="progressive-meta-value">{m.result}</span>
                </div>
                <div className="progressive-meta-item">
                  <span className="progressive-meta-label">Esfuerzo</span>
                  <span className="progressive-meta-value">{m.effort}</span>
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
          <span>Empez\u00e1 con Comunidad. Cuando est\u00e9s listo, activ\u00e1 Econom\u00eda Participativa desde el panel. Es un switch, no una migraci\u00f3n.</span>
        </div>

        <div className="progressive-cta fade-up">
          <span>Modo Comunidad es gratuito. Activ\u00e1 tu portal hoy.</span>
          <a href="#acceso" className="btn-progressive-cta">Activar mi portal</a>
        </div>
      </div>
    </section>
  )
}
