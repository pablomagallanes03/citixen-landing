import { VALLE_NORTE as city } from '../../lib/simulator/city.mjs'
import { formatNumber, useContent, useLocale } from '../../lib/i18n.mjs'
import { showsUnverifiedClaims } from '../../lib/claims.mjs'
import { simulator } from '../../content/simulator.mjs'
import styles from './Home.module.css'

// Escena inicial del simulador en versión estática. La experiencia interactiva
// (lib/simulator/engine.mjs) se integra acá cuando se valide el prototipo.
export default function SimulatorPreview() {
  const t = useContent(simulator)
  const locale = useLocale()
  const n = (v) => formatNumber(v, locale)

  return (
    <section id="simulador" className={styles.sim} aria-labelledby="simulador-titulo">
      <div className="wrap">
        <div className={styles.simFrame}>
          <div className={styles.simHead}>
            <span className={styles.simBadge}>{t.badge}</span>
            <span className={styles.simCity}>{t.cityLabel}</span>
          </div>

          <h2 id="simulador-titulo" className={styles.simTitle}>{t.title}</h2>
          {t.walletEquivalent && <p className={styles.simEquivalent}>{t.walletEquivalent}</p>}
          <p className={styles.simIntro}>{t.intro}</p>

          <ul className={styles.simProjects}>
            {city.projects.map((p) => {
              const copy = t.projects[p.id]
              const limit = p.limitException ?? city.generalLimit
              const progress = Math.round((p.alreadyAllocated / p.goal) * 100)
              return (
                <li key={p.id} className={styles.simProject}>
                  <div className={styles.simProjectHead}>
                    <h3>{copy.name}</h3>
                    <p>{copy.detail}</p>
                    <p className={styles.simProposed}>{copy.proposedBy}</p>
                  </div>
                  <div className={styles.simBar} role="img" aria-label={`${progress}%`}>
                    <span style={{ width: `${progress}%` }} />
                  </div>
                  <dl className={styles.simFigures}>
                    <div>
                      <dt>{t.goal}</dt>
                      <dd>{n(p.goal)} {t.credits}</dd>
                    </div>
                    <div>
                      <dt>{t.allocated}</dt>
                      <dd>{n(p.alreadyAllocated)} {t.credits}</dd>
                    </div>
                    <div>
                      <dt>{t.limit}</dt>
                      <dd>{n(limit)} {t.credits}</dd>
                    </div>
                  </dl>
                  {p.limitException && <p className={styles.simException}>{t.limitException}</p>}
                </li>
              )
            })}
          </ul>

          {showsUnverifiedClaims(process.env.SITE_ENV) && <p className={styles.simPending}>{t.pending}</p>}
        </div>
      </div>
    </section>
  )
}
