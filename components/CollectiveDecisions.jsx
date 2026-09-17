function Person({ fill, height }) {
  return (
    <svg width="46" height="72" viewBox="0 0 46 72" style={{ height, width: 'auto' }} aria-hidden="true">
      <circle cx="23" cy="14" r="12" fill={fill} />
      <path d="M2 70c0-16 9-28 21-28s21 12 21 28" fill={fill} />
    </svg>
  )
}

export default function CollectiveDecisions() {
  return (
    <section className="collective-section">
      <div className="container collective-inner">
        <div className="collective-text fade-up">
          <h2 className="section-title">
            Miles de decisiones individuales<br />construyen una prioridad colectiva.
          </h2>
          <p>
            Vos tenés tus prioridades. Tu vecino tiene otras. Otro barrio puede necesitar algo
            completamente distinto. Citixen reúne esas decisiones y permite ver dónde los
            ciudadanos realmente quieren poner una parte de los recursos de su ciudad.
          </p>
          <p>
            No solamente qué proyecto recibió más &ldquo;me gusta&rdquo;.<br />
            No solamente qué opción ganó una encuesta.
          </p>
          <p className="collective-strong">Dónde los ciudadanos decidieron poner sus Créditos.</p>
        </div>

        <div className="collective-visual fade-up delay-1" aria-hidden="true">
          <div className="collective-people">
            <Person fill="var(--primary)" height={64} />
            <Person fill="var(--secondary)" height={78} />
            <Person fill="var(--accent)" height={70} />
            <Person fill="var(--primary-mid)" height={60} />
            <Person fill="var(--secondary)" height={84} />
            <Person fill="var(--primary)" height={68} />
          </div>
          <p className="collective-caption">Diferentes vecinos, una misma ciudad.</p>
        </div>
      </div>

      <style jsx>{`
        .collective-section { padding: 100px 0; background: var(--surface); }
        .collective-inner {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: center;
        }
        .collective-text p {
          font-size: 16px;
          line-height: 1.75;
          color: var(--text-secondary);
          margin-bottom: 18px;
        }
        .collective-strong {
          font-size: 20px;
          font-weight: 800;
          color: var(--primary) !important;
        }
        .collective-visual {
          background: var(--bg);
          border-radius: var(--radius-xl);
          padding: 40px 32px;
          text-align: center;
        }
        .collective-people {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          justify-content: center;
          gap: 10px;
          margin-bottom: 24px;
        }
        .collective-caption {
          font-size: 14px;
          font-style: italic;
          color: var(--text-muted);
        }
        @media (max-width: 900px) {
          .collective-inner { grid-template-columns: 1fr; gap: 40px; }
          .collective-text, .collective-visual { min-width: 0; }
        }
        @media (max-width: 420px) {
          .collective-visual { padding: 32px 16px; }
          .collective-people { gap: 6px; }
        }
      `}</style>
    </section>
  )
}
