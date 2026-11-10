import { useState } from 'react'
import styles from './Landing.module.css'

// Recorrido de la plaza en cinco pasos: vista del vecino (teléfono) y vista del equipo (panel).
function Phone({ s, place }) {
  return (
    <div className={styles.phone} aria-hidden="true">
      <span className={styles.phoneNotch} />
      <span className={styles.phoneHead}>{place}</span>
      {s.kind === 'survey' && (
        <>
          <strong className={styles.mockQ}>{s.question}</strong>
          {s.options.map((o, i) => <span key={o} className={`${styles.mockOption} ${i === s.selected ? styles.mockOptionOn : ''}`}>{o}</span>)}
          <span className={styles.phoneBtn}>Enviar</span>
        </>
      )}
      {s.kind === 'thanks' && (
        <div className={styles.phoneCenter}><span className={styles.phoneCheck}>✓</span><strong>{s.title}</strong><span>{s.body}</span></div>
      )}
      {s.kind === 'idle' && (
        <div className={styles.phoneCenter}><span className={styles.phoneIdle} /><span>El vecino no ve este paso: ocurre en el equipo.</span></div>
      )}
      {s.kind === 'work' && (
        <div className={styles.phoneWork}>
          <span className={styles.mockKicker}>Obra</span>
          <strong>{s.title}</strong>
          <span className={styles.workState}>{s.state}</span>
          <span className={styles.mockBar}><i style={{ width: `${s.progress}%` }} /></span>
          <span className={styles.mockFoot}>Avance {s.progress} %</span>
        </div>
      )}
      {s.kind === 'response' && (
        <div className={styles.phoneWork}>
          <span className={styles.mockKicker}>{s.title}</span>
          <span className={styles.phoneQuote}>{s.body}</span>
        </div>
      )}
    </div>
  )
}

function Panel({ s }) {
  return (
    <div className={styles.panel} aria-hidden="true">
      <div className={styles.panelBar}><i /><i /><i /><span>Panel municipal</span></div>
      <div className={styles.panelBody}>
        {s.kind === 'counter' && (
          <>
            <div className={styles.bigStat}><b>{s.value}</b><span>{s.label}</span></div>
            {s.bars.map(([n, v]) => (
              <div key={n} className={styles.mockBarRow}><span>{n}</span><span className={styles.mockBar}><i style={{ width: `${v * 1.6}%` }} /></span><b>{v}</b></div>
            ))}
          </>
        )}
        {s.kind === 'results' && s.rows.map(([n, v]) => (
          <div key={n} className={styles.mockBarRow}><span>{n}</span><span className={styles.mockBar}><i style={{ width: `${v * 2}%` }} /></span><b>{v} %</b></div>
        ))}
        {s.kind === 'themes' && s.rows.map(([n, v, q]) => (
          <div key={n} className={styles.panelTheme}>
            <div><strong>{n}</strong><span>{v} respuestas</span></div>
            <p>{q}</p>
          </div>
        ))}
        {s.kind === 'work' && (
          <div className={styles.panelWork}>
            <span className={styles.mockKicker}>Obra vinculada</span>
            <strong>{s.title}</strong>
            <span className={styles.mockBar}><i style={{ width: `${s.progress}%` }} /></span>
            <span className={styles.mockFoot}>{s.state} · {s.progress} %</span>
            <span className={styles.linkedTag}>{s.linked}</span>
          </div>
        )}
        {s.kind === 'published' && (
          <div className={styles.panelPublished}><span className={styles.phoneCheck}>✓</span><strong>{s.title}</strong><span>{s.body}</span></div>
        )}
      </div>
    </div>
  )
}

export default function Journey({ t, labels }) {
  const [i, setI] = useState(0)
  const step = t.steps[i]

  return (
    <section id="recorrido" className={styles.section}>
      <div className="wrap">
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h2 className={styles.h2}>{t.title}</h2>
        <p className={styles.lead}>{t.lead}</p>

        <ol className={styles.stepper}>
          {t.steps.map((s, idx) => (
            <li key={s.id}>
              <button
                type="button"
                className={`${styles.stepBtn} ${idx === i ? styles.stepBtnOn : ''} ${idx < i ? styles.stepBtnDone : ''}`}
                aria-current={idx === i ? 'step' : undefined}
                onClick={() => setI(idx)}
              >
                <span className={styles.stepDot}>{idx + 1}</span>
                <span>{s.name}</span>
              </button>
            </li>
          ))}
        </ol>

        <div className={styles.journeyGrid} key={step.id}>
          <div className={styles.journeyText}>
            <span className={step.status === 'available' ? styles.availableChip : styles.conceptChip}>
              {step.status === 'available' ? labels.available : labels.concept}
            </span>
            <span className={styles.statusNote}>{step.statusNote}</span>
            <h3 className={styles.h3}>{step.title}</h3>
            <p className={styles.body}>{step.body}</p>
            <div className={styles.journeyNav}>
              <button type="button" className={styles.navBtn} onClick={() => setI(Math.max(0, i - 1))} disabled={i === 0}>← {t.prev}</button>
              <button type="button" className={styles.navBtnMain} onClick={() => setI(Math.min(t.steps.length - 1, i + 1))} disabled={i === t.steps.length - 1}>{t.next} →</button>
            </div>
          </div>
          <div className={styles.journeyDevices}>
            <figure className={styles.device}>
              <Phone s={step.phone} place={t.placeName} />
              <figcaption>{t.neighborView}</figcaption>
            </figure>
            <figure className={styles.device}>
              <Panel s={step.panel} />
              <figcaption>{t.teamView}</figcaption>
            </figure>
          </div>
        </div>
        <p className={styles.smallNote}>{labels.cityNote}</p>
      </div>
    </section>
  )
}
