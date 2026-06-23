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
        <title>Citixen | Pagás impuestos. Decidís dónde van.</title>
        <meta name="description" content="Citixen le da a los vecinos peso real sobre la inversión pública de su municipio: un presupuesto participativo continuo y trazable mediante Créditos Cívicos. La ciudadanía prioriza los proyectos que su ciudad ejecuta." />
        <meta name="keywords" content="participación ciudadana, créditos cívicos, presupuesto participativo, civic tech argentina, software para municipios, gobierno abierto, participación vecinal, civic credits" />
        <meta property="og:title" content="Citixen | Pagás impuestos. Decidís dónde van." />
        <meta property="og:description" content="Citixen le da a los vecinos peso real sobre la inversión pública de su municipio: un presupuesto participativo continuo y trazable mediante Créditos Cívicos. La ciudadanía prioriza los proyectos que su ciudad ejecuta." />
        <meta property="og:site_name" content="Citixen" />
        <link rel="canonical" href="https://citixen.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://citixen.org" />
        <meta property="og:image" content="https://citixen.org/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_AR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Citixen | Pagás impuestos. Decidís dónde van." />
        <meta name="twitter:description" content="Citixen le da a los vecinos peso real sobre la inversión pública de su municipio: un presupuesto participativo continuo y trazable mediante Créditos Cívicos. La ciudadanía prioriza los proyectos que su ciudad ejecuta." />
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
                  "description": "Plataforma de participación ciudadana para gobiernos locales en Argentina y América Latina. Los vecinos priorizan la inversión pública mediante Créditos Cívicos.",
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
                  "description": "Citixen le da a los vecinos peso real sobre la inversión pública de su municipio: un presupuesto participativo continuo y trazable mediante Créditos Cívicos. La ciudadanía prioriza los proyectos que su ciudad ejecuta.",
                  "operatingSystem": "Web, Android, iOS",
                  "url": "https://citixen.org",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "description": "Modo Comunidad gratuito"
                  },
                  "author": { "@id": "https://citixen.org/#organization" },
                  "featureList": [
                    "Créditos Cívicos para que los vecinos prioricen la inversión pública",
                    "Ciclos de financiamiento participativo con aprobación municipal",
                    "Consultas ciudadanas vinculantes",
                    "Propuestas vecinales con seguimiento público",
                    "Panel de gestión municipal con perfiles operativos",
                    "Portal público de proyectos y reportes mensuales"
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
