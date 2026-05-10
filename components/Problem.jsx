export default function Problem() {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="problem-inner fade-up">
          <div className="problem-stat">
            <span className="problem-stat-number">7 de 10</span>
            <span className="problem-stat-label">ciudadanos no saben en qué invierte su municipio</span>
          </div>
          <p className="problem-lead">
            No porque la gestión sea mala. Sino porque no hay un lugar permanente donde verlo.
          </p>
          <div className="problem-list">
            <div className="problem-list-item">
              <span className="problem-list-icon">📄</span>
              <span>Los PDFs del boletín oficial no los lee nadie</span>
            </div>
            <div className="problem-list-item">
              <span className="problem-list-icon">📱</span>
              <span>Las publicaciones en redes desaparecen en 24 horas</span>
            </div>
            <div className="problem-list-item">
              <span className="problem-list-icon">🌐</span>
              <span>El portal municipal es un catálogo de trámites, no de gestión</span>
            </div>
            <div className="problem-list-item">
              <span className="problem-list-icon">🎤</span>
              <span>Los actos de inauguración llegan a los que ya están convencidos</span>
            </div>
          </div>
          <blockquote className="problem-highlight">
            Sin visibilidad permanente, cada gestión empieza de cero.
            La confianza se pierde. La obra se olvida.
            Y el vecino se desconecta.
          </blockquote>
          <p className="problem-turn">
            Lo que falta no es más comunicación.
            Lo que falta es <strong>un lugar donde todo quede registrado, medido y abierto</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
