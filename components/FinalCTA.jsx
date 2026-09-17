import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="container fade-up">
        <h2 className="final-cta-title">
          Del impuesto al proyecto,<br />
          <span>sin perder la decisión en el camino.</span>
        </h2>
        <div className="final-cta-label">Conocé Citixen</div>
        <div className="final-cta-buttons">
          <Link href="/soyvecino" className="btn-primary">Quiero participar</Link>
          <a href="#acceso" className="final-cta-secondary">Quiero llevar Citixen a mi municipio</a>
        </div>
      </div>

      <style jsx>{`
        .final-cta-section { padding: 100px 0; background: var(--bg); text-align: center; }
        .final-cta-title {
          font-size: 34px;
          font-weight: 800;
          line-height: 1.35;
          color: var(--text-primary);
          margin-bottom: 20px;
        }
        .final-cta-title span { color: var(--primary); }
        .final-cta-label {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 24px;
        }
        .final-cta-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .final-cta-secondary {
          display: inline-flex;
          align-items: center;
          padding: 16px 32px;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-lg);
          font-weight: 600;
          font-size: 16px;
          color: var(--text-primary);
          transition: all 0.3s;
        }
        .final-cta-secondary:hover { border-color: var(--primary); color: var(--primary); }
        @media (max-width: 600px) {
          .final-cta-title { font-size: 26px; }
        }
      `}</style>
    </section>
  )
}
