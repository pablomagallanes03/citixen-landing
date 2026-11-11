import Link from 'next/link'
import styles from './Page.module.css'

export default function CtaBand({ title, button, href = '/primer-ciclo' }) {
  return (
    <section className={styles.ctaBand}>
      <div className={`wrap ${styles.ctaInner} reveal`}>
        <h2 className={styles.ctaTitle}>{title}</h2>
        <Link href={href} className="btn-primary">{button}</Link>
      </div>
    </section>
  )
}
