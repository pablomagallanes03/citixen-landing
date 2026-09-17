const chain = [
  {
    label: 'Proponer',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 2z"/></svg>
    ),
  },
  {
    label: 'Debatir',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
  },
  {
    label: 'Priorizar',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
    ),
  },
  {
    label: 'Ejecutar',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
    ),
  },
]

const examples = ['Una plaza abandonada.', 'Una esquina peligrosa.', 'Un espacio cultural.', 'Una necesidad del barrio.']

export default function CitizenInitiatives() {
  return (
    <section className="ci-section">
      <div className="container">
        <div className="section-label fade-up"><span className="bar"></span> Ideas desde la comunidad</div>
        <h2 className="section-title fade-up">Una buena idea también<br />puede empezar con un vecino.</h2>
        <p className="section-desc fade-up">
          No todos los proyectos tienen que nacer dentro del gobierno. Un ciudadano puede
          detectar un problema, proponer una solución y conseguir el apoyo de su comunidad.
        </p>

        <ul className="ci-examples fade-up delay-1">
          {examples.map((ex) => <li key={ex}>{ex}</li>)}
        </ul>

        <div className="ci-chain fade-up delay-2">
          {chain.map((step, i) => (
            <div className="ci-chain-item" key={step.label}>
              <div className="ci-chain-node">
                <div className="ci-chain-ic">{step.icon}</div>
                <span>{step.label}</span>
              </div>
              {i < chain.length - 1 && <div className="ci-chain-line" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <p className="ci-closing fade-up delay-3">
          Una idea puede empezar con una persona y terminar convertida en un proyecto de ciudad.
        </p>
      </div>

      <style jsx>{`
        .ci-section { padding: 100px 0; background: var(--bg); }
        .ci-examples {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: -32px 0 56px;
        }
        .ci-examples li {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--surface);
          padding: 9px 16px;
          border-radius: 100px;
          box-shadow: var(--shadow-sm);
        }
        .ci-chain {
          display: flex;
          align-items: center;
          max-width: 640px;
        }
        .ci-chain-item { display: flex; align-items: center; flex: 1; }
        .ci-chain-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .ci-chain-ic {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--primary);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
        }
        .ci-chain-node span { font-size: 13px; font-weight: 700; color: var(--text-primary); }
        .ci-chain-line { flex: 1; height: 2px; background: var(--border); margin: 0 8px 24px; }

        .ci-closing {
          margin-top: 48px;
          font-size: 19px;
          font-weight: 700;
          color: var(--primary);
          max-width: 620px;
        }

        @media (max-width: 700px) {
          .ci-chain { flex-direction: column; align-items: flex-start; gap: 20px; }
          .ci-chain-item { flex-direction: column; align-items: flex-start; width: 100%; }
          .ci-chain-line { display: none; }
        }
      `}</style>
    </section>
  )
}
