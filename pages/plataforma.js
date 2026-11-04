import Link from 'next/link'
import Layout from '../components/layout/Layout'
import Seo from '../components/layout/Seo'
import PageHero from '../components/page/PageHero'
import CtaBand from '../components/page/CtaBand'
import Pieces from '../components/brand/Pieces'
import { useContent } from '../lib/i18n.mjs'
import { platform } from '../content/platform.mjs'
import styles from '../components/page/Page.module.css'

export default function Platform() {
  const t = useContent(platform)

  return (
    <Layout>
      <Seo title={t.meta.title} description={t.meta.description} path="/plataforma" />
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} lead={t.hero.lead} />

      <section className={`${styles.section} ${styles.sectionMist}`}>
        <div className="wrap">
          <div className={`${styles.core} reveal`}>
            <div>
              <h2>{t.core.name}</h2>
              <p>{t.core.body}</p>
              <Link href="/como-funciona" className={`${styles.textLink} ${styles.textLinkLight}`}>
                {t.core.link} <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className={styles.coreMark}><Pieces state="together" tone="night" /></div>
          </div>

          <ul className={styles.cards}>
            {t.items.map((item) => (
              <li key={item.name} className={`${styles.card} reveal`}>
                <h3>{item.name}</h3>
                <p className={styles.cardBody}>{item.body}</p>
                <ul className={styles.points}>
                  {item.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={t.cta.title} button={t.cta.button} />
    </Layout>
  )
}
