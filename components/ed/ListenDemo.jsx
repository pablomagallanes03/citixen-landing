import { useEffect, useRef, useState } from 'react'
import styles from './ed.module.css'

// Un Lugar recibe aportes; cada uno se clasifica en un tema y el tablero muestra
// cuántos aportes tiene cada tema y si hay acuerdo o desacuerdo. Datos ficticios.
// Se reproduce una vez al entrar en pantalla; con movimiento reducido se ve completo.

const TICK = 600

export default function ListenDemo({ t, illustrative }) {
  const items = t.items
  const total = items.length * 2
  const [step, setStep] = useState(0)
  const [run, setRun] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStep(total)
      return undefined
    }
    let timer
    const start = () => {
      timer = setInterval(() => setStep((s) => {
        if (s + 1 >= total) clearInterval(timer)
        return Math.min(s + 1, total)
      }), TICK)
    }
    if (!('IntersectionObserver' in window)) { setStep(total); return undefined }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { io.disconnect(); start() }
    }, { threshold: 0.35 })
    io.observe(ref.current)
    return () => { io.disconnect(); clearInterval(timer) }
  }, [run, total])

  const shown = Math.ceil(step / 2)
  const tagged = Math.floor(step / 2)
  const visible = items.slice(0, shown)
  const counted = items.slice(0, tagged)

  const themes = t.themeNames.map((name, i) => {
    const mine = counted.filter((it) => it.theme === i)
    return { name, count: mine.length, dissent: mine.some((it) => it.dissent) }
  })
  const max = Math.max(3, ...themes.map((th) => th.count))

  return (
    <figure className={styles.listenDemo} ref={ref}>
      <div className={styles.frame}>
        <div className={styles.pane}>
          <div className={styles.placeHead}>
            <span className={styles.qr} aria-hidden="true">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => <i key={i} />)}
            </span>
            <span>
              <strong>{t.place}</strong>
              <small>{t.placeKind}</small>
            </span>
          </div>
          <p className={styles.prompt}>{t.prompt}</p>
          <ol className={styles.feed} aria-label={t.contributions}>
            {visible.map((it, i) => (
              <li key={`${run}-${i}`} className={styles.bubble}>
                <span>{it.text}</span>
                <em className={i < tagged ? styles.tagOn : ''}>{t.themeNames[it.theme]}</em>
              </li>
            ))}
          </ol>
        </div>

        <div className={`${styles.pane} ${styles.paneThemes}`}>
          <p className={styles.paneTitle}>{t.themes}</p>
          <ul className={styles.themes}>
            {themes.map((th) => (
              <li key={th.name} className={th.count ? styles.themeOn : ''}>
                <div className={styles.themeRow}>
                  <strong>{th.name}</strong>
                  {th.count >= 2 && (
                    <span className={th.dissent ? styles.chipOff : styles.chipOn}>
                      {th.dissent ? t.disagreement : t.agreement}
                    </span>
                  )}
                </div>
                <div className={styles.track}><span style={{ width: `${(th.count / max) * 100}%` }} /></div>
                <small>{t.count(th.count)}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className={styles.figNote}>
        <span>{illustrative} · {t.aiNote}</span>
        {step >= total && (
          <button type="button" className={styles.textBtn} onClick={() => { setStep(0); setRun((r) => r + 1) }}>
            {t.replay}
          </button>
        )}
      </figcaption>
    </figure>
  )
}
