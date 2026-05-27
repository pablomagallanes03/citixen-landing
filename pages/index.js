import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import VecinoBanner from '../components/VecinoBanner'
import Problem from '../components/Problem'
import WhatIsCitixen from '../components/WhatIsCitixen'
import CommunityMode from '../components/CommunityMode'
import ParticipativeEconomy from '../components/ParticipativeEconomy'
import HowToStart from '../components/HowToStart'
import Trust from '../components/Trust'
import FAQ from '../components/FAQ'
import EarlyAccess from '../components/EarlyAccess'
import Footer from '../components/Footer'
import PricingSummary from '../components/PricingSummary'

// Componentes removidos del flujo (archivos conservados):
// CaseStudyBlock, SocialProof, Progressive, Scenarios,
// Differentiator, CivicCreditsExplainer

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
        <title>Citixen | Transparencia, participación y gestión ciudadana</title>
        <meta name="description" content="Citixen es la plataforma argentina que ayuda a los municipios a publicar sus proyectos, escuchar a sus vecinos y gestionar presupuesto participativo con trazabilidad pública." />
        <meta name="keywords" content="citixen, transparencia municipal, participación ciudadana, gobierno abierto, portal de transparencia, gestión municipal, presupuesto participativo, créditos cívicos, civic tech argentina, software para municipios" />
        <meta property="og:title" content="Citixen | Transparencia, participación y gestión ciudadana" />
        <meta property="og:description" content="Plataforma para que los municipios publiquen sus proyectos, escuchen a sus vecinos y gestionen presupuesto participativo con trazabilidad pública." />
        <meta property="og:site_name" content="Citixen" />
        <link rel="canonical" href="https://citixen.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://citixen.org" />
        <meta property="og:image" content="https://citixen.org/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_AR" />
        <meta name="twitter:card" content="summary_large_image" />
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
                  "description": "Plataforma de transparencia y participación ciudadana para gobiernos locales en Argentina y América Latina.",
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
                  "description": "Plataforma para que los municipios publiquen sus proyectos, escuchen a sus vecinos y gestionen presupuesto participativo con trazabilidad pública.",
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
                    "Portal de transparencia municipal",
                    "Índice de transparencia verificable",
                    "Consultas y opinión ciudadana",
                    "Propuestas vecinales",
                    "Presupuesto participativo con Créditos Cívicos",
                    "Panel de gestión municipal con perfiles operativos"
                  ]
                }
              ]
            })
          }}
        />
      </Head>
      <Navbar />
      <Hero />
      <VecinoBanner />
      <Problem />
      <WhatIsCitixen />
      <CommunityMode />
      {/* <CaseStudyBlock /> */}
      <ParticipativeEconomy />
      <HowToStart />
      <PricingSummary />
      <Trust />
      <FAQ />
      <EarlyAccess />
      <Footer />
    </>
  )
}
