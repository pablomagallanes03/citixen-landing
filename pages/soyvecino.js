import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CivicLoopScroll from '../components/CivicLoopScroll'

const CITIXEN_API = process.env.NEXT_PUBLIC_API_URL || 'https://citixen.app'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=app.citixen'

function formatCount(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) return '0'
  try { return n.toLocaleString('es-AR') } catch { return String(n) }
}

function CitySearchCTA() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [searching, setSearching] = useState(false)
  const [stats, setStats] = useState(null)
  const [statsLoading, setStatsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (stats) return
    const q = query.trim()
    if (q.length < 2) {
      setResults([])
      setSearching(false)
      return
    }
    setSearching(true)
    const controller = new AbortController()
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(
          `${CITIXEN_API}/api/cities?search=${encodeURIComponent(q)}&limit=8`,
          { signal: controller.signal }
        )
        if (!res.ok) throw new Error('search_failed')
        const data = await res.json()
        const cities = data?.data?.cities || data?.cities || []
        setResults(cities)
        setError(null)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setResults([])
          setError('No pudimos buscar ciudades en este momento.')
        }
      } finally {
        setSearching(false)
      }
    }, 400)
    return () => { clearTimeout(timer); controller.abort() }
  }, [query, stats])

  async function handleSelect(city) {
    setResults([])
    setQuery(city.name)
    setStatsLoading(true)
    setError(null)
    try {
      const res = await fetch(`${CITIXEN_API}/api/cities/${city.slug}/stats`)
      if (!res.ok) throw new Error('stats_failed')
      const data = await res.json()
      const payload = data?.data || data
      if (!payload?.cityStatus) throw new Error('stats_invalid')
      setStats(payload)
    } catch (err) {
      setError('No pudimos cargar el estado de tu ciudad. Probá de nuevo o descargá la app directamente.')
    } finally {
      setStatsLoading(false)
    }
  }

  function handleReset() {
    setStats(null)
    setQuery('')
    setResults([])
    setError(null)
  }

  const cityCount = stats?.stats?.citizenCount || 0

  return (
    <div className="ep-cta-track ep-cta-track--citizen fade-up delay-1">
      <div className="ep-cta-track-label">Si sos vecino</div>
      <h3 className="ep-cta-track-title">Empezá por tu ciudad</h3>

      {!stats && (
        <>
          <p className="ep-cta-track-desc">
            Buscá tu municipio para ver si ya está en Citixen.
            Si todavía no, sumate igual — cuantos más vecinos seamos, más rápido llega.
          </p>

          <div className="ep-city-search">
            <div className="ep-city-search-input-wrap">
              <svg className="ep-city-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                className="ep-city-search-input"
                placeholder="Buscá tu ciudad"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="off"
                aria-label="Buscar mi ciudad"
              />
              {searching && <span className="ep-city-search-spinner" aria-hidden="true" />}
            </div>

            {results.length > 0 && (
              <ul className="ep-city-search-results" role="listbox">
                {results.map((c) => (
                  <li key={c._id || c.slug} role="option" aria-selected="false">
                    <button type="button" onClick={() => handleSelect(c)}>
                      <span className="ep-city-result-name-row">{c.name}</span>
                      {(c.province || c.country) && (
                        <span className="ep-city-result-region-row">
                          {[c.province, c.country].filter(Boolean).join(' · ')}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {statsLoading && (
              <div className="ep-city-loading">
                <span className="ep-city-search-spinner" aria-hidden="true" />
                <span>Cargando estado de tu ciudad…</span>
              </div>
            )}

            {error && (
              <p className="ep-city-error">{error}</p>
            )}
          </div>
        </>
      )}

      {stats && (
        <div className="ep-city-result">
          <div className={`ep-city-status-badge ep-city-status--${stats.cityStatus}`}>
            {stats.cityStatus === 'active' && 'Ciudad activa'}
            {stats.cityStatus === 'government_pending' && 'En activación'}
            {stats.cityStatus === 'pre_adoption' && 'Pre-adopción'}
          </div>
          <div className="ep-city-result-name">{stats.city?.name}</div>
          {(stats.city?.province || stats.city?.country) && (
            <div className="ep-city-result-region">
              {[stats.city.province, stats.city.country].filter(Boolean).join(' · ')}
            </div>
          )}

          {stats.cityStatus === 'active' && (
            <p className="ep-city-result-msg">
              {cityCount > 0
                ? <>Ya hay <strong>{formatCount(cityCount)}</strong> {cityCount === 1 ? 'vecino' : 'vecinos'} participando. Descargá la app y empezá.</>
                : <>Tu municipio ya está activo en Citixen. Descargá la app y empezá.</>}
            </p>
          )}

          {stats.cityStatus === 'pre_adoption' && (
            <p className="ep-city-result-msg">
              {cityCount > 0
                ? <>Tu municipio todavía no está activo, pero <strong>{formatCount(cityCount)}</strong> {cityCount === 1 ? 'vecino fundador' : 'vecinos fundadores'} ya se sumaron. Cuantos más seamos, más rápido llega.</>
                : <>Tu municipio todavía no está en Citixen. Sé el primer vecino fundador — invitá a otros y empujá para que llegue.</>}
            </p>
          )}

          {stats.cityStatus === 'government_pending' && (
            <p className="ep-city-result-msg">
              {cityCount > 0
                ? <>Tu municipio está en proceso de activación y <strong>{formatCount(cityCount)}</strong> {cityCount === 1 ? 'vecino' : 'vecinos'} ya se sumaron. Descargá la app para participar cuando active.</>
                : <>Tu municipio está en proceso de activación. Descargá la app y sumate para participar cuando active.</>}
            </p>
          )}

          <button type="button" onClick={handleReset} className="ep-city-reset">
            ← Buscar otra ciudad
          </button>
        </div>
      )}

      <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="ep-cta-track-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 9.291l-2.302 2.302L5.864 2.658z"/>
        </svg>
        Descargar en Google Play
      </a>
    </div>
  )
}

const steps = [
  {
    number: '1',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    title: 'Pagás tus impuestos normalmente',
    desc: 'Nada cambia en tu rutina. Seguís pagando como siempre.',
  },
  {
    number: '2',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Tu municipio reconoce tu contribución',
    desc: 'Un porcentaje de lo que pagaste se convierte en Créditos Cívicos en tu cuenta de Citixen. Automáticamente.',
  },
  {
    number: '3',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Elegís qué apoyar',
    desc: 'Proyectos reales de tu ciudad: infraestructura barrial, programas sociales, iniciativas vecinales. Vos decidís.',
  },
  {
    number: '4',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M7.5 12l3 3 6-6"/>
      </svg>
    ),
    title: 'Los proyectos se materializan',
    desc: 'Cuando un proyecto alcanza su meta de financiamiento, se pone en marcha. Tu decisión tiene efecto directo.',
  },
  {
    number: '5',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: 'Todo queda registrado',
    desc: 'Cada crédito, cada proyecto, cada desembolso. Trazable y auditable. Sin cajas negras.',
  },
]

const controls = [
  'Qué porcentaje de cada tipo de ingreso genera Créditos Cívicos',
  'Qué proyectos son elegibles para recibir apoyo',
  'Cuándo se aprueba la ejecución de un proyecto',
  'Cuándo y cómo se desembolsan los fondos',
  'La posibilidad de pausar o ajustar el sistema en cualquier momento',
]

const gains = [
  'Cada decisión presupuestaria tiene respaldo ciudadano documentado',
  'La priorización deja de ser discrecional — es participativa y trazable',
  'Los vecinos dejan de reclamar al municipio y empiezan a decidir entre ellos',
  'La gestión se vuelve auditablemente transparente',
  'Un reporte mensual público que justifica la inversión con métricas concretas',
]

const implementation = [
  { title: 'Activación en menos de un día', desc: 'Sin migración técnica. Sin equipo de sistemas. Sin desarrollo a medida.' },
  { title: 'Probá antes de comprometerte', desc: 'Empezá gratis con Modo Comunidad. Activá Créditos Cívicos cuando tu ciudad esté lista.' },
  { title: 'Reversible con un click', desc: 'Si en algún momento no funciona, desactivás. Tus datos siguen siendo tuyos.' },
  { title: 'Sin contrato de permanencia', desc: 'Sin letra chica. Sin penalidades por discontinuar.' },
  { title: 'Soporte humano directo', desc: 'Configuración inicial acompañada. Atención por persona, no por bot.' },
]

const faqs = [
  {
    q: '¿Es algún tipo de criptomoneda?',
    a: 'No. Los Créditos Cívicos no viven en blockchain, no se minan, no se tradean y no tienen cotización. Son un registro digital interno de participación, operado por el municipio.',
  },
  {
    q: '¿Puedo sacar dinero con mis créditos?',
    a: 'No. Los créditos se usan para apoyar proyectos. Cuando un proyecto se completa, el municipio desembolsa los fondos al ejecutor — fondos que ya estaban en la caja municipal. No se genera dinero nuevo.',
  },
  {
    q: '¿De dónde salen los Créditos Cívicos?',
    a: 'De tus obligaciones fiscales: impuestos, tasas, multas. Cada crédito tiene origen en una contribución real.',
  },
  {
    q: '¿Qué pasa si apoyo un proyecto y se cancela?',
    a: 'Tus créditos vuelven automáticamente a tu cuenta. Sin excepción, sin demora.',
  },
  {
    q: '¿Funciona solo en ciudades grandes?',
    a: 'No. El sistema escala desde municipios de 5.000 habitantes. La mayoría de los proyectos públicos más urgentes están en ciudades chicas, donde el impacto es inmediato y visible.',
  },
  {
    q: '¿Mi municipio ya lo tiene?',
    a: 'Descargá la app y buscá tu ciudad. Si todavía no está, podés registrarte para ser parte de los primeros vecinos en pedirlo.',
  },
]

export default function EconomiaParticipativa() {
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
        <title>Soy vecino — Citixen</title>
        <meta name="description" content="Pagás impuestos. ¿Alguna vez pudiste decidir qué se hace con ellos? Con Citixen, tu contribución fiscal se convierte en capacidad de decisión real sobre proyectos de tu ciudad." />
        <meta property="og:title" content="Soy vecino — Citixen" />
        <meta property="og:description" content="Pagás impuestos. ¿Alguna vez pudiste decidir qué se hace con ellos? Con Citixen, tu contribución se convierte en decisión." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://citixen.org/soyvecino" />
        <meta property="og:image" content="https://citixen.org/og-image.png" />
        <meta property="og:locale" content="es_AR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://citixen.org/soyvecino" />
      </Head>
      <Navbar />

      {/* ACTO 1 — El golpe emocional */}
      <section className="ep-hero">
        <div className="container">
          <div className="ep-hero-inner">
            <div className="ep-hero-content fade-up">
              <div className="ep-hero-eyebrow">Sos vecino</div>
              <h1 className="ep-hero-title">
                Pagás impuestos.<br />
                <span className="ep-hero-highlight">¿Alguna vez pudiste decidir qué se hace con ellos?</span>
              </h1>
              <p className="ep-hero-subtitle">
                La mayoría de los vecinos contribuyen toda su vida sin tener voz en cómo se usa esa contribución. Citixen cambia eso.
              </p>
            </div>

            <div className="ep-hero-mockup fade-up delay-2">
              <div className="iphone-wrapper">
                <div className="iphone-device">
                  <div className="iphone-screen">
                    <div className="iphone-dynamic-island"></div>
                    <div className="iphone-status-bar">
                      <span>9:41</span>
                      <div className="iphone-status-icons">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 0 0-6 0zm-4-4l2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><rect x="17" y="4" width="4" height="16" rx="1"/><rect x="11" y="8" width="4" height="12" rx="1"/><rect x="5" y="12" width="4" height="8" rx="1"/></svg>
                        <div className="iphone-battery"><div className="iphone-battery-fill"></div></div>
                      </div>
                    </div>
                    <div className="phone-app-header">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
                      <span>Detalle del proyecto</span>
                      <div style={{width: 18}}></div>
                    </div>
                  <div className="phone-content">
                    <div className="phone-carousel">
                      {/* Proyecto 1 */}
                      <div className="phone-slide phone-slide--1">
                        <div className="phone-project-photo">
                          <Image src="/mockup/comedorc.png" alt="Comedor Compartiendo Amor" fill sizes="300px" style={{ objectFit: 'cover' }} />
                          <div className="phone-project-category">Infraestructura social</div>
                        </div>
                        <div className="phone-project-body">
                          <div className="phone-project-title">Comedor Compartiendo Amor</div>
                          <div className="phone-project-desc">Equipamiento y refacción del comedor comunitario para 120 familias.</div>
                          <div className="phone-progress">
                            <div className="phone-progress-header">
                              <span className="phone-progress-label">Financiamiento</span>
                              <span className="phone-progress-pct">62%</span>
                            </div>
                            <div className="phone-progress-bar"><div className="phone-progress-fill" style={{width: '62%'}}></div></div>
                            <div className="phone-progress-text"><span>1.240 CC</span><span>Meta: 2.000 CC</span></div>
                          </div>
                          <div className="phone-supporters">
                            <div className="phone-supporters-avatars"><div className="phone-avatar"></div><div className="phone-avatar"></div><div className="phone-avatar"></div><div className="phone-avatar"></div></div>
                            <span>47 vecinos apoyan</span>
                          </div>
                          <button className="phone-support-btn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                            Apoyar con mis CC
                          </button>
                        </div>
                      </div>
                      {/* Proyecto 2 */}
                      <div className="phone-slide phone-slide--2">
                        <div className="phone-project-photo">
                          <Image src="/mockup/refugio.png" alt="Refugio Patitas del Sur" fill sizes="300px" style={{ objectFit: 'cover' }} />
                          <div className="phone-project-category">Bienestar animal</div>
                        </div>
                        <div className="phone-project-body">
                          <div className="phone-project-title">Refugio Patitas del Sur</div>
                          <div className="phone-project-desc">Construcción de refugio con capacidad para 60 animales rescatados.</div>
                          <div className="phone-progress">
                            <div className="phone-progress-header">
                              <span className="phone-progress-label">Financiamiento</span>
                              <span className="phone-progress-pct">84%</span>
                            </div>
                            <div className="phone-progress-bar"><div className="phone-progress-fill" style={{width: '84%'}}></div></div>
                            <div className="phone-progress-text"><span>4.200 CC</span><span>Meta: 5.000 CC</span></div>
                          </div>
                          <div className="phone-supporters">
                            <div className="phone-supporters-avatars"><div className="phone-avatar"></div><div className="phone-avatar"></div><div className="phone-avatar"></div><div className="phone-avatar"></div><div className="phone-avatar"></div></div>
                            <span>112 vecinos apoyan</span>
                          </div>
                          <button className="phone-support-btn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                            Apoyar con mis CC
                          </button>
                        </div>
                      </div>
                      {/* Proyecto 3 */}
                      <div className="phone-slide phone-slide--3">
                        <div className="phone-project-photo">
                          <Image src="/mockup/plaza.png" alt="Restauración plaza San Martín" fill sizes="300px" style={{ objectFit: 'cover' }} />
                          <div className="phone-project-category">Espacio público</div>
                        </div>
                        <div className="phone-project-body">
                          <div className="phone-project-title">Restauración plaza San Martín</div>
                          <div className="phone-project-desc">Recuperación integral: veredas, bancos, iluminación y forestación.</div>
                          <div className="phone-progress">
                            <div className="phone-progress-header">
                              <span className="phone-progress-label">Financiamiento</span>
                              <span className="phone-progress-pct">35%</span>
                            </div>
                            <div className="phone-progress-bar"><div className="phone-progress-fill" style={{width: '35%'}}></div></div>
                            <div className="phone-progress-text"><span>525 CC</span><span>Meta: 1.500 CC</span></div>
                          </div>
                          <div className="phone-supporters">
                            <div className="phone-supporters-avatars"><div className="phone-avatar"></div><div className="phone-avatar"></div><div className="phone-avatar"></div></div>
                            <span>23 vecinos apoyan</span>
                          </div>
                          <button className="phone-support-btn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                            Apoyar con mis CC
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div className="phone-tabbar">
                      <div className="phone-tab">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        <span>Inicio</span>
                      </div>
                      <div className="phone-tab">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
                        <span>Descubrí</span>
                      </div>
                      <div className="phone-tab phone-tab--active">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        <span>Participá</span>
                      </div>
                      <div className="phone-tab">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                        <span>Mi Impacto</span>
                      </div>
                    </div>
                    <div className="iphone-home-indicator"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTO 2 — El puente conceptual */}
      <section className="ep-bridge">
        <div className="container">
          <h2 className="ep-section-title fade-up">¿Y si tu esfuerzo contara?</h2>
          <div className="ep-bridge-text fade-up">
            <p>
              Cada vez que pagás un impuesto, estás financiando tu ciudad. Pero hoy esa contribución
              es invisible: entra a una caja común y no sabés si terminó en una plaza, en un semáforo,
              o en nada.
            </p>
            <p className="ep-bridge-bold">Citixen hace visible lo invisible.</p>
            <p>
              Cuando tu municipio activa los Créditos Cívicos, cada contribución fiscal que hacés
              se traduce en capacidad de decisión real. Podés apoyar los proyectos que te importan:
              la vereda de tu barrio, el comedor del club, el refugio para animales.
            </p>
            <p className="ep-bridge-closing">
              No es dinero. No se compra. No se vende. Es tu voz, proporcional a tu esfuerzo.
            </p>
          </div>
        </div>
      </section>

      {/* ACTO 3 — El nombre y el mecanismo */}
      <section className="ep-mechanism">
        <div className="container">
          <div className="ep-mechanism-intro fade-up">
            <p className="ep-mechanism-lead">A esa capacidad de decisión le llamamos</p>
            <h2 className="ep-mechanism-name">Créditos Cívicos</h2>
            <p className="ep-mechanism-sub">Y funcionan así:</p>
          </div>

          <CivicLoopScroll steps={steps} />

          <div className="ep-clarification fade-up">
            <h3 className="ep-clarification-title">No es una promesa. Es un mecanismo.</h3>
            <p>
              Los Créditos Cívicos no son dinero, no se transfieren entre personas y no tienen valor
              comercial. Son la forma digital de decir: &ldquo;yo contribuí, y quiero que mi contribución
              vaya a esto&rdquo;.
            </p>
            <p>
              El municipio define las reglas: qué porcentaje de cada impuesto genera créditos,
              qué proyectos son elegibles, y cuándo se ejecutan. Los vecinos priorizan dentro de ese marco.
            </p>
          </div>
        </div>
      </section>

      {/* ACTO 4 — La prueba de que no es fantasía */}
      <section className="ep-precedent">
        <div className="container">
          <h2 className="ep-section-title fade-up">Esto ya existe</h2>
          <div className="ep-precedent-text fade-up">
            <p>
              El presupuesto participativo no es nuevo. Ciudades de todo el mundo lo implementan
              desde hace décadas. Porto Alegre lo hizo en 1989. En Argentina, más de 50 municipios
              tienen algún mecanismo de participación presupuestaria.
            </p>
            <p className="ep-precedent-bold">Lo que es nuevo es hacerlo bien.</p>
            <p>
              Sin papel, sin asambleas de 3 horas un martes a las 19, sin urnas que nadie cuenta.
              Con una plataforma donde cada vecino participa desde su teléfono, en el momento que quiere,
              con la información completa sobre cada proyecto.
            </p>
            <p className="ep-precedent-closing">
              Citixen no inventa el presupuesto participativo. Lo hace funcionar de verdad.
            </p>
          </div>
        </div>
      </section>

      {/* ACTO 5 — El municipio no pierde control */}
      <section className="ep-governance">
        <div className="container">
          <h2 className="ep-section-title fade-up">
            El municipio no pierde control. Gana respaldo.
          </h2>
          <p className="ep-governance-intro fade-up">
            Activar los Créditos Cívicos no significa que los vecinos manejen el presupuesto.
            Significa que el municipio tiene un canal digital, transparente y auditable para involucrar
            a la comunidad en decisiones que antes tomaba solo.
          </p>

          <div className="ep-governance-grid">
            <div className="ep-governance-card fade-up delay-1">
              <h3 className="ep-governance-card-title">Lo que el municipio controla</h3>
              <ul className="ep-governance-list">
                {controls.map((item, i) => (
                  <li key={i}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="M8 12l3 3 5-5"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ep-governance-card ep-governance-card--gains fade-up delay-2">
              <h3 className="ep-governance-card-title">Lo que gana</h3>
              <ul className="ep-governance-list">
                {gains.map((item, i) => (
                  <li key={i}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Para el intendente que está leyendo */}
          <div className="ep-impl-band fade-up">
            <div className="ep-impl-header">
              <span className="ep-impl-eyebrow">Si trabajás en un municipio</span>
              <h3 className="ep-impl-title">La implementación, sin secretos.</h3>
              <p className="ep-impl-intro">
                Lo más caro de activar tecnología en un municipio suele ser el riesgo. Acá no hay.
              </p>
            </div>
            <div className="ep-impl-grid">
              {implementation.map((item, i) => (
                <div className="ep-impl-item" key={i}>
                  <svg className="ep-impl-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="M8 12l3 3 5-5"/>
                  </svg>
                  <div>
                    <div className="ep-impl-item-title">{item.title}</div>
                    <div className="ep-impl-item-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACTO 6 — Preguntas honestas */}
      <section className="ep-faq">
        <div className="container">
          <h2 className="ep-section-title fade-up">Preguntas que te vas a hacer</h2>
          <div className="ep-faq-grid fade-up">
            {faqs.map((faq, i) => (
              <div className="ep-faq-item" key={i}>
                <h3 className="ep-faq-question">{faq.q}</h3>
                <p className="ep-faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTO 7 — CTA final dual */}
      <section className="ep-cta">
        <div className="container">
          <div className="ep-cta-header fade-up">
            <h2 className="ep-cta-title">No esperes a que cambie solo</h2>
            <p className="ep-cta-desc">
              Cada ciudad que se suma a Citixen empezó con dos tipos de personas:
              vecinos que decidieron pedirlo, y municipios que decidieron escucharlos.
            </p>
          </div>

          <div className="ep-cta-dual">
            <CitySearchCTA />

            <div className="ep-cta-track ep-cta-track--gov fade-up delay-2">
              <div className="ep-cta-track-label">Si trabajás en un municipio</div>
              <h3 className="ep-cta-track-title">Activá Citixen en tu ciudad</h3>
              <p className="ep-cta-track-desc">
                Empezá gratis con Modo Comunidad, sin tarjeta.
                Probá antes de evaluar Créditos Cívicos.
                Sin desarrollo a medida, sin contrato, sin penalidades.
              </p>
              <Link href="/#acceso" className="ep-cta-track-btn ep-cta-track-btn--gov">
                Agendá una conversación
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
