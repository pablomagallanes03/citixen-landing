import { useMemo, useState } from 'react'
import PlaceIcon from './PlaceIcon'
import styles from './Landing.module.css'

// Mapa esquemático de una ciudad ficticia con sus Lugares. Elegir un lugar abre su identidad digital.
const BLOCKS = (() => {
  const out = []
  const cols = [250, 340, 430, 520, 610, 700, 790, 880]
  const rows = [70, 160, 250, 340, 430, 520]
  cols.forEach((x, ci) => rows.forEach((y, ri) => {
    if ((ci + ri) % 5 === 3) return
    out.push({ x, y, w: 74, h: 74, key: `${ci}-${ri}` })
  }))
  return out
})()

const RIVER = 'M60 0 C 150 120, 40 220, 140 330 S 120 520, 230 620'

export default function Places({ t, labels }) {
  const [filter, setFilter] = useState('all')
  const [selectedId, setSelectedId] = useState(t.list[0].id)
  const types = useMemo(() => [...new Set(t.list.map((p) => p.type))], [t.list])
  const visible = t.list.filter((p) => filter === 'all' || p.type === filter)
  const selected = t.list.find((p) => p.id === selectedId) || visible[0]

  const choose = (type) => {
    setFilter(type)
    const first = t.list.find((p) => type === 'all' || p.type === type)
    if (first && type !== 'all' && selected.type !== type) setSelectedId(first.id)
  }

  return (
    <section id="lugares" className={`${styles.section} ${styles.sectionNight}`}>
      <div className="wrap">
        <div className={styles.placesHead}>
          <div>
            <p className={styles.eyebrowNight}>{t.eyebrow} <span className={styles.soonChipNight}>{labels.soon}</span></p>
            <h2 className={`${styles.h2} ${styles.onNight}`}>{t.title}</h2>
          </div>
          <p className={styles.leadNight}>{t.lead}</p>
        </div>

        <div className={styles.filters} role="group" aria-label={t.filtersLabel}>
          <button type="button" className={`${styles.filter} ${filter === 'all' ? styles.filterOn : ''}`} aria-pressed={filter === 'all'} onClick={() => choose('all')}>{t.all}</button>
          {types.map((ty) => (
            <button key={ty} type="button" className={`${styles.filter} ${filter === ty ? styles.filterOn : ''}`} aria-pressed={filter === ty} onClick={() => choose(ty)}>
              <PlaceIcon type={ty} size={16} /> {t.types[ty]}
            </button>
          ))}
        </div>

        <div className={styles.placesGrid}>
          <div className={styles.mapWrap}>
            <svg className={styles.map} viewBox="0 0 1000 620" role="group" aria-label={`${labels.cityName}: ${t.title}`}>
              <rect x="0" y="0" width="1000" height="620" className={styles.mapGround} />
              <path d={RIVER} className={styles.mapRiver} />
              {BLOCKS.map((b) => <rect key={b.key} x={b.x} y={b.y} width={b.w} height={b.h} rx="10" className={styles.mapBlock} />)}
              <path d="M200 600 L 960 40" className={styles.mapAvenue} />
              {t.list.map((p) => {
                const on = p.id === selected.id
                const dim = filter !== 'all' && p.type !== filter
                return (
                  <g
                    key={p.id}
                    transform={`translate(${p.x} ${p.y})`}
                    className={`${styles.pin} ${on ? styles.pinOn : ''} ${dim ? styles.pinDim : ''}`}
                    role="button"
                    tabIndex={dim ? -1 : 0}
                    aria-label={`${p.name}, ${t.types[p.type]}`}
                    aria-pressed={on}
                    onClick={() => !dim && setSelectedId(p.id)}
                    onKeyDown={(e) => { if (!dim && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); setSelectedId(p.id) } }}
                  >
                    <circle r="46" className={styles.pinPulse} />
                    <circle r="30" className={styles.pinDot} />
                    <foreignObject x="-15" y="-15" width="30" height="30" className={styles.pinIcon}>
                      <PlaceIcon type={p.type} size={30} />
                    </foreignObject>
                    {on && <text className={styles.pinLabel} x={p.x > 700 ? -42 : 42} y="8" textAnchor={p.x > 700 ? 'end' : 'start'}>{p.name}</text>}
                  </g>
                )
              })}
            </svg>
            <p className={styles.mapNote}>{labels.cityNote}</p>
          </div>

          <article className={styles.placeCard} aria-live="polite" key={selected.id}>
            <header className={styles.placeCardHead}>
              <span className={styles.placeCardIcon}><PlaceIcon type={selected.type} size={22} /></span>
              <div>
                <p className={styles.placeType}>{t.types[selected.type]} · {selected.area}</p>
                <h3 className={styles.placeName}>{selected.name}</h3>
              </div>
            </header>
            <div className={styles.placeChannel}>
              <span className={styles.qr} aria-hidden="true" />
              <div>
                <strong>{t.card.channel}</strong>
                <span>{t.card.qr}</span>
              </div>
              <div className={styles.placeStat}>
                <b>{selected.contributions}</b>
                <span>{t.card.contributions}</span>
              </div>
            </div>

            <p className={styles.cardLabel}>{t.card.themes}</p>
            <ul className={styles.themeBars}>
              {selected.themes.map(([name, pct]) => (
                <li key={name}>
                  <span>{name}</span>
                  <span className={styles.themeBar}><i style={{ width: `${pct}%` }} /></span>
                  <b>{pct} %</b>
                </li>
              ))}
            </ul>

            <p className={styles.cardLabel}>{t.card.needs}</p>
            <ul className={styles.needs}>
              {selected.needs.map(([name, state]) => (
                <li key={name}>
                  <span>{name}</span>
                  <span className={`${styles.needState} ${styles[`need_${state}`]}`}>{t.needStates[state]}</span>
                </li>
              ))}
            </ul>

            <p className={styles.cardLabel}>{t.card.response}</p>
            <p className={styles.placeResponse}>{selected.response}</p>
            {selected.type === 'health' && <p className={styles.healthNote}>{t.card.healthNote}</p>}
            <p className={styles.cardFoot}>{labels.fictional}</p>
          </article>
        </div>

        <div className={styles.bridge}>
          <span className={styles.availableChip}>{labels.available}</span>
          <div>
            <strong>{t.bridge.title}</strong> {t.bridge.body}
          </div>
        </div>
      </div>
    </section>
  )
}
