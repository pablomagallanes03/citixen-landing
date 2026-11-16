import { useState } from 'react'
import styles from './ed.module.css'

// Asignación de Créditos Cívicos (modelo continuo): cada proyecto aprobado avanza hacia
// su meta con el apoyo de todos los vecinos; el tuyo se suma en coral. Rige un límite
// mensual por proyecto y, al llegar a la meta, el proyecto deja de recibir créditos.
// Tu apoyo se dibuja con un ancho mínimo por crédito para que se vea (las cifras son exactas).
// Sin botón para retirar créditos: no es una acción que la app ofrezca hoy.
// Datos ficticios; no llama a la red ni guarda nada.

const WALLET = 10
const LIMIT = 5

export default function DecideDemo({ t, illustrative }) {
  const [mine, setMine] = useState(() => t.projects.map(() => 0))
  const used = mine.reduce((a, b) => a + b, 0)
  const left = WALLET - used

  const add = (i) => setMine((m) => m.map((v, j) => (j === i ? v + 1 : v)))

  return (
    <figure className={styles.decideDemo}>
      <div className={styles.decideFrame}>
        <div className={styles.wallet}>
          <div>
            <p className={styles.walletLabel}>{t.wallet}</p>
            <p className={styles.walletValue}>{left}<span>/{WALLET}</span></p>
          </div>
          <div className={styles.coins} aria-hidden="true">
            {Array.from({ length: WALLET }, (_, i) => <i key={i} className={i < left ? styles.coinOn : ''} />)}
          </div>
          <p className={styles.walletLimit}>{t.limit}</p>
          <p className="visually-hidden" aria-live="polite">{t.left(left)}</p>
        </div>

        <ul className={styles.projects}>
          {t.projects.map((p, i) => {
            const total = p.start + mine[i]
            const reached = total >= p.goal
            const atLimit = mine[i] >= LIMIT
            const disabled = reached || atLimit || left === 0
            return (
              <li key={p.name} className={`${styles.project} ${reached ? styles.projectDone : ''}`}>
                <div className={styles.projectHead}>
                  <div>
                    <strong>{p.name}</strong>
                    <small>{p.place} · {p.by}</small>
                  </div>
                  <div className={styles.stepper}>
                    <span className={styles.mine} aria-label={`${t.yours}: ${mine[i]}`}>{mine[i]}</span>
                    <button
                      type="button"
                      className={styles.plus}
                      onClick={() => add(i)}
                      disabled={disabled}
                      aria-label={t.add(p.name)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={styles.bar}>
                  <span className={styles.barOthers} style={{ width: `${(p.start / p.goal) * 100}%` }} />
                  <span
                    className={styles.barMine}
                    style={{ left: `min(${(p.start / p.goal) * 100}%, calc(100% - ${mine[i] * 5}px))`, width: mine[i] ? `max(${(Math.min(mine[i], p.goal - p.start) / p.goal) * 100}%, ${mine[i] * 5}px)` : 0 }}
                  />
                </div>
                <div className={styles.projectFoot}>
                  <span>{Math.min(total, p.goal)} {t.of} {p.goal}</span>
                  {reached
                    ? <span className={styles.reached} role="status">{t.goalReached}</span>
                    : atLimit && <span>{t.limitReached}</span>}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <figcaption className={styles.figNote}>
        <span>{illustrative}. {t.configurable}</span>
        {used > 0 && (
          <button type="button" className={styles.textBtn} onClick={() => setMine(t.projects.map(() => 0))}>
            {t.reset}
          </button>
        )}
      </figcaption>
    </figure>
  )
}
