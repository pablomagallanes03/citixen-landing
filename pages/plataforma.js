import Link from 'next/link'
import Layout from '../components/layout/Layout'
import Seo from '../components/layout/Seo'
import PageHero from '../components/page/PageHero'
import CtaBand from '../components/page/CtaBand'
import { useContent } from '../lib/i18n.mjs'
import { platform } from '../content/platform.mjs'
import styles from '../components/page/Platform.module.css'
import { SHOW_CIVIC_CREDITS } from '../lib/features'

function Tool({ tool, status }) {
  const available = tool.status === 'available'
  return (
    <li className={`${styles.tool} ${available ? '' : styles.toolSoon} reveal`}>
      <div className={styles.toolHead}>
        <h3>{tool.name}</h3>
        <span className={available ? styles.chipAvailable : styles.chipSoon}>{status[tool.status]}</span>
      </div>
      <p className={styles.toolBody}>{tool.body}</p>
      <ul className={available ? styles.points : styles.pointsSoon}>
        {tool.points.map((p) => <li key={p}>{p}</li>)}
      </ul>
    </li>
  )
}

export default function Platform() {
  const t = useContent(platform)

  return (
    <Layout>
      <Seo title={t.meta.title} description={t.meta.description} path="/plataforma" />
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} lead={t.hero.lead} />

      <section className={styles.section}>
        <div className="wrap">
          <ol className={styles.groups}>
            {t.groups.map((g, i) => (
              <li key={g.name} className={styles.group}>
                <div className={styles.groupHead}>
                  <span className={styles.groupNum}>{String(i + 1).padStart(2, '0')}</span>
                  <h2>{g.name}</h2>
                  <p>{g.intro}</p>
                </div>
                <ul className={styles.tools}>
                  {g.tools.map((tool) => <Tool key={tool.name} tool={tool} status={t.status} />)}
                </ul>
              </li>
            ))}
            <li className={styles.group}>
              <div className={styles.groupHead}>
                <span className={styles.groupNum} aria-hidden="true">—</span>
                <h2>{t.team.name}</h2>
              </div>
              <ul className={styles.tools}>
                <Tool tool={t.team.tool} status={t.status} />
              </ul>
            </li>
          </ol>

          {SHOW_CIVIC_CREDITS && (
          <div className={`${styles.complement} reveal`}>
            <span className={styles.complementLabel}>{t.complement.label}</span>
            <h2>{t.complement.name}</h2>
            <p>{t.complement.body}</p>
            <Link href="/como-funciona" className={styles.complementLink}>{t.complement.link} <span aria-hidden="true">→</span></Link>
          </div>
          )}
        </div>
      </section>

      <CtaBand title={t.cta.title} button={t.cta.button} />
    </Layout>
  )
}
