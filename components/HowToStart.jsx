const steps = [
  {
    n: '1',
    title: 'Registrá tu municipio',
    desc: 'Nombre, provincia, email institucional. Te contactamos en 48 horas.',
    time: '5 minutos',
  },
  {
    n: '2',
    title: 'Cargá tus proyectos actuales',
    desc: 'Usá la obra pública que ya tenés. Si tenés balances en PDF o Excel, Citixen los procesa automáticamente y los convierte en datos publicables. No necesitás crear nada nuevo.',
    time: '30 minutos',
  },
  {
    n: '3',
    title: 'Publicá Mi Ciudad',
    desc: 'Con la marca de tu municipio. Compartible. Con índice de transparencia desde el día uno.',
    time: 'Inmediato',
  },
]

export default function HowToStart() {
  return (
    <section className="how-to-start-section" id="empezar">
      <div className="container">
        <div className="section-label fade-up"><span className="bar"></span> Empezar</div>
        <h2 className="section-title fade-up">Activar Citixen es más fácil<br />que armar un Excel.</h2>
        <p className="section-desc fade-up">
          Después, activás consultas y propuestas.
          Y cuando quieras, Economía Participativa. Todo desde el panel.
        </p>

        <div className="how-to-grid">
          {steps.map((step, i) => (
            <div className={`how-to-card fade-up delay-${i + 1}`} key={step.n}>
              <div className="how-to-number">{step.n}</div>
              <h3 className="how-to-title">{step.title}</h3>
              <p className="how-to-desc">{step.desc}</p>
              <div className="how-to-time">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                {step.time}
              </div>
            </div>
          ))}
        </div>

        <div className="how-to-after fade-up">
          <p>
            <strong>Sin penalidad.</strong> Sin contrato de permanencia.
            Lo desactivás con un click si no funciona.
          </p>
        </div>
      </div>
    </section>
  )
}
