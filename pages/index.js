import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Mechanism from '../components/Mechanism'
import ValueProps from '../components/ValueProps'
import ForGovernments from '../components/ForGovernments'
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
        <title>Citixen — Tu impuesto, tu decisión</title>
        <meta name="description" content="Citixen conecta el pago de impuestos municipales con la decisión ciudadana sobre proyectos reales. Presupuesto participativo con respaldo fiscal real." />
        <meta name="keywords" content="citixen, participación ciudadana, presupuesto participativo, civic tech, impuestos municipales, civic credits" />
        <meta property="og:title" content="Citixen — Tu impuesto, tu decisión" />
        <meta property="og:description" content="Por primera vez, lo que pagás vuelve como decisión. Civic Credits respaldados por presupuesto municipal real." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <Hero />
      <Problem />
      <Mechanism />
      <ValueProps />
      <ForGovernments />
      <EarlyAccess />
      <Footer />
    </>
  )
}
