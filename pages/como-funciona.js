import Layout from '../components/layout/Layout'
import Seo from '../components/layout/Seo'
import PageHero from '../components/page/PageHero'
import CtaBand from '../components/page/CtaBand'
import Pieces from '../components/brand/Pieces'
import { useContent } from '../lib/i18n.mjs'
import { how } from '../content/how.mjs'
import styles from '../components/page/Page.module.css'

export default function HowItWorks() {
  const t = useContent(how)

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <Layout>
      <Seo title={t.meta.title} description={t.meta.description} path="/como-funciona" jsonLd={faqLd} />
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} lead={t.hero.lead} />

      <section className={styles.section}>
        <div className="wrap">
          <ol className={styles.blocks}>
            {t.sections.map((s) => (
              <li key={s.title} className={`${styles.block} reveal`}>
                <div className={styles.blockPiece}>
                  <Pieces state="together" tone="light" highlight={s.piece} />
                </div>
                <h2 className={styles.blockTitle}>{s.title}</h2>
                <div>
                  <p className={styles.blockBody}>{s.body}</p>
                  {s.list && (
                    <dl className={styles.terms}>
                      {s.list.map((item) => (
                        <div key={item.term}>
                          <dt>{item.term}</dt>
                          <dd>{item.text}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  {s.note && <p className={styles.note}>{s.note}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionMist}`} aria-labelledby="faq-titulo">
        <div className="wrap">
          <h2 id="faq-titulo" className={styles.h2}>{t.faq.title}</h2>
          <div className={styles.faq}>
            {t.faq.items.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={t.cta.title} button={t.cta.button} />
    </Layout>
  )
}
