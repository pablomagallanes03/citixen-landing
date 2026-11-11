import Pieces from '../brand/Pieces'
import styles from './Page.module.css'

export default function PageHero({ eyebrow, title, lead, highlight = null }) {
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.heroInner}`}>
        <div>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h1 className={styles.heroTitle}>{title}</h1>
          {lead && <p className={styles.heroLead}>{lead}</p>}
        </div>
        <div className={styles.heroPieces}>
          <Pieces state={highlight ? 'together' : 'apart'} highlight={highlight} tone="night" />
        </div>
      </div>
    </section>
  )
}
