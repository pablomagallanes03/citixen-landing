import PhoneMockup from './PhoneMockup'

export default function MoreThanOpinion() {
  return (
    <section className="more-than-opinion-section">
      <div className="container mto-inner">
        <div className="mto-text fade-up">
          <div className="section-label"><span className="bar"></span> Más que opinar</div>
          <h2 className="section-title">
            Participar debería<br />ser más que opinar.
          </h2>
          <p>
            Hoy existen encuestas y consultas públicas donde los ciudadanos pueden expresar lo
            que piensan. Citixen agrega algo diferente: <strong>recursos detrás de la decisión.</strong>
          </p>

          <div className="mto-compare">
            <div className="mto-compare-item mto-compare-item--old">
              <span className="mto-compare-label">No solo decís</span>
              <p>&ldquo;Me gustaría que hicieran esto.&rdquo;</p>
            </div>
            <div className="mto-compare-item mto-compare-item--new">
              <span className="mto-compare-label">Podés decir</span>
              <p>&ldquo;Quiero que una parte de los recursos vaya acá.&rdquo;</p>
            </div>
          </div>
        </div>

        <div className="mto-visual fade-up delay-1">
          <PhoneMockup />
        </div>
      </div>

      <style jsx>{`
        .more-than-opinion-section { padding: 100px 0; background: var(--bg); overflow: hidden; }
        .mto-inner {
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: 56px;
          align-items: center;
        }
        .mto-text p {
          font-size: 16px;
          line-height: 1.75;
          color: var(--text-secondary);
          margin-bottom: 28px;
        }
        .mto-text p strong { color: var(--text-primary); }
        .mto-compare {
          display: grid;
          gap: 14px;
          max-width: 460px;
        }
        .mto-compare-item {
          padding: 18px 22px;
          border-radius: var(--radius-lg);
        }
        .mto-compare-item--old {
          background: var(--surface);
          border: 1px dashed var(--border);
        }
        .mto-compare-item--old p { color: var(--text-muted); font-style: italic; }
        .mto-compare-item--new {
          background: var(--primary);
          box-shadow: var(--shadow-lg);
        }
        .mto-compare-item--new p { color: #fff; font-weight: 700; font-size: 17px; }
        .mto-compare-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 6px;
          color: var(--text-muted);
        }
        .mto-compare-item--new .mto-compare-label { color: rgba(255,255,255,0.65); }
        .mto-compare-item p { margin: 0; font-size: 15px; }

        .mto-visual { display: flex; justify-content: center; }

        @media (max-width: 900px) {
          .mto-inner { grid-template-columns: 1fr; gap: 40px; }
          .mto-visual { order: -1; }
        }
      `}</style>
    </section>
  )
}
