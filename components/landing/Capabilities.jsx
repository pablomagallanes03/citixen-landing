import { useState } from 'react'
import styles from './Landing.module.css'

// Cinco capacidades en pestañas. Cada una muestra lo disponible y lo que viene, por separado.
function Mock({ id }) {
  if (id === 'listen') {
    return (
      <div className={styles.mockPhone}>
        <span className={styles.mockKicker}>Encuesta abierta · Valle Norte</span>
        <strong className={styles.mockQ}>¿Cómo usás la Plaza del Encuentro?</strong>
        {['Paseo con chicos', 'Hago deporte', 'Paso de camino', 'Encuentro amigos'].map((o, i) => (
          <span key={o} className={`${styles.mockOption} ${i === 0 ? styles.mockOptionOn : ''}`}>{o}</span>
        ))}
        <span className={styles.mockFoot}>Sin cuenta · 1 minuto</span>
      </div>
    )
  }
  if (id === 'understand') {
    return (
      <div className={styles.mockPanel}>
        <span className={styles.mockKicker}>Resultados · 312 respuestas</span>
        {[['Iluminación', 41], ['Juegos para chicos', 27], ['Limpieza', 18], ['Bancos y sombra', 14]].map(([n, v]) => (
          <div key={n} className={styles.mockBarRow}>
            <span>{n}</span><span className={styles.mockBar}><i style={{ width: `${v * 2}%` }} /></span><b>{v} %</b>
          </div>
        ))}
        <span className={styles.mockSoon}>Próximamente: temas de las respuestas abiertas, con citas</span>
      </div>
    )
  }
  if (id === 'participate') {
    return (
      <div className={styles.mockPanel}>
        <span className={styles.mockKicker}>Propuestas · más apoyadas</span>
        {[['Huerta comunitaria en el Paseo del Río', 128], ['Feria de emprendedores los domingos', 96], ['Bicisenda al Parque Costanera', 81]].map(([n, v]) => (
          <div key={n} className={styles.mockProposal}>
            <span>{n}</span><b>{v} apoyos</b>
          </div>
        ))}
      </div>
    )
  }
  if (id === 'cocreate') {
    return (
      <div className={styles.mockPanel}>
        <span className={styles.mockKicker}>CoLab · Próximamente</span>
        <div className={styles.mockStages}>
          {['Desafío', 'Ideas', 'Mejoras', 'Propuesta'].map((s, i) => (
            <span key={s} className={i < 2 ? styles.mockStageOn : ''}>{s}</span>
          ))}
        </div>
        <strong className={styles.mockQ}>Rediseño del Paseo del Río</strong>
        <span className={styles.mockFoot}>64 ideas · etapa 2 de 4 · ejemplo ficticio</span>
      </div>
    )
  }
  return (
    <div className={styles.mockPanel}>
      <span className={styles.mockKicker}>Obras · Mi Ciudad</span>
      {[['Recambio de luminarias', 60], ['Cruce peatonal Escuela N.º 14', 35], ['Rampa Centro Cultural', 100]].map(([n, v]) => (
        <div key={n} className={styles.mockWork}>
          <span>{n}</span>
          <span className={styles.mockBar}><i style={{ width: `${v}%` }} /></span>
          <b>{v === 100 ? 'Terminada' : `${v} %`}</b>
        </div>
      ))}
    </div>
  )
}

export default function Capabilities({ t }) {
  const [active, setActive] = useState(t.items[0].id)
  const item = t.items.find((i) => i.id === active)

  const onKey = (e, index) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const next = (index + (e.key === 'ArrowRight' ? 1 : -1) + t.items.length) % t.items.length
    setActive(t.items[next].id)
    document.getElementById(`cap-tab-${t.items[next].id}`)?.focus()
  }

  return (
    <section id="plataforma" className={`${styles.section} ${styles.sectionMist}`}>
      <div className="wrap">
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h2 className={styles.h2}>{t.title}</h2>
        <p className={styles.lead}>{t.lead}</p>

        <div className={styles.capTabs} role="tablist" aria-label={t.eyebrow}>
          {t.items.map((it, i) => (
            <button
              key={it.id}
              id={`cap-tab-${it.id}`}
              type="button"
              role="tab"
              aria-selected={active === it.id}
              aria-controls="cap-panel"
              tabIndex={active === it.id ? 0 : -1}
              className={`${styles.capTab} ${active === it.id ? styles.capTabOn : ''}`}
              onClick={() => setActive(it.id)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span className={styles.capNum}>{String(i + 1).padStart(2, '0')}</span>
              {it.name}
            </button>
          ))}
        </div>

        <div id="cap-panel" role="tabpanel" aria-labelledby={`cap-tab-${item.id}`} className={styles.capPanel} key={item.id}>
          <div className={styles.capText}>
            <h3 className={styles.h3}>{item.title}</h3>
            <p className={styles.body}>{item.body}</p>
            <div className={styles.capLists}>
              <div>
                <p className={styles.listLabel}>{t.availableLabel}</p>
                <ul className={styles.checkList}>
                  {item.available.map((a) => <li key={a}>{a}</li>)}
                </ul>
              </div>
              {item.soon.length > 0 && (
                <div>
                  <p className={styles.listLabel}><span className={styles.soonChip}>{t.soonLabel}</span></p>
                  <ul className={styles.soonList}>
                    {item.soon.map((a) => <li key={a}>{a}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={styles.capVisual}><Mock id={item.id} /></div>
        </div>
      </div>
    </section>
  )
}
