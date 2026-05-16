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
                <th className="what-is-col-community">Modo Comunidad</th>
                <th className="what-is-col-economy">Créditos Cívicos</th>
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
