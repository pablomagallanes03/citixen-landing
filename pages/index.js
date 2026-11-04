import Layout from '../components/layout/Layout'
import Seo from '../components/layout/Seo'
import Hero from '../components/home/Hero'
import SimulatorPreview from '../components/home/SimulatorPreview'
import { ThreeTimes, Rules, Different, Evidence, Platform, Neighbors, FirstCycle } from '../components/home/Sections'
import { useContent } from '../lib/i18n.mjs'
import { home } from '../content/home.mjs'
import { site } from '../content/site.mjs'
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

export default function Home() {
  const t = useContent(home)
  const s = useContent(site)

  return (
    <Layout>
      <Seo title={t.meta.title} description={t.meta.description} path="/" jsonLd={ORGANIZATION_LD} />
      <Hero t={t.hero} />
      <SimulatorPreview />
      <ThreeTimes t={t.threeTimes} />
      <Rules t={t.rules} />
      <Different t={t.different} />
      <Evidence t={t.evidence} illustrative={s.illustrative} />
      <Platform t={t.platform} />
      <Neighbors t={t.neighbors} />
      <FirstCycle t={t.firstCycle} />
    </Layout>
  )
}
