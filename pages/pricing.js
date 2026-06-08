import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingSection from '../components/PricingSection'

export default function Pricing() {
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
        <title>Pricing — Citixen</title>
        <meta name="description" content="Empezá gratis con Modo Comunidad. Créditos Cívicos tiene un costo accesible que depende del tamaño de tu ciudad. Sin contratos de permanencia." />
        <meta property="og:title" content="Pricing — Citixen" />
        <meta property="og:description" content="Modo Comunidad: empezá gratis. Créditos Cívicos con costo accesible." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <PricingSection headingLevel="h1" />

        <section className="pricing-faq-section">
          <div className="container">
            <div className="pricing-faq fade-up">
              <h3>Preguntas sobre precios</h3>
              <div className="pricing-faq-grid">
                <div className="pricing-faq-item">
                  <h4>¿Modo Comunidad tiene algún límite?</h4>
                  <p>No hay límites operativos: proyectos, temas y ciudadanos ilimitados. Empezá gratis sin tarjeta.</p>
                </div>
                <div className="pricing-faq-item">
                  <h4>¿Hay contrato de permanencia?</h4>
                  <p>No. Cada modo se activa y desactiva con un click. Tus datos siempre son tuyos.</p>
                </div>
                <div className="pricing-faq-item">
                  <h4>¿Puedo probar Créditos Cívicos antes de pagar?</h4>
                  <p>Empezá con Comunidad. Cuando tu ciudad tenga tracción, hablemos sobre Créditos Cívicos. Sin presión.</p>
                </div>
                <div className="pricing-faq-item">
                  <h4>¿Cómo se define el precio de Créditos Cívicos?</h4>
                  <p>Depende del tamaño de tu ciudad (habitantes). Contactanos para una cotización personalizada.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
