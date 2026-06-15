/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/creditos-civicos',
        destination: '/soyvecino',
        permanent: true,
      },
      {
        source: '/municipios',
        destination: '/soygobierno',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: '/soygobierno',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
