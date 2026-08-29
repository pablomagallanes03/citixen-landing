export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="fade-up delay-1">
            Pagás impuestos.<br />
            <span style={{ color: 'var(--secondary)' }}>Ahora también priorizás en qué se usan.</span>
          </h1>
          <p className="fade-up delay-2">
            Citixen convierte lo que tu municipio recauda en decisiones compartidas: los
            vecinos priorizan proyectos reales con Créditos Cívicos, y el gobierno gana
            respaldo genuino en cada uno.
          </p>
          <div className="hero-buttons fade-up delay-3">
            <a href="#acceso" className="btn-primary">
              Activá Citixen en tu ciudad
            </a>
            <a href="#gobierno" className="btn-secondary">
              Ver cómo funciona →
            </a>
          </div>
        </div>

        {/* Visual: "tu ciudad te escucha" — consulta en vivo, cada voz leída (giro jun 2026). */}
        <div className="hero-mockup fade-up delay-2">
          <div className="hl-wrap">
            <div className="hl-stack hl-stack--2" aria-hidden="true" />
            <div className="hl-stack hl-stack--1" aria-hidden="true" />

            <div className="hl-card">
              <div className="hl-head">
                <span className="hl-live"><span className="hl-live-dot" />Consulta abierta</span>
                <span className="hl-head-label">Opiná</span>
              </div>
              <h3 className="hl-q">¿Qué hacemos con el galpón ferroviario abandonado?</h3>

              <ul className="hl-voices">
                <li>
                  <span className="hl-av hl-av--1">V</span>
                  <span className="hl-voice-text">Que sea un espacio público, no privado.</span>
                  <svg className="hl-tick" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                </li>
                <li>
                  <span className="hl-av hl-av--2">M</span>
                  <span className="hl-voice-text">Un centro cultural para los pibes del barrio.</span>
                  <svg className="hl-tick" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                </li>
                <li className="hl-voice--minority">
                  <span className="hl-av hl-av--3">J</span>
                  <span className="hl-voice-text">Preservar la estructura por su valor histórico.</span>
                  <svg className="hl-tick" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                </li>
              </ul>

              <div className="hl-more">+ 309 vecinos más</div>

              <div className="hl-foot">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>
                </svg>
                <span><strong>312 respuestas</strong> · todas leídas, ninguna se pierde</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hl-wrap {
          position: relative;
          width: 100%;
          max-width: 420px;
          margin-left: auto;
        }
        .hl-stack {
          position: absolute;
          inset: 0;
          border-radius: 22px;
          z-index: 0;
          border: 1px solid rgba(255, 255, 255, 0.14);
        }
        .hl-stack--1 { transform: translate(-12px, 15px); background: rgba(255, 255, 255, 0.10); }
        .hl-stack--2 { transform: translate(-24px, 30px); background: rgba(255, 255, 255, 0.05); }

        .hl-card {
          position: relative;
          z-index: 1;
          background: var(--surface);
          border-radius: 22px;
          padding: 24px;
          box-shadow: 0 30px 70px -28px rgba(2, 12, 40, 0.72);
        }
        .hl-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .hl-live {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: var(--secondary);
          background: rgba(60, 158, 206, 0.12);
          padding: 5px 11px;
          border-radius: 999px;
        }
        .hl-live-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--secondary);
          box-shadow: 0 0 0 0 rgba(60, 158, 206, 0.6);
          animation: hl-pulse 1.8s infinite;
        }
        @keyframes hl-pulse {
          0% { box-shadow: 0 0 0 0 rgba(60, 158, 206, 0.5); }
          70% { box-shadow: 0 0 0 7px rgba(60, 158, 206, 0); }
          100% { box-shadow: 0 0 0 0 rgba(60, 158, 206, 0); }
        }
        .hl-head-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #94a3b8;
        }
        .hl-q {
          font-size: 1.12rem;
          line-height: 1.3;
          font-weight: 750;
          color: var(--dark);
          margin: 0 0 18px;
          letter-spacing: -0.01em;
        }

        .hl-voices { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
        .hl-voices li {
          display: flex;
          align-items: center;
          gap: 11px;
          background: #f4f7fa;
          border-radius: 12px;
          padding: 11px 13px;
        }
        .hl-voice--minority { box-shadow: inset 3px 0 0 var(--accent); }
        .hl-av {
          flex-shrink: 0;
          width: 28px; height: 28px;
          border-radius: 50%;
          display: grid; place-items: center;
          font-size: 12px; font-weight: 700; color: #fff;
        }
        .hl-av--1 { background: #0A3D91; }
        .hl-av--2 { background: #3C9ECE; }
        .hl-av--3 { background: #F7794E; }
        .hl-voice-text {
          flex: 1;
          font-size: 0.92rem;
          line-height: 1.35;
          color: #334155;
        }
        .hl-tick { flex-shrink: 0; color: var(--secondary); }

        .hl-more {
          font-size: 0.82rem;
          font-weight: 600;
          color: #94a3b8;
          padding: 9px 13px 2px;
        }

        .hl-foot {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid #eef2f6;
          font-size: 0.86rem;
          color: #475569;
        }
        .hl-foot svg { flex-shrink: 0; color: var(--secondary); }
        .hl-foot strong { color: var(--dark); font-weight: 700; }

        @media (max-width: 600px) {
          .hl-wrap { max-width: 100%; margin: 0 auto; }
          .hl-stack { display: none; }
        }
      `}</style>

      {/*
        Visual anterior (arco proyecto → obra, hv-*) archivado en git (jun 2026).
        El giro corrió el hero al eje "escucha"; el arco de ejecución sigue vivo en /soygobierno.
      */}
    </section>
  )
}
