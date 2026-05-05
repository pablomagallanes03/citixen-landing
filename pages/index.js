import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import SocialProof from '../components/SocialProof'
import Progressive from '../components/Progressive'
import Scenarios from '../components/Scenarios'
import Differentiator from '../components/Differentiator'
import HowToStart from '../components/HowToStart'
import FAQ from '../components/FAQ'
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
        <title>Citixen — Infraestructura de confianza para gobiernos locales</title>
        <meta name="description" content="Publicá lo que tu municipio hace. Que tu ciudad lo vea. Portal de transparencia, participación ciudadana y asignación de recursos. Empezá en una semana." />
        <meta name="keywords" content="citixen, transparencia municipal, participación ciudadana, gobierno abierto, portal municipal, civic tech" />
        <meta property="og:title" content="Citixen — Infraestructura de confianza para gobiernos locales" />
        <meta property="og:description" content="Tu ciudad ya funciona. Hacelo visible. Portal de transparencia en una semana, participación ciudadana cuando quieras." />
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
              "description": "Infraestructura de confianza para gobiernos locales. Portal de transparencia, participación ciudadana y asignación de recursos públicos.",
              "operatingSystem": "Web, Android, iOS",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Nivel 1 (Transparencia) gratuito"
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
                "Portal de transparencia municipal",
                "Índice de transparencia verificable",
                "Consultas ciudadanas",
                "Propuestas ciudadanas",
                "Asignación de Créditos Cívicos",
                "Panel de gestión gubernamental"
              ]
            })
          }}
        />
      </Head>
      <Navbar />
      <Hero />
      <Problem />
      <SocialProof />
      <Progressive />
      <Scenarios />
      <Differentiator />
      <HowToStart />
      <FAQ />
      <EarlyAccess />
      <Footer />
    </>
  )
}
