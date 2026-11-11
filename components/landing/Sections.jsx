import Link from 'next/link'
import Pieces from '../brand/Pieces'
import DemoForm from '../DemoForm'
import styles from './Landing.module.css'

export function Problems({ t }) {
  return (
    <section className={styles.problems}>
      <div className="wrap">
        <h2 className={styles.problemsTitle}>{t.title}</h2>
        <ul className={styles.problemList}>
          {t.items.map((p) => (
            <li key={p.title} className="reveal">
              <strong>{p.title}</strong>
              <span>{p.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function StatusChip({ status, labels }) {
  return status === 'available'
    ? <span className={styles.availableChip}>{labels.available}</span>
    : <span className={styles.soonChip}>{labels.soon}</span>
}

// Participación, cocreación y acción visible en una sola sección.
export function Action({ t, labels }) {
  const [participate, cocreate, act] = t.columns
  return (
    <section id="accion" className={styles.section}>
      <div className="wrap">
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h2 className={styles.h2}>{t.title}</h2>
        <p className={styles.lead}>{t.lead}</p>

        <ol className={styles.actionFlow}>
          <li className={styles.actionCol}>
            <div className={styles.actionColHead}><span className={styles.actionNum}>1</span><StatusChip status={participate.status} labels={labels} /></div>
            <h3 className={styles.h3}>{participate.name}</h3>
            <ul className={styles.featureList}>
              {participate.items.map((i) => <li key={i.title}><strong>{i.title}</strong><span>{i.body}</span></li>)}
            </ul>
            <div className={styles.proposalCard} aria-hidden="true">
              <span className={styles.proposalTag}>{participate.proposal.tag}</span>
              <strong>{participate.proposal.title}</strong>
              <span className={styles.proposalSupports}><span className={styles.dotCoral} />{participate.proposal.supports}</span>
            </div>
          </li>

          <li className={`${styles.actionCol} ${styles.actionColNight}`}>
            <div className={styles.actionColHead}><span className={styles.actionNum}>2</span><span className={styles.soonChipNight}>{labels.soon}</span></div>
            <h3 className={`${styles.h3} ${styles.onNight}`}>{cocreate.name}</h3>
            <p className={styles.bodyNight}>{cocreate.body}</p>
            <div className={styles.colabMock} aria-hidden="true">
              <span className={styles.colabExample}>CoLab · {cocreate.example}</span>
              <div className={styles.colabStages}>
                {cocreate.stages.map((s, i) => <span key={s} className={i <= cocreate.current ? styles.colabStageOn : ''}>{s}</span>)}
              </div>
              <span className={styles.colabNote}>{cocreate.note}</span>
            </div>
          </li>

          <li className={styles.actionCol}>
            <div className={styles.actionColHead}><span className={styles.actionNum}>3</span><StatusChip status={act.status} labels={labels} /></div>
            <h3 className={styles.h3}>{act.name}</h3>
            <ul className={styles.featureList}>
              {act.items.map((i) => <li key={i.title}><strong>{i.title}</strong><span>{i.body}</span></li>)}
            </ul>
          </li>
        </ol>

        <div className={styles.actionGrid}>
          <div className={styles.browser} aria-hidden="true">
            <div className={styles.panelBar}><i /><i /><i /><span>{t.portal.url}</span></div>
            <div className={styles.portalBody}>
              <div className={styles.portalHead}>
                <strong>{t.portal.title}</strong>
                <span className={styles.transparency}><b>{t.portal.transparencyValue}</b>{t.portal.transparency}</span>
              </div>
              <div className={styles.notice}><span className={styles.mockKicker}>{t.portal.notice.label}</span><strong>{t.portal.notice.title}</strong></div>
              {t.portal.works.map((w) => (
                <div key={w.title} className={styles.mockWork}>
                  <span>{w.title}</span>
                  <span className={styles.mockBar}><i style={{ width: `${w.progress}%` }} /></span>
                  <b>{w.progress === 100 ? w.state : `${w.state} · ${w.progress} %`}</b>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.report} aria-hidden="true">
            <span className={styles.mockKicker}>{t.report.label}</span>
            <strong className={styles.reportTitle}>{t.report.title}</strong>
            {t.report.lines.map(([k, v]) => <div key={k} className={styles.reportLine}><span>{k}</span><b>{v}</b></div>)}
            <p className={styles.reportQuote}>{t.report.quote}</p>
            <span className={styles.pdf}>PDF</span>
          </div>
        </div>
        <p className={styles.smallNote}>{t.exampleNote}</p>
      </div>
    </section>
  )
}

// Resumen de la plataforma: cada capacidad dice qué está disponible hoy y qué está en desarrollo.
export function Platform({ t }) {
  return (
    <section id="plataforma" className={`${styles.section} ${styles.sectionMist}`}>
      <div className="wrap">
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h2 className={styles.h2}>{t.title}</h2>
        <p className={styles.lead}>{t.lead}</p>
        <ol className={styles.platformGrid}>
          {t.items.map((it, i) => {
            const state = it.available.length === 0 ? 'soon' : it.soon.length === 0 ? 'available' : 'partial'
            const chipClass = state === 'soon' ? styles.soonChip : styles.availableChip
            return (
              <li key={it.id} className={`${styles.platformCol} ${state === 'soon' ? styles.platformColSoon : ''}`}>
                <div>
                  <span className={styles.capNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={chipClass}>{t.status[state]}</span>
                </div>
                <h3 className={styles.platformName}>{it.name}</h3>
                {it.available.length > 0 ? (
                  <>
                    <p className={styles.listLabel}>{t.availableLabel}</p>
                    <ul className={styles.checkList}>{it.available.map((a) => <li key={a}>{a}</li>)}</ul>
                  </>
                ) : <p className={styles.platformNone}>{t.noneToday}</p>}
                {it.soon.length > 0 && (
                  <div className={styles.platformSoon}>
                    <p className={styles.listLabel}>{t.soonLabel}</p>
                    <ul className={styles.soonList}>{it.soon.map((a) => <li key={a}>{a}</li>)}</ul>
                  </div>
                )}
                {it.meanwhile && <p className={styles.platformMeanwhile}>{it.meanwhile}</p>}
              </li>
            )
          })}
        </ol>
        <Link href="/plataforma" className={styles.platformMore}>{t.more} <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  )
}

export function StartPath({ t }) {
  return (
    <section id="empezar" className={styles.section}>
      <div className={`wrap ${styles.startGrid}`}>
        <div>
          <p className={styles.eyebrow}>{t.eyebrow}</p>
          <h2 className={styles.h2}>{t.title}</h2>
          <p className={styles.lead}>{t.lead}</p>
          <div className={styles.outcomes}>
            <strong>{t.outcomesTitle}</strong>
            <ul>{t.outcomes.map((o) => <li key={o}>{o}</li>)}</ul>
          </div>
          <div className={styles.startCtas}>
            <Link href="#demostracion" className="btn-primary">{t.cta}</Link>
            <Link href={{ pathname: '/', query: { interes: 'demo' }, hash: 'demostracion' }} className={styles.startSecondary}>{t.secondary}</Link>
          </div>
        </div>
        <ol className={styles.startSteps}>
          {t.steps.map((s, i) => (
            <li key={s.title} className="reveal">
              <span className={styles.startNum}>{i + 1}</span>
              <div><strong>{s.title}</strong><span>{s.body}</span></div>
            </li>
          ))}
        </ol>
      </div>
      <div className="wrap">
        <h3 className={styles.rulesTitle}>{t.rulesTitle}</h3>
        <ul className={styles.rulesGrid}>
          {t.rules.map((r) => <li key={r.title}><strong>{r.title}</strong><span>{r.body}</span></li>)}
        </ul>
      </div>
    </section>
  )
}

export function CivicCredits({ t }) {
  return (
    <section id="creditos-civicos" className={`${styles.section} ${styles.sectionNight}`}>
      <div className={`wrap ${styles.ccGrid}`}>
        <div>
          <p className={styles.eyebrowNight}>{t.eyebrow}</p>
          <h2 className={`${styles.h2} ${styles.onNight}`}>{t.title}</h2>
          <p className={styles.leadNight}>{t.body}</p>
          <ul className={styles.ccPoints}>
            {t.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <Link href="/como-funciona" className={styles.ghostNight}>{t.link} <span aria-hidden="true">→</span></Link>
        </div>
        <div className={styles.ccPieces}><Pieces state="together" tone="night" highlight="citizen" /></div>
      </div>
    </section>
  )
}

export function FinalCta({ t, form }) {
  return (
    <section id="demostracion" className={`${styles.section} ${styles.sectionMist}`}>
      <div className={`wrap ${styles.finalGrid}`}>
        <div>
          <h2 className={styles.h2}>{t.title}</h2>
          <p className={styles.lead}>{t.body}</p>
        </div>
        <div className={styles.formCard}>
          <DemoForm t={form} />
        </div>
      </div>
    </section>
  )
}

export function ReviewBar({ t, variants, value, onChange }) {
  return (
    <div className={styles.reviewBar} role="group" aria-label={t.label}>
      <strong>{t.label}</strong>
      <span>{t.heroLabel}</span>
      {variants.map((v) => (
        <button key={v.id} type="button" title={v.title} aria-pressed={value === v.id} className={value === v.id ? styles.reviewOn : ''} onClick={() => onChange(v.id)}>
          {v.id.toUpperCase()}
        </button>
      ))}
      <em>{t.note}</em>
    </div>
  )
}
