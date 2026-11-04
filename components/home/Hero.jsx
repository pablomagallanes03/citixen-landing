import Link from 'next/link'
import Pieces from '../brand/Pieces'
import styles from './Home.module.css'

export default function Hero({ t }) {
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.heroInner}`}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>{t.title}</h1>
          <p className={styles.heroLead}>{t.lead}</p>
          <div className={styles.heroActions}>
            <a href="#simulador" className="btn-primary">
              {t.primary}
              <span aria-hidden="true">↓</span>
            </a>
            <Link href="/primer-ciclo" className={styles.heroLink}>
              {t.secondary} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className={styles.heroPieces}>
          <Pieces state="apart" tone="night" drift />
        </div>
      </div>
    </section>
  )
}
