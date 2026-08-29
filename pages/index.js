import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatIsCitixen from '../components/WhatIsCitixen'
import TwoPaths from '../components/TwoPaths'
import EarlyAccess from '../components/EarlyAccess'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Citixen | Pagás impuestos. Ahora también priorizás en qué se usan.</title>
        <meta name="description" content="Citixen es la plataforma de participación ciudadana para municipios: priorizás proyectos reales con Créditos Cívicos y opinás en consultas leídas por un motor de deliberación asistido por IA que no pierde ninguna voz, citando texto real. La IA asiste, nunca decide." />
        <meta name="keywords" content="pagar impuestos, participación ciudadana, deliberación asistida por IA, IA verificable, consultas ciudadanas, créditos cívicos, civic tech argentina, software para municipios, gobierno abierto, participación vecinal" />
        <meta property="og:title" content="Citixen | Pagás impuestos. Ahora también priorizás en qué se usan." />
        <meta property="og:description" content="Priorizás proyectos reales con Créditos Cívicos y opinás en consultas leídas por un motor de deliberación asistido por IA que no pierde ninguna voz. La IA asiste, nunca decide." />
        <meta property="og:site_name" content="Citixen" />
        <link rel="canonical" href="https://citixen.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://citixen.org" />
        <meta property="og:image" content="https://citixen.org/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_AR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Citixen | Pagás impuestos. Ahora también priorizás en qué se usan." />
        <meta name="twitter:description" content="Priorizás proyectos reales con Créditos Cívicos y opinás en consultas leídas por un motor de deliberación asistido por IA que no pierde ninguna voz. La IA asiste, nunca decide." />
        <meta name="twitter:image" content="https://citixen.org/og-image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://citixen.org/#organization",
                  "name": "Citixen",
                  "legalName": "Citixen Technologies SAS",
                  "url": "https://citixen.org",
                  "logo": "https://citixen.org/pictures/logo-citixen.svg",
                  "foundingDate": "2025",
                  "description": "Plataforma de participación ciudadana para gobiernos locales en Argentina y América Latina. Consultas, propuestas y deliberación asistida por IA que lee cada voz sin perder ninguna. La IA asiste, nunca decide.",
                  "areaServed": {
                    "@type": "Place",
                    "name": "Argentina"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "hello@citixen.org",
                    "contactType": "customer support",
                    "availableLanguage": ["Spanish"]
                  },
                  "sameAs": [
                    "https://citixen.org",
                    "https://citixen.tech"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://citixen.org/#website",
                  "url": "https://citixen.org",
                  "name": "Citixen",
                  "inLanguage": "es-AR",
                  "publisher": { "@id": "https://citixen.org/#organization" }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Citixen",
                  "applicationCategory": "GovernmentApplication",
                  "applicationSubCategory": "CivicTechnology",
                  "description": "Una sola plataforma de participación ciudadana para municipios: consultas, propuestas y un motor de deliberación asistido por IA que lee cada voz sin perder ninguna, citando texto real. La IA asiste, nunca decide. Cuando la ciudad está lista, la participación pasa a tener peso real con Créditos Cívicos.",
                  "operatingSystem": "Web, Android, iOS",
                  "url": "https://citixen.org",
                  "author": { "@id": "https://citixen.org/#organization" },
                  "featureList": [
                    "Motor de deliberación asistido por IA: síntesis trazable y verificable de la participación, citando texto ciudadano real",
                    "Consultas ciudadanas con resultados públicos",
                    "Propuestas vecinales con apoyo de la comunidad",
                    "Comunicación institucional segmentada y auditable",
                    "Portal público de proyectos y reportes mensuales",
                    "Créditos Cívicos: presupuesto participativo continuo, activable cuando la ciudad está lista"
                  ]
                }
              ]
            })
          }}
        />
      </Head>
      <Navbar />
      <Hero />
      <WhatIsCitixen />
      <TwoPaths />
      <EarlyAccess />
      <Footer />
    </>
  )
}
