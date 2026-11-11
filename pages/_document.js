import { Html, Head, Main, NextScript } from 'next/document'

// El atributo lang lo define Next según el idioma de la ruta (i18n en next.config.js).
export default function Document() {
  return (
    <Html>
      <Head>
        {/* Marca la página como con JavaScript antes de pintar, para las animaciones de aparición */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#021B4E" />
        <meta name="application-name" content="Citixen" />
        <meta name="apple-mobile-web-app-title" content="Citixen" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
