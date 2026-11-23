import { useEffect, useRef, useState } from 'react'
import HeroScene from './HeroScene'
import { PlacesExplorer } from '../landing/Places'
import DecideDemo from './DecideDemo'
import Pieces from '../brand/Pieces'
import DemoForm from '../DemoForm'
import styles from './ed.module.css'

export function Hero({ t, illustrative }) {
  const [focus, setFocus] = useState(null)
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.heroInner}`}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <span className={focus === 'decide' ? styles.dim : ''}>{t.titleA}</span>{' '}
            <span className={focus === 'listen' ? styles.dim : ''}>{t.titleB}</span>
          </h1>
          <p className={styles.heroLead}>{t.lead}</p>
          <a href="#demostracion" className={`btn-primary ${styles.heroCta}`}>{t.cta}</a>
        </div>
        <HeroScene t={t} illustrative={illustrative} onMode={setFocus} />
      </div>
    </section>
  )
}

function Intro({ t, dark }) {
  return (
    <header className={`${styles.intro} reveal`}>
      <p className={dark ? styles.eyebrowDark : styles.eyebrow}>{t.eyebrow}</p>
      <h2 className={styles.title}>{t.title}</h2>
      <p className={styles.body}>{t.body}</p>
    </header>
  )
}

const ICONS = {
  place: <><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" /><circle cx="12" cy="10" r="2.4" /></>,
  ask: <><path d="M4.5 5.5h15v10h-8l-4.5 3.5v-3.5h-2.5z" /><path d="M10.2 8.9a1.9 1.9 0 1 1 2.6 1.8c-.5.2-.8.6-.8 1.1v.3" /><circle cx="12" cy="14.1" r=".5" fill="currentColor" /></>,
  act: <><rect x="4.5" y="4" width="15" height="16.5" rx="2.5" /><path d="m8 9.5 1.5 1.5 3-3M8 15.5l1.5 1.5 3-3M15 10h1.5M15 16h1.5" /></>,
}

function Points({ points, exampleLabel }) {
  return (
    <ul className={`${styles.points} reveal`} style={{ '--cols': points.length }}>
      {points.map((p) => (
        <li key={p.title}>
          {p.icon && (
            <svg className={styles.pointIcon} viewBox="0 0 24 24" aria-hidden="true">{ICONS[p.icon]}</svg>
          )}
          <strong>{p.title}</strong>
          <span>{p.body}</span>
          {p.example && (
            <em className={styles.pointExample}><b>{exampleLabel}</b>{p.example}</em>
          )}
        </li>
      ))}
    </ul>
  )
}

// Íconos de los mecanismos de protección (trazo, 24 px).
const GUARD_ICONS = {
  gate: <><rect x="5" y="3.5" width="14" height="17" rx="2" /><path d="M9 20.5v-6a3 3 0 0 1 6 0v6" /></>,
  mask: <><path d="M3 12s3.2-6 9-6 9 6 9 6-3.2 6-9 6-9-6-9-6Z" /><path d="M4 4l16 16" /></>,
  block: <><path d="M12 3.5 5 6.2v5.3c0 4.3 2.9 7.6 7 9 4.1-1.4 7-4.7 7-9V6.2z" /><path d="m9.5 9.5 5 5m0-5-5 5" /></>,
  check: <><path d="M12 3.5 5 6.2v5.3c0 4.3 2.9 7.6 7 9 4.1-1.4 7-4.7 7-9V6.2z" /><path d="m9 12 2.2 2.2L15.2 10" /></>,
  erase: <><path d="M4.5 7h15M9.5 7V4.5h5V7M6.5 7l1 13h9l1-13" /><path d="M10.5 11v5M13.5 11v5" /></>,
  group: <><circle cx="9" cy="9" r="3" /><circle cx="17" cy="10" r="2.3" /><path d="M3.5 19c.6-3 2.8-4.5 5.5-4.5s4.9 1.5 5.5 4.5M15 15c2.6-.4 4.6.8 5.3 3.5" /></>,
}

const AI_STEP_MS = 5200

// Qué hace la IA, en cuatro pasos con un ejemplo de Valle Norte. Avanza solo una vez al verse;
// se detiene al tocar un paso. Con movimiento reducido no avanza solo.
function AiPanel({ t }) {
  const ref = useRef(null)
  const [step, setStep] = useState(0)
  const [auto, setAuto] = useState(false)

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined
    if (!('IntersectionObserver' in window)) return undefined
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { io.disconnect(); setAuto(true) }
    }, { threshold: 0.45 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!auto) return undefined
    const id = setTimeout(() => {
      if (step >= t.steps.length - 1) setAuto(false)
      else setStep(step + 1)
    }, AI_STEP_MS)
    return () => clearTimeout(id)
  }, [auto, step, t.steps.length])

  const choose = (i) => { setAuto(false); setStep(i) }
  const onKey = (e) => {
    const n = t.steps.length
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); choose((step + 1) % n) }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); choose((step + n - 1) % n) }
  }
  const d = t.demo
  const s = t.steps[step]

  return (
    <div className={`${styles.ai} reveal`} ref={ref}>
      <div className={styles.aiHead}>
        <p className={styles.aiKicker}>{t.kicker}</p>
        <h3 className={styles.aiTitle}>{t.title}</h3>
        <p className={styles.aiBody}>{t.body}</p>
      </div>

      <div className={styles.aiGrid}>
        <div className={styles.aiSteps} role="tablist" aria-label={t.stepsLabel} aria-orientation="vertical" onKeyDown={onKey}>
          {t.steps.map((st, i) => (
            <button
              key={st.tab}
              type="button"
              role="tab"
              id={`ai-tab-${i}`}
              aria-selected={i === step}
              aria-controls="ai-panel"
              tabIndex={i === step ? 0 : -1}
              className={`${styles.aiStep} ${i === step ? styles.aiStepOn : ''}`}
              onClick={() => choose(i)}
            >
              <span className={styles.aiNum}>{i + 1}</span>
              <span className={styles.aiStepText}>
                <strong>{st.title}</strong>
                <span>{st.body}</span>
              </span>
              {i === step && auto && <i className={styles.aiTimer} style={{ animationDuration: `${AI_STEP_MS}ms` }} aria-hidden="true" />}
            </button>
          ))}
        </div>

        <div className={styles.aiDemo} id="ai-panel" role="tabpanel" aria-labelledby={`ai-tab-${step}`}>
          <p className={styles.aiPlace}>{t.place}</p>
          <div className={styles.aiScreen} key={step}>
            {step === 0 && (
              <>
                {d.topics.map(([name, pct]) => (
                  <div key={name} className={styles.aiTopic}>
                    <span>{name}</span>
                    <span className={styles.aiBar}><i style={{ '--w': `${pct}%` }} /></span>
                    <b>{pct} %</b>
                  </div>
                ))}
                <div className={styles.aiProposed}>
                  <span><small>{d.proposedLabel}</small><b>{d.proposed}</b><q>{d.proposedQuote}</q></span>
                  <span className={styles.aiChip}>{d.confirm}</span>
                </div>
              </>
            )}
            {step === 1 && d.positions.map(([text, yes, no]) => (
              <div key={text} className={styles.aiPosition}>
                <p>{text}</p>
                <span className={styles.aiSplit}>
                  <i className={styles.aiYes} style={{ '--w': `${(yes / (yes + no)) * 100}%` }} />
                  <i className={styles.aiNo} style={{ '--w': `${(no / (yes + no)) * 100}%` }} />
                </span>
                <small><b>{yes}</b> {d.favor} · <b>{no}</b> {d.against}</small>
              </div>
            ))}
            {step === 2 && (
              <div className={styles.aiFinding}>
                <p className={styles.aiLabel}>{d.findingLabel}</p>
                <p className={styles.aiFindingText}>{d.finding}</p>
                {d.quotes.map((q) => (
                  <blockquote key={q}>
                    «{q}»
                    <span className={styles.aiVerified}>✓ {d.verified}</span>
                  </blockquote>
                ))}
              </div>
            )}
            {step === 3 && (
              <>
                <ol className={styles.aiReview}>
                  {d.review.map(([label, state]) => (
                    <li key={label} className={state === 'now' ? styles.aiReviewNow : ''}>{label}</li>
                  ))}
                </ol>
                <p className={styles.aiResponse}>{d.response}</p>
              </>
            )}
          </div>
          <p className={styles.aiNote}>{t.note}</p>
        </div>
      </div>

      <p className={styles.aiGuardsTitle}>{t.safeguardsTitle}</p>
      <ul className={styles.aiGuards}>
        {t.safeguards.map((g) => (
          <li key={g.title}>
            <svg viewBox="0 0 24 24" aria-hidden="true">{GUARD_ICONS[g.icon]}</svg>
            <strong>{g.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Escucha muestra el producto con el explorador de Lugares de la home anterior (mapa de
// Valle Norte + ficha de cada lugar), dentro de un marco noche, sin rótulos de disponibilidad.
export function Listen({ t, places, placeLabels }) {
  return (
    <section className={styles.listen} aria-labelledby="escucha-title">
      <div className="wrap">
        <Intro t={{ ...t, title: <span id="escucha-title">{t.title}</span> }} />
        <figure id="escucha" className={styles.stage}>
          <p className={styles.stageHint}>{t.demo.hint}</p>
          <PlacesExplorer t={places} labels={placeLabels} showStatus={false} note={t.demo.note} />
        </figure>
        <Points points={t.points} exampleLabel={t.exampleLabel} />
        <AiPanel t={t.ai} />
      </div>
    </section>
  )
}

export function Decide({ t, illustrative }) {
  return (
    <section className={styles.decide} aria-labelledby="decide-title">
      <div className="wrap">
        <Intro t={{ ...t, title: <span id="decide-title">{t.title}</span> }} dark />
        <DecideDemo t={t.demo} illustrative={illustrative} />
        <Points points={t.points} />
      </div>
    </section>
  )
}

export function Close({ t, form }) {
  const ref = useRef(null)
  const [together, setTogether] = useState(false)

  // Las piezas de la X se separan y se unen al entrar: dos soluciones, una sola Citixen.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) { setTogether(true); return undefined }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { io.disconnect(); setTimeout(() => setTogether(true), 250) }
    }, { threshold: 0.5 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <section id="demostracion" className={styles.close} aria-labelledby="demostracion-title">
      <div className={`wrap ${styles.closeInner}`}>
        <div className={styles.closeText}>
          <div className={styles.closeMark} ref={ref}>
            <Pieces state={together ? 'together' : 'apart'} tone="light" />
          </div>
          <h2 id="demostracion-title" className={styles.title}>{t.title}</h2>
          <p className={styles.body}>{t.body}</p>
        </div>
        <div className={styles.formCard}>
          <h3>{t.formTitle}</h3>
          <p>{t.formBody}</p>
          <DemoForm t={form} defaultInterest="demo" />
        </div>
      </div>
    </section>
  )
}
