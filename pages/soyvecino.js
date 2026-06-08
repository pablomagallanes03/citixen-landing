import Head from 'next/head'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CivicLoopScroll from '../components/CivicLoopScroll'
import PhoneMockup from '../components/PhoneMockup'

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

// Strip "Todo lo que vas a poder hacer" — beneficios del vecino
const citizenPerks = [
  {
    title: 'Decidí sobre proyectos reales',
    desc: 'Asignás Créditos Cívicos a lo que querés que tu ciudad construya.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    title: 'Opiná y proponé',
    desc: 'Respondés las consultas del municipio y proponés tus propias ideas. Lo que más se apoya, se nota.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    title: 'Impulsá lo tuyo',
    desc: 'Creás tus propios proyectos sociales o iniciativas ciudadanas, y sumás el apoyo de tus vecinos para hacerlos realidad.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    title: 'Seguí los resultados',
    desc: 'Ves con fotos y números qué se logró en tu barrio. Cada proyecto cierra con pruebas.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
  },
  {
    title: 'Enterate primero',
    desc: 'Recibís los avisos oficiales de tu municipio: cortes, convocatorias, emergencias.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
  },
  {
    title: 'Mirá tu impacto',
    desc: 'Todo lo que apoyaste y lograste, junto en un solo lugar.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>
      </svg>
    ),
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
              <h1 className="ep-hero-title">
                Pagás impuestos.<br />
                <span className="ep-hero-highlight">¿Alguna vez pudiste decidir qué se hace con ellos?</span>
              </h1>
              <p className="ep-hero-subtitle">
                La mayoría de los vecinos contribuyen toda su vida sin tener voz en cómo se usa esa contribución. Citixen cambia eso.
              </p>
            </div>

            <div className="ep-hero-mockup fade-up delay-2">
              <PhoneMockup />
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

      {/* ACTO 7 — CTA final (100% vecino) */}
      <section className="ep-cta">
        <div className="container">
          <div className="ep-cta-header fade-up">
            <h2 className="ep-cta-title">Las ciudades no cambian solas. Las cambian sus vecinos.</h2>
            <p className="ep-cta-desc">
              No esperes a que alguien más lo pida. Cada ciudad en Citixen arrancó con un vecino
              que decidió que su voz tenía que contar. Puede ser la tuya.
            </p>
          </div>

          {/* Strip — todo lo que vas a poder hacer */}
          <div className="ep-cta-perks fade-up">
            {citizenPerks.map((p, i) => (
              <div className="ep-cta-perk" key={i}>
                <div className="ep-cta-perk-icon">{p.icon}</div>
                <h3 className="ep-cta-perk-title">{p.title}</h3>
                <p className="ep-cta-perk-desc">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="ep-cta-dual">
            <CitySearchCTA />

            <div className="ep-cta-track fade-up delay-2">
              <div className="ep-cta-track-label">Empezá hoy</div>
              <h3 className="ep-cta-track-title">Descargá la app y sumate</h3>
              <ul className="ep-cta-track-list">
                {[
                  'Tu opinión decide proyectos reales, no termina en un buzón.',
                  'Influís en a dónde va una parte de lo que tu ciudad recauda.',
                  'Seguís con fotos y números lo que tu barrio logró.',
                ].map((item, i) => (
                  <li key={i}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="M8 12l3 3 5-5"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="ep-cta-track-btn">
                Descargá Citixen
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
