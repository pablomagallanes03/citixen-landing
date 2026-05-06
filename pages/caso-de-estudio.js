import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const stats = [
  { value: '$106M', label: 'Ingresos mensuales' },
  { value: '46%', label: 'Depende de coparticipación' },
  { value: '$25.7M', label: 'En obra pública / mes' },
  { value: '8 likes', label: 'Engagement actual en redes' },
]

const problems = [
  {
    icon: '📄',
    title: 'Balance en PDF',
    description: 'El balance mensual se publica como PDF en Google Drive y como imagen en Instagram. Datos ricos enterrados en un formato que nadie lee.',
  },
  {
    icon: '📉',
    title: '8 likes por publicación',
    description: 'El canal actual no genera participación real. Los vecinos no interactúan con PDFs ni con imágenes de tablas contables.',
  },
  {
    icon: '❓',
    title: '30% en personal — la pregunta incómoda',
    description: 'Los vecinos siempre preguntan cuánto se gasta en sueldos. Hoy esa respuesta está en la página 3 de un PDF que nadie abre.',
  },
  {
    icon: '🏗️',
    title: '$25.7M en obras sin visibilidad',
    description: 'Pavimento, desagües, alumbrado. Obras reales con presupuesto real. Pero sin un lugar donde los vecinos las sigan.',
  },
]

const solution = [
  {
    before: 'Balance en PDF en Drive',
    after: 'Portal público con cada obra como proyecto con presupuesto, avance y fotos',
  },
  {
    before: '8 likes en Instagram',
    after: 'Vecinos suscritos que reciben digest semanal con novedades de su comuna',
  },
  {
    before: 'Vecinos preguntan en redes',
    after: 'Consultas ciudadanas: "¿qué calle pavimentamos primero?"',
  },
  {
    before: 'Sin datos de participación',
    after: 'Índice de Transparencia verificable + métricas reales de engagement',
  },
]

export default function CaseStudy() {
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
        <title>Caso de estudio — Citixen</title>
        <meta name="description" content="Cómo una comuna del interior de Santa Fe podría transformar su balance mensual en un portal de transparencia con participación ciudadana real." />
        <meta property="og:title" content="Caso de estudio — Citixen" />
        <meta property="og:description" content="De un PDF en Drive a un portal de transparencia con participación real." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="case-study-page">
        <div className="container">

          <div className="case-study-hero">
            <div className="section-label fade-up"><span className="bar"></span> Caso de estudio</div>
            <h1 className="section-title fade-up">
              De un PDF en Drive<br />a un portal con participación real.
            </h1>
            <p className="section-desc fade-up">
              Análisis de una comuna del interior de Santa Fe que publica su balance mensual
              en Instagram y Google Drive. Datos reales, problemas concretos, solución posible.
            </p>
            <div className="case-study-disclaimer fade-up">
              Este caso es un análisis basado en información pública. No representa una implementación activa de Citixen.
            </div>
          </div>

          <div className="case-study-stats fade-up">
            {stats.map((s, i) => (
              <div className="case-study-stat" key={i}>
                <span className="case-study-stat-value">{s.value}</span>
                <span className="case-study-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <section className="case-study-section">
            <h2 className="fade-up">El problema</h2>
            <p className="case-study-intro fade-up">
              La comuna tiene un sistema contable estructurado que genera datos financieros detallados cada mes.
              Pero la forma en que esos datos llegan a los vecinos no genera confianza ni participación.
            </p>
            <div className="case-study-problems-grid">
              {problems.map((p, i) => (
                <div className={`case-study-problem-card fade-up delay-${(i % 2) + 1}`} key={i}>
                  <span className="case-study-problem-icon">{p.icon}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="case-study-section">
            <h2 className="fade-up">Qué cambiaría con Modo Comunidad</h2>
            <p className="case-study-intro fade-up">
              Sin tocar un peso de presupuesto. Sin equipo técnico. En una semana.
            </p>
            <div className="case-study-comparison">
              {solution.map((s, i) => (
                <div className={`case-study-comparison-row fade-up delay-${(i % 2) + 1}`} key={i}>
                  <div className="case-study-before">
                    <span className="case-study-label">Hoy</span>
                    <p>{s.before}</p>
                  </div>
                  <div className="case-study-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                  <div className="case-study-after">
                    <span className="case-study-label">Con Citixen</span>
                    <p>{s.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="case-study-section">
            <h2 className="fade-up">Contenido natural para el portal</h2>
            <p className="case-study-intro fade-up">
              Cada partida del balance es un proyecto Light con su propia página.
              No hay que inventar contenido — ya existe.
            </p>
            <div className="case-study-projects-grid fade-up">
              <div className="case-study-project">
                <div className="case-study-project-status status-progress"></div>
                <div>
                  <strong>Pavimentación urbana y suburbana</strong>
                  <span>$18.4M / mes</span>
                </div>
              </div>
              <div className="case-study-project">
                <div className="case-study-project-status status-progress"></div>
                <div>
                  <strong>Desagües y canalización</strong>
                  <span>$1.3M / mes</span>
                </div>
              </div>
              <div className="case-study-project">
                <div className="case-study-project-status status-progress"></div>
                <div>
                  <strong>Remodelación calles públicas</strong>
                  <span>$2M / mes</span>
                </div>
              </div>
              <div className="case-study-project">
                <div className="case-study-project-status status-progress"></div>
                <div>
                  <strong>Alumbrado público</strong>
                  <span>$1.3M / mes</span>
                </div>
              </div>
              <div className="case-study-project">
                <div className="case-study-project-status status-planned"></div>
                <div>
                  <strong>Edificios municipales</strong>
                  <span>$1.6M / mes</span>
                </div>
              </div>
            </div>
          </section>

          <section className="case-study-section case-study-cta-section fade-up">
            <h2>¿Tu municipio tiene el mismo problema?</h2>
            <p>
              Si publicás balances en PDF, rendiciones en redes sociales o simplemente no tenés
              donde mostrar lo que hacés — Modo Comunidad es gratuito y se configura en una semana.
            </p>
            <Link href="/#acceso" className="btn-primary">Activar mi portal</Link>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
