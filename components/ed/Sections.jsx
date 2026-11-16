import { useEffect, useRef, useState } from 'react'
import HeroField, { useHeroSequence } from './HeroField'
import { PlacesExplorer } from '../landing/Places'
import DecideDemo from './DecideDemo'
import Pieces from '../brand/Pieces'
import DemoForm from '../DemoForm'
import styles from './ed.module.css'

export function Hero({ t, illustrative }) {
  const [mode, select] = useHeroSequence()
  const focus = mode === 'scatter' ? null : mode
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.heroInner}`}>
        <h1 className={styles.heroTitle}>
          <span className={focus === 'decide' ? styles.dim : ''}>{t.titleA}</span>{' '}
          <span className={focus === 'listen' ? styles.dim : ''}>{t.titleB}</span>
        </h1>
        <p className={styles.heroLead}>{t.lead}</p>
        <a href="#demostracion" className={`btn-primary ${styles.heroCta}`}>{t.cta}</a>
        <HeroField t={t} mode={mode} onSelect={select} />
        <p className={styles.heroNote}>{illustrative}</p>
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

function Points({ points }) {
  return (
    <ul className={`${styles.points} reveal`} style={{ '--cols': points.length }}>
      {points.map((p) => (
        <li key={p.title}>
          <strong>{p.title}</strong>
          <span>{p.body}</span>
        </li>
      ))}
    </ul>
  )
}

// Escucha muestra el producto con el explorador de Lugares de la home anterior (mapa de
// Valle Norte + ficha de cada lugar), dentro de un marco noche, sin rótulos de disponibilidad.
export function Listen({ t, places, placeLabels }) {
  return (
    <section id="escucha" className={styles.listen} aria-labelledby="escucha-title">
      <div className="wrap">
        <Intro t={{ ...t, title: <span id="escucha-title">{t.title}</span> }} />
        <figure className={styles.stage}>
          <p className={styles.stageHint}>{t.demo.hint}</p>
          <PlacesExplorer t={places} labels={placeLabels} showStatus={false} note={t.demo.note} />
        </figure>
        <Points points={t.points} />
      </div>
    </section>
  )
}

export function Decide({ t, illustrative }) {
  return (
    <section id="decide" className={styles.decide} aria-labelledby="decide-title">
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
