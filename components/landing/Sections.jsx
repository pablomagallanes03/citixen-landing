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

export function Cocreation({ t }) {
  return (
    <section id="cocreacion" className={styles.section}>
      <div className="wrap">
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h2 className={styles.h2}>{t.title}</h2>
        <div className={styles.cocreateGrid}>
          <div className={styles.cocreateToday}>
            <span className={styles.availableChip}>{t.today.label}</span>
            <h3 className={styles.h3}>{t.today.title}</h3>
            <ul className={styles.featureList}>
              {t.today.items.map((i) => <li key={i.title}><strong>{i.title}</strong><span>{i.body}</span></li>)}
            </ul>
            <div className={styles.proposalCard} aria-hidden="true">
              <span className={styles.proposalTag}>{t.today.proposal.tag}</span>
              <strong>{t.today.proposal.title}</strong>
              <span className={styles.proposalSupports}><span className={styles.dotCoral} />{t.today.proposal.supports}</span>
            </div>
          </div>
          <div className={styles.colab}>
            <span className={styles.soonChipNight}>{t.colab.label}</span>
            <h3 className={`${styles.h3} ${styles.onNight}`}>{t.colab.title}</h3>
            <p className={styles.bodyNight}>{t.colab.body}</p>
            <p className={styles.colabExample}>{t.colab.example}</p>
            <ol className={styles.colabStages}>
              {t.colab.stages.map((s, i) => (
                <li key={s.name} className={i === 1 ? styles.colabStageOn : ''}>
                  <span className={styles.colabStep}>{i + 1}</span>
                  <strong>{s.name}</strong>
                  <span>{s.body}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export function VisibleAction({ t }) {
  return (
    <section id="accion" className={`${styles.section} ${styles.sectionMist}`}>
      <div className="wrap">
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h2 className={styles.h2}>{t.title}</h2>
        <p className={styles.lead}>{t.lead}</p>
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
                  <b>{w.progress === 100 ? w.state : `${w.progress} %`}</b>
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
        <ul className={styles.inlineFeatures}>
          {t.items.map((i) => <li key={i.title}><strong>{i.title}</strong><span>{i.body}</span></li>)}
        </ul>
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
          <Link href="#demostracion" className={`btn-primary ${styles.startCta}`}>{t.cta}</Link>
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
    </section>
  )
}

export function Rules({ t }) {
  return (
    <section className={`${styles.section} ${styles.sectionMist}`}>
      <div className="wrap">
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h2 className={styles.h2}>{t.title}</h2>
        <ul className={styles.rulesGrid}>
          {t.items.map((r) => <li key={r.title}><strong>{r.title}</strong><span>{r.body}</span></li>)}
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
    <section id="demostracion" className={styles.section}>
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
