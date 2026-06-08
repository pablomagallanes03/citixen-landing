import Link from 'next/link'

export default function TwoPaths() {
  return (
    <section className="two-paths-section">
      <div className="container">
        <div className="section-label fade-up"><span className="bar"></span> Dos caminos</div>
        <h2 className="section-title fade-up">Citixen, según quién sos.</h2>
        <p className="section-desc fade-up">
          Una misma plataforma, dos formas de entrar. Elegí la tuya.
        </p>

        <div className="two-paths-grid">
          <Link href="/soyvecino" className="two-paths-card two-paths-card--citizen fade-up delay-1">
            <div className="two-paths-tag">Sos vecino</div>
            <h3 className="two-paths-title">Tu ciudad empieza a escucharte.</h3>
            <p className="two-paths-desc">
              Participás de las decisiones, priorizás los proyectos que importan y ves cómo se hacen realidad.
            </p>
            <span className="two-paths-link">
              Ver Citixen para vecinos
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </Link>

          <Link href="/soygobierno" className="two-paths-card two-paths-card--gov fade-up delay-2">
            <div className="two-paths-tag">Trabajás en un municipio</div>
            <h3 className="two-paths-title">Todas las herramientas para tu ciudad.</h3>
            <p className="two-paths-desc">
              Un canal directo con tus vecinos, participación ordenada y la prueba de que las cosas se hicieron.
            </p>
            <span className="two-paths-link">
              Ver Citixen para gobiernos
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
