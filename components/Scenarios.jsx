const scenarios = [
  {
    quote: 'Somos un municipio chico y no tenemos equipo digital',
    answer: 'Perfecto. Modo Comunidad se configura en una tarde. Carg\u00e1s tus proyectos actuales y ten\u00e9s un portal profesional con tu marca. Sin dise\u00f1adores, sin programadores.',
    icon: '\uD83C\uDFD8\uFE0F',
  },
  {
    quote: 'Ya tenemos portal web pero nadie lo visita',
    answer: 'Citixen no es un portal est\u00e1tico. Los vecinos reciben actualizaciones, pueden seguir proyectos, proponer ideas y responder consultas. Modo Comunidad transforma visitantes en ciudadanos activos.',
    icon: '\uD83D\uDCCA',
  },
  {
    quote: 'Queremos que la gente participe pero nos da miedo perder el control',
    answer: 'Vos control\u00e1s qu\u00e9 se publica, qu\u00e9 se abre a opini\u00f3n y qu\u00e9 se abre a asignaci\u00f3n de recursos. Nada se activa sin tu decisi\u00f3n expl\u00edcita. Todo tiene moderaci\u00f3n incorporada.',
    icon: '\uD83D\uDD12',
  },
  {
    quote: 'Queremos algo que ning\u00fan otro municipio tenga',
    answer: 'Econom\u00eda Participativa. Asignaci\u00f3n ciudadana de recursos p\u00fablicos con Cr\u00e9ditos C\u00edvicos. No existe en ninguna otra plataforma. Un diferencial pol\u00edtico que genera cobertura medi\u00e1tica y legitimidad verificable.',
    icon: '\uD83C\uDFC6',
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
