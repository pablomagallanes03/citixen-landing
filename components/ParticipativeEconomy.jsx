import Link from 'next/link'

const steps = [
  {
    n: '1',
    title: 'Pagás tus impuestos',
    desc: 'Como siempre. Nada cambia en tu rutina fiscal.',
  },
  {
    n: '2',
    title: 'Recibís Créditos Cívicos',
    desc: 'Una porción de lo que pagaste vuelve como capacidad de decisión.',
  },
  {
    n: '3',
    title: 'Decidís qué apoyar',
    desc: 'Asignás tus CC a proyectos reales de tu ciudad.',
  },
]

export default function ParticipativeEconomy() {
  return (
    <section className="cc-protagonist-section" id="creditos-civicos">
      <div className="container">
        <div className="cc-protagonist-grid cc-protagonist-grid--solo">

          {/* Content */}
          <div className="cc-protagonist-content fade-up delay-2">
            <div className="cc-protagonist-eyebrow">El producto principal</div>
            <h2 className="cc-protagonist-title">
              Cada impuesto que pagás se convierte en una decisión real sobre tu ciudad.
            </h2>
            <p className="cc-protagonist-desc">
              Con los Créditos Cívicos, una parte de lo que tu municipio recauda vuelve
              al vecino como capacidad de decisión vinculante sobre proyectos reales.
              El municipio mantiene el control institucional — gana legitimidad,
              trazabilidad y respaldo documentado de cada inversión.
            </p>

            <div className="cc-protagonist-steps">
              {steps.map((step) => (
                <div className="cc-protagonist-step" key={step.n}>
                  <div className="cc-protagonist-step-num">{step.n}</div>
                  <div>
                    <div className="cc-protagonist-step-title">{step.title}</div>
                    <div className="cc-protagonist-step-desc">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cc-protagonist-pills">
              <span className="cc-protagonist-pill">Vinculados a impuestos reales</span>
              <span className="cc-protagonist-pill">Trazabilidad completa</span>
              <span className="cc-protagonist-pill">Se activa con un switch</span>
            </div>

            <Link href="/soyvecino" className="cc-protagonist-cta">
              Ver cómo funcionan los Créditos Cívicos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
