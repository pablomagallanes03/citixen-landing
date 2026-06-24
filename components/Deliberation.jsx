export default function Deliberation() {
  return (
    <section className="delib-section" id="deliberacion">
      <div className="container delib-inner">
        <div className="delib-copy fade-up">
          <div className="delib-label"><span className="bar"></span> El motor de deliberación</div>
          <h2 className="delib-title">
            Cuando 3.000 vecinos responden,<br />
            <span>¿quién los lee a todos?</span>
          </h2>
          <p className="delib-lead">
            Una consulta abierta se llena de respuestas y nadie las lee enteras. El funcionario
            ojea las primeras veinte, las voces minoritarias se pierden y la participación se
            vuelve decorativa. Citixen lo cambia: lee cada respuesta y devuelve una lectura
            <strong> responsable, trazable y verificable</strong> — sin que la máquina decida nada.
          </p>

          <ul className="delib-guarantees">
            <li>
              <span className="delib-g-ic" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              <div>
                <strong>Nada sin cita, validado por máquina.</strong>
                <span>Cada afirmación abre las respuestas reales que la sostienen. Si la IA no puede citar, no afirma — el servidor descarta lo inventado.</span>
              </div>
            </li>
            <li>
              <span className="delib-g-ic" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              <div>
                <strong>Ninguna voz se pierde.</strong>
                <span>Las posturas poco frecuentes pero legítimas tienen su propia sección. Una minoría no desaparece por ser estadísticamente rara.</span>
              </div>
            </li>
            <li>
              <span className="delib-g-ic" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              <div>
                <strong>Se vigila a sí mismo.</strong>
                <span>Una segunda IA revisa si el borrador de conclusión se inclina hacia alguna postura y le avisa al funcionario. Marca; no reescribe.</span>
              </div>
            </li>
          </ul>

          <div className="delib-principle">
            <span className="delib-principle-mark" aria-hidden="true">“</span>
            La IA asiste, nunca decide. Baja el costo de <em>entender</em> y de <em>ser
            entendido</em> — pero el vecino y el funcionario deciden.
          </div>
        </div>

        <aside className="delib-demo fade-up delay-1" aria-hidden="true">
          <div className="delib-demo-head">
            <span className="delib-demo-q">¿Qué hacemos con el galpón ferroviario?</span>
            <span className="delib-demo-tag">312 respuestas · leídas todas</span>
          </div>

          <div className="delib-demo-block">
            <span className="delib-demo-kind">Acuerdo amplio</span>
            <p>“Que sea un espacio de uso público, no privado.”</p>
            <span className="delib-demo-cite">apoyado por 218 vecinos · ver citas</span>
          </div>

          <div className="delib-demo-block delib-demo-block--tension">
            <span className="delib-demo-kind">Tensión</span>
            <p>Centro cultural <em>vs.</em> mercado de productores. Sin tomar partido.</p>
            <span className="delib-demo-cite">2 posturas citadas</span>
          </div>

          <div className="delib-demo-block delib-demo-block--minority">
            <span className="delib-demo-kind">Voz minoritaria protegida</span>
            <p>“Preservar la estructura ferroviaria por su valor patrimonial.”</p>
            <span className="delib-demo-cite">4 vecinos · no se descartó</span>
          </div>

          <div className="delib-demo-foot">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            Representa a quienes participaron, no necesariamente a toda la ciudad.
          </div>
        </aside>
      </div>

      <style jsx>{`
        .delib-section {
          background: var(--citixen-gradient);
          color: #fff;
          padding: 96px 0;
          overflow: hidden;
        }
        .delib-inner {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 56px;
          align-items: center;
        }
        .delib-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: .8rem;
          font-weight: 700;
          letter-spacing: .04em;
          text-transform: uppercase;
          color: var(--secondary);
          margin-bottom: 22px;
        }
        .delib-label :global(.bar) {
          width: 26px; height: 2px; background: var(--accent); display: inline-block;
        }
        .delib-title {
          font-size: clamp(1.9rem, 3.4vw, 2.7rem);
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -.02em;
          margin: 0 0 20px;
        }
        .delib-title span { color: var(--secondary); }
        .delib-lead {
          font-size: 1.05rem;
          line-height: 1.6;
          color: rgba(255,255,255,.82);
          margin: 0 0 30px;
          max-width: 38ch;
        }
        .delib-lead strong { color: #fff; font-weight: 650; }

        .delib-guarantees { list-style: none; padding: 0; margin: 0 0 30px; display: grid; gap: 18px; }
        .delib-guarantees li { display: flex; gap: 14px; }
        .delib-g-ic {
          flex-shrink: 0;
          width: 28px; height: 28px;
          border-radius: 8px;
          display: grid; place-items: center;
          background: rgba(247,121,78,.18);
          color: var(--accent);
          margin-top: 2px;
        }
        .delib-guarantees strong { display: block; font-size: 1rem; color: #fff; margin-bottom: 3px; }
        .delib-guarantees span { font-size: .92rem; line-height: 1.5; color: rgba(255,255,255,.72); }

        .delib-principle {
          position: relative;
          border-left: 3px solid var(--accent);
          padding: 4px 0 4px 20px;
          font-size: 1.06rem;
          line-height: 1.5;
          font-weight: 500;
          color: #fff;
        }
        .delib-principle em { color: var(--secondary); font-style: normal; font-weight: 600; }
        .delib-principle-mark {
          position: absolute; left: 14px; top: -14px;
          font-size: 2.4rem; color: var(--accent); opacity: .5; line-height: 1;
        }

        /* Demo card */
        .delib-demo {
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 20px;
          padding: 24px;
          backdrop-filter: blur(6px);
          display: grid;
          gap: 14px;
        }
        .delib-demo-head { display: flex; flex-direction: column; gap: 6px; padding-bottom: 14px; border-bottom: 1px solid rgba(255,255,255,.12); }
        .delib-demo-q { font-size: 1.02rem; font-weight: 700; color: #fff; }
        .delib-demo-tag { font-size: .78rem; color: var(--secondary); font-weight: 600; }

        .delib-demo-block {
          background: rgba(255,255,255,.05);
          border-left: 3px solid var(--secondary);
          border-radius: 10px;
          padding: 13px 15px;
        }
        .delib-demo-block--tension { border-left-color: #f0b657; }
        .delib-demo-block--minority { border-left-color: var(--accent); }
        .delib-demo-kind {
          font-size: .68rem; font-weight: 700; letter-spacing: .04em; text-transform: uppercase;
          color: rgba(255,255,255,.65); display: block; margin-bottom: 6px;
        }
        .delib-demo-block p { margin: 0; font-size: .95rem; line-height: 1.45; color: #fff; }
        .delib-demo-block p em { color: var(--secondary); font-style: normal; }
        .delib-demo-cite { font-size: .76rem; color: rgba(255,255,255,.6); margin-top: 7px; display: block; }

        .delib-demo-foot {
          display: flex; align-items: center; gap: 8px;
          font-size: .78rem; line-height: 1.4;
          color: rgba(255,255,255,.6);
          padding-top: 12px; border-top: 1px solid rgba(255,255,255,.12);
        }
        .delib-demo-foot svg { flex-shrink: 0; color: var(--secondary); }

        @media (max-width: 880px) {
          .delib-section { padding: 72px 0; }
          .delib-inner { grid-template-columns: 1fr; gap: 40px; }
          .delib-lead { max-width: none; }
        }
      `}</style>
    </section>
  )
}
