import Link from 'next/link'
import Pieces from '../brand/Pieces'
import styles from './Home.module.css'

export function ThreeTimes({ t }) {
  return (
    <section className={styles.times} aria-labelledby="tiempos-titulo">
      <div className="wrap">
        <h2 id="tiempos-titulo" className={`${styles.h2} reveal`}>{t.title}</h2>
        <ol className={styles.timesList}>
          {t.steps.map((s, i) => (
            <li key={s.piece} className={`${styles.time} reveal`}>
              <div className={styles.timePiece}>
                <Pieces state="together" tone="light" highlight={s.piece} />
              </div>
              <span className={styles.timeNumber}>{i + 1}</span>
              <h3 className={styles.timeTitle}>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Rules({ t }) {
  return (
    <section className={styles.rules} aria-labelledby="reglas-titulo">
      <div className="wrap">
        <h2 id="reglas-titulo" className={`${styles.h2} ${styles.onNight} reveal`}>{t.title}</h2>
        <ol className={styles.rulesGrid}>
          {t.items.map((r, i) => (
            <li key={r.title} className={`${styles.rule} reveal`}>
              <span className={styles.ruleNumber}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </li>
          ))}
        </ol>
        <div className={`${styles.rulesFoot} reveal`}>
          {t.backing && <p className={styles.rulesBacking}>{t.backing}</p>}
          <p>{t.control}</p>
          <Link href="/como-funciona" className={styles.arrowLink}>
            {t.link} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export function Different({ t }) {
  return (
    <section className={styles.different}>
      <div className={`wrap ${styles.differentInner} reveal`}>
        <h2 className={styles.differentTitle}>{t.title}</h2>
        <div>
          <p className={styles.differentBody}>{t.body}</p>
          <p className={styles.differentStrong}>{t.strong}</p>
        </div>
      </div>
    </section>
  )
}

export function Evidence({ t, illustrative }) {
  return (
    <section className={styles.evidence} aria-labelledby="pruebas-titulo">
      <div className={`wrap ${styles.evidenceInner}`}>
        <div className="reveal">
          <h2 id="pruebas-titulo" className={styles.h2}>{t.title}</h2>
          <p className={styles.lead}>{t.body}</p>
        </div>
        <figure className={`${styles.evidenceCard} reveal`}>
          <span className={styles.illustrative}>{illustrative}</span>
          <div className={styles.evidenceTop}>
            <span className={styles.evidenceStatus}>{t.card.status}</span>
            <div className={styles.evidenceMark}><Pieces state="together" tone="light" /></div>
          </div>
          <p className={styles.evidenceProject}>{t.card.project}</p>
          <ul>
            {t.card.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </figure>
      </div>
    </section>
  )
}

export function Platform({ t }) {
  return (
    <section className={styles.platform} aria-labelledby="plataforma-titulo">
      <div className="wrap">
        <h2 id="plataforma-titulo" className={`${styles.h2} reveal`}>{t.title}</h2>
        <ul className={styles.platformList}>
          {t.items.map((item) => (
            <li key={item.name} className="reveal">
              <h3>{item.name}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
        <Link href="/plataforma" className={`${styles.arrowLink} ${styles.dark}`}>
          {t.link} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}

export function Neighbors({ t }) {
  return (
    <section className={styles.neighbors}>
      <div className={`wrap ${styles.neighborsInner} reveal`}>
        <div>
          <h2 className={styles.neighborsTitle}>{t.title}</h2>
          <p>{t.body}</p>
        </div>
        <Link href="/vecinos#buscar" className={styles.neighborsCta}>
          {t.cta} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}

export function FirstCycle({ t }) {
  return (
    <section className={styles.cycle} aria-labelledby="ciclo-titulo">
      <div className={`wrap ${styles.cycleInner}`}>
        <div className="reveal">
          <h2 id="ciclo-titulo" className={`${styles.h2} ${styles.onNight}`}>{t.title}</h2>
          <ol className={styles.cycleSteps}>
            {t.steps.map((s, i) => (
              <li key={s}><span>{i + 1}</span>{s}</li>
            ))}
          </ol>
          <Link href="/primer-ciclo" className="btn-primary">{t.cta}</Link>
        </div>
        <div className={`${styles.cyclePieces} reveal`}>
          <Pieces state="together" tone="night" />
        </div>
      </div>
    </section>
  )
}
