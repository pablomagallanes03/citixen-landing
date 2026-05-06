const steps = [
  {
    n: '1',
    title: 'Registr\u00e1 tu municipio',
    desc: 'Complet\u00e1 un formulario con datos b\u00e1sicos de tu ciudad. Nombre, provincia, poblaci\u00f3n estimada. Nada m\u00e1s.',
    time: '5 minutos',
  },
  {
    n: '2',
    title: 'Carg\u00e1 tus proyectos',
    desc: 'Los que ya ten\u00e9s en marcha. Obras, programas, iniciativas. No necesit\u00e1s crear nada nuevo \u2014 us\u00e1 lo que ya existe.',
    time: '1-2 horas',
  },
  {
    n: '3',
    title: 'Public\u00e1 tu portal',
    desc: 'Con tu marca, tu identidad, visible para todos tus vecinos. Un link que pod\u00e9s compartir donde quieras.',
    time: 'Inmediato',
  },
]

export default function HowToStart() {
  return (
    <section className="how-to-start-section" id="empezar">
      <div className="container">
        <div className="section-label fade-up"><span className="bar"></span> Empezar</div>
        <h2 className="section-title fade-up">3 pasos. 1 semana. 0 riesgo.</h2>
        <p className="section-desc fade-up">
          Despu\u00e9s, si quer\u00e9s activar Econom\u00eda Participativa:
          un click. Sin migraci\u00f3n, sin implementaci\u00f3n nueva.
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
            <strong>\u00bfY despu\u00e9s?</strong> Desde tu panel activ\u00e1s Econom\u00eda Participativa cuando quieras.
            Desactiv\u00e1s si no funciona. Sin penalidad, sin contrato de permanencia.
          </p>
        </div>
      </div>
    </section>
  )
}
