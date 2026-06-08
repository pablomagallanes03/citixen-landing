import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EarlyAccess from '../components/EarlyAccess'
import PricingSection from '../components/PricingSection'

// ── Modo Comunidad — herramientas sin manejar dinero ──
const communityTools = [
  {
    title: 'Mi Ciudad: portal público',
    desc: 'La cara pública de tu gestión: una dirección web propia (tuciudad.citixen.app) con tus proyectos, avances y reportes, abierta a todos, compartible en redes. Es la puerta por donde los vecinos descubren tu trabajo.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: 'Opiná: consultas ciudadanas',
    desc: 'Le preguntás a tu ciudad lo que necesites saber: priorizar una obra, elegir el nombre de una plaza, medir un servicio. Con diferentes formatos (ranking, opción múltiple, texto libre), con resultados auditables y conclusión pública.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    title: 'Propuestas: Pulso ciudadano',
    desc: 'Tus vecinos proponen y apoyan ideas. Vos ves qué quiere la ciudad agrupado por tema, como insumo de planificación, sin la obligación de responder una por una.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    title: 'Comunicación institucional',
    desc: 'Un canal oficial directo al teléfono del vecino: emergencias, cortes, convocatorias, trámites. Segmentás por barrio o tipo de vecino, queda registrado y con audiencia auditable.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
    ),
  },
  {
    title: 'Comentarios en proyectos',
    desc: 'Los vecinos comentan y siguen los proyectos municipales. Conversación moderada, con filtros automáticos de contenido, sin que se transforme en red social.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
  {
    title: 'Reporte mensual en PDF',
    desc: 'Un informe listo para el concejo o la prensa: cuántos vecinos participan, qué se hizo, cuánto se decidió. Métricas concretas que justifican la plataforma ante quien haga falta.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
]

// ── Créditos Cívicos — herramientas con decisión sobre fondos ──
const creditTools = [
  {
    title: 'Fuentes de ingreso configurables',
    desc: 'Definís qué impuestos generan Créditos Cívicos y en qué porcentaje cada uno. Vos controlás la perilla; el vecino nunca la toca.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>
      </svg>
    ),
  },
  {
    title: 'Aprobación y control de proyectos',
    desc: 'Aprobás los proyectos, fijás cuánto puede aportar cada vecino y decidís cuáles reciben apoyo. Nada se financia sin tu visto bueno.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    title: 'Respaldo municipal de ejecución',
    desc: 'Algunos proyectos necesitan al municipio para ejecutarse: un terreno fiscal, un permiso, materiales. El vecino lo declara y vos comprometés el recurso al aprobar, antes de que el proyecto sea financiado.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Verificación de organizaciones y vecinos',
    desc: 'Certificás las organizaciones de tu ciudad y verificás la identidad de los vecinos, con límites de proyectos que ajustás a cada caso.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/>
      </svg>
    ),
  },
  {
    title: 'Financiamiento de organizaciones',
    desc: 'Las organizaciones sociales de tu ciudad reciben un presupuesto mensual sostenido por los vecinos. Vos aprobás el monto y desembolsás cada mes.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="21" x2="21" y2="21"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="5 6 12 3 19 6"/><line x1="4" y1="10" x2="4" y2="21"/><line x1="20" y1="10" x2="20" y2="21"/><line x1="8" y1="14" x2="8" y2="17"/><line x1="12" y1="14" x2="12" y2="17"/><line x1="16" y1="14" x2="16" y2="17"/>
      </svg>
    ),
  },
  {
    title: 'Control total del pago',
    desc: 'Cuando un proyecto se completa, vos autorizás la transferencia a quien lo ejecutó, por tus canales de siempre. El dinero nunca sale de tu control y cada movimiento queda registrado.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
]

// ── Transversal — gestión interna del gobierno ──
const teamTools = [
  {
    title: 'Equipo con roles y permisos',
    desc: 'Cada funcionario tiene su cuenta y su perfil (tesorería, revisión, proyectos, comunicación). Se terminó la contraseña compartida y quién hace qué queda claro.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Mapa de la ciudad',
    desc: 'Todos los proyectos y organizaciones geolocalizados, filtrables por estado, categoría y fecha. Ves tu ciudad de un vistazo.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>
      </svg>
    ),
  },
  {
    title: 'Tablero de gestión',
    desc: 'Engagement, salud de la plataforma y resumen financiero en un panel. Los números que necesitás para decidir y para mostrar.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>
      </svg>
    ),
  },
  {
    title: 'Registro de auditoría',
    desc: 'Cada acción sensible queda registrada con autor, fecha y motivo obligatorio. Control interno formal, de fábrica.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>
      </svg>
    ),
  },
  {
    title: 'Expedientes de vecinos y organizaciones',
    desc: 'Abrís el expediente de cualquier vecino u organización y ves su historial completo en un solo lugar: participación, proyectos, comunicaciones y estado.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    title: 'Soporte directo con Citixen',
    desc: 'Un canal de soporte con el equipo de Citixen desde el panel: abrís un hilo, queda con seguimiento y te responde una persona. No es un mail al vacío.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/>
      </svg>
    ),
  },
]

const toolBlocks = [
  {
    id: 'comunidad',
    badge: 'Empezás acá · 6 meses gratis',
    badgeClass: 'community',
    title: 'Modo Comunidad',
    sub: 'Conectás con tus vecinos: transparencia, participación y comunicación. Es la puerta de entrada.',
    tools: communityTools,
  },
  {
    id: 'creditos',
    badge: 'Cuando tu ciudad está lista',
    badgeClass: 'credits',
    title: 'Créditos Cívicos',
    sub: 'Tus vecinos deciden a dónde van los fondos que ya recaudaste. Lo activás cuando estés listo, con un click.',
    tools: creditTools,
  },
  {
    id: 'equipo',
    badge: 'Transversal · los dos modos',
    badgeClass: 'team',
    title: 'Para tu equipo',
    sub: 'La gestión interna, ordenada. Disponible siempre, sin importar el modo en el que estés.',
    tools: teamTools,
  },
]

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
        <meta name="description" content="Todas las herramientas que Citixen le da a tu municipio: portal público, consultas, propuestas, comunicación institucional, Créditos Cívicos, desembolsos trazables, pack de evidencia y gestión de equipo. Un catálogo concreto, sin vueltas." />
        <meta property="og:title" content="Soy gobierno — Citixen" />
        <meta property="og:description" content="El catálogo completo de herramientas que tu municipio puede usar con Citixen: participación, comunicación, Créditos Cívicos y evidencia de gestión." />
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
              <h1 className="ep-hero-title">
                Convertí a tus vecinos<br />
                <span className="ep-hero-highlight">en aliados de tu gestión.</span>
              </h1>
              <p className="ep-hero-subtitle">
                Citixen convierte el reclamo en participación, y la participación en respaldo a tu gestión.
                Un canal directo con tus vecinos, decisiones con su apoyo, y la prueba de lo que se hizo.
                Mirá todo lo que vas a tener en tus manos.
              </p>
              <div className="ep-hero-actions">
                <Link href="#herramientas" className="ep-cta-track-btn ep-cta-track-btn--gov" style={{ display: 'inline-flex', width: 'auto' }}>
                  Ver las herramientas
                </Link>
                <Link href="#acceso" className="ep-hero-link">
                  Activar mi ciudad →
                </Link>
              </div>
              <p className="sg-hero-trust">
                Activación revisada caso por caso. Hablás con una persona, no con un formulario.
              </p>
            </div>

            {/* Visual: arco decisión → obra (mismo sistema que la home). */}
            <div className="ep-hero-mockup fade-up delay-2">
              <div className="hero-visual">
                <div className="hv-bg" aria-hidden="true">
                  <div className="hv-bg-card">
                    <span className="hv-bg-title">Luminarias Av. Mitre</span>
                    <span className="hv-status hv-status--done">Ejecutado</span>
                  </div>
                  <div className="hv-bg-card">
                    <span className="hv-bg-title">Bicisenda Costanera</span>
                    <span className="hv-status hv-status--vote">Recibiendo apoyo</span>
                  </div>
                </div>

                <div className="hv-card">
                  <div className="hv-photo">
                    <Image
                      src="/mockup/plaza.png"
                      alt="Plaza San Martín renovada por el municipio"
                      fill
                      sizes="420px"
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                    <span className="hv-photo-stamp">Ejecutado</span>
                  </div>
                  <div className="hv-card-body">
                    <span className="hv-chip">Espacios públicos</span>
                    <h3 className="hv-title">Renovación Plaza San Martín</h3>
                    <div className="hv-metrics">
                      <div className="hv-metric">
                        <span className="hv-metric-num">412</span>
                        <span className="hv-metric-label">vecinos lo priorizaron</span>
                      </div>
                      <span className="hv-metric-div"></span>
                      <div className="hv-metric">
                        <span className="hv-metric-num">18.400</span>
                        <span className="hv-metric-label">Créditos Cívicos asignados</span>
                      </div>
                      <span className="hv-metric-div"></span>
                      <div className="hv-metric">
                        <span className="hv-metric-num">100%</span>
                        <span className="hv-metric-label">de la meta financiada</span>
                      </div>
                    </div>
                    <div className="hv-timeline">
                      <span className="hv-step hv-step--done">Aprobado por el municipio<em>feb 2026</em></span>
                      <span className="hv-step hv-step--done">Meta alcanzada<em>jul 2026</em></span>
                      <span className="hv-step hv-step--done">En obra<em>ago – nov 2026</em></span>
                      <span className="hv-step hv-step--done">Inaugurada<em>dic 2026</em></span>
                    </div>
                  </div>
                  <div className="hv-stats">
                    <span className="hv-stat"><strong>1.240</strong> vecinos decidiendo</span>
                    <span className="hv-stat-div"></span>
                    <span className="hv-evidence">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Pack de evidencia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTO 2 — El catálogo completo de herramientas */}
      <section className="sg-tools" id="herramientas">
        <div className="container">
          <div className="sg-tools-head fade-up">
            <span className="sg-tools-eyebrow">El catálogo completo</span>
            <h2 className="sg-tools-title">Todo lo que tu municipio puede hacer con Citixen</h2>
            <p className="sg-tools-sub">
              No son promesas: es funcionalidad en producción, hoy. Ordenada por dónde te conviene empezar.
            </p>
          </div>

          {toolBlocks.map((block) => (
            <div className="sg-block fade-up" id={block.id} key={block.id}>
              <div className="sg-block-head">
                <h3 className="sg-block-title">{block.title}</h3>
                <span className={`sg-block-badge sg-block-badge--${block.badgeClass}`}>{block.badge}</span>
                <p className="sg-block-sub">{block.sub}</p>
              </div>
              <div className="sg-tool-grid">
                {block.tools.map((t, i) => (
                  <div className="sg-tool" key={i}>
                    <div className="sg-tool-icon">{t.icon}</div>
                    <h4 className="sg-tool-title">{t.title}</h4>
                    <p className="sg-tool-desc">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTO 3 — El círculo se cierra con pruebas (Pack de evidencia) */}
      <section className="sg-evidence">
        <div className="container">
          <div className="sg-evi-grid fade-up">
            <div className="sg-evi-visual">
              <div className="sg-evi-card">
                <div className="sg-evi-photo">
                  <Image
                    src="/mockup/plaza.png"
                    alt="Evidencia de cierre del proyecto: Plaza San Martín ejecutada"
                    fill
                    sizes="440px"
                    style={{ objectFit: 'cover' }}
                  />
                  <span className="sg-evi-stamp">Ejecutado · dic 2026</span>
                </div>
                <div className="sg-evi-meta">
                  <span className="sg-evi-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Pack de evidencia
                  </span>
                  <p className="sg-evi-cap">12 fotos · 3 documentos · historia de cierre · 412 vecinos alcanzados</p>
                </div>
              </div>
            </div>

            <div className="sg-evi-content">
              <span className="sg-evi-eyebrow">El círculo se cierra con pruebas</span>
              <h2 className="sg-evi-title">Cada proyecto que termina deja un registro real de lo que pasó.</h2>
              <p className="sg-evi-intro">
                No es “se hizo, confíen”. Es evidencia pública y permanente, con cara, lugar y fecha.
              </p>
              <ul className="sg-evi-list">
                {[
                  'Fotos del antes y el después, documentos y comprobantes de la ejecución.',
                  'La historia contada: qué se hizo, qué cambió en el barrio, a cuántos vecinos alcanzó.',
                  'Queda público y permanente en el perfil del proyecto, no se edita ni se borra después.',
                ].map((item, i) => (
                  <li key={i}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="M8 12l3 3 5-5"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="sg-evi-closing">
                Para el vecino, la prueba de que su decisión sirvió. Para tu gestión, la evidencia
                más poderosa que existe: resultados que se ven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACTO 4 — Precios */}
      <PricingSection />

      {/* ACTO 5 — Cierre: ¿dudas? escribinos + form (post directo → MunicipalLead) */}
      <section className="sg-help">
        <div className="container">
          <p className="sg-help-text fade-up">
            ¿Te quedan dudas sobre alguna herramienta o cómo aplicaría en tu ciudad?
            No hay letra chica: escribinos y te respondemos.
          </p>
        </div>
      </section>
      <EarlyAccess />

      <Footer />

      <style jsx>{`
        .sg-hero-trust {
          margin-top: 26px;
          font-size: 14px;
          color: rgba(255,255,255,0.6);
        }

        /* PROOF BAR */
        .sg-proof { background: var(--surface); padding: 40px 0; border-bottom: 1px solid var(--border-light); }
        .sg-proof--bottom { border-bottom: none; border-top: 1px solid var(--border-light); }
        .sg-proof-label { text-align: center; font-size: 13px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 18px; }
        .sg-proof-row { display: flex; justify-content: center; flex-wrap: wrap; gap: 14px 28px; }
        .sg-proof-item { font-size: 17px; font-weight: 600; color: var(--text-secondary); }
        .sg-proof-foot { text-align: center; font-size: 13px; color: var(--text-muted); margin-top: 18px; }

        /* TOOLS CATALOG */
        .sg-tools { padding: 100px 0; background: var(--bg); }
        .sg-tools-head { text-align: center; max-width: 700px; margin: 0 auto; }
        .sg-tools-eyebrow {
          display: inline-block; font-size: 13px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 14px;
        }
        .sg-tools-title {
          font-size: 38px; font-weight: 800; line-height: 1.15;
          letter-spacing: -0.5px; color: var(--text-primary); margin-bottom: 16px;
        }
        .sg-tools-sub { font-size: 18px; line-height: 1.65; color: var(--text-secondary); }

        .sg-block { margin-top: 72px; }
        .sg-block-head {
          display: flex; align-items: center; flex-wrap: wrap; gap: 10px 16px;
          margin-bottom: 32px; padding-bottom: 20px;
          border-bottom: 1px solid var(--border-light);
        }
        .sg-block-title { font-size: 27px; font-weight: 800; color: var(--text-primary); letter-spacing: -0.5px; }
        .sg-block-badge {
          font-size: 12px; font-weight: 700; padding: 6px 13px; border-radius: 999px;
          text-transform: uppercase; letter-spacing: 0.04em;
        }
        .sg-block-badge--community { color: var(--secondary); background: rgba(60,158,206,0.12); }
        .sg-block-badge--credits { color: var(--primary); background: rgba(10,61,145,0.10); }
        .sg-block-badge--team { color: var(--text-secondary); background: rgba(2,2,2,0.06); }
        .sg-block-sub {
          width: 100%; font-size: 16px; line-height: 1.6;
          color: var(--text-secondary); margin-top: 4px; max-width: 720px;
        }

        .sg-tool-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .sg-tool {
          background: var(--surface); border: 1px solid var(--border-light);
          border-radius: var(--radius-lg); padding: 28px 26px;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .sg-tool:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
        .sg-tool-icon {
          width: 46px; height: 46px; border-radius: var(--radius-md);
          display: flex; align-items: center; justify-content: center;
          background: rgba(10,61,145,0.08); color: var(--primary); margin-bottom: 18px;
        }
        .sg-tool-title { font-size: 17px; font-weight: 700; color: var(--text-primary); margin-bottom: 9px; line-height: 1.3; }
        .sg-tool-desc { font-size: 15px; line-height: 1.6; color: var(--text-secondary); }

        /* EVIDENCE — banda navy de prueba (el círculo se cierra) */
        .sg-evidence { padding: 104px 0; background: linear-gradient(160deg, #021B4E 0%, #032C7A 100%); }
        .sg-evi-grid {
          display: grid;
          grid-template-columns: 0.9fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .sg-evi-eyebrow {
          display: inline-block;
          font-size: 12px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: var(--accent); margin-bottom: 16px;
        }
        .sg-evi-title {
          font-size: 34px; font-weight: 800; line-height: 1.2;
          letter-spacing: -0.5px; color: #fff; margin-bottom: 18px;
        }
        .sg-evi-intro {
          font-size: 17px; line-height: 1.7;
          color: rgba(255,255,255,0.72); margin-bottom: 28px;
        }
        .sg-evi-list { list-style: none; display: flex; flex-direction: column; gap: 16px; margin-bottom: 28px; }
        .sg-evi-list li {
          display: flex; gap: 12px; align-items: flex-start;
          font-size: 16px; line-height: 1.55; color: rgba(255,255,255,0.9);
        }
        .sg-evi-list svg { flex-shrink: 0; margin-top: 2px; color: var(--accent); }
        .sg-evi-closing {
          font-size: 17px; font-weight: 600; line-height: 1.6; color: #fff;
          border-left: 3px solid var(--accent); padding-left: 18px;
        }
        .sg-evi-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: var(--radius-xl);
          padding: 14px;
          box-shadow: var(--shadow-lg);
        }
        .sg-evi-photo {
          position: relative; width: 100%; aspect-ratio: 4 / 3;
          border-radius: var(--radius-lg); overflow: hidden;
        }
        .sg-evi-stamp {
          position: absolute; top: 12px; left: 12px;
          font-size: 12px; font-weight: 700; color: #fff;
          background: rgba(2,27,78,0.78); padding: 6px 12px;
          border-radius: 999px;
        }
        .sg-evi-meta { padding: 16px 8px 8px; }
        .sg-evi-tag {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 700; color: var(--accent);
          text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;
        }
        .sg-evi-cap { font-size: 14px; line-height: 1.5; color: rgba(255,255,255,0.75); }

        /* HELP / DUDAS */
        .sg-help { background: var(--surface); padding: 80px 0 0; }
        .sg-help-text {
          max-width: 640px; margin: 0 auto; text-align: center;
          font-size: 19px; line-height: 1.6; color: var(--text-secondary);
        }

        @media (max-width: 1024px) {
          .sg-tool-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .sg-tools { padding: 72px 0; }
          .sg-tools-title { font-size: 30px; }
          .sg-block { margin-top: 56px; }
          .sg-tool-grid { grid-template-columns: 1fr; }
          .sg-evidence { padding: 72px 0; }
          .sg-evi-grid { grid-template-columns: 1fr; gap: 40px; }
          .sg-evi-title { font-size: 27px; }
          .sg-help { padding: 64px 0 0; }
          .sg-help-text { font-size: 17px; }
        }
      `}</style>
    </>
  )
}
