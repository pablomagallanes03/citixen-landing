import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
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
        <title>Citixen — Lo que hacés ya existe. Solo falta que se vea.</title>
        <meta name="description" content="Infraestructura de gestión municipal abierta. Mi Ciudad: portal público, opinión ciudadana, propuestas vecinales y presupuesto participativo con trazabilidad total. Empezá gratis en una semana." />
        <meta name="keywords" content="citixen, transparencia municipal, participación ciudadana, gobierno abierto, portal municipal, civic tech, presupuesto participativo, créditos cívicos, gestión municipal" />
        <meta property="og:title" content="Citixen — Lo que hacés ya existe. Solo falta que se vea." />
        <meta property="og:description" content="Infraestructura de gestión municipal abierta. Transparencia, participación ciudadana y presupuesto participativo con trazabilidad total." />
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
              "@type": "SoftwareApplication",
              "name": "Citixen",
              "applicationCategory": "GovernmentApplication",
              "description": "Infraestructura de gestión municipal abierta. Mi Ciudad: portal público, participación ciudadana y presupuesto participativo con trazabilidad total.",
              "operatingSystem": "Web, Android, iOS",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Modo Comunidad gratuito"
              },
              "author": {
                "@type": "Organization",
                "name": "Citixen Technologies SAS",
                "url": "https://citixen.org",
                "foundingDate": "2025",
                "areaServed": {
                  "@type": "Place",
                  "name": "Argentina"
                }
              },
              "featureList": [
                "Mi Ciudad — portal público municipal",
                "Índice de transparencia verificable",
                "Opiná — opinión ciudadana",
                "Propuestas ciudadanas",
                "Créditos Cívicos",
                "Panel de gestión gubernamental con perfiles operativos"
              ]
            })
          }}
        />
      </Head>
      <Navbar />
      <Hero />
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
