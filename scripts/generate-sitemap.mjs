// Genera public/sitemap.xml al compilar (prebuild), con las alternativas por idioma.
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { createRequire } from 'node:module'
import { LOCALES, LOCALE_META, SITE_URL, DEFAULT_LOCALE, localizedPath } from '../lib/i18n-config.mjs'

const { SHOW_CIVIC_CREDITS, SHOW_NEIGHBORS_PAGE } = createRequire(import.meta.url)('../lib/features.js')

// Las páginas ocultas (lib/features.js) no se publican en el sitemap.
const MULTILINGUAL = [
  '/',
  SHOW_CIVIC_CREDITS && '/como-funciona',
  '/plataforma',
  SHOW_NEIGHBORS_PAGE && '/vecinos',
  '/primer-ciclo',
].filter(Boolean)
const SPANISH_ONLY = ['/privacy', '/terms', '/account-deletion', '/child-safety', '/transparency-methodology']

const url = (p, l) => `${SITE_URL}${localizedPath(p, l)}`

const entries = []
for (const p of MULTILINGUAL) {
  const alternates = [
    ...LOCALES.map((l) => `    <xhtml:link rel="alternate" hreflang="${LOCALE_META[l].htmlLang}" href="${url(p, l)}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(p, DEFAULT_LOCALE)}"/>`,
  ].join('\n')
  for (const l of LOCALES) {
    entries.push(`  <url>\n    <loc>${url(p, l)}</loc>\n${alternates}\n  </url>`)
  }
}
for (const p of SPANISH_ONLY) {
  entries.push(`  <url>\n    <loc>${url(p, DEFAULT_LOCALE)}</loc>\n  </url>`)
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
await writeFile(path.join(root, 'public', 'sitemap.xml'), xml)
console.log(`sitemap.xml: ${entries.length} URL`)
