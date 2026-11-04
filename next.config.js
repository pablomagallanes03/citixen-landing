/** @type {import('next').NextConfig} */

// Entorno del sitio, resuelto al compilar. Gobierna tres protecciones:
//  - afirmaciones no verificadas: solo visibles en preview y desarrollo (content/claims.js)
//  - formularios: solo envían datos reales en producción de Vercel
//  - indexación: noindex fuera de producción
// Si VERCEL_ENV no existe (compilación local), se comporta como no-producción:
// afirmaciones en versión verificada, formularios en modo demostración, noindex.
const SITE_ENV = process.env.VERCEL_ENV
  || (process.env.NODE_ENV === 'development' ? 'development' : 'local-build')

const BACKEND_URL = process.env.BACKEND_URL || 'https://citixen.app'

// Páginas legales y de metodología: existen solo en español y conservan sus rutas.
// En /pt y /en redirigen a la versión en español (temporal, por si se traducen).
const SPANISH_ONLY = ['/privacy', '/terms', '/account-deletion', '/child-safety', '/transparency-methodology']

const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['es', 'pt', 'en'],
    defaultLocale: 'es',
    localeDetection: false,
  },

  env: {
    SITE_ENV,
  },

  async redirects() {
    return [
      // Rutas anteriores al rediseño
      { source: '/creditos-civicos', destination: '/como-funciona', permanent: true },
      { source: '/soyvecino', destination: '/vecinos', permanent: true },
      { source: '/soygobierno', destination: '/primer-ciclo', permanent: true },
      { source: '/municipios', destination: '/primer-ciclo', permanent: true },
      { source: '/pricing', destination: '/primer-ciclo', permanent: true },
      // Retirada en el rediseño; temporal hasta confirmar que no vuelve
      { source: '/caso-de-estudio', destination: '/primer-ciclo', permanent: false },

      ...SPANISH_ONLY.flatMap((path) => [
        { source: `/pt${path}`, destination: path, permanent: false, locale: false },
        { source: `/en${path}`, destination: path, permanent: false, locale: false },
      ]),
    ]
  },

  // En producción, Nginx envía /api/* al backend antes de llegar a Vercel, así que
  // esta regla no interviene. En preview y desarrollo evita el bloqueo de CORS.
  async rewrites() {
    return [
      { source: '/:locale(es|pt|en)/api/:path*', destination: `${BACKEND_URL}/api/:path*`, locale: false },
      { source: '/api/:path*', destination: `${BACKEND_URL}/api/:path*`, locale: false },
    ]
  },
}

module.exports = nextConfig
