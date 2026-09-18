import { useState } from 'react'

const PROJECTS = [
  { id: 'plaza', emoji: '🌳', name: 'Recuperar Plaza del Barrio Sur', goalUsd: 20000, limit: 40, color: 'var(--primary)' },
  { id: 'luz', emoji: '💡', name: 'Nueva iluminación pública', goalUsd: 12000, limit: 30, color: 'var(--secondary)' },
  { id: 'ciclovia', emoji: '🚲', name: 'Ciclovías seguras', goalUsd: 35000, limit: 20, color: 'var(--accent)' },
  { id: 'cultura', emoji: '🎭', name: 'Recuperar el Centro Cultural', goalUsd: 8000, limit: 10, color: '#8b5cf6' },
]

const fmt = (n) => n.toLocaleString('es-AR')

export default function TaxToProject() {
  const [amounts, setAmounts] = useState(PROJECTS.map((p) => p.limit))
  const total = amounts.reduce((s, a) => s + a, 0)

  const handleChange = (index, rawValue) => {
    const max = PROJECTS[index].limit
    const val = Math.max(0, Math.min(max, Number(rawValue)))
    setAmounts((prev) => prev.map((a, i) => (i === index ? val : a)))
  }

  return (
    <section className="ttp-section" id="asignacion">
      <div className="container">
        <div className="section-label fade-up"><span className="bar"></span> Un ejemplo</div>
        <h2 className="section-title fade-up">De tu impuesto al proyecto</h2>

        <div className="ttp-formula fade-up delay-1">
          <span>$1</span>
          <span className="ttp-formula-eq">=</span>
          <span>1 Crédito Cívico</span>
          <span className="ttp-formula-eq">=</span>
          <span>$1 de decisión</span>
        </div>
        <p className="ttp-lead fade-up delay-1">
          Pagaste $100 de un impuesto municipal. Tu municipio te asigna 100 Créditos Cívicos.
        </p>
        <p className="section-desc fade-up delay-1">
          No son puntos, premios ni una moneda virtual. Cada Crédito Cívico representa $1 que
          podés asignar a proyectos de tu ciudad.
        </p>

        <div className="ttp-arrow-chain fade-up delay-1">
          <span>$100 aportados</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          <span>100 CC</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          <span>$100 asignados por vos</span>
        </div>

        <h3 className="ttp-subhead fade-up delay-2">Ahora empieza la decisión.</h3>
        <p className="section-desc fade-up delay-2">
          No podés ponerlos todos en el mismo lugar. Cada proyecto tiene una meta de
          financiamiento y un límite de Créditos Cívicos por ciudadano. Por ejemplo:
        </p>

        <div className="ttp-card fade-up delay-2">
          <div className="ttp-list">
            {PROJECTS.map((p, i) => (
              <div className="ttp-row" key={p.id}>
                <div className="ttp-row-top">
                  <span className="ttp-emoji">{p.emoji}</span>
                  <div className="ttp-row-text">
                    <span className="ttp-name">{p.name}</span>
                    <span className="ttp-meta">Meta: ${fmt(p.goalUsd)} / {fmt(p.goalUsd)} CC · Tu límite: {p.limit} CC</span>
                  </div>
                  <span className="ttp-amount" style={{ color: p.color }}>
                    Asignás {amounts[i]} <small>CC</small>
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={p.limit}
                  value={amounts[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  className="ttp-slider"
                  style={{ '--fill': p.color, '--pct': `${(amounts[i] / p.limit) * 100}%` }}
                  aria-label={`Créditos Cívicos para ${p.name}`}
                />
              </div>
            ))}
          </div>
          <div className="ttp-total">
            <strong>{total}</strong> / 100 CC asignados
          </div>
        </div>

        <p className="ttp-strong fade-up delay-3">Tus Créditos te obligan a priorizar.</p>
        <p className="section-desc fade-up delay-3">
          No se trata de elegir una sola causa. Distribuís tu capacidad de decisión entre
          distintos proyectos según lo importantes que sean para vos.
        </p>

        <div className="ttp-note fade-up delay-3">
          <p>
            Los límites evitan que una única persona concentre todos sus Créditos en un
            proyecto y hacen que las prioridades se construyan entre muchos ciudadanos.
          </p>
          <p>
            El municipio puede ajustar esos límites cuando existan razones previamente
            definidas —por ejemplo, necesidades urgentes o proyectos prioritarios— y esos
            cambios quedan visibles para todos.
          </p>
        </div>
      </div>

      <style jsx>{`
        .ttp-section { padding: 100px 0; background: var(--bg); }

        .ttp-formula {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin: 40px 0 32px;
          font-size: 24px;
          font-weight: 800;
          color: var(--primary);
        }
        .ttp-formula-eq { color: var(--text-muted); font-weight: 600; font-size: 18px; }

        .ttp-lead {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
          max-width: 560px;
          margin-bottom: 12px;
        }

        .ttp-arrow-chain {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin: 8px 0 48px;
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .ttp-arrow-chain svg { color: var(--border); flex-shrink: 0; }

        .ttp-subhead { font-size: 24px; font-weight: 800; color: var(--text-primary); margin-bottom: 12px; }

        .ttp-card {
          max-width: 640px;
          background: var(--surface);
          border-radius: var(--radius-xl);
          padding: 32px 32px 24px;
          box-shadow: var(--shadow-lg);
          margin-top: 32px;
        }
        .ttp-list { display: grid; gap: 26px; }
        .ttp-row-top {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 12px;
        }
        .ttp-emoji { font-size: 24px; line-height: 1; flex-shrink: 0; margin-top: 2px; }
        .ttp-row-text { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; }
        .ttp-name { font-size: 15px; font-weight: 700; color: var(--text-primary); }
        .ttp-meta { font-size: 12.5px; color: var(--text-secondary); line-height: 1.4; }
        .ttp-amount { flex-shrink: 0; font-size: 15px; font-weight: 800; white-space: nowrap; padding-top: 2px; }
        .ttp-amount small { font-size: 11px; font-weight: 700; }

        .ttp-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: linear-gradient(to right, var(--fill) 0%, var(--fill) var(--pct), var(--border-light) var(--pct), var(--border-light) 100%);
          outline: none;
          cursor: pointer;
        }
        .ttp-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--surface);
          border: 3px solid var(--fill);
          box-shadow: var(--shadow-sm);
          cursor: grab;
        }
        .ttp-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--surface);
          border: 3px solid var(--fill);
          box-shadow: var(--shadow-sm);
          cursor: grab;
          border-width: 3px;
        }
        .ttp-slider::-moz-range-track { background: transparent; }

        .ttp-total {
          text-align: center;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--border-light);
          font-size: 15px;
          color: var(--text-secondary);
        }
        .ttp-total strong { font-size: 20px; color: var(--primary); font-weight: 800; }

        .ttp-strong {
          margin-top: 48px;
          font-size: 22px;
          font-weight: 800;
          color: var(--primary);
        }

        .ttp-note {
          margin-top: 28px;
          max-width: 640px;
          padding: 24px 28px;
          background: var(--surface);
          border-radius: var(--radius-lg);
        }
        .ttp-note p { font-size: 14px; color: var(--text-secondary); line-height: 1.65; margin-bottom: 12px; }
        .ttp-note p:last-child { margin-bottom: 0; }

        @media (max-width: 500px) {
          .ttp-formula { font-size: 19px; }
          .ttp-card { padding: 24px 20px 20px; }
          .ttp-row-top { flex-wrap: wrap; }
          .ttp-amount { margin-left: 38px; }
        }
      `}</style>
    </section>
  )
}
