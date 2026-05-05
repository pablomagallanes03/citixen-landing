const comparisons = [
  {
    feature: 'Transparencia verificable',
    portal: false,
    encuestas: false,
    pp: 'Solo resultado',
    citixen: true,
  },
  {
    feature: 'Participación continua',
    portal: false,
    encuestas: 'Puntual',
    pp: '1 vez al año',
    citixen: true,
  },
  {
    feature: 'Co-decisión económica',
    portal: false,
    encuestas: false,
    pp: 'Sin trazabilidad',
    citixen: true,
  },
  {
    feature: 'Adopción progresiva',
    portal: false,
    encuestas: false,
    pp: false,
    citixen: true,
  },
  {
    feature: 'Sin equipo técnico',
    portal: false,
    encuestas: true,
    pp: false,
    citixen: true,
  },
]

function Cell({ value }) {
  if (value === true) return <span className="cell-yes">✓</span>
  if (value === false) return <span className="cell-no">—</span>
  return <span className="cell-partial">{value}</span>
}

export default function Differentiator() {
  return (
    <section className="differentiator-section">
      <div className="container">
        <div className="section-label fade-up"><span className="bar"></span> Diferencial</div>
        <h2 className="section-title fade-up">No es otra app de gobierno.<br />Es infraestructura de confianza.</h2>
        <p className="section-desc fade-up">
          No es un portal estático, no es una encuesta digital,
          no es presupuesto participativo tradicional.
          Es un sistema progresivo con modelo económico real.
        </p>

        <div className="comparison-table-wrapper fade-up delay-1">
          <table className="comparison-table">
            <thead>
              <tr>
                <th></th>
                <th>Portal web municipal</th>
                <th>Encuestas digitales</th>
                <th>Presupuesto participativo</th>
                <th className="col-citixen">Citixen</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((c, i) => (
                <tr key={i}>
                  <td className="feature-name">{c.feature}</td>
                  <td><Cell value={c.portal} /></td>
                  <td><Cell value={c.encuestas} /></td>
                  <td><Cell value={c.pp} /></td>
                  <td className="col-citixen"><Cell value={c.citixen} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="comparison-mobile fade-up delay-1">
          {comparisons.map((c, i) => (
            <div className="comparison-mobile-card" key={i}>
              <div className="comparison-mobile-feature">{c.feature}</div>
              <div className="comparison-mobile-check">
                <span className="cell-yes">✓</span>
                <span>Citixen</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
