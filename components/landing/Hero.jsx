import { useEffect, useState } from 'react'
import Link from 'next/link'
import CityMap, { MAP_W, MAP_H } from './CityMap'
import PlaceIcon from './PlaceIcon'
import styles from './Landing.module.css'

// Hero: la ciudad entera. Los aportes llegan a cada lugar y confluyen en una lectura de la ciudad.
const HUB = { x: 880, y: 560 }
const SPARKS = [[-22, -18], [20, -26], [26, 14]]

export default function Hero({ t, places, districts, labels, variant }) {
  const title = (t.variants.find((v) => v.id === variant) || t.variants[0]).title
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = setInterval(() => setActive((i) => (i + 1) % places.length), 3200)
    return () => clearInterval(id)
  }, [places.length])

  const p = places[active]
  // La tarjeta del lugar va arriba del pin (abajo si el pin está cerca del borde superior)
  // y se alinea al borde cuando el pin está en un costado.
  // Arriba a la derecha va al costado izquierdo del pin, para no tapar la lectura de la ciudad.
  const beside = p.y < 200 && p.x > 600
  const below = p.y < 200 && !beside
  const side = beside ? styles.calloutBeside : p.x < 220 ? styles.calloutLeft : p.x > 780 ? styles.calloutRight : ''
  const [topTheme, topShare] = p.themes[0]

  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.heroInner}`}>
        <div className={styles.heroText}>
          <p className={styles.eyebrowNight}>{t.eyebrow}</p>
          <h1 className={styles.heroTitle} key={variant}>{title}</h1>
          <p className={styles.heroLead}>{t.lead}</p>
          <div className={styles.heroActions}>
            <Link href="#demostracion" className="btn-primary">{t.primary}</Link>
            <Link href={{ pathname: '/', query: { interes: 'demo' }, hash: 'demostracion' }} className={styles.ghostNight}>{t.secondary}</Link>
          </div>
        </div>

        <figure className={styles.heroMap}>
          <ul className={styles.heroSummary} aria-hidden="true">
            <li className={styles.heroSummaryCity}>{t.summaryLabel}</li>
            {t.summary.map(([n, label]) => <li key={label}><b>{n}</b>{label}</li>)}
          </ul>
          <div className={styles.heroFrame} role="img" aria-label={t.mapLabel}>
            <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className={styles.heroSvg} aria-hidden="true">
              <CityMap districts={districts} />
              {places.map((pl, i) => (
                <path
                  key={`f-${pl.id}`}
                  d={`M${pl.x} ${pl.y} Q ${(pl.x + HUB.x) / 2} ${Math.min(pl.y, HUB.y) - 70} ${HUB.x} ${HUB.y}`}
                  className={`${styles.flow} ${i === active ? styles.flowOn : ''}`}
                />
              ))}
              {places.map((pl, i) => SPARKS.map(([dx, dy], k) => (
                <circle
                  key={`s-${pl.id}-${k}`}
                  cx={pl.x + dx}
                  cy={pl.y + dy}
                  r="5"
                  className={styles.spark}
                  style={{ animationDelay: `${((i * 3 + k) * 0.37) % 4.2}s` }}
                />
              )))}
              {places.map((pl, i) => (
                <g key={pl.id} transform={`translate(${pl.x} ${pl.y})`} className={`${styles.heroPin} ${i === active ? styles.heroPinOn : ''}`}>
                  <circle r="34" className={styles.heroPinHalo} />
                  <circle r="19" className={styles.heroPinDot} />
                  <foreignObject x="-10" y="-10" width="20" height="20" className={styles.heroPinIcon}>
                    <PlaceIcon type={pl.type} size={20} />
                  </foreignObject>
                </g>
              ))}
            </svg>

            <div
              key={p.id}
              className={`${styles.callout} ${side} ${below ? styles.calloutBelow : ''}`}
              style={{ left: `${(p.x / MAP_W) * 100}%`, top: `${(p.y / MAP_H) * 100}%` }}
              aria-hidden="true"
            >
              <strong>{p.name}</strong>
              <span className={styles.calloutMeta}>{p.contributions} {t.calloutMeta}</span>
              <span className={styles.calloutLabel}>{t.calloutLabel}</span>
              <span className={styles.calloutTheme}>
                {topTheme}
                <span className={styles.calloutBar}><i style={{ width: `${topShare * 1.6}%` }} /></span>
                <b>{topShare} %</b>
              </span>
            </div>

            <div className={styles.reading} aria-hidden="true">
              <div className={styles.readingHead}>
                <strong>{t.reading.title}</strong>
                <span className={styles.readingChip}>{labels.soon}</span>
              </div>
              {t.reading.rows.map(([name, where, trend]) => (
                <div key={name} className={styles.readingRow}>
                  <span className={trend === 'up' ? styles.trendUp : styles.trendFlat} />
                  <span>{name}</span>
                  <b>{where}</b>
                </div>
              ))}
            </div>
          </div>
          <figcaption className={styles.heroCaption}>{t.caption}</figcaption>
        </figure>
      </div>
    </section>
  )
}
