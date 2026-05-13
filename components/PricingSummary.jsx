import Link from 'next/link'

export default function PricingSummary() {
  return (
    <section className="pricing-summary-section">
      <div className="container">
        <h2 className="section-title fade-up" style={{ textAlign: 'center' }}>¿Cuánto cuesta?</h2>
        <div className="pricing-summary-grid fade-up delay-1">
          <div className="pricing-summary-card">
            <div className="pricing-summary-name" style={{ color: 'var(--primary)' }}>Modo Comunidad</div>
            <div className="pricing-summary-price">Gratis</div>
            <div className="pricing-summary-sub">Sin límite de tiempo</div>
          </div>
          <div className="pricing-summary-card">
            <div className="pricing-summary-name" style={{ color: 'var(--accent)' }}>Créditos Cívicos</div>
            <div className="pricing-summary-price">Personalizado</div>
            <div className="pricing-summary-sub">Según el tamaño de tu ciudad</div>
          </div>
        </div>
        <div className="pricing-summary-link fade-up">
          <Link href="/pricing">Ver detalle completo →</Link>
        </div>
      </div>
    </section>
  )
}
