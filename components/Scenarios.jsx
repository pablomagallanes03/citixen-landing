const scenarios = [
  {
    quote: 'Somos un municipio chico y no tenemos equipo digital',
    answer: 'Perfecto. El Nivel 1 se configura en una tarde. Cargás tus proyectos actuales y tenés un portal profesional con tu marca. Sin diseñadores, sin programadores.',
    icon: '🏘️',
  },
  {
    quote: 'Ya tenemos portal web pero nadie lo visita',
    answer: 'Citixen no es un portal estático. Los vecinos reciben actualizaciones, pueden seguir proyectos, y la participación genera tracción orgánica. Nivel 2 transforma visitantes en ciudadanos activos.',
    icon: '📊',
  },
  {
    quote: 'Queremos que la gente participe pero nos da miedo perder el control',
    answer: 'Vos controlás qué se publica, qué se abre a opinión y qué se abre a asignación de recursos. Nada se activa sin tu decisión explícita. Todo tiene moderación incorporada.',
    icon: '🔒',
  },
  {
    quote: 'Queremos algo que ningún otro municipio tenga',
    answer: 'Nivel 3. Asignación ciudadana de recursos públicos con Créditos Cívicos. No existe en ninguna otra plataforma. Un diferencial político que genera cobertura mediática y legitimidad verificable.',
    icon: '🏆',
  },
]

export default function Scenarios() {
  return (
    <section className="scenarios-section" id="para-tu-ciudad">
      <div className="container">
        <div className="section-label fade-up"><span className="bar"></span> Escenarios</div>
        <h2 className="section-title fade-up">Esto es para tu ciudad si...</h2>
        <p className="section-desc fade-up">
          Municipios distintos, mismas necesidades.
          Citixen se adapta a tu realidad.
        </p>

        <div className="scenarios-grid">
          {scenarios.map((s, i) => (
            <div className={`scenario-card fade-up delay-${(i % 2) + 1}`} key={i}>
              <div className="scenario-icon">{s.icon}</div>
              <blockquote className="scenario-quote">&ldquo;{s.quote}&rdquo;</blockquote>
              <p className="scenario-answer">{s.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
