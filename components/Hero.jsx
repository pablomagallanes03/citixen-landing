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

        {/* Visual: momento de asignación de Créditos Cívicos — hace visible la promesa fiscal del H1 (ago 2026). */}
        <div className="hero-mockup fade-up delay-2">
          <div className="hl-wrap">
            <div className="hl-stack hl-stack--2" aria-hidden="true" />
            <div className="hl-stack hl-stack--1" aria-hidden="true" />

            <div className="hl-card">
              <div className="hl-head">
                <span className="hl-live"><span className="hl-live-dot" />Este mes</span>
                <span className="hl-head-label">Créditos Cívicos</span>
              </div>
              <h3 className="hl-q">Tenés 100 CC para priorizar</h3>

              <ul className="hl-alloc">
                <li>
                  <span className="hl-alloc-name">Parque del barrio</span>
                  <span className="hl-alloc-track"><span className="hl-alloc-fill hl-alloc-fill--1" style={{ width: '40%' }} /></span>
                  <span className="hl-alloc-amount">40 CC</span>
                </li>
                <li>
                  <span className="hl-alloc-name">Centro cultural</span>
                  <span className="hl-alloc-track"><span className="hl-alloc-fill hl-alloc-fill--2" style={{ width: '25%' }} /></span>
                  <span className="hl-alloc-amount">25 CC</span>
                </li>
                <li>
                  <span className="hl-alloc-name">Iluminación</span>
                  <span className="hl-alloc-track"><span className="hl-alloc-fill hl-alloc-fill--3" style={{ width: '20%' }} /></span>
                  <span className="hl-alloc-amount">20 CC</span>
                </li>
                <li>
                  <span className="hl-alloc-name">Ciclovía</span>
                  <span className="hl-alloc-track"><span className="hl-alloc-fill hl-alloc-fill--4" style={{ width: '15%' }} /></span>
                  <span className="hl-alloc-amount">15 CC</span>
                </li>
              </ul>

              <div className="hl-more">+ 1.240 vecinos priorizando este mes</div>

              <div className="hl-foot">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span><strong>100 CC asignados</strong> · a proyectos aprobados por tu municipio</span>
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

        .hl-alloc { list-style: none; padding: 0; margin: 0; display: grid; gap: 12px; }
        .hl-alloc li {
          display: flex;
          align-items: center;
          gap: 11px;
        }
        .hl-alloc-name {
          flex-shrink: 0;
          width: 132px;
          font-size: 0.86rem;
          font-weight: 600;
          color: #334155;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .hl-alloc-track {
          flex: 1;
          height: 8px;
          border-radius: 999px;
          background: #eef2f6;
          overflow: hidden;
        }
        .hl-alloc-fill {
          display: block;
          height: 100%;
          border-radius: 999px;
        }
        .hl-alloc-fill--1 { background: var(--primary); }
        .hl-alloc-fill--2 { background: var(--secondary); }
        .hl-alloc-fill--3 { background: rgba(10, 61, 145, 0.4); }
        .hl-alloc-fill--4 { background: var(--accent); }
        .hl-alloc-amount {
          flex-shrink: 0;
          width: 44px;
          text-align: right;
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--dark);
        }

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
        Historial del visual del hero: arco proyecto → obra (hv-*, archivado jun 2026) → consulta
        con voces (eje "escucha", jun-ago 2026) → asignación de CC (eje fiscal, ago 2026, actual,
        coherente con el H1/subhead "Pagás impuestos..."). El arco de ejecución del proyecto
        sigue vivo en /soygobierno.
      */}
    </section>
  )
}
