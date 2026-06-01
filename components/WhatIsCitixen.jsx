export default function WhatIsCitixen() {
  return (
    <section className="what-is-section" id="gobierno">
      <div className="container">
        <div className="section-label fade-up"><span className="bar"></span> Qué es Citixen</div>
        <h2 className="section-title fade-up">Participación ciudadana con peso real.<br />Dos modos, un mismo sistema.</h2>
        <p className="section-desc fade-up">
          Empezá por donde tu ciudad pueda. Activá el resto cuando esté lista.
        </p>

        <div className="what-is-table-wrapper fade-up delay-1">
          <table className="what-is-table">
            <thead>
              <tr>
                <th></th>
                <th className="what-is-col-economy">
                  <div className="what-is-col-header">
                    <div className="what-is-col-icon what-is-col-icon--economy">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 8v8M8 12h8"/>
                      </svg>
                    </div>
                    <div className="what-is-col-name">Que tus vecinos decidan</div>
                    <div className="what-is-col-sub">Créditos Cívicos</div>
                    <div className="what-is-col-price what-is-col-price--cc">Producto principal</div>
                  </div>
                </th>
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
                    <div className="what-is-col-name">Si tu ciudad todavía no está lista</div>
                    <div className="what-is-col-sub">Modo Comunidad</div>
                    <div className="what-is-col-price what-is-col-price--free">Gratis 6 meses</div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="what-is-feature">Qué resuelve</td>
                <td>Que la ciudadanía priorice la inversión pública</td>
                <td>Que tu gestión sea visible y validable mientras te preparás</td>
              </tr>
              <tr>
                <td className="what-is-feature">Cómo funciona</td>
                <td>Vecinos asignan Créditos Cívicos a proyectos de su ciudad</td>
                <td>Portal público + consultas + propuestas + reporte mensual</td>
              </tr>
              <tr>
                <td className="what-is-feature">Salida pública</td>
                <td>Trazabilidad económica completa de cada decisión</td>
                <td>Reporte mensual descargable + Balance Ciudadano visual</td>
              </tr>
              <tr>
                <td className="what-is-feature">Costo</td>
                <td>Según tamaño de ciudad</td>
                <td><strong style={{ color: 'var(--green)' }}>Gratis 6 meses</strong></td>
              </tr>
              <tr>
                <td className="what-is-feature">Esfuerzo</td>
                <td>Activar un switch + definir % de impuestos</td>
                <td>Cargar tus proyectos actuales</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="what-is-note fade-up">
          <span>Si todavía no podés activar Créditos Cívicos, empezá con Comunidad. Cuando estés listo, es un switch desde el panel. <strong>No es una migración.</strong></span>
        </div>
      </div>
    </section>
  )
}
