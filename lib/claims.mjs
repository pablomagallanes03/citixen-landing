import { CLAIMS } from '../content/claims.mjs'

const GATED = Symbol.for('citixen.gated')

// SITE_ENV lo define next.config.js al compilar. Cualquier valor distinto de
// preview/development (incluida su ausencia) se trata como producción.
export function showsUnverifiedClaims(siteEnv = process.env.SITE_ENV) {
  return siteEnv === 'preview' || siteEnv === 'development'
}

// Texto condicionado: `full` es el modelo completo; `fallback` es lo que hoy es cierto
// en producción. `fallback` puede ser null: el elemento no se muestra.
export function gated(id, full, fallback) {
  return { [GATED]: true, id, full, fallback }
}

export function isGated(value) {
  return Boolean(value && typeof value === 'object' && value[GATED])
}

export function claimVisible(id, siteEnv) {
  const claim = CLAIMS[id]
  if (!claim) throw new Error(`Afirmación desconocida: ${id}`)
  return claim.status === 'verified' || showsUnverifiedClaims(siteEnv)
}

// Recorre el contenido y reemplaza cada texto condicionado por su versión visible.
// Los elementos de un array que resuelven a null se descartan.
export function resolveContent(value, siteEnv, used = new Set()) {
  if (isGated(value)) {
    const visible = claimVisible(value.id, siteEnv)
    if (visible && CLAIMS[value.id].status !== 'verified') used.add(value.id)
    return resolveContent(visible ? value.full : value.fallback, siteEnv, used)
  }
  if (Array.isArray(value)) {
    return value.map((v) => resolveContent(v, siteEnv, used)).filter((v) => v !== null)
  }
  if (value && typeof value === 'object' && !value.$$typeof) {
    const out = {}
    for (const [k, v] of Object.entries(value)) out[k] = resolveContent(v, siteEnv, used)
    return out
  }
  return value
}
