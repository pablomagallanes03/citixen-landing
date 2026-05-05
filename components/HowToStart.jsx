const steps = [
  {
    n: '1',
    title: 'Registrá tu municipio',
    desc: 'Completá un formulario con datos básicos de tu ciudad. Nombre, provincia, población estimada. Nada más.',
    time: '5 minutos',
  },
  {
    n: '2',
    title: 'Cargá tus proyectos',
    desc: 'Los que ya tenés en marcha. Obras, programas, iniciativas. No necesitás crear nada nuevo — usá lo que ya existe.',
    time: '1-2 horas',
  },
  {
    n: '3',
    title: 'Publicá tu portal',
    desc: 'Con tu marca, tu identidad, visible para todos tus vecinos. Un link que podés compartir donde quieras.',
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
          Después, si querés activar participación o asignación:
          un click. Sin migración, sin implementación nueva.
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
            <strong>¿Y después?</strong> Desde tu panel activás Nivel 2 o 3 cuando quieras.
            Desactivás si no funciona. Sin penalidad, sin contrato de permanencia.
          </p>
        </div>
      </div>
    </section>
  )
}
