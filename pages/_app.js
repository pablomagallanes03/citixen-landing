import { Inter, Schibsted_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import PreviewBanner from '../components/layout/PreviewBanner'
import '../styles/globals.css'
import '../styles/methodology.css'
import '../styles/legal.css'

// Fuentes alojadas en el propio sitio por next/font (sin pedidos a Google en el navegador).
const inter = Inter({ subsets: ['latin'], display: 'swap' })
const schibsted = Schibsted_Grotesk({ subsets: ['latin'], display: 'swap', weight: ['500', '600', '700'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-schibsted: ${schibsted.style.fontFamily};
        }
      `}</style>
      <PreviewBanner />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
