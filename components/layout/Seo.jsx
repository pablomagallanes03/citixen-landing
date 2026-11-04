import Head from 'next/head'
import { LOCALES, LOCALE_META, SITE_URL, DEFAULT_LOCALE, localizedPath, useLocale } from '../../lib/i18n.mjs'

// Fuera de producción de Vercel (preview, desarrollo, compilación local) no se indexa.
const NOINDEX = process.env.SITE_ENV !== 'production'

export default function Seo({ title, description, path = '/', image = '/og-image.png', jsonLd }) {
  const locale = useLocale()
  const url = `${SITE_URL}${localizedPath(path, locale)}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {NOINDEX && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={url} />
      {LOCALES.map((l) => (
        <link key={`hreflang-${l}`} rel="alternate" hrefLang={LOCALE_META[l].htmlLang} href={`${SITE_URL}${localizedPath(path, l)}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${localizedPath(path, DEFAULT_LOCALE)}`} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Citixen" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={LOCALE_META[locale].og} />
      {LOCALES.filter((l) => l !== locale).map((l) => (
        <meta key={`og-locale-${l}`} property="og:locale:alternate" content={LOCALE_META[l].og} />
      ))}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </Head>
  )
}
