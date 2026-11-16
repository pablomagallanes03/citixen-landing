import Layout from '../components/layout/Layout'
import Seo from '../components/layout/Seo'
import { Hero, Listen, Decide, Close } from '../components/ed/Sections'
import { useContent } from '../lib/i18n.mjs'
import { escuchaDecide } from '../content/escuchaDecide.mjs'
import { firstCycle } from '../content/firstCycle.mjs'
import { placesContent } from '../content/places.mjs'
import { SITE_URL } from '../lib/i18n-config.mjs'

const ORGANIZATION_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Citixen',
  legalName: 'Citixen Technologies SAS',
  url: SITE_URL,
  logo: `${SITE_URL}/pictures/logo-citixen.svg`,
  email: 'hello@citixen.org',
}

// Home «Escucha y Decide» (16-nov-2026): cuatro secciones. La complementariedad vive en el
// cierre, junto al único llamado a la acción. La home anterior sigue en components/landing.
export default function Home() {
  const t = useContent(escuchaDecide)
  const f = useContent(firstCycle)
  // Mapa y fichas de Lugares: datos de Valle Norte (content/places.mjs).
  const l = useContent(placesContent)
  return (
    <Layout>
      <Seo title={t.meta.title} description={t.meta.description} path="/" jsonLd={ORGANIZATION_LD} />
      <Hero t={t.hero} illustrative={t.illustrative} />
      <Listen t={t.listen} places={l.places} placeLabels={l.labels} />
      <Decide t={t.decide} illustrative={t.illustrative} />
      <Close t={t.close} form={f.form} />
    </Layout>
  )
}
