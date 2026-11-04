import Link from 'next/link'
import Logo from './Logo'
import { useContent } from '../lib/i18n.mjs'
import { site, PLAY_STORE_URL, APP_STORE_URL, PORTAL_URL } from '../content/site.mjs'
import styles from './Footer.module.css'

export default function Footer() {
  const t = useContent(site)
  const f = t.footer

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.top}`}>
        <div className={styles.brand}>
          <span className={styles.logo}><Logo height={26} variant="light" /></span>
          <p className={styles.tagline}>{f.tagline}</p>
          <div className={styles.stores}>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className={styles.store}>
              <span>{f.stores.available}</span> {f.stores.play}
            </a>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={styles.store}>
              <span>{f.stores.available}</span> {f.stores.appStore}
            </a>
          </div>
        </div>

        <nav aria-label={f.sections.product} className={styles.col}>
          <h2 className={styles.heading}>{f.sections.product}</h2>
          <ul>
            <li><Link href="/como-funciona">{f.links.howItWorks}</Link></li>
            <li><Link href="/plataforma">{f.links.platform}</Link></li>
            <li><Link href="/vecinos">{f.links.neighbors}</Link></li>
            <li><Link href="/primer-ciclo">{f.links.firstCycle}</Link></li>
            <li><a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">{f.links.portal}</a></li>
          </ul>
        </nav>

        <nav aria-label={f.sections.legal} className={styles.col}>
          <h2 className={styles.heading}>{f.sections.legal}</h2>
          <ul>
            <li><Link href="/terms" locale="es">{f.links.terms}</Link></li>
            <li><Link href="/privacy" locale="es">{f.links.privacy}</Link></li>
            <li><Link href="/account-deletion" locale="es">{f.links.accountDeletion}</Link></li>
            <li><Link href="/child-safety" locale="es">{f.links.childSafety}</Link></li>
          </ul>
        </nav>

      </div>

      <div className={`wrap ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} {f.legalEntity}. {f.rights}</span>
      </div>
    </footer>
  )
}
