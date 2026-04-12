const steps = [
  {
    n: '1',
    title: 'Pagás y recibís CC',
    desc: 'Subís tu comprobante de pago de impuesto municipal. El gobierno lo verifica y te acredita Civic Credits equivalentes en tu wallet. Sin intermediarios.',
  },
  {
    n: '2',
    title: 'Elegís un proyecto',
    desc: 'Navegás los proyectos activos en tu ciudad y asignás tus CC a los que te parecen prioritarios. Cada asignación queda registrada con tu firma.',
  },
  {
    n: '3',
    title: 'El gobierno aprueba',
    desc: 'El municipio revisa los proyectos, valida las solicitudes de completación y autoriza el desembolso de fondos públicos al beneficiario.',
  },
  {
    n: '4',
    title: 'El dinero llega',
    desc: 'El beneficiario del proyecto reclama el equivalente en pesos. El gobierno transfiere y registra el pago en el sistema. Todo trazable.',
  },
]

export default function Mechanism() {
  return (
    <section className="mechanism-section" id="como-funciona">
      <div className="container">
        <div className="section-label fade-up"><span className="bar"></span> El sistema</div>
        <h2 className="section-title fade-up">Cómo funciona Citixen</h2>
        <p className="section-desc fade-up">
          Un ciclo cerrado y trazable entre el ciudadano, el gobierno y los proyectos.
          Nada se pierde en el camino.
        </p>
        <div className="mechanism-grid">
          {steps.map((step, i) => (
            <div className={`mechanism-card fade-up delay-${i + 1}`} key={step.n}>
              <div className="mechanism-number">{step.n}</div>
              <h3 className="mechanism-title">{step.title}</h3>
              <p className="mechanism-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
