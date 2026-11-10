import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/layout/Layout'
import Seo from '../components/layout/Seo'
import Hero from '../components/landing/Hero'
import Places from '../components/landing/Places'
import Intelligence from '../components/landing/Intelligence'
import { Problems, Action, Platform, StartPath, CivicCredits, FinalCta, ReviewBar } from '../components/landing/Sections'
import { useContent } from '../lib/i18n.mjs'
import { showsUnverifiedClaims } from '../lib/claims.mjs'
import { landing } from '../content/landing.mjs'
import { firstCycle } from '../content/firstCycle.mjs'
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

const REVIEW = showsUnverifiedClaims(process.env.SITE_ENV)

export default function Home() {
  const t = useContent(landing)
  const f = useContent(firstCycle)
  const { query } = useRouter()
  const [variant, setVariant] = useState('a')

  // ?titular=b permite compartir una variante concreta del titular durante la revisión.
  useEffect(() => {
    if (REVIEW && typeof query.titular === 'string' && t.hero.variants.some((v) => v.id === query.titular)) {
      setVariant(query.titular)
    }
  }, [query.titular, t.hero.variants])

  return (
    <Layout>
      <Seo title={t.meta.title} description={t.meta.description} path="/" jsonLd={ORGANIZATION_LD} />
      <Hero t={t.hero} places={t.places.list} districts={t.places.districts} labels={t.labels} variant={variant} />
      <Problems t={t.problems} />
      <Places t={t.places} labels={t.labels} />
      <Intelligence t={t.intelligence} labels={t.labels} />
      <Action t={t.action} labels={t.labels} />
      <Platform t={t.platform} />
      <StartPath t={t.start} />
      <CivicCredits t={t.civicCredits} />
      <FinalCta t={t.final} form={f.form} />
      {REVIEW && <ReviewBar t={t.review} variants={t.hero.variants} value={variant} onChange={setVariant} />}
    </Layout>
  )
}
