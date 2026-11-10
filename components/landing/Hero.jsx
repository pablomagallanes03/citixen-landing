import { useEffect, useState } from 'react'
import Link from 'next/link'
import Pieces from '../brand/Pieces'
import PlaceIcon from './PlaceIcon'
import styles from './Landing.module.css'

// Hero: titular (variante elegida en la barra de revisión) + tarjetas de Lugares que rotan.
export default function Hero({ t, variant }) {
  const title = (t.variants.find((v) => v.id === variant) || t.variants[0]).title
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = setInterval(() => setActive((i) => (i + 1) % t.cards.length), 3600)
    return () => clearInterval(id)
  }, [t.cards.length])

  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.heroInner}`}>
        <div className={styles.heroText}>
          <p className={styles.eyebrowNight}>{t.eyebrow}</p>
          <h1 className={styles.heroTitle} key={variant}>{title}</h1>
          <p className={styles.heroLead}>{t.lead}</p>
          <div className={styles.heroActions}>
            <Link href="/primer-ciclo#formulario" className="btn-primary">{t.primary}</Link>
            <a href="#lugares" className={styles.ghostNight}>
              {t.secondary} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className={styles.heroStage} aria-label={t.cardsLabel} role="img">
          <div className={styles.heroPieces}><Pieces state="apart" tone="night" drift /></div>
          {t.cards.map((c, i) => (
            <div
              key={c.name}
              className={`${styles.heroCard} ${styles[`heroCard${i}`]} ${i === active ? styles.heroCardActive : ''}`}
              aria-hidden="true"
            >
              <span className={styles.heroCardIcon}><PlaceIcon type={c.type} size={18} /></span>
              <span className={styles.heroCardBody}>
                <strong>{c.name}</strong>
                <span className={styles.heroCardMeta}>{c.meta}</span>
                <span className={styles.heroCardLine}>{c.line}</span>
              </span>
              <span className={styles.voices} aria-hidden="true"><i /><i /><i /></span>
            </div>
          ))}
          <span className={styles.stageNote}>{t.cardsLabel}</span>
        </div>
      </div>
    </section>
  )
}
