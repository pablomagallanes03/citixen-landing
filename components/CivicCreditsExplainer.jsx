import Link from 'next/link'

const steps = [
  {
    number: '1',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    title: 'El vecino paga impuestos',
    desc: 'Algo que ya hace. No hay un paso extra.',
  },
  {
    number: '2',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'El municipio acredita CC',
    desc: 'Una fracción de lo recaudado se convierte en poder de decisión ciudadana.',
  },
  {
    number: '3',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'El vecino elige el destino',
    desc: 'Asigna sus CC al proyecto social que quiere apoyar.',
  },
  {
    number: '4',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    title: 'El proyecto se ejecuta',
    desc: 'El beneficiario cobra el equivalente en pesos. El municipio transfiere dinero que ya estaba en caja.',
  },
]

export default function CivicCreditsExplainer() {
  return (
    <section className="cc-explainer-section">
      <div className="container">
        <div className="section-label fade-up"><span className="bar"></span> Créditos Cívicos</div>
        <h2 className="section-title fade-up">¿Qué son los Créditos Cívicos?</h2>
        <p className="section-desc fade-up">
          No son crypto. No son puntos de fidelidad. No se pueden vender.
          Son poder de decisión ciudadana sobre inversión pública.
        </p>

        <div className="cc-steps">
          {steps.map((s, i) => (
            <div className={`cc-step fade-up delay-${(i % 2) + 1}`} key={i}>
              <div className="cc-step-icon">{s.icon}</div>
              <div className="cc-step-content">
                <h3 className="cc-step-title">{s.title}</h3>
                <p className="cc-step-desc">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="cc-step-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="cc-comparison fade-up">
          <div className="cc-comparison-item cc-comparison-old">
            <span className="cc-comparison-label">Presupuesto participativo tradicional</span>
            <span>Votás una vez al año. No sabés qué pasó después.</span>
          </div>
          <div className="cc-comparison-item cc-comparison-new">
            <span className="cc-comparison-label">Con Créditos Cívicos</span>
            <span>Cada peso tiene nombre, destino y trazabilidad. Sabés exactamente a dónde fue y qué impacto generó.</span>
          </div>
        </div>

        <div className="cc-deep-link fade-up" style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/soyvecino" className="cc-deep-link-btn">
            Ver la explicación completa &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
