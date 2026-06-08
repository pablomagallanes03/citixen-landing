import Link from 'next/link'

const tiers = [
  {
    id: 'community',
    name: 'Modo Comunidad',
    price: '6 meses gratis',
    priceSub: 'Sin tarjeta. Después, licencia anual accesible.',
    description: 'Todo lo que necesitás para que tu gestión municipal sea visible, medible y validable por tus vecinos.',
    color: 'var(--primary)',
    cta: 'Activar Mi Ciudad',
    ctaHref: '/#acceso',
    highlighted: false,
    features: [
      { text: 'Mi Ciudad: portal público', included: true },
      { text: 'Canal de comunicación oficial con vecinos', included: true },
      { text: 'Reporte mensual público descargable (PDF)', included: true },
      { text: 'Balance Ciudadano: rendición visual con IA', included: true },
      { text: 'Proyectos municipales ilimitados', included: true },
      { text: 'Mapa de la ciudad', included: true },
      { text: 'Opiná: escuchá a tus vecinos', included: true },
      { text: 'Propuestas vecinales', included: true },
      { text: 'Comentarios en proyectos', included: true },
      { text: 'Iniciativas ciudadanas autónomas', included: true },
      { text: 'Panel de gestión con permisos por rol', included: true },
      { text: 'Soporte humano en español', included: true },
      { text: 'Créditos Cívicos', included: false },
      { text: 'Financiamiento participativo', included: false },
      { text: 'Desembolsos y tickets de cobro', included: false },
      { text: 'Organizaciones sociales', included: false },
    ],
  },
  {
    id: 'economy',
    name: 'Créditos Cívicos',
    price: 'Personalizado',
    priceSub: 'Según el tamaño de tu ciudad',
    description: 'Todo lo de Comunidad + Créditos Cívicos, financiamiento participativo y trazabilidad económica completa.',
    color: 'var(--accent)',
    cta: 'Contactanos',
    ctaHref: '/#acceso',
    highlighted: true,
    features: [
      { text: 'Todo lo de Modo Comunidad', included: true, bold: true },
      { text: 'Créditos Cívicos por obligaciones fiscales', included: true },
      { text: 'Financiamiento participativo de proyectos', included: true },
      { text: 'Respaldo municipal de ejecución', included: true },
      { text: 'Organizaciones sociales verificadas', included: true },
      { text: 'Tickets de cobro y desembolsos', included: true },
      { text: 'Asignaciones mensuales a organizaciones', included: true },
      { text: 'Trazabilidad económica completa', included: true },
      { text: 'Tipo de cambio configurable', included: true },
      { text: 'Fuentes de ingreso personalizadas', included: true },
      { text: 'Dashboard financiero avanzado', included: true },
      { text: 'Soporte prioritario', included: true },
    ],
  },
]

export default function PricingSection({ headingLevel = 'h2' }) {
  const Heading = headingLevel
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <Heading className="section-title fade-up">Un producto, dos modos.<br />Empezá gratis.</Heading>
          <p className="section-desc fade-up" style={{ textAlign: 'center', margin: '0 auto 56px' }}>
            Empezá gratis con Modo Comunidad y, cuando tu ciudad esté lista,
            activá Créditos Cívicos desde el panel. Es un switch, no una migración.
          </p>
        </div>

        <div className="pricing-grid">
          {tiers.map((tier, i) => (
            <div
              className={`pricing-card ${tier.highlighted ? 'pricing-card--highlighted' : ''} fade-up delay-${i + 1}`}
              key={tier.id}
            >
              {tier.highlighted && <div className="pricing-badge">Diferencial único</div>}
              <div className="pricing-card-header">
                <div className="pricing-tier-icon" style={{ background: tier.color }}>
                  {tier.id === 'community' ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M16 8l-4 4-4-4"/>
                      <path d="M12 16V8"/>
                    </svg>
                  )}
                </div>
                <h3 className="pricing-tier-name" style={{ color: tier.color }}>{tier.name}</h3>
              </div>
              <div className="pricing-price">
                <span className="pricing-price-value">{tier.price}</span>
                <span className="pricing-price-sub">{tier.priceSub}</span>
              </div>
              <p className="pricing-description">{tier.description}</p>
              <Link href={tier.ctaHref} className="pricing-cta" style={{ background: tier.color }}>
                {tier.cta}
              </Link>
              <ul className="pricing-features">
                {tier.features.map((f, j) => (
                  <li key={j} className={f.included ? 'included' : 'not-included'}>
                    {f.included ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                    )}
                    <span style={f.bold ? { fontWeight: 600 } : {}}>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
