export default function WhatIsCitixen() {
  return (
    <section className="what-is-section" id="comunidad">
      <div className="container">
        <div className="section-label fade-up"><span className="bar"></span> Qué es Citixen</div>
        <h2 className="section-title fade-up">Gestión municipal abierta.<br />Dos modos, un mismo sistema.</h2>
        <p className="section-desc fade-up">
          Empezá con lo que necesitás hoy. Activá el resto cuando estés listo.
        </p>

        <div className="what-is-table-wrapper fade-up delay-1">
          <table className="what-is-table">
            <thead>
              <tr>
                <th></th>
                <th className="what-is-col-community">
                  <div className="what-is-col-header">
                    <div className="what-is-col-icon what-is-col-icon--community">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <div className="what-is-col-name">Modo Comunidad</div>
                    <div className="what-is-col-price what-is-col-price--free">Gratis</div>
                  </div>
                </th>
                <th className="what-is-col-economy">
                  <div className="what-is-col-header">
                    <div className="what-is-col-icon what-is-col-icon--economy">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 8v8M8 12h8"/>
                      </svg>
                    </div>
                    <div className="what-is-col-name">Créditos Cívicos</div>
                    <div className="what-is-col-price what-is-col-price--cc">Personalizado</div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="what-is-feature">Qué resuelve</td>
                <td>Que tu gestión sea visible y validable</td>
                <td>Que tus vecinos prioricen la inversión</td>
              </tr>
              <tr>
                <td className="what-is-feature">Cómo funciona</td>
                <td>Portal + Opiná + propuestas + transparencia</td>
                <td>Vecinos asignan créditos a proyectos de su ciudad</td>
              </tr>
              <tr>
                <td className="what-is-feature">Salida pública</td>
                <td>Reporte mensual descargable + Balance Ciudadano visual</td>
                <td>Todo lo anterior + trazabilidad económica completa</td>
              </tr>
              <tr>
                <td className="what-is-feature">Costo</td>
                <td><strong style={{ color: 'var(--green)' }}>Gratuito</strong></td>
                <td>Según tamaño de ciudad</td>
              </tr>
              <tr>
                <td className="what-is-feature">Esfuerzo</td>
                <td>Cargar tus proyectos actuales</td>
                <td>Activar un switch</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="what-is-note fade-up">
          <span>Empezá con Comunidad. Cuando estés listo, activá Créditos Cívicos desde el panel. <strong>Es un switch, no una migración.</strong></span>
        </div>
      </div>
    </section>
  )
}
