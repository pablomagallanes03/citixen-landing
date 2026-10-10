import Image from 'next/image'

const ITEMS = [
  'Fotos del antes y el después, documentos y comprobantes de la ejecución.',
  'La historia contada: qué se hizo, qué cambió en el barrio, a cuántos vecinos alcanzó.',
  'Queda público y permanente en el perfil del proyecto, no se edita ni se borra después.',
]

export default function ProofOfImpact() {
  return (
    <section className="poi-section">
      <div className="container poi-grid">
        <div className="poi-content reveal-left">
          <span className="poi-eyebrow">El círculo se cierra con pruebas</span>
          <h2 className="poi-title">Tu decisión no se pierde en un número. Se convierte en algo real.</h2>
          <p className="poi-intro">
            No es &ldquo;se hizo, confíen&rdquo;. Es evidencia pública y permanente, con cara,
            lugar y fecha.
          </p>
          <ul className="poi-list">
            {ITEMS.map((item, i) => (
              <li key={i}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  <path d="M8 12l3 3 5-5"/>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="poi-visual reveal-right delay-1">
          <div className="poi-card">
            <div className="poi-photo">
              <Image
                src="/mockup/plaza.png"
                alt="Ejemplo ilustrativo de un proyecto de plaza"
                fill
                sizes="440px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="poi-meta">
              <span className="poi-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Pack de evidencia
              </span>
              <p className="poi-cap">Datos ficticios: 12 fotos · 3 documentos · historia de cierre · 412 vecinos alcanzados</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .poi-section { padding: 104px 0; background: var(--citixen-gradient); }
        .poi-grid {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 64px;
          align-items: center;
        }
        .poi-eyebrow {
          display: inline-block;
          font-size: 12px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: var(--accent); margin-bottom: 16px;
        }
        .poi-title {
          font-size: 32px; font-weight: 800; line-height: 1.25;
          letter-spacing: -0.5px; color: #fff; margin-bottom: 18px;
        }
        .poi-intro {
          font-size: 17px; line-height: 1.7;
          color: rgba(255,255,255,0.72); margin-bottom: 28px;
        }
        .poi-list { list-style: none; display: flex; flex-direction: column; gap: 16px; margin-bottom: 28px; padding: 0; }
        .poi-list li {
          display: flex; gap: 12px; align-items: flex-start;
          font-size: 16px; line-height: 1.55; color: rgba(255,255,255,0.9);
        }
        .poi-list svg { flex-shrink: 0; margin-top: 2px; color: var(--accent); }
        .poi-closing {
          font-size: 18px; font-weight: 700; line-height: 1.6; color: #fff;
          border-left: 3px solid var(--accent); padding-left: 18px;
          margin: 0;
        }

        .poi-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: var(--radius-xl);
          padding: 14px;
          box-shadow: var(--shadow-lg);
        }
        .poi-photo {
          position: relative; width: 100%; aspect-ratio: 4 / 3;
          border-radius: var(--radius-lg); overflow: hidden;
        }
        .poi-meta { padding: 16px 8px 8px; }
        .poi-tag {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 700; color: var(--accent);
          text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;
        }
        .poi-cap { font-size: 14px; line-height: 1.5; color: rgba(255,255,255,0.75); margin: 0; }

        @media (max-width: 900px) {
          .poi-section { padding: 72px 0; }
          .poi-grid { grid-template-columns: 1fr; gap: 40px; }
          .poi-title { font-size: 26px; }
        }
      `}</style>
    </section>
  )
}
