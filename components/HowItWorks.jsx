const steps = [
  {
    n: '1',
    title: 'Contribuís a tu ciudad',
    desc: 'Pagás impuestos, multas y contribuciones. Lo mismo que ya hacés hoy.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    n: '2',
    title: 'Recibís Créditos Cívicos',
    desc: 'Una parte de esas contribuciones genera Créditos Cívicos asociados a tu perfil.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="6"/>
        <path d="M18.09 10.37A6 6 0 1 1 10.34 18"/>
        <path d="M7 6h1v4"/>
        <path d="M16.71 13.88l.7.71-2.82 2.82"/>
      </svg>
    ),
  },
  {
    n: '3',
    title: 'Elegís proyectos',
    desc: 'Asignás tus Créditos a los proyectos de tu ciudad que considerás prioritarios.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works-section" id="como-funciona">
      <div className="container">
        <div className="section-label fade-up"><span className="bar"></span> Cómo funciona</div>
        <h2 className="section-title fade-up">
          Pagás impuestos. Recibís Créditos Cívicos.<br />Elegís proyectos.
        </h2>
        <p className="section-desc fade-up">Así de simple.</p>

        <div className="hiw-grid fade-up delay-1">
          {steps.map((step, i) => (
            <div className="hiw-step-wrap" key={step.n}>
              <div className={`hiw-card delay-${i + 1}`}>
                <div className="hiw-number">{step.n}</div>
                <div className="hiw-icon">{step.icon}</div>
                <h3 className="hiw-title">{step.title}</h3>
                <p className="hiw-desc">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hiw-arrow" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hiw-not-money fade-up delay-2">
          <div className="hiw-not-money-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <p className="hiw-not-money-lead">
            Cuando contribuís a tu ciudad, esa parte que genera Créditos Cívicos queda asociada a tu perfil.
          </p>
          <div className="hiw-not-money-tags">
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              No se retiran
            </span>
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              No se venden
            </span>
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              No se transfieren
            </span>
          </div>
          <p className="hiw-not-money-strong">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Son capacidad de decisión.
          </p>
        </div>
      </div>

      <style jsx>{`
        .how-it-works-section { padding: 100px 0; background: var(--surface); }
        .hiw-grid {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-top: 56px;
        }
        .hiw-step-wrap { display: flex; align-items: center; gap: 8px; flex: 1; min-width: 0; }
        .hiw-card {
          flex: 1;
          background: var(--bg);
          border-radius: var(--radius-lg);
          padding: 28px 22px;
          text-align: center;
          position: relative;
        }
        .hiw-number {
          position: absolute;
          top: 14px;
          right: 16px;
          font-size: 13px;
          font-weight: 800;
          color: var(--text-muted);
        }
        .hiw-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--surface);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          margin: 0 auto 16px;
          box-shadow: var(--shadow-sm);
        }
        .hiw-title { font-size: 17px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; }
        .hiw-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.55; }
        .hiw-arrow { color: var(--border); flex-shrink: 0; }

        .hiw-not-money {
          margin: 56px auto 0;
          max-width: 560px;
          padding: 36px 40px;
          background: var(--bg);
          border-radius: var(--radius-xl);
          text-align: center;
        }
        .hiw-not-money-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--surface);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          box-shadow: var(--shadow-sm);
        }
        .hiw-not-money-lead { font-size: 15px; color: var(--text-secondary); margin-bottom: 20px; }
        .hiw-not-money-tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 22px;
        }
        .hiw-not-money-tags span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-muted);
          background: var(--surface);
          padding: 7px 14px 7px 12px;
          border-radius: 100px;
          box-shadow: var(--shadow-sm);
        }
        .hiw-not-money-tags span svg { color: var(--accent); flex-shrink: 0; }
        .hiw-not-money-strong {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 20px;
          font-weight: 800;
          color: var(--primary);
          padding-top: 20px;
          border-top: 1px solid var(--border-light);
        }
        .hiw-not-money-strong svg {
          flex-shrink: 0;
          color: #fff;
          background: var(--primary);
          border-radius: 50%;
          padding: 3px;
          box-sizing: content-box;
        }

        @media (max-width: 500px) {
          .hiw-not-money { padding: 28px 24px; }
        }

        @media (max-width: 860px) {
          .hiw-grid { flex-direction: column; }
          .hiw-step-wrap { flex-direction: column; width: 100%; }
          .hiw-arrow { transform: rotate(90deg); margin: 4px 0; }
        }
      `}</style>
    </section>
  )
}
