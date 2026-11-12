import Layout from '../components/layout/Layout'
import Seo from '../components/layout/Seo'
import PageHero from '../components/page/PageHero'
import CitySearch from '../components/CitySearch'
import { useContent } from '../lib/i18n.mjs'
import { neighbors } from '../content/neighbors.mjs'
import styles from '../components/page/Page.module.css'

export default function Neighbors() {
  const t = useContent(neighbors)

  return (
    <Layout>
      <Seo title={t.meta.title} description={t.meta.description} path="/vecinos" />
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} lead={t.hero.lead} highlight="citizen" />

      <section className={styles.section} aria-labelledby="puedes-titulo">
        <div className="wrap">
          <h2 id="puedes-titulo" className={styles.h2}>{t.can.title}</h2>
          <ul className={styles.capabilities}>
            {t.can.items.map((c) => (
              <li key={c.name} className="reveal">
                <h3>{c.name}</h3>
                <p>{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="buscar" className={`${styles.section} ${styles.sectionMist}`}>
        <div className={`wrap ${styles.split}`}>
          <div className="reveal">
            <h2 className={styles.h2}>{t.credits.title}</h2>
            <ol className={styles.steps}>
              {t.credits.steps.map((s) => <li key={s}>{s}</li>)}
            </ol>
            <p className={styles.note}>{t.credits.note}</p>
          </div>
          <div className={`${styles.panel} reveal`}>
            <h2 className={styles.blockTitle}>{t.search.title}</h2>
            <p className={`${styles.blockBody} ${styles.panelIntro}`}>{t.search.body}</p>
            <CitySearch t={t.search} downloadLabel={t.download} />
          </div>
        </div>
      </section>

    </Layout>
  )
}
