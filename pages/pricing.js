import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const tiers = [
  {
    id: 'community',
    name: 'Modo Comunidad',
    price: 'Gratis',
    priceSub: 'Sin límite de tiempo',
    description: 'Todo lo que necesitás para conectar tu municipio con sus vecinos. Transparencia, participación y engagement ciudadano.',
    color: 'var(--primary)',
    cta: 'Activar mi portal',
    ctaHref: '/#acceso',
    highlighted: false,
    features: [
      { text: 'Portal público de transparencia', included: true },
      { text: 'Índice de transparencia verificable', included: true },
      { text: 'Proyectos municipales ilimitados', included: true },
      { text: 'Consultas ciudadanas', included: true },
      { text: 'Propuestas vecinales', included: true },
      { text: 'Comentarios moderados', included: true },
      { text: 'Digest automático por email', included: true },
      { text: 'Panel de gestión con permisos por rol', included: true },
      { text: 'Soporte humano en español', included: true },
      { text: 'Créditos Cívicos', included: false },
      { text: 'Financiamiento participativo', included: false },
      { text: 'Desembolsos y tickets de cobro', included: false },
      { text: 'Organizaciones sociales', included: false },
    ],
  },
  {
    id: 'economy',
    name: 'Economía Participativa',
    price: 'Próximamente',
    priceSub: 'Depende del tamaño de tu ciudad',
    description: 'Todo lo de Comunidad + Créditos Cívicos, financiamiento participativo y trazabilidad económica completa.',
    color: 'var(--accent)',
    cta: 'Contactanos',
    ctaHref: '/#acceso',
    highlighted: true,
    features: [
      { text: 'Todo lo de Modo Comunidad', included: true, bold: true },
      { text: 'Créditos Cívicos por impuestos', included: true },
      { text: 'Financiamiento participativo de proyectos', included: true },
      { text: 'Organizaciones sociales verificadas', included: true },
      { text: 'Tickets de cobro y desembolsos', included: true },
      { text: 'Asignaciones mensuales a organizaciones', included: true },
      { text: 'Trazabilidad económica completa', included: true },
      { text: 'Tipo de cambio configurable', included: true },
      { text: 'Fuentes de ingreso personalizadas', included: true },
      { text: 'Dashboard financiero avanzado', included: true },
      { text: 'Soporte prioritario', included: true },
    ],
  },
]

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
        <meta name="description" content="Modo Comunidad es gratuito. Economía Participativa tiene un costo accesible que depende del tamaño de tu ciudad. Sin contratos de permanencia." />
        <meta property="og:title" content="Pricing — Citixen" />
        <meta property="og:description" content="Modo Comunidad gratuito, sin límite de tiempo. Economía Participativa con costo accesible." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="pricing-page">
        <div className="container">
          <div className="pricing-header">
            <div className="section-label fade-up"><span className="bar"></span> Pricing</div>
            <h1 className="section-title fade-up">Un producto, dos modos.<br />Empezá gratis.</h1>
            <p className="section-desc fade-up">
              Modo Comunidad es gratuito sin límite de tiempo. Cuando tu ciudad esté lista,
              activá Economía Participativa desde el panel. Es un switch, no una migración.
            </p>
          </div>

          <div className="pricing-grid">
            {tiers.map((tier, i) => (
              <div
                className={`pricing-card ${tier.highlighted ? 'pricing-card--highlighted' : ''} fade-up delay-${i + 1}`}
                key={tier.id}
              >
                {tier.highlighted && <div className="pricing-badge">Diferencial único</div>}
                <div className="pricing-card-header">
                  <div className="pricing-tier-icon" style={{ background: tier.color }}>
                    {tier.id === 'community' ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M16 8l-4 4-4-4"/>
                        <path d="M12 16V8"/>
                      </svg>
                    )}
                  </div>
                  <h2 className="pricing-tier-name" style={{ color: tier.color }}>{tier.name}</h2>
                </div>
                <div className="pricing-price">
                  <span className="pricing-price-value">{tier.price}</span>
                  <span className="pricing-price-sub">{tier.priceSub}</span>
                </div>
                <p className="pricing-description">{tier.description}</p>
                <Link href={tier.ctaHref} className="pricing-cta" style={{ background: tier.color }}>
                  {tier.cta}
                </Link>
                <ul className="pricing-features">
                  {tier.features.map((f, j) => (
                    <li key={j} className={f.included ? 'included' : 'not-included'}>
                      {f.included ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"/>
                          <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      )}
                      <span style={f.bold ? { fontWeight: 600 } : {}}>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pricing-faq fade-up">
            <h3>Preguntas sobre precios</h3>
            <div className="pricing-faq-grid">
              <div className="pricing-faq-item">
                <h4>¿Modo Comunidad tiene algún límite?</h4>
                <p>No. Proyectos ilimitados, consultas ilimitadas, ciudadanos ilimitados. Sin fecha de vencimiento.</p>
              </div>
              <div className="pricing-faq-item">
                <h4>¿Hay contrato de permanencia?</h4>
                <p>No. Cada modo se activa y desactiva con un click. Tus datos siempre son tuyos.</p>
              </div>
              <div className="pricing-faq-item">
                <h4>¿Puedo probar Economía Participativa antes de pagar?</h4>
                <p>Empezá con Comunidad. Cuando tu ciudad tenga tracción, hablemos sobre Economía Participativa. Sin presión.</p>
              </div>
              <div className="pricing-faq-item">
                <h4>¿Cómo se define el precio de Economía Participativa?</h4>
                <p>Depende del tamaño de tu ciudad (habitantes). Contactanos para una cotización personalizada.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
