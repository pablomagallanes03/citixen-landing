const props = [
  {
    icon: '🏛️',
    bg: 'rgba(52,119,193,0.08)',
    title: 'Respaldo fiscal real',
    desc: 'Los Civic Credits no son puntos de fidelidad. Representan una porción del presupuesto municipal ya recaudado. Cada CC tiene correlato en un impuesto pagado y verificado por el gobierno.',
  },
  {
    icon: '✓',
    bg: 'rgba(52,199,89,0.08)',
    title: 'Validación gubernamental',
    desc: 'El gobierno aprueba los proyectos, verifica los comprobantes y autoriza los pagos. Citixen no reemplaza la gestión pública: la hace participativa y auditable.',
  },
  {
    icon: '🔍',
    bg: 'rgba(60,158,206,0.08)',
    title: 'Ciclo trazable y cerrado',
    desc: 'Desde el comprobante hasta el pago al beneficiario, cada paso queda registrado con timestamp. El municipio y el ciudadano pueden auditar el recorrido completo.',
  },
  {
    icon: '📍',
    bg: 'rgba(247,121,78,0.08)',
    title: 'Aislamiento por jurisdicción',
    desc: 'Cada ciudadano asigna en su ciudad. Cada gobierno gestiona su municipio. Los datos, proyectos y recursos no se mezclan entre jurisdicciones.',
  },
]

export default function ValueProps() {
  return (
    <section className="value-props-section">
      <div className="container">
        <div className="section-label fade-up"><span className="bar"></span> Por qué Citixen</div>
        <h2 className="section-title fade-up">Un sistema serio,<br />no una plataforma de peticiones</h2>
        <p className="section-desc fade-up">
          Citixen no es Change.org ni un sistema de votación simbólica.
          Es infraestructura de presupuesto participativo con base fiscal real.
        </p>
        <div className="value-props-grid">
          {props.map((p, i) => (
            <div className={`value-card fade-up delay-${(i % 2) + 1}`} key={p.title}>
              <div className="value-icon" style={{ background: p.bg }}>{p.icon}</div>
              <div className="value-content">
                <h3 className="value-title">{p.title}</h3>
                <p className="value-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
