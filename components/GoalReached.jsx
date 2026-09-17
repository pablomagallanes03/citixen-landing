export default function GoalReached() {
  return (
    <section className="gr-section">
      <div className="container">
        <h2 className="section-title fade-up">¿Y cuándo un proyecto alcanza su meta?</h2>
        <p className="section-desc fade-up">
          Supongamos que recuperar la plaza necesita $20.000. Los vecinos empiezan a
          asignarle sus Créditos:
        </p>

        <div className="gr-race fade-up delay-1">
          <span>8.420 CC</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          <span>13.750 CC</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          <span>18.900 CC</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          <span className="gr-race-final">
            20.000 CC
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </span>
        </div>
        <p className="gr-race-label fade-up delay-1">Meta alcanzada.</p>

        <p className="section-desc fade-up delay-2">
          Cuando el proyecto reúne los 20.000 CC, alcanza los $20.000 de financiamiento
          previstos. El responsable solicita la ejecución de los Créditos al municipio y,
          una vez cumplidas las condiciones del proyecto, el municipio libera los fondos
          para ejecutarlo.
        </p>

        <div className="gr-arrow-chain fade-up delay-2">
          <span>20.000 CC asignados</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          <span>$20.000 para el proyecto</span>
        </div>

        <p className="section-desc fade-up delay-2">
          Citixen no se queda con una comisión ni convierte esos recursos en dinero privado
          del ciudadano. Los fondos siguen siendo públicos hasta su ejecución.
        </p>

        <div className="gr-stats fade-up delay-3">
          <div className="hv-metric">
            <span className="hv-metric-num">100 CC</span>
            <span className="hv-metric-label">asignados</span>
          </div>
          <span className="hv-metric-div"></span>
          <div className="hv-metric">
            <span className="hv-metric-num">$100</span>
            <span className="hv-metric-label">destinados al proyecto</span>
          </div>
          <span className="hv-metric-div"></span>
          <div className="hv-metric">
            <span className="hv-metric-num">0%</span>
            <span className="hv-metric-label">comisión para Citixen</span>
          </div>
        </div>

        <div className="gr-closing fade-up delay-3">
          <h3>Cada peso representado por tus Créditos tiene un destino que vos elegiste.</h3>
          <p>
            <strong>Vos decidís el destino.</strong> El municipio garantiza los recursos.
            El proyecto los convierte en resultados.
          </p>
        </div>
      </div>

      <style jsx>{`
        .gr-section { padding: 100px 0; background: var(--surface); }

        .gr-race {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 40px;
          font-size: 17px;
          font-weight: 700;
          color: var(--text-secondary);
        }
        .gr-race svg { color: var(--border); flex-shrink: 0; }
        .gr-race-final {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #fff;
          background: var(--green, #22c55e);
          padding: 8px 16px;
          border-radius: 100px;
        }
        .gr-race-label {
          font-size: 14px;
          font-weight: 700;
          color: var(--green, #22c55e);
          margin: 10px 0 40px;
        }

        .gr-arrow-chain {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin: 24px 0;
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .gr-arrow-chain svg { color: var(--border); flex-shrink: 0; }

        .gr-stats {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin: 40px 0;
          padding: 24px 28px;
          background: var(--bg);
          border-radius: var(--radius-lg);
          max-width: 560px;
        }
        .gr-stats .hv-metric-num { color: var(--primary); font-size: 22px; }

        .gr-closing {
          margin-top: 48px;
          max-width: 680px;
        }
        .gr-closing h3 {
          font-size: 26px;
          font-weight: 800;
          line-height: 1.35;
          color: var(--text-primary);
          margin-bottom: 16px;
        }
        .gr-closing p {
          font-size: 16px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .gr-closing p strong { color: var(--primary); font-weight: 800; }

        @media (max-width: 600px) {
          .gr-closing h3 { font-size: 21px; }
          .gr-stats { flex-wrap: wrap; gap: 16px 24px; }
        }
      `}</style>
    </section>
  )
}
