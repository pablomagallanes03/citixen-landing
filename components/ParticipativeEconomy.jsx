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
        <div className="cc-protagonist-grid">

          {/* Mockup — wallet CC */}
          <div className="cc-protagonist-mockup fade-up delay-1">
            <div className="wallet-frame">
              <div className="wallet-statusbar">
                <span>9:41</span>
                <div className="wallet-statusbar-icons">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9z"/></svg>
                  <div className="wallet-battery"></div>
                </div>
              </div>
              <div className="wallet-header">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
                <span>Mis Créditos Cívicos</span>
                <div style={{width: 16}}></div>
              </div>
              <div className="wallet-body">
                <div className="wallet-balance-card">
                  <div className="wallet-balance-label">Balance disponible</div>
                  <div className="wallet-balance-value">
                    <span className="wallet-balance-number">1.247</span>
                    <span className="wallet-balance-unit">CC</span>
                  </div>
                  <div className="wallet-balance-eq">≈ AR$ 1.870.500</div>
                </div>

                <div className="wallet-section-label">Último ingreso</div>
                <div className="wallet-tx wallet-tx--in">
                  <div className="wallet-tx-icon wallet-tx-icon--in">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="19" x2="12" y2="5"/>
                      <polyline points="5 12 12 5 19 12"/>
                    </svg>
                  </div>
                  <div className="wallet-tx-body">
                    <div className="wallet-tx-title">+180 CC</div>
                    <div className="wallet-tx-meta">Impuesto inmobiliario · Mayo</div>
                  </div>
                </div>

                <div className="wallet-section-label">Proyectos que apoyás</div>
                <div className="wallet-supported">
                  <div className="wallet-supported-row">
                    <span className="wallet-supported-dot"></span>
                    <span className="wallet-supported-name">Plaza San Martín</span>
                    <span className="wallet-supported-cc">50 CC</span>
                  </div>
                  <div className="wallet-supported-row">
                    <span className="wallet-supported-dot"></span>
                    <span className="wallet-supported-name">Comedor Compartiendo Amor</span>
                    <span className="wallet-supported-cc">80 CC</span>
                  </div>
                  <div className="wallet-supported-row">
                    <span className="wallet-supported-dot"></span>
                    <span className="wallet-supported-name">Refugio Patitas del Sur</span>
                    <span className="wallet-supported-cc">120 CC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="cc-protagonist-content fade-up delay-2">
            <div className="cc-protagonist-eyebrow">El upgrade del producto</div>
            <h2 className="cc-protagonist-title">
              Y cuando tu ciudad esté lista, los vecinos deciden dónde va su contribución.
            </h2>
            <p className="cc-protagonist-desc">
              Con los Créditos Cívicos, cada impuesto pagado se convierte en capacidad
              de decisión real sobre proyectos de la ciudad. El municipio mantiene el control —
              gana legitimidad, trazabilidad y respaldo documentado.
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
