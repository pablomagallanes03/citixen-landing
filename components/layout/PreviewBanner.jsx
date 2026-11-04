import { showsUnverifiedClaims } from '../../lib/claims.mjs'
import { useContent } from '../../lib/i18n.mjs'
import { site } from '../../content/site.mjs'
import styles from './PreviewBanner.module.css'

// Solo en preview y desarrollo: avisa que hay afirmaciones pendientes de verificación a la vista.
export default function PreviewBanner() {
  const t = useContent(site)
  if (!showsUnverifiedClaims(process.env.SITE_ENV)) return null
  return (
    <div className={styles.banner} role="note">
      <strong>{t.preview.label}</strong> {t.preview.body}
    </div>
  )
}
