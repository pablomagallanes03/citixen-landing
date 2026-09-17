export default function CitizenGovernmentSplit() {
  return (
    <section className="cgs-section">
      <div className="container">
        <div className="section-label fade-up"><span className="bar"></span> Ciudadanos y gobierno</div>
        <h2 className="section-title fade-up">Vos elegís. El municipio ejecuta.</h2>
        <p className="section-desc fade-up">
          Citixen no reemplaza al gobierno ni convierte el presupuesto municipal en una cuenta
          manejada desde una app. El municipio sigue administrando, controlando y ejecutando
          los recursos públicos. Una parte de las prioridades se construye directamente con los
          ciudadanos.
        </p>

        <div className="cgs-grid fade-up delay-1">
          <div className="cgs-card">
            <div className="cgs-ic">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3>La ciudadanía decide.</h3>
            <p>Vecinos que conocen su ciudad y sus necesidades.</p>
          </div>
          <div className="cgs-card">
            <div className="cgs-ic">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V9l7-6 7 6v12"/><path d="M9 21V13h6v8"/></svg>
            </div>
            <h3>El gobierno ejecuta.</h3>
            <p>Proyectos viables, con respaldo ciudadano y mayor legitimidad.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cgs-section { padding: 100px 0; background: var(--surface); }
        .cgs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 760px;
          margin-top: 48px;
        }
        .cgs-card {
          background: var(--bg);
          border-radius: var(--radius-lg);
          padding: 32px 28px;
        }
        .cgs-ic {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: var(--surface);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          box-shadow: var(--shadow-sm);
        }
        .cgs-card h3 { font-size: 19px; font-weight: 800; color: var(--text-primary); margin-bottom: 8px; }
        .cgs-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.5; }
        @media (max-width: 700px) {
          .cgs-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
