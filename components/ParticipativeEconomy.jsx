const includes = [
  'Todo lo de Modo Comunidad',
  'Créditos Cívicos vinculados a impuestos reales',
  'Financiamiento ciudadano de proyectos con meta de CC',
  'Organizaciones sociales con presupuesto operativo',
  'Tickets de cobro y desembolsos con trazabilidad total',
  'Evidencia de cierre con fotos, documentos y métricas',
]

export default function ParticipativeEconomy() {
  return (
    <section className="economy-section" id="economia-participativa">
      <div className="container">
        <div className="economy-inner fade-up">
          <div className="economy-badge">Evolución avanzada</div>
          <h2 className="economy-title">Economía Participativa</h2>
          <p className="economy-subtitle">
            Cuando tu ciudad esté lista para co-decidir
          </p>
          <p className="economy-desc">
            Todo lo de Comunidad + un sistema donde los ciudadanos reciben
            Créditos Cívicos al pagar impuestos y los asignan a proyectos sociales
            reales. Con trazabilidad completa de cada peso.
          </p>

          <div className="economy-includes">
            <span className="economy-includes-label">Incluye</span>
            <ul className="economy-includes-list">
              {includes.map((item, i) => (
                <li key={i}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="economy-note">
            <p>
              <strong>No hay apuro.</strong> Modo Comunidad construye la base: ciudadanos registrados,
              confianza, hábito de participación. Cuando tu ciudad alcance masa crítica,
              Economía Participativa se activa con un switch desde el panel.
            </p>
          </div>

          <div className="economy-price">
            Costo mensual accesible según el tamaño de tu ciudad. Sin contratos de permanencia.
          </div>
        </div>
      </div>
    </section>
  )
}
