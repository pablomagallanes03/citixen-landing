// Contenido escrito primero en español (maqueta «Ciudad que escucha», nov 2026).
// spanishFirst(es) cumple la estructura de tres idiomas copiando el español en pt y en,
// para que la vista previa compile. scripts/check-content.mjs frena la compilación de
// producción mientras quede contenido marcado así: no se publica sin traducir.

export const SPANISH_FIRST = Symbol.for('citixen.spanishFirst')

export function spanishFirst(es) {
  const content = { es, pt: es, en: es }
  Object.defineProperty(content, SPANISH_FIRST, { value: true, enumerable: false })
  return content
}

export function isSpanishFirst(content) {
  return Boolean(content && content[SPANISH_FIRST])
}
