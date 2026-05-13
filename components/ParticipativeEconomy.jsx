import Link from 'next/link'

export default function ParticipativeEconomy() {
  return (
    <section className="cc-teaser-section">
      <div className="container">
        <div className="cc-teaser fade-up">
          <div className="cc-teaser-content">
            <h3 className="cc-teaser-title">
              Y cuando tu ciudad esté lista, los vecinos co-deciden la inversión.
            </h3>
            <p className="cc-teaser-desc">
              Con los Créditos Cívicos, cada contribución fiscal se convierte en capacidad
              de decisión real. Los vecinos eligen qué proyectos apoyar. El municipio
              mantiene el control, gana legitimidad y trazabilidad.
            </p>
            <div className="cc-teaser-highlights">
              <div className="cc-teaser-highlight">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                  <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
                <span>Vinculados a impuestos reales</span>
              </div>
              <div className="cc-teaser-highlight">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
                <span>Trazabilidad completa</span>
              </div>
              <div className="cc-teaser-highlight">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  <path d="M8 12l3 3 5-5"/>
                </svg>
                <span>Se activa con un switch</span>
              </div>
            </div>
            <Link href="/creditos-civicos" className="cc-teaser-cta">
              Conocé cómo funcionan los Créditos Cívicos &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
