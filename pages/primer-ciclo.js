import Layout from '../components/layout/Layout'
import Seo from '../components/layout/Seo'
import PageHero from '../components/page/PageHero'
import DemoForm from '../components/DemoForm'
import { useContent } from '../lib/i18n.mjs'
import { firstCycle } from '../content/firstCycle.mjs'
import styles from '../components/page/Page.module.css'

export default function FirstCycle() {
  const t = useContent(firstCycle)

  return (
    <Layout>
      <Seo title={t.meta.title} description={t.meta.description} path="/primer-ciclo" />
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} lead={t.hero.lead} highlight="government" />

      <section className={`${styles.section} ${styles.sectionMist}`}>
        <div className={`wrap ${styles.split}`}>
          <ol className={styles.stepList}>
            {t.steps.map((s, i) => (
              <li key={s.title} className={`${styles.stepBlock} reveal`}>
                <span className={styles.stepNumber}>{String(i + 1).padStart(2, '0')}</span>
                <h2 className={styles.blockTitle}>{s.title}</h2>
                <p className={styles.blockBody}>{s.body}</p>
              </li>
            ))}
          </ol>

          <div id="formulario" className={`${styles.panel} reveal`}>
            <h2 className={styles.blockTitle}>{t.form.title}</h2>
            <p className={`${styles.blockBody} ${styles.panelIntro}`}>{t.form.body}</p>
            <DemoForm t={t.form} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
