export default function NotOnePriority() {
  return (
    <section className="nop-section">
      <div className="container nop-inner">
        <div className="nop-text fade-up">
          <h2 className="section-title">
            Una ciudad no tiene<br />una sola prioridad.
          </h2>
          <p className="nop-big">Tiene miles.</p>
          <p>
            Citixen permite que esas prioridades sean visibles. Que los ciudadanos puedan
            expresarlas. Que los proyectos compitan por su apoyo. Y que el municipio pueda
            saber qué iniciativas tienen respaldo ciudadano antes de destinar recursos a
            ejecutarlas.
          </p>
        </div>

        <div className="nop-callout fade-up delay-1">
          <div className="nop-callout-ic">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
          </div>
          <p><strong>Para el ciudadano,</strong><br />poder de decisión.</p>
          <p><strong>Para el municipio,</strong><br />prioridades respaldadas por sus vecinos.</p>
        </div>
      </div>

      <style jsx>{`
        .nop-section { padding: 100px 0; background: var(--surface); }
        .nop-inner {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 56px;
          align-items: center;
        }
        .nop-big { font-size: 26px; font-weight: 800; color: var(--accent); margin-bottom: 20px; }
        .nop-text p { font-size: 16px; line-height: 1.75; color: var(--text-secondary); }

        .nop-callout {
          background: var(--bg);
          border-radius: var(--radius-xl);
          padding: 36px 32px;
        }
        .nop-callout-ic {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: var(--surface);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: var(--shadow-sm);
        }
        .nop-callout p {
          font-size: 16px;
          line-height: 1.5;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
        .nop-callout p:last-child { margin-bottom: 0; }
        .nop-callout strong { color: var(--text-primary); font-weight: 800; }

        @media (max-width: 900px) {
          .nop-inner { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </section>
  )
}
