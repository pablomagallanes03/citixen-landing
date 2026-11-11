// Verifica el contenido antes de compilar (npm run build lo ejecuta en prebuild).
// Frena la compilación si:
//  - un archivo de contenido no tiene los tres idiomas o sus estructuras no coinciden;
//  - un texto condicionado apunta a una afirmación inexistente o le falta una versión;
//  - una afirmación está "verified" sin aprobación registrada (approvedBy / approvedAt);
//  - la versión de producción deja algún texto vacío o sin resolver.

import { readdir } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'
import { CLAIMS, CLAIM_STATUSES } from '../content/claims.mjs'
import { isGated, resolveContent } from '../lib/claims.mjs'
import { LOCALES } from '../lib/i18n-config.mjs'
import { isSpanishFirst } from '../lib/draft.mjs'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const errors = []
const spanishFirst = []
const IS_PRODUCTION = process.env.VERCEL_ENV === 'production'

for (const [id, claim] of Object.entries(CLAIMS)) {
  if (!CLAIM_STATUSES.includes(claim.status)) errors.push(`${id}: estado inválido "${claim.status}"`)
  if (claim.status === 'verified' && (!claim.approvedBy || !claim.approvedAt)) {
    errors.push(`${id}: está "verified" sin approvedBy / approvedAt`)
  }
}

// Forma comparable de un valor: los textos condicionados se identifican por su id.
function shape(value) {
  if (isGated(value)) return { gated: value.id }
  if (Array.isArray(value)) return value.map(shape)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((k) => [k, shape(value[k])]))
  }
  return typeof value
}

function checkGated(value, where) {
  if (isGated(value)) {
    if (!CLAIMS[value.id]) errors.push(`${where}: afirmación desconocida "${value.id}"`)
    if (value.full === undefined || value.full === null) errors.push(`${where}: "${value.id}" sin versión completa`)
    if (value.fallback === undefined) errors.push(`${where}: "${value.id}" sin versión verificada (usar null para ocultar)`)
    checkGated(value.full, `${where}.full`)
    checkGated(value.fallback, `${where}.fallback`)
    return
  }
  if (Array.isArray(value)) value.forEach((v, i) => checkGated(v, `${where}[${i}]`))
  else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) checkGated(v, `${where}.${k}`)
  }
}

function checkResolved(value, where) {
  if (isGated(value)) return errors.push(`${where}: quedó sin resolver`)
  if (value === undefined || value === '') return errors.push(`${where}: texto vacío`)
  if (Array.isArray(value)) value.forEach((v, i) => checkResolved(v, `${where}[${i}]`))
  else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) checkResolved(v, `${where}.${k}`)
  }
}

const contentDir = path.join(root, 'content')
const files = (await readdir(contentDir)).filter((f) => f.endsWith('.mjs') && f !== 'claims.mjs')

for (const file of files) {
  const mod = await import(pathToFileURL(path.join(contentDir, file)).href)
  for (const [name, content] of Object.entries(mod)) {
    if (!content || typeof content !== 'object' || !('es' in content)) continue
    const where = `${file}:${name}`
    if (isSpanishFirst(content)) {
      spanishFirst.push(where)
      if (IS_PRODUCTION) errors.push(`${where}: contenido solo en español (pt y en sin traducir); no se publica en producción`)
    }
    const reference = JSON.stringify(shape(content.es))
    for (const locale of LOCALES) {
      if (!content[locale]) { errors.push(`${where}: falta el idioma "${locale}"`); continue }
      if (JSON.stringify(shape(content[locale])) !== reference) {
        errors.push(`${where}: la estructura de "${locale}" no coincide con "es"`)
      }
      checkGated(content[locale], `${where}.${locale}`)
      // Producción: sin SITE_ENV de preview, solo afirmaciones verificadas.
      checkResolved(resolveContent(content[locale], 'production'), `${where}.${locale}[producción]`)
      checkResolved(resolveContent(content[locale], 'preview'), `${where}.${locale}[preview]`)
    }
  }
}

if (errors.length) {
  console.error(`Contenido con ${errors.length} problema(s):\n- ${errors.join('\n- ')}`)
  process.exit(1)
}

if (spanishFirst.length) console.log(`Contenido solo en español (vista previa): ${spanishFirst.join(', ')}`)

const pending = Object.entries(CLAIMS).filter(([, c]) => c.status !== 'verified').map(([id]) => id)
console.log(`Contenido verificado en ${LOCALES.length} idiomas (${files.length} archivos).`)
console.log(pending.length
  ? `Afirmaciones pendientes (producción muestra la versión verificada): ${pending.join(', ')}`
  : 'Todas las afirmaciones están verificadas.')
