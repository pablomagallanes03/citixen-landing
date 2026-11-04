import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react'
import PreviewBanner from '../components/layout/PreviewBanner'
import '../styles/globals.css'
import '../styles/methodology.css'
import '../styles/legal.css'

// Fuentes variables (subconjunto latino, licencia OFL) en el repositorio: la compilación
// no depende de Google Fonts y el navegador no hace pedidos a terceros.
const inter = localFont({
  src: '../styles/fonts/inter-latin.woff2',
  weight: '400 700',
  display: 'swap',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
})
const schibsted = localFont({
  src: '../styles/fonts/schibsted-grotesk-latin.woff2',
  weight: '500 700',
  display: 'swap',
  fallback: ['Helvetica Neue', 'Arial', 'sans-serif'],
})

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
