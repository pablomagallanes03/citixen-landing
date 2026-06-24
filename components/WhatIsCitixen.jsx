export default function WhatIsCitixen() {
  return (
    <section className="what-is-section" id="gobierno">
      <div className="container">
        <h2 className="section-title fade-up">Una sola plataforma.<br />Todo lo que tu ciudad necesita para decidir con su gente.</h2>
        <p className="section-desc fade-up">
          Empezás escuchando a tus vecinos y, cuando tu ciudad esté lista, le das peso real con un switch.
        </p>

        <div className="tools-grid fade-up delay-1">
          <article className="tool-card">
            <div className="tool-ic" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </div>
            <h3 className="tool-name">Opiná</h3>
            <p className="tool-desc">
              Tu municipio pregunta de verdad. Consultas con ranking, opciones o respuesta
              abierta — y resultados públicos cuando cierran.
            </p>
          </article>

          <article className="tool-card tool-card--star">
            <div className="tool-star-flag">El diferenciador</div>
            <div className="tool-ic tool-ic--star" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a7 7 0 0 0-4 12.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 2z"/>
                <path d="M9 21h6"/>
              </svg>
            </div>
            <h3 className="tool-name">Deliberación con IA</h3>
            <p className="tool-desc">
              Cuando responden cientos de vecinos, los lee a todos sin perder ninguna voz:
              resume, agrupa los temas, marca acuerdos y tensiones — <strong>citando texto
              real de cada vecino</strong>. La IA asiste, nunca decide.
            </p>
          </article>

          <article className="tool-card">
            <div className="tool-ic" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"/>
                <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
              </svg>
            </div>
            <h3 className="tool-name">Propuestas ciudadanas</h3>
            <p className="tool-desc">
              El vecino propone, la comunidad apoya. El municipio ve, en vivo, qué quiere
              su ciudad — como insumo de gestión, no como ruido.
            </p>
          </article>

          <article className="tool-card">
            <div className="tool-ic" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h3 className="tool-name">Mi Ciudad</h3>
            <p className="tool-desc">
              Portal público con el seguimiento de cada proyecto y un reporte mensual
              descargable. La gestión, visible y verificable.
            </p>
          </article>

          <article className="tool-card">
            <div className="tool-ic" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3 className="tool-name">Comunicación institucional</h3>
            <p className="tool-desc">
              El municipio le habla a sus vecinos de forma segmentada y trazable. Avisos,
              convocatorias y emergencias — con registro público, no spam.
            </p>
          </article>

          <article className="tool-card tool-card--switch">
            <div className="tool-ic tool-ic--switch" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v8M8 12h8"/>
              </svg>
            </div>
            <h3 className="tool-name">Créditos Cívicos</h3>
            <p className="tool-desc">
              El presupuesto participativo continuo. Cuando tu ciudad esté lista, lo que
              los vecinos deciden pasa a tener <strong>peso económico real</strong>.
            </p>
            <div className="tool-switch-flag">
              <span className="tool-switch-knob" aria-hidden="true"></span>
              Se activa con un switch, cuando estés listo
            </div>
          </article>
        </div>
      </div>

      <style jsx>{`
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 56px;
        }
        .tool-card {
          position: relative;
          background: var(--surface);
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 28px 26px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .tool-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px -22px rgba(2, 27, 78, .45);
          border-color: #cbd5e1;
        }
        .tool-ic {
          width: 48px;
          height: 48px;
          border-radius: 13px;
          display: grid;
          place-items: center;
          background: rgba(60, 158, 206, .12);
          color: var(--primary);
        }
        .tool-name {
          font-size: 1.18rem;
          font-weight: 700;
          color: var(--dark);
          margin: 0;
          letter-spacing: -.01em;
        }
        .tool-desc {
          font-size: .96rem;
          line-height: 1.55;
          color: #475569;
          margin: 0;
        }
        .tool-desc strong { color: var(--dark); font-weight: 650; }

        /* Star — el motor de deliberación */
        .tool-card--star {
          background: var(--citixen-gradient);
          border-color: transparent;
          color: #fff;
          grid-row: span 1;
          box-shadow: 0 20px 48px -26px rgba(2, 27, 78, .7);
        }
        .tool-card--star:hover { box-shadow: 0 26px 56px -24px rgba(2, 27, 78, .8); }
        .tool-card--star .tool-name { color: #fff; }
        .tool-card--star .tool-desc { color: rgba(255, 255, 255, .82); }
        .tool-card--star .tool-desc strong { color: #fff; }
        .tool-ic--star { background: rgba(247, 121, 78, .22); color: var(--accent); }
        .tool-star-flag {
          position: absolute;
          top: 18px;
          right: 18px;
          font-size: .68rem;
          font-weight: 700;
          letter-spacing: .04em;
          text-transform: uppercase;
          color: var(--accent);
          background: rgba(247, 121, 78, .14);
          padding: 5px 10px;
          border-radius: 999px;
        }

        /* Switch — Créditos Cívicos */
        .tool-card--switch { border-color: rgba(247, 121, 78, .35); }
        .tool-ic--switch { background: rgba(247, 121, 78, .14); color: var(--accent); }
        .tool-switch-flag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          align-self: flex-start;
          margin-top: auto;
          font-size: .72rem;
          font-weight: 700;
          letter-spacing: .02em;
          color: var(--accent);
          background: rgba(247, 121, 78, .1);
          padding: 6px 12px;
          border-radius: 999px;
        }
        .tool-switch-knob {
          width: 26px;
          height: 15px;
          border-radius: 999px;
          background: var(--accent);
          position: relative;
          flex-shrink: 0;
        }
        .tool-switch-knob::after {
          content: '';
          position: absolute;
          top: 2px;
          right: 2px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #fff;
        }

        @media (max-width: 920px) {
          .tools-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .tools-grid { grid-template-columns: 1fr; gap: 16px; margin-top: 40px; }
        }
      `}</style>
    </section>
  )
}
