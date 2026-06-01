export default function Problem() {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="problem-inner fade-up">
          <h2 className="problem-insight">
            Pagás impuestos toda tu vida.<br />
            Nunca decidiste sobre uno solo.
          </h2>
          <p className="problem-lead">
            El presupuesto se vota cada año. Vos te enterás cuando ya está aprobado.
          </p>
          <div className="problem-list">
            <div className="problem-list-item fade-up delay-1">
              <span className="problem-list-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              </span>
              <span>Decisiones de inversión que se toman sin consulta vinculante</span>
            </div>
            <div className="problem-list-item fade-up delay-2">
              <span className="problem-list-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </span>
              <span>Audiencias públicas convocadas con días de anticipación</span>
            </div>
            <div className="problem-list-item fade-up delay-3">
              <span className="problem-list-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </span>
              <span>Presupuestos participativos limitados a montos simbólicos</span>
            </div>
            <div className="problem-list-item fade-up delay-4">
              <span className="problem-list-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                  <line x1="6" y1="1" x2="6" y2="4"/>
                  <line x1="10" y1="1" x2="10" y2="4"/>
                  <line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
              </span>
              <span>Programas anunciados sin que nadie te haya preguntado si los querés</span>
            </div>
          </div>
          <blockquote className="problem-highlight">
            La participación real no es informarse después. Es decidir antes.
          </blockquote>
          <p className="problem-turn">
            Citixen le da a los vecinos peso real <strong>antes</strong> de que se vote la inversión.<br />
            No después.
          </p>
        </div>
      </div>
    </section>
  )
}
