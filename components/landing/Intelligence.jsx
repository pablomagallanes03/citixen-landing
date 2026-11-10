import { useEffect, useRef, useState } from 'react'
import styles from './Landing.module.css'

// Demostración conceptual de la lectura colectiva: respuestas ficticias que se convierten en
// temas, acuerdos, desacuerdos y voces minoritarias, cada conclusión con sus citas.
// No llama a ningún servicio: todo el resultado está escrito en el contenido.
const STEP_MS = 520

export default function Intelligence({ t, labels }) {
  const [phase, setPhase] = useState('idle') // idle | running | done
  const [step, setStep] = useState(0)
  const [sel, setSel] = useState({ kind: 'theme', id: t.themes[0].id })
  const timers = useRef([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const run = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setPhase('running')
    setStep(0)
    if (reduce) { setPhase('done'); return }
    t.steps.forEach((_, i) => timers.current.push(setTimeout(() => setStep(i + 1), STEP_MS * (i + 1))))
    timers.current.push(setTimeout(() => setPhase('done'), STEP_MS * (t.steps.length + 1)))
  }
  const reset = () => {
    timers.current.forEach(clearTimeout)
    setPhase('idle'); setStep(0); setSel({ kind: 'theme', id: t.themes[0].id })
  }

  const themeIndex = Object.fromEntries(t.themes.map((th, i) => [th.id, i]))
  const counts = Object.fromEntries(t.themes.map((th) => [th.id, t.responses.filter((r) => r.theme === th.id).length]))
  const total = t.responses.length
  const maxCount = Math.max(...Object.values(counts))
  const b = t.blocks

  const meta = (i) => `${b.responseWord} n.º ${String(i + 1).padStart(2, '0')} · ${t.channels[i % t.channels.length]}`
  const quoteList = (ids) => ids.map((i) => (
    <li key={i}>
      <blockquote>«{t.responses[i].text}»</blockquote>
      <span>{meta(i)}</span>
    </li>
  ))

  // Panel de trazabilidad: la conclusión elegida y las respuestas que la respaldan.
  let trace
  if (sel.kind === 'theme') {
    const th = t.themes.find((x) => x.id === sel.id)
    const ids = t.responses.map((r, i) => (r.theme === sel.id ? i : -1)).filter((i) => i >= 0)
    trace = { title: th.name, sub: `${ids.length} de ${total} respuestas`, groups: [[null, ids]] }
  } else if (sel.kind === 'position') {
    const pos = t.positions.find((x) => x.id === sel.id)
    trace = { title: pos.text, sub: pos.label, groups: [[b.favor, pos.favor], [b.against, pos.against]] }
  } else {
    trace = { title: t.minority.title, sub: b.minority, groups: [[null, t.minority.quotes]] }
  }

  const isSel = (kind, id) => sel.kind === kind && sel.id === id
  const series = t.time.series
  const maxT = Math.max(...series.flatMap((s) => s.values))
  const line = (vals) => vals.map((v, i) => `${i ? 'L' : 'M'}${20 + i * 86} ${92 - (v / maxT) * 72}`).join(' ')

  return (
    <section id="inteligencia" className={`${styles.section} ${styles.sectionMist}`}>
      <div className="wrap">
        <div className={styles.intelHead}>
          <div>
            <p className={styles.eyebrow}>{t.eyebrow}</p>
            <h2 className={styles.h2}>{t.title}</h2>
            <p className={styles.lead}>{t.lead}</p>
          </div>
          <p className={styles.conceptBanner} role="note">
            <span className={styles.conceptChip}>{labels.concept}</span>
            {t.disclaimer}
          </p>
        </div>

        <div className={styles.intelBox}>
          <div className={styles.intelTop}>
            <div>
              <p className={styles.mockKicker}>Consulta de ejemplo · {labels.cityName}</p>
              <strong className={styles.intelQ}>{t.question}</strong>
              <span className={styles.mockFoot}>{total} {t.responsesLabel}</span>
            </div>
            {phase === 'done'
              ? <button type="button" className={styles.navBtn} onClick={reset}>{t.reset}</button>
              : <button type="button" className={styles.navBtnMain} onClick={run} disabled={phase === 'running'}>{phase === 'running' ? t.running : t.run}</button>}
          </div>

          {phase !== 'done' && (
            <div className={styles.intelInput}>
              <ul className={`${styles.responses} ${phase === 'running' && step >= 2 ? styles.responsesGrouped : ''}`} aria-label={t.responsesLabel}>
                {t.responses.map((r, i) => (
                  <li
                    key={r.text}
                    className={`${styles.response} ${phase === 'running' && step >= 2 ? styles[`tone${themeIndex[r.theme]}`] : ''}`}
                    style={{ order: phase === 'running' && step >= 2 ? themeIndex[r.theme] : 0, transitionDelay: `${i * 40}ms` }}
                  >
                    <span className={styles.responseNum}>{String(i + 1).padStart(2, '0')}</span>{r.text}
                  </li>
                ))}
              </ul>
              {phase === 'running' && (
                <ol className={styles.pipeline} aria-live="polite">
                  {t.steps.map((s, i) => (
                    <li key={s} className={step > i ? styles.pipeDone : step === i ? styles.pipeNow : ''}>
                      <span aria-hidden="true">{step > i ? '✓' : i + 1}</span>{s}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          )}

          {phase === 'done' && (
            <div className={styles.intelResult}>
              <ul className={styles.intelStats}>
                <li><b>{total}</b>{t.stats.responses}</li>
                <li><b>{t.themes.length}</b>{t.stats.themes}</li>
                <li><b>{t.positions.filter((p) => p.kind === 'agree').length}</b>{t.stats.agree}</li>
                <li><b>{t.positions.filter((p) => p.kind === 'disagree').length}</b>{t.stats.disagree}</li>
                <li><b>1</b>{t.stats.minority}</li>
                <li><b>{total} de {total}</b>{t.stats.traced}</li>
              </ul>

              <div className={styles.intelBoard}>
                <div className={styles.intelBlocks}>
                  <div className={styles.block}>
                    <p className={styles.cardLabel}>{b.themes}</p>
                    <p className={styles.blockHint}>{b.themesHint}</p>
                    <div className={styles.bubbles}>
                      {t.themes.map((th, i) => {
                        const size = 48 + (counts[th.id] / maxCount) * 50
                        return (
                          <button key={th.id} type="button" aria-pressed={isSel('theme', th.id)} className={`${styles.bubbleBtn} ${isSel('theme', th.id) ? styles.bubbleOn : ''}`} onClick={() => setSel({ kind: 'theme', id: th.id })}>
                            <span className={`${styles.bubble} ${styles[`tone${i}`]}`} style={{ width: size, height: size }}>{counts[th.id]}</span>
                            <span className={styles.bubbleName}>{th.name}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className={styles.block}>
                    <p className={styles.cardLabel}>{b.positions}</p>
                    {t.positions.map((pos) => {
                      const max = Math.max(pos.favor.length, pos.against.length, 4)
                      return (
                        <button key={pos.id} type="button" aria-pressed={isSel('position', pos.id)} className={`${styles.position} ${isSel('position', pos.id) ? styles.positionOn : ''}`} onClick={() => setSel({ kind: 'position', id: pos.id })}>
                          <span className={`${styles.posTag} ${pos.kind === 'disagree' ? styles.posTagSplit : ''}`}>{pos.label}</span>
                          <strong>{pos.text}</strong>
                          <span className={styles.diverge} aria-label={`${pos.favor.length} ${b.favor}, ${pos.against.length} ${b.against}`}>
                            <span className={styles.divAgainst}><i style={{ width: `${(pos.against.length / max) * 100}%` }} /></span>
                            <span className={styles.divFavor}><i style={{ width: `${(pos.favor.length / max) * 100}%` }} /></span>
                          </span>
                          <span className={styles.divLegend}><span>{pos.against.length} {b.against}</span><span>{pos.favor.length} {b.favor}</span></span>
                        </button>
                      )
                    })}
                  </div>

                  <div className={styles.blockPair}>
                    <button type="button" aria-pressed={isSel('minority', 'access')} className={`${styles.minority} ${isSel('minority', 'access') ? styles.minorityOn : ''}`} onClick={() => setSel({ kind: 'minority', id: 'access' })}>
                      <span className={styles.cardLabelNight}>{b.minority}</span>
                      <strong>{t.minority.title}</strong>
                      <span>{t.minority.body}</span>
                    </button>
                    <div className={styles.block}>
                      <p className={styles.cardLabel}>{b.time}</p>
                      <svg viewBox="0 0 300 110" className={styles.sparkChart} role="img" aria-label={t.time.note}>
                        {[20, 56, 92].map((y) => <line key={y} x1="10" x2="290" y1={y} y2={y} className={styles.sparkGrid} />)}
                        {series.map((s, si) => <path key={s.theme} d={line(s.values)} className={si ? styles.sparkLine2 : styles.sparkLine} />)}
                        {t.time.months.map((m, i) => <text key={m} x={20 + i * 86} y="108" textAnchor="middle" className={styles.sparkLabel}>{m}</text>)}
                      </svg>
                      <ul className={styles.legend}>
                        {series.map((s, si) => <li key={s.theme}><span className={`${styles.swatch} ${si ? styles.tone3 : styles.tone0}`} />{s.theme}</li>)}
                      </ul>
                      <p className={styles.blockHint}>{t.time.note}</p>
                    </div>
                  </div>
                </div>

                <aside className={styles.trace} aria-live="polite">
                  <p className={styles.cardLabel}>{b.trace}</p>
                  <strong className={styles.traceTitle}>{trace.title}</strong>
                  <span className={styles.traceSub}>{trace.sub}</span>
                  {trace.groups.map(([label, ids]) => (
                    <div key={label || 'all'} className={styles.traceGroup}>
                      {label && <p className={styles.traceLabel}>{label} · {ids.length}</p>}
                      {ids.length > 0 ? <ul className={styles.traceList}>{quoteList(ids)}</ul> : <p className={styles.blockHint}>—</p>}
                    </div>
                  ))}
                  <p className={styles.traceHint}>{b.traceHint}</p>
                </aside>
              </div>
            </div>
          )}
        </div>

        <ul className={styles.principles}>
          {t.principles.map((p) => (
            <li key={p.title}><strong>{p.title}</strong><span>{p.body}</span></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
