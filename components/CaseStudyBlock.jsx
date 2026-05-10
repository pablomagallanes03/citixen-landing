import Link from 'next/link'

const projects = [
  { name: 'Pavimentación Bv. Colón', meta: 'Avance, presupuesto, fotos, estado', color: 'var(--secondary)' },
  { name: 'Desagüe pluvial zona norte', meta: 'Timeline con fechas y evidencia', color: 'var(--green)' },
  { name: 'Remodelación plaza central', meta: 'Consulta a vecinos sobre diseño', color: 'var(--primary)' },
  { name: 'Luminaria LED barrio sur', meta: 'Propuesta ciudadana adoptada', color: 'var(--accent)' },
]

export default function CaseStudyBlock() {
  return (
    <section className="case-block-section" id="caso-de-analisis">
      <div className="container">
        <div className="case-block-inner">
          <div className="case-block-content fade-up">
            <div className="section-label"><span className="bar"></span> Ejemplo basado en información pública</div>
            <h2 className="section-title">Presidente Roca, Santa Fe</h2>
            <p className="case-block-desc">
              Un municipio que publica su balance mensual en Instagram y como PDF en su web.
              <strong> 8 likes de promedio. </strong>
              La gestión más transparente de la región es invisible.
            </p>
            <div className="case-block-stats">
              <div className="case-block-stat">
                <span className="case-block-stat-value">$106M</span>
                <span className="case-block-stat-label">ingresos mensuales</span>
              </div>
              <div className="case-block-stat">
                <span className="case-block-stat-value">$25.7M</span>
                <span className="case-block-stat-label">obra pública / mes</span>
              </div>
              <div className="case-block-stat">
                <span className="case-block-stat-value">46%</span>
                <span className="case-block-stat-label">coparticipación</span>
              </div>
            </div>
            <p className="case-block-insight">
              Con Citixen, cada obra tiene su página. Cada peso tiene trazabilidad.
              Los vecinos pueden seguir proyectos, proponer ideas y responder consultas.
            </p>
            <Link href="/caso-de-estudio" className="case-block-link">
              Ver análisis completo →
            </Link>
          </div>
          <div className="case-block-projects fade-up delay-1">
            <div className="case-block-projects-label">Lo que ya existe → lo que Citixen haría visible</div>
            {projects.map((p, i) => (
              <div className="case-block-project" key={i}>
                <div className="case-block-project-dot" style={{ background: p.color }}></div>
                <div>
                  <div className="case-block-project-name">{p.name}</div>
                  <div className="case-block-project-meta">{p.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
