export default function Problem() {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="problem-inner fade-up">
          <h2 className="problem-insight">
            La mayoría de las obras públicas desaparecen de la conversación
            semanas después de anunciarse.
          </h2>
          <p className="problem-lead">
            No porque la gestión sea mala. Sino porque no existe memoria pública donde acumularlas.
          </p>
          <div className="problem-list">
            <div className="problem-list-item fade-up delay-1">
              <span className="problem-list-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </span>
              <span>Información escondida en PDFs técnicos</span>
            </div>
            <div className="problem-list-item fade-up delay-2">
              <span className="problem-list-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"/>
                  <circle cx="6" cy="12" r="3"/>
                  <circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
              </span>
              <span>Actualizaciones dispersas en redes sociales</span>
            </div>
            <div className="problem-list-item fade-up delay-3">
              <span className="problem-list-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </span>
              <span>Portales pensados para trámites, no para seguimiento</span>
            </div>
            <div className="problem-list-item fade-up delay-4">
              <span className="problem-list-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </span>
              <span>Obras y proyectos que desaparecen de la conversación pública</span>
            </div>
          </div>
          <blockquote className="problem-highlight">
            Sin memoria pública, cada gestión empieza de cero.
          </blockquote>
          <p className="problem-turn">
            La confianza pública no se construye con anuncios.<br />
            Se construye con <strong>evidencia acumulada en el tiempo</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
