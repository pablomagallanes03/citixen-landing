import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import TaxToProject from '../components/TaxToProject'
import GoalReached from '../components/GoalReached'
import ProofOfImpact from '../components/ProofOfImpact'
import MoreThanOpinion from '../components/MoreThanOpinion'
import FinalCTA from '../components/FinalCTA'
import EarlyAccess from '../components/EarlyAccess'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.fade-up, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Citixen | Tus impuestos. Tu ciudad. Tu decisión.</title>
        <meta name="description" content="Citixen convierte una parte de tus impuestos en Créditos Cívicos: capacidad real de decidir qué proyectos de tu ciudad reciben recursos. Vos elegís, el municipio ejecuta." />
        <meta name="keywords" content="pagar impuestos, participación ciudadana, créditos cívicos, presupuesto participativo, consultas ciudadanas, civic tech argentina, software para municipios, gobierno abierto, participación vecinal" />
        <meta property="og:title" content="Citixen | Tus impuestos. Tu ciudad. Tu decisión." />
        <meta property="og:description" content="Una parte de tus impuestos se convierte en Créditos Cívicos: capacidad real de decidir qué proyectos de tu ciudad reciben recursos." />
        <meta property="og:site_name" content="Citixen" />
        <link rel="canonical" href="https://citixen.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://citixen.app" />
        <meta property="og:image" content="https://citixen.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_AR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Citixen | Tus impuestos. Tu ciudad. Tu decisión." />
        <meta name="twitter:description" content="Una parte de tus impuestos se convierte en Créditos Cívicos: capacidad real de decidir qué proyectos de tu ciudad reciben recursos." />
        <meta name="twitter:image" content="https://citixen.app/og-image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://citixen.app/#organization",
                  "name": "Citixen",
                  "legalName": "Citixen Technologies SAS",
                  "url": "https://citixen.app",
                  "logo": "https://citixen.app/pictures/logo-citixen.svg",
                  "foundingDate": "2025",
                  "description": "Plataforma de participación ciudadana para gobiernos locales en Argentina y América Latina. Los vecinos convierten una parte de sus impuestos en Créditos Cívicos y deciden qué proyectos de su ciudad los reciben.",
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
                    "https://citixen.org"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://citixen.app/#website",
                  "url": "https://citixen.app",
                  "name": "Citixen",
                  "inLanguage": "es-AR",
                  "publisher": { "@id": "https://citixen.app/#organization" }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Citixen",
                  "applicationCategory": "GovernmentApplication",
                  "applicationSubCategory": "CivicTechnology",
                  "description": "Convertí una parte de tus impuestos en Créditos Cívicos y asigná recursos reales a los proyectos de tu ciudad que consideres prioritarios. Vos elegís, el municipio ejecuta.",
                  "operatingSystem": "Web, Android, iOS",
                  "url": "https://citixen.app",
                  "author": { "@id": "https://citixen.app/#organization" },
                  "featureList": [
                    "Créditos Cívicos: convertís una parte de tus impuestos en capacidad de decisión sobre proyectos reales",
                    "Consultas ciudadanas con resultados públicos",
                    "Propuestas e iniciativas ciudadanas con apoyo de la comunidad",
                    "Comunicación institucional segmentada y auditable",
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
      <HowItWorks />
      <MoreThanOpinion />
      <TaxToProject />
      <GoalReached />
      <ProofOfImpact />
      <FinalCTA />
      <EarlyAccess />
      <Footer />
    </>
  )
}
