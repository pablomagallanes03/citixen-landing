import { useEffect, useRef, useState } from 'react'
import styles from './Landing.module.css'

// Demostración conceptual de la lectura colectiva: respuestas ficticias que se ordenan en temas.
// No llama a ningún servicio: todo el resultado está escrito en el contenido.
const TABS = ['themes', 'agreement', 'minority', 'time']

export default function Intelligence({ t, labels }) {
  const [phase, setPhase] = useState('idle') // idle | running | done
  const [tab, setTab] = useState('themes')
  const [theme, setTheme] = useState(t.themes[0].id)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const run = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setPhase('running')
    timer.current = setTimeout(() => setPhase('done'), reduce ? 0 : 1600)
  }
  const reset = () => { setPhase('idle'); setTab('themes'); setTheme(t.themes[0].id) }

  const themeIndex = Object.fromEntries(t.themes.map((th, i) => [th.id, i]))
  const counts = Object.fromEntries(t.themes.map((th) => [th.id, t.responses.filter((r) => r.theme === th.id).length]))
  const quotes = t.responses.filter((r) => r.theme === theme)
  const maxTime = Math.max(...t.time.series.flatMap((s) => s.values))

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
              <span className={styles.mockFoot}>{t.responses.length} {t.responsesLabel}</span>
            </div>
            {phase === 'done'
              ? <button type="button" className={styles.navBtn} onClick={reset}>{t.reset}</button>
              : <button type="button" className={styles.navBtnMain} onClick={run} disabled={phase === 'running'}>{phase === 'running' ? t.running : t.run}</button>}
          </div>

          {phase !== 'done' && (
            <ul className={`${styles.responses} ${phase === 'running' ? styles.responsesRunning : ''}`} aria-label={t.responsesLabel}>
              {t.responses.map((r, i) => (
                <li key={r.text} className={`${styles.response} ${styles[`tone${themeIndex[r.theme]}`]}`} style={{ transitionDelay: `${i * 70}ms` }}>
                  {r.text}
                </li>
              ))}
            </ul>
          )}

          {phase === 'done' && (
            <div className={styles.intelResult}>
              <div className={styles.intelTabs} role="tablist" aria-label={t.eyebrow}>
                {TABS.map((k) => (
                  <button key={k} type="button" role="tab" aria-selected={tab === k} className={`${styles.intelTab} ${tab === k ? styles.intelTabOn : ''}`} onClick={() => setTab(k)}>
                    {t.tabs[k]}
                  </button>
                ))}
              </div>

              {tab === 'themes' && (
                <div className={styles.themesGrid}>
                  <ul className={styles.themeList}>
                    {t.themes.map((th, i) => (
                      <li key={th.id}>
                        <button type="button" className={`${styles.themeBtn} ${theme === th.id ? styles.themeBtnOn : ''}`} aria-pressed={theme === th.id} onClick={() => setTheme(th.id)}>
                          <span className={`${styles.swatch} ${styles[`tone${i}`]}`} />
                          <span className={styles.themeName}>{th.name}</span>
                          <span className={styles.themeBar}><i style={{ width: `${th.share * 2.6}%` }} /></span>
                          <b>{th.share} %</b>
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.quotes}>
                    <p className={styles.cardLabel}>{t.quotesLabel} · {counts[theme]} {t.responsesCount}</p>
                    {quotes.map((q) => <blockquote key={q.text}>«{q.text}»</blockquote>)}
                  </div>
                </div>
              )}

              {tab === 'agreement' && (
                <div className={styles.twoCols}>
                  <div className={styles.insight}>
                    <span className={styles.insightTag}>{t.agreement.agree.title}</span>
                    <p>{t.agreement.agree.body}</p>
                    <blockquote>{t.agreement.agree.quote}</blockquote>
                  </div>
                  <div className={styles.insight}>
                    <span className={`${styles.insightTag} ${styles.insightTagAlt}`}>{t.agreement.disagree.title}</span>
                    <p>{t.agreement.disagree.body}</p>
                    {t.agreement.disagree.quotes.map((q) => <blockquote key={q}>{q}</blockquote>)}
                  </div>
                </div>
              )}

              {tab === 'minority' && (
                <div className={styles.insight}>
                  <span className={styles.insightTag}>{t.minority.title}</span>
                  <p>{t.minority.body}</p>
                  {t.minority.quotes.map((q) => <blockquote key={q}>{q}</blockquote>)}
                </div>
              )}

              {tab === 'time' && (
                <div className={styles.timeChart}>
                  <p className={styles.cardLabel}>{t.time.title}</p>
                  <div className={styles.timeBars} role="img" aria-label={`${t.time.title}. ${t.time.note}`}>
                    {t.time.months.map((m, mi) => (
                      <div key={m} className={styles.timeMonth}>
                        <div className={styles.timeCols}>
                          {t.time.series.map((s, si) => (
                            <span key={s.theme} className={`${styles.timeCol} ${styles[`tone${si}`]}`} style={{ height: `${(s.values[mi] / maxTime) * 100}%` }} title={`${s.theme}: ${s.values[mi]}`} />
                          ))}
                        </div>
                        <span className={styles.timeLabel}>{m}</span>
                      </div>
                    ))}
                  </div>
                  <ul className={styles.legend}>
                    {t.time.series.map((s, si) => <li key={s.theme}><span className={`${styles.swatch} ${styles[`tone${si}`]}`} />{s.theme}</li>)}
                  </ul>
                  <p className={styles.body}>{t.time.note}</p>
                </div>
              )}
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
