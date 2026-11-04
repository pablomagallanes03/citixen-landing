import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from './Logo'
import { LOCALES, LOCALE_META, useContent, useLocale } from '../lib/i18n.mjs'
import { site } from '../content/site.mjs'
import styles from './Navbar.module.css'

const LINKS = [
  { href: '/como-funciona', key: 'howItWorks' },
  { href: '/plataforma', key: 'platform' },
  { href: '/vecinos', key: 'neighbors' },
]

export default function Navbar() {
  const t = useContent(site)
  const locale = useLocale()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const close = () => setOpen(false)
    router.events.on('routeChangeStart', close)
    return () => router.events.off('routeChangeStart', close)
  }, [router.events])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href) => router.pathname === href

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`wrap ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="Citixen">
          <Logo height={28} variant="light" />
        </Link>

        <nav id="menu-principal" className={`${styles.menu} ${open ? styles.open : ''}`} aria-label={t.nav.menu}>
          <ul className={styles.links}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.link} aria-current={isActive(l.href) ? 'page' : undefined}>
                  {t.nav[l.key]}
                </Link>
              </li>
            ))}
          </ul>

          <ul className={styles.locales} aria-label={t.nav.language}>
            {LOCALES.map((l) => (
              <li key={l}>
                <Link
                  href={router.asPath}
                  locale={l}
                  className={styles.locale}
                  aria-current={l === locale ? 'true' : undefined}
                  lang={LOCALE_META[l].htmlLang}
                  title={LOCALE_META[l].name}
                >
                  {LOCALE_META[l].label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/primer-ciclo" className={`btn-primary ${styles.cta}`}>{t.nav.cta}</Link>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? t.nav.close : t.nav.menu}</span>
          <span className={styles.bars} aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
