// Configuración de idiomas sin dependencias de React (la usan los scripts de Node).

export const LOCALES = ['es', 'pt', 'en']
export const DEFAULT_LOCALE = 'es'

export const LOCALE_META = {
  es: { label: 'ES', name: 'Español', htmlLang: 'es-AR', og: 'es_AR', number: 'es-AR' },
  pt: { label: 'PT', name: 'Português', htmlLang: 'pt-BR', og: 'pt_BR', number: 'pt-BR' },
  en: { label: 'EN', name: 'English', htmlLang: 'en', og: 'en_US', number: 'en-US' },
}

export const SITE_URL = 'https://citixen.app'

// Ruta pública de una página en un idioma: español sin prefijo, el resto con prefijo.
export function localizedPath(path, locale) {
  const clean = path === '/' ? '' : path
  return locale === DEFAULT_LOCALE ? clean || '/' : `/${locale}${clean}`
}

export function formatNumber(value, locale) {
  return new Intl.NumberFormat(LOCALE_META[locale]?.number ?? 'es-AR').format(value)
}
