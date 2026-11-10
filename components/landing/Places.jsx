import { useMemo, useState } from 'react'
import CityMap, { MAP_W, MAP_H } from './CityMap'
import PlaceIcon from './PlaceIcon'
import styles from './Landing.module.css'

// Mapa de Valle Norte con sus Lugares. Elegir un lugar abre su ficha permanente.
// Cada pestaña de la ficha indica si lo que muestra está disponible hoy o llega próximamente.
const TABS = ['summary', 'history', 'needs', 'participation', 'actions']

export default function Places({ t, labels }) {
  const [filter, setFilter] = useState('all')
  const [selectedId, setSelectedId] = useState(t.list[0].id)
  const [tab, setTab] = useState('summary')
  const types = useMemo(() => [...new Set(t.list.map((p) => p.type))], [t.list])
  const selected = t.list.find((p) => p.id === selectedId) || t.list[0]
  const c = t.card

  const choose = (type) => {
    setFilter(type)
    const first = t.list.find((p) => type === 'all' || p.type === type)
    if (first && type !== 'all' && selected.type !== type) setSelectedId(first.id)
  }

  const onTabKey = (e, i) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const next = TABS[(i + (e.key === 'ArrowRight' ? 1 : -1) + TABS.length) % TABS.length]
    setTab(next)
    document.getElementById(`place-tab-${next}`)?.focus()
  }

  const available = c.tabStatus[tab] === 'available'

  return (
    <section id="lugares" className={`${styles.section} ${styles.sectionNight} ${styles.placesSection}`}>
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
            <svg className={styles.map} viewBox={`0 0 ${MAP_W} ${MAP_H}`} role="group" aria-label={`${labels.cityName}: ${t.title}`}>
              <CityMap districts={t.districts} />
              {t.list.map((p) => {
                const on = p.id === selected.id
                const dim = filter !== 'all' && p.type !== filter
                const r = 20 + Math.round(Math.sqrt(p.contributions) * 1.1)
                return (
                  <g
                    key={p.id}
                    transform={`translate(${p.x} ${p.y})`}
                    className={`${styles.pin} ${on ? styles.pinOn : ''} ${dim ? styles.pinDim : ''}`}
                    role="button"
                    tabIndex={dim ? -1 : 0}
                    aria-label={`${p.name}, ${t.types[p.type]}, ${p.contributions} ${c.contributions}`}
                    aria-pressed={on}
                    onClick={() => !dim && setSelectedId(p.id)}
                    onKeyDown={(e) => { if (!dim && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); setSelectedId(p.id) } }}
                  >
                    <circle r={r + 14} className={styles.pinPulse} />
                    <circle r={r} className={styles.pinVolume} />
                    <circle r="24" className={styles.pinDot} />
                    <foreignObject x="-13" y="-13" width="26" height="26" className={styles.pinIcon}>
                      <PlaceIcon type={p.type} size={26} />
                    </foreignObject>
                    {on && <text className={styles.pinLabel} x={p.x > 700 ? -r - 8 : r + 8} y="8" textAnchor={p.x > 700 ? 'end' : 'start'}>{p.name}</text>}
                  </g>
                )
              })}
            </svg>
            <p className={styles.mapNote}>{labels.cityNote} {t.sizeNote}</p>
          </div>

          <article className={styles.placeCard} aria-live="polite" key={selected.id}>
            <header className={styles.placeCardHead}>
              <span className={styles.placeCardIcon}><PlaceIcon type={selected.type} size={24} /></span>
              <div>
                <p className={styles.placeType}>{t.types[selected.type]} · {selected.area}</p>
                <h3 className={styles.placeName}>{selected.name}</h3>
              </div>
            </header>
            <div className={styles.placeMeta}>
              <span><span className={styles.qr} aria-hidden="true" />{c.qr}</span>
              <span><b>{selected.contributions}</b> {c.contributions}</span>
              <span>{c.since} {selected.since}</span>
            </div>

            <div className={styles.placeTabs} role="tablist" aria-label={selected.name}>
              {TABS.map((k, i) => (
                <button
                  key={k}
                  id={`place-tab-${k}`}
                  type="button"
                  role="tab"
                  aria-selected={tab === k}
                  aria-controls="place-panel"
                  tabIndex={tab === k ? 0 : -1}
                  className={`${styles.placeTab} ${tab === k ? styles.placeTabOn : ''}`}
                  onClick={() => setTab(k)}
                  onKeyDown={(e) => onTabKey(e, i)}
                >
                  <span className={c.tabStatus[k] === 'available' ? styles.dotAvailable : styles.dotSoon} aria-hidden="true" />
                  {c.tabs[k]}
                </button>
              ))}
            </div>

            <div id="place-panel" role="tabpanel" aria-labelledby={`place-tab-${tab}`} className={styles.placePanel} key={`${selected.id}-${tab}`}>
              <p className={available ? styles.statusAvailable : styles.statusSoon}>
                <span>{available ? labels.available : labels.soon}</span> {c.tabNotes[tab]}
              </p>

              {tab === 'summary' && (
                <>
                  <p className={styles.cardLabel}>{c.themes}</p>
                  <ul className={styles.themeBars}>
                    {selected.themes.map(([name, pct]) => (
                      <li key={name}>
                        <span>{name}</span>
                        <span className={styles.themeBar}><i style={{ width: `${pct * 1.6}%` }} /></span>
                        <b>{pct} %</b>
                      </li>
                    ))}
                  </ul>
                  <p className={styles.cardLabel}>{c.response}</p>
                  <p className={styles.placeResponse}>{selected.response}</p>
                </>
              )}

              {tab === 'history' && (
                <ol className={styles.timeline}>
                  {selected.history.map(([when, what]) => (
                    <li key={what}><span>{when}</span><strong>{what}</strong></li>
                  ))}
                  <li className={styles.timelineStart}><span>{selected.since.split(' ')[0].slice(0, 3)}</span><strong>{c.since} {selected.since}</strong></li>
                </ol>
              )}

              {tab === 'needs' && (
                <ul className={styles.needs}>
                  {selected.needs.map(([name, state]) => (
                    <li key={name}>
                      <span>{name}</span>
                      <span className={`${styles.needState} ${styles[`need_${state}`]}`}>{t.needStates[state]}</span>
                    </li>
                  ))}
                </ul>
              )}

              {tab === 'participation' && (
                <div className={styles.participation}>
                  <div className={styles.surveyBox}>
                    <span className={styles.mockKicker}>{c.survey} · {selected.survey.open ? c.surveyOpen : c.surveyClosed}</span>
                    <strong>{selected.survey.title}</strong>
                    <span><b>{selected.survey.responses}</b> {c.surveyResponses}</span>
                  </div>
                  <p className={styles.proposalsLine}><b>{selected.proposals}</b> {c.proposals}</p>
                </div>
              )}

              {tab === 'actions' && (
                selected.actions.length > 0 ? (
                  <ul className={styles.actionsList}>
                    {selected.actions.map(([title, state, progress]) => (
                      <li key={title}>
                        <span>{title}</span>
                        <span className={styles.mockBar}><i style={{ width: `${progress}%` }} /></span>
                        <b>{state}</b>
                      </li>
                    ))}
                  </ul>
                ) : <p className={styles.emptyLine}>{c.noActions}</p>
              )}

              {selected.type === 'health' && <p className={styles.healthNote}>{c.healthNote}</p>}
            </div>
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
