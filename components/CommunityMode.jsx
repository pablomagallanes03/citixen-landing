const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Gestión visible',
    desc: 'Publicá obras, programas e inversiones en un portal público con la identidad de tu municipio. Cada proyecto queda visible, actualizable y fácil de compartir entre vecinos.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Indicadores públicos',
    desc: 'Citixen mide el nivel de actualización, evidencia publicada y cumplimiento de cada proyecto con métricas visibles y metodología abierta. No es una auditoría — es una herramienta para mostrar evolución.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Datos sin carga manual',
    desc: 'Subí un balance en PDF o un Excel y Citixen lo convierte automáticamente en información clara, fácil de leer para cualquier vecino y lista para publicar en tu portal. Sin tipear datos a mano, sin copiar y pegar.',
  },
]

const optionalFeatures = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Escuchá prioridades reales',
    desc: 'Consultá a tus vecinos antes de tomar decisiones. Priorizaciones, votaciones y respuestas abiertas, con resultados públicos al finalizar.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Ideas desde la comunidad',
    desc: 'Los vecinos proponen mejoras para su ciudad y pueden organizar iniciativas propias — voluntariado, campañas, acciones comunitarias — de forma completamente autónoma.',
  },
]

function AnimatedToggle() {
  return (
    <div className="toggle-animated">
      <div className="toggle-track">
        <div className="toggle-thumb"></div>
      </div>
    </div>
  )
}

export default function CommunityMode() {
  return (
    <section className="community-section" id="comunidad">
      <div className="container">
        <div className="community-header">
          <div className="section-label section-label--highlight fade-up">
            Producto principal
          </div>
          <h2 className="section-title fade-up">
            Modo Comunidad
          </h2>
          <p className="community-subtitle fade-up">
            La forma más simple de transformar lo que tu municipio hace en confianza pública.
          </p>
        </div>

        <div className="community-grid">
          {features.map((f, i) => (
            <div className={`community-feature fade-up delay-${(i % 3) + 1}`} key={i}>
              <div className="community-feature-icon">{f.icon}</div>
              <h3 className="community-feature-title">{f.title}</h3>
              <p className="community-feature-desc">{f.desc}</p>
            </div>
          ))}
          {optionalFeatures.map((f, i) => (
            <div className={`community-feature community-feature--optional fade-up delay-${(i % 2) + 1}`} key={`opt-${i}`}>
              <div className="community-feature-top">
                <div className="community-feature-icon">{f.icon}</div>
                <AnimatedToggle />
              </div>
              <h3 className="community-feature-title">{f.title}</h3>
              <p className="community-feature-desc">{f.desc}</p>
              <span className="community-feature-optional-label">Activable desde el panel</span>
            </div>
          ))}
        </div>

        <div className="community-footer fade-up">
          <div className="community-footer-item">
            <span className="community-footer-label">Costo</span>
            <span className="community-footer-value community-footer-free">Gratuito, sin límite de tiempo</span>
          </div>
          <div className="community-footer-divider"></div>
          <div className="community-footer-item">
            <span className="community-footer-label">Esfuerzo</span>
            <span className="community-footer-value">Cargar tus proyectos actuales. Nada más.</span>
          </div>
          <div className="community-footer-divider"></div>
          <div className="community-footer-item">
            <span className="community-footer-label">Resultado</span>
            <span className="community-footer-value">Confianza + legitimidad + engagement ciudadano</span>
          </div>
        </div>

        <div className="community-cta fade-up">
          <a href="#acceso" className="btn-primary">Activar Modo Comunidad</a>
        </div>
      </div>
    </section>
  )
}
