import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EarlyAccess from '../components/EarlyAccess'

// Qué gana tu gobierno — los beneficios centrales
const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
    title: 'Un canal oficial directo al vecino',
    desc: 'Comunicás emergencias, cortes, convocatorias y trámites segmentando por barrio o tipo de vecino. Llega al teléfono, queda registrado, y cada link compartido difunde solo.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: 'Con qué justificar la gestión',
    desc: 'Un reporte mensual en PDF, listo para el concejo o para redes: cuántos vecinos participan, qué se hizo, cuánto se decidió. Métricas concretas que demuestran que tu gestión escucha.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    title: 'Participación real y ordenada',
    desc: 'Consultás a tus vecinos con resultados auditables. Ves qué quiere la ciudad como insumo de planificación — sin generar promesas que después no podés cumplir.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Decisión ciudadana sobre fondos que ya tenés',
    desc: 'Cuando tu ciudad está lista, los vecinos priorizan a qué proyectos van los Créditos Cívicos. El dinero ya está en tu caja — proviene de impuestos recaudados. Vos no ponés dinero nuevo.',
  },
]

// Lo que controlás / lo que ganás
const controls = [
  'Qué porcentaje de cada tipo de ingreso genera Créditos Cívicos',
  'Qué proyectos son elegibles para recibir apoyo',
  'Cuándo se aprueba la ejecución de cada proyecto',
  'Cuándo y cómo se desembolsan los fondos — siempre por fuera de la app',
  'Pausar, ajustar o desactivar el sistema en cualquier momento',
]

const gains = [
  'Cada decisión presupuestaria con respaldo ciudadano documentado',
  'La priorización deja de ser discrecional — es participativa y trazable',
  'Los vecinos dejan de reclamar y empiezan a decidir entre ellos',
  'Roles separados: quien revisa comprobantes no es quien maneja desembolsos',
  'Un registro auditable de cada acción, con motivo obligatorio',
]

// Por qué es seguro — tarjetas cortas
const safety = [
  { title: 'No ponés dinero nuevo', desc: 'Redirigís decisión sobre fondos ya recaudados. El dinero nunca sale de tu control.' },
  { title: 'Vos controlás las perillas', desc: 'El porcentaje y el valor los definís vos. El ciudadano no controla ninguno de los dos.' },
  { title: 'Pagás cuando querés', desc: 'Modelo de reclamo: el beneficiario de un proyecto completado inicia el cobro, vos transferís. Nunca al revés.' },
  { title: 'Cero riesgo de fuga', desc: 'Los Créditos Cívicos no se convierten en dinero por el ciudadano. Solo cobra quien ejecutó un proyecto real.' },
  { title: 'Solo tu ciudad', desc: 'Aislamiento total de jurisdicción. Tu gobierno ve y opera únicamente sobre vecinos y proyectos de tu municipio.' },
  { title: 'Control interno formal', desc: 'Cada miembro de tu equipo tiene un perfil con permisos acotados. Auditoría con motivo en toda acción sensible.' },
]

// Implementación sin secretos
const implementation = [
  { title: 'Activación en menos de un día', desc: 'Sin migración técnica. Sin equipo de sistemas. Sin desarrollo a medida.' },
  { title: 'Probá antes de comprometerte', desc: 'Empezá gratis con Modo Comunidad. Activá Créditos Cívicos cuando tu ciudad esté lista.' },
  { title: 'Reversible con un click', desc: 'Si en algún momento no funciona, desactivás. Tus datos siguen siendo tuyos.' },
  { title: 'Sin contrato de permanencia', desc: 'Sin letra chica. Sin penalidades por discontinuar.' },
  { title: 'Soporte humano directo', desc: 'Configuración inicial acompañada. Atención por persona, no por bot.' },
]

// Preguntas del intendente
const faqs = [
  {
    q: '¿Tengo que poner dinero nuevo?',
    a: 'No. Los Créditos Cívicos provienen de impuestos que tu municipio ya recaudó. Cuando un proyecto se completa, desembolsás fondos que ya estaban en la caja municipal. No se genera dinero nuevo ni se compromete presupuesto adicional.',
  },
  {
    q: '¿Pierdo control sobre el presupuesto?',
    a: 'No. Activar Créditos Cívicos no significa que los vecinos manejen la caja. Vos definís qué porcentaje de cada ingreso genera créditos, qué proyectos son elegibles, cuándo se aprueban y cuándo se paga. Los vecinos priorizan dentro del marco que vos fijás.',
  },
  {
    q: '¿Cuánto tarda en estar operativo?',
    a: 'Menos de un día. No hay migración de sistemas ni integración técnica. Configurás tus fuentes de ingreso, tu equipo y empezás. La configuración inicial es acompañada por una persona.',
  },
  {
    q: '¿Y si mi municipio todavía no está listo para todo esto?',
    a: 'Empezás con Modo Comunidad: transparencia, consultas y participación, sin manejar un peso. Gratis durante seis meses. Cuando tu ciudad madura, activás Créditos Cívicos con un solo paso — la plataforma misma te indica cuándo estás listo.',
  },
  {
    q: '¿Es una criptomoneda o blockchain?',
    a: 'No. Los Créditos Cívicos no viven en blockchain, no se minan, no se tradean y no tienen cotización. Son un registro digital interno de participación, operado por tu municipio.',
  },
  {
    q: '¿Funciona en municipios chicos?',
    a: 'Sí. El sistema escala desde 5.000 habitantes. La mayoría de los proyectos públicos más urgentes están en ciudades chicas, donde el impacto es inmediato y visible.',
  },
]

// Demo de producto — solo superficies con assets reales (sin inventar el panel)
const demoTabs = [
  {
    key: 'app',
    label: 'La app del vecino',
    img: '/pictures/Iphone.png',
    desc: 'Tu vecino ve qué hace su ciudad en tiempo real, opina, propone y apoya lo que le importa — sin tener que salir a la calle para ser escuchado.',
  },
  {
    key: 'portal',
    label: 'El portal público "Mi Ciudad"',
    img: '/mockup/plaza.png',
    desc: 'Una página pública por municipio con tus proyectos, avances y reportes mensuales. Se comparte por WhatsApp y difunde tu gestión sola, sin que el vecino baje nada.',
  },
  {
    key: 'cc',
    label: 'Créditos Cívicos',
    img: '/wallet-mockup.png',
    desc: 'Cuando tu ciudad está lista, cada vecino prioriza con Créditos Cívicos a qué proyectos van los fondos que ya recaudaste. Trazable de punta a punta.',
  },
]

function DemoShowcase() {
  const [active, setActive] = useState('app')
  const current = demoTabs.find(t => t.key === active)
  return (
    <div className="sg-demo fade-up">
      <div className="sg-demo-tabs">
        {demoTabs.map(t => (
          <button
            key={t.key}
            className={`sg-demo-tab ${active === t.key ? 'is-active' : ''}`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="sg-demo-stage">
        <div className="sg-demo-frame">
          <img src={current.img} alt={current.label} loading="lazy" />
        </div>
        <p className="sg-demo-caption">{current.desc}</p>
      </div>
    </div>
  )
}

export default function SoyGobierno() {
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
        <title>Soy gobierno — Citixen</title>
        <meta name="description" content="Conectá tu municipio con sus vecinos. Citixen le da a tu ciudad un canal oficial, participación real y decisión ciudadana sobre fondos que ya tenés — sin poner dinero nuevo y sin perder control." />
        <meta property="og:title" content="Soy gobierno — Citixen" />
        <meta property="og:description" content="Conectá tu municipio con sus vecinos. Participación real, material para justificar la gestión y decisión ciudadana sobre fondos que ya tenés." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://citixen.org/soygobierno" />
        <meta property="og:image" content="https://citixen.org/og-image.png" />
        <meta property="og:locale" content="es_AR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://citixen.org/soygobierno" />
      </Head>
      <Navbar />

      {/* ACTO 1 — La promesa al intendente */}
      <section className="ep-hero">
        <div className="container">
          <div className="ep-hero-inner">
            <div className="ep-hero-content fade-up">
              <div className="ep-hero-eyebrow">Si trabajás en un municipio</div>
              <h1 className="ep-hero-title">
                Tu ciudad paga impuestos.<br />
                <span className="ep-hero-highlight">Dale a tus vecinos peso real en qué se hace con ellos.</span>
              </h1>
              <p className="ep-hero-subtitle">
                Citixen conecta a tu municipio con sus vecinos: un canal oficial directo, participación
                ordenada, y la prueba — con números — de que tu gestión escucha. Sin poner dinero nuevo
                y sin perder control.
              </p>
              <div className="ep-hero-actions">
                <Link href="#gana" className="ep-cta-track-btn ep-cta-track-btn--gov" style={{ display: 'inline-flex', width: 'auto' }}>
                  Ver qué ganás
                </Link>
                <Link href="#acceso" className="ep-hero-link">
                  Activar mi ciudad →
                </Link>
              </div>
              <p className="sg-hero-trust">
                Activación revisada caso por caso. Hablás con una persona, no con un formulario.
              </p>
            </div>

            <div className="ep-hero-mockup fade-up delay-2">
              <img className="sg-hero-img" src="/pictures/Iphone.png" alt="App de Citixen que usan tus vecinos" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* ACTO 1.5 — Barra de prueba */}
      <section className="sg-proof">
        <div className="container">
          <p className="sg-proof-label">Disponible para gobiernos locales en 7 países de la región</p>
          <div className="sg-proof-row">
            {['Argentina', 'Brasil', 'Perú', 'Chile', 'Uruguay', 'Paraguay', 'Bolivia'].map(c => (
              <span key={c} className="sg-proof-item">{c}</span>
            ))}
          </div>
          <p className="sg-proof-foot">
            Disponible en Google Play y App Store · Citixen Technologies SAS
          </p>
        </div>
      </section>

      {/* ACTO 2 — El problema del gobierno */}
      <section className="ep-bridge">
        <div className="container">
          <h2 className="ep-section-title fade-up">El problema no es la gestión. Es no poder mostrarla.</h2>
          <div className="ep-bridge-text fade-up">
            <p>
              Tu municipio ya recauda impuestos y ya hace obra. Pero el vecino no lo ve, no participa,
              y vos no tenés cómo demostrar — con números — que la gestión funciona.
            </p>
            <p className="ep-bridge-bold">
              Las plataformas de participación mueren porque el gobierno no las puede justificar.
            </p>
            <p>
              Las consultas no vinculantes no movilizan. Las audiencias públicas las escucha nadie.
              Los presupuestos participativos simbólicos no cambian una decisión real. Y el vecino
              sigue reclamando, porque nunca lo invitaste a decidir.
            </p>
            <p className="ep-bridge-closing">
              Citixen está diseñada para lo contrario: que sí puedas mostrar lo que tu ciudad decide.
            </p>
          </div>
        </div>
      </section>

      {/* ACTO 3 — Qué gana tu gobierno */}
      <section className="ep-mechanism" id="gana">
        <div className="container">
          <div className="ep-mechanism-intro fade-up">
            <p className="ep-mechanism-lead">Lo que tu municipio gana con Citixen</p>
            <h2 className="ep-mechanism-name">Cuatro cosas concretas</h2>
            <p className="ep-mechanism-sub">No promesas. Funcionalidad en producción.</p>
          </div>

          <div className="ep-steps">
            {benefits.map((b, i) => (
              <div className={`ep-step fade-up delay-${(i % 3) + 1}`} key={i}>
                <div className="ep-step-icon">{b.icon}</div>
                <h3 className="ep-step-title">{b.title}</h3>
                <p className="ep-step-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTO 3.5 — Mirá el producto */}
      <section className="sg-demowrap">
        <div className="container">
          <span className="ep-mechanism-lead fade-up" style={{ textAlign: 'center', display: 'block' }}>Mirá adentro</span>
          <h2 className="ep-section-title fade-up">Lo que tu ciudad va a usar todos los días.</h2>
          <DemoShowcase />
        </div>
      </section>

      {/* ACTO 4 — Por qué es seguro */}
      <section className="ep-precedent">
        <div className="container">
          <h2 className="ep-section-title fade-up">Por qué es seguro para vos</h2>
          <p className="ep-governance-intro fade-up">
            La objeción real de cualquier intendente no es si la idea es buena. Es el riesgo.
            Por eso el sistema está construido para que el control nunca salga de tu mano.
          </p>

          <div className="ep-impl-grid fade-up">
            {safety.map((item, i) => (
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
      </section>

      {/* ACTO 5 — Control vs respaldo */}
      <section className="ep-governance">
        <div className="container">
          <h2 className="ep-section-title fade-up">
            No perdés control. Ganás respaldo.
          </h2>
          <p className="ep-governance-intro fade-up">
            Activar la participación de tus vecinos no significa entregar el presupuesto. Significa
            tener un canal digital, transparente y auditable para involucrar a la comunidad en
            decisiones que antes tomabas solo.
          </p>

          <div className="ep-governance-grid">
            <div className="ep-governance-card fade-up delay-1">
              <h3 className="ep-governance-card-title">Lo que tu municipio controla</h3>
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
        </div>
      </section>

      {/* ACTO 6 — Empezás sin riesgo (2 modos) */}
      <section className="ep-precedent">
        <div className="container">
          <h2 className="ep-section-title fade-up">Empezás sin riesgo</h2>
          <div className="ep-precedent-text fade-up">
            <p>
              No tenés que activar todo el primer día. Citixen tiene dos modos, y vos elegís
              por dónde empezar.
            </p>
            <p className="ep-precedent-bold">
              Modo Comunidad: gratis durante seis meses.
            </p>
            <p>
              Transparencia, consultas, propuestas y portal público. Sin manejar un peso, sin tarjeta,
              sin límites operativos. Ideal para arrancar, mostrar resultados y ganar adopción en tu ciudad.
            </p>
            <p className="ep-precedent-closing">
              Cuando tu ciudad madura, activás Créditos Cívicos con un solo paso. La plataforma misma
              te dice cuándo estás listo.
            </p>
          </div>
        </div>
      </section>

      {/* ACTO 7 — Implementación sin secretos */}
      <section className="ep-governance">
        <div className="container">
          <div className="ep-impl-band fade-up">
            <div className="ep-impl-header">
              <span className="ep-impl-eyebrow">La implementación, sin secretos</span>
              <h3 className="ep-impl-title">Lo más caro de la tecnología municipal es el riesgo. Acá no hay.</h3>
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

      {/* ACTO 8 — Preguntas del intendente */}
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

      {/* ACTO 9 — CTA final con form real (post directo al backend → MunicipalLead) */}
      <EarlyAccess />

      <Footer />

      <style jsx>{`
        /* HERO — imagen estática en la 2da columna del ep-hero */
        .sg-hero-img {
          max-height: 540px;
          width: auto;
          filter: drop-shadow(0 30px 60px rgba(0,0,0,0.45));
        }
        .sg-hero-trust {
          margin-top: 26px;
          font-size: 14px;
          color: rgba(255,255,255,0.6);
        }

        /* PROOF BAR */
        .sg-proof { background: var(--surface); padding: 40px 0; border-bottom: 1px solid var(--border-light); }
        .sg-proof-label { text-align: center; font-size: 13px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 18px; }
        .sg-proof-row { display: flex; justify-content: center; flex-wrap: wrap; gap: 14px 28px; }
        .sg-proof-item { font-size: 17px; font-weight: 600; color: var(--text-secondary); }
        .sg-proof-foot { text-align: center; font-size: 13px; color: var(--text-muted); margin-top: 18px; }

        /* DEMO */
        .sg-demowrap { padding: 104px 0; background: var(--bg); }
        .sg-demo { margin-top: 28px; }
        .sg-demo-tabs { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-bottom: 32px; }
        .sg-demo-tab { background: var(--surface); border: 1px solid var(--border-light); border-radius: 999px; padding: 10px 22px; font-size: 15px; font-weight: 600; color: var(--text-secondary); cursor: pointer; transition: all 0.2s; }
        .sg-demo-tab:hover { border-color: var(--primary); color: var(--primary); }
        .sg-demo-tab.is-active { background: var(--primary); border-color: var(--primary); color: #fff; }
        .sg-demo-stage { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; align-items: center; background: var(--surface); border: 1px solid var(--border-light); border-radius: var(--radius-xl); padding: 40px; }
        .sg-demo-frame { display: flex; justify-content: center; }
        .sg-demo-frame img { max-height: 420px; width: auto; border-radius: var(--radius-lg); box-shadow: var(--shadow-xl); }
        .sg-demo-caption { font-size: 18px; line-height: 1.65; color: var(--text-secondary); }

        @media (max-width: 900px) {
          .sg-demowrap { padding: 72px 0; }
          .sg-demo-stage { grid-template-columns: 1fr; text-align: center; padding: 28px; }
          .sg-demo-tabs { justify-content: flex-start; }
        }
      `}</style>
    </>
  )
}
