import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { resolveContent } from './claims.mjs'
import { LOCALES, DEFAULT_LOCALE } from './i18n-config.mjs'

export * from './i18n-config.mjs'

export function useLocale() {
  const { locale } = useRouter()
  return LOCALES.includes(locale) ? locale : DEFAULT_LOCALE
}

// Devuelve el contenido del idioma activo con las afirmaciones condicionadas resueltas.
export function useContent(content) {
  const locale = useLocale()
  return useMemo(
    () => resolveContent(content[locale] ?? content[DEFAULT_LOCALE], process.env.SITE_ENV),
    [content, locale],
  )
}
