import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PROJECTS = [
  {
    id: 'plaza',
    title: 'Recuperar Plaza del Barrio Sur',
    chip: 'Espacio público',
    desc: 'Espacio público y comunitario para el barrio.',
    photo: '/mockup/plaza.png',
    progress: 67,
    supporters: '3.482 vecinos ya participaron',
  },
  {
    id: 'luz',
    title: 'Nueva iluminación pública',
    chip: 'Infraestructura urbana',
    desc: 'Instalar nuevas luminarias en 12 cuadras del barrio.',
    bg: 'linear-gradient(135deg, #F7794E 0%, #ff9a6e 100%)',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 2z"/></svg>
    ),
    progress: 45,
    supporters: '1.240 vecinos ya participaron',
  },
  {
    id: 'ciclovia',
    title: 'Ciclovías seguras',
    chip: 'Movilidad',
    desc: 'Conectar el centro con barrios residenciales.',
    bg: 'linear-gradient(135deg, #3C9ECE 0%, #6fbde0 100%)',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 17.5V14l-3-3 4-3 2 3h2"/></svg>
    ),
    progress: 28,
    supporters: '876 vecinos ya participaron',
  },
  {
    id: 'cultura',
    title: 'Recuperar el Centro Cultural',
    chip: 'Cultura',
    desc: 'Refaccionar el edificio y reabrir sus actividades.',
    bg: 'linear-gradient(135deg, #0A3D91 0%, #3C9ECE 100%)',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V9l7-5 7 5v12"/><path d="M9 21V13h6v8"/></svg>
    ),
    progress: 82,
    supporters: '2.910 vecinos ya participaron',
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setActive((i) => (i + 1) % PROJECTS.length), 4500)
    return () => clearInterval(id)
  }, [])

  const p = PROJECTS[active]

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="fade-up delay-1">
            Tus impuestos.<br />
            Tu ciudad.<br />
            <span style={{ color: 'var(--accent)' }}>Tu decisión.</span>
          </h1>
          <p className="fade-up delay-2">
            Cada año contribuís a financiar tu ciudad. Tus impuestos se convierten en calles,
            plazas, transporte, cultura, infraestructura y servicios públicos. Pero entre aportar
            esos recursos y decidir qué se hace con ellos, hay una distancia enorme.
          </p>
          <p className="hero-lead-strong fade-up delay-2">
            Citixen propone algo simple: que también puedas decidir directamente a qué proyectos
            destinar esos recursos que aportaste, tus impuestos.
          </p>
          <p className="hero-tagline fade-up delay-2">
            Créditos Cívicos para convertir impuestos en decisiones ciudadanas.
          </p>
          <div className="hero-buttons fade-up delay-3">
            <Link href="/soyvecino" className="btn-primary">Quiero participar</Link>
            <a href="#como-funciona" className="btn-secondary">Conocé más ↓</a>
          </div>
        </div>

        {/* Visual: proyecto destacado — mismo patrón hv-card usado en /soygobierno, con la barra de
            financiamiento phone-progress-* que ya usa PhoneMockup. Rota entre 4 proyectos de ejemplo
            (los mismos 4 de TaxToProject más abajo en la página) cada 4.5s. */}
        <div className="hero-mockup fade-up delay-2">
          <div className="hv-card">
            <div className="hv-photo" key={p.id}>
              {p.photo ? (
                <Image src={p.photo} alt={p.title} fill sizes="420px" style={{ objectFit: 'cover' }} priority />
              ) : (
                <div className="hero-icon-banner" style={{ background: p.bg }}>{p.icon}</div>
              )}
              <span className="hv-photo-stamp" style={{ background: 'var(--accent)' }}>Proyecto destacado</span>
            </div>
            <div className="hv-card-body" style={{ paddingBottom: 4 }}>
              <span className="hv-chip">{p.chip}</span>
              <h3 className="hv-title">{p.title}</h3>
              <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 16px', lineHeight: 1.5 }}>
                {p.desc}
              </p>
              <div className="phone-progress">
                <div className="phone-progress-header">
                  <span className="phone-progress-label">Créditos Cívicos asignados</span>
                  <span className="phone-progress-pct">{p.progress}%</span>
                </div>
                <div className="phone-progress-bar"><div className="phone-progress-fill" style={{ width: `${p.progress}%` }} /></div>
              </div>
              <div className="phone-supporters" style={{ marginBottom: 0 }}>
                <div className="phone-supporters-avatars"><div className="phone-avatar" /><div className="phone-avatar" /><div className="phone-avatar" /><div className="phone-avatar" /></div>
                <span>{p.supporters}</span>
              </div>
            </div>
            <div className="hv-stats hv-stats--rotator">
              <div className="hero-dots">
                {PROJECTS.map((proj, i) => (
                  <span key={proj.id} className={`hero-dot${i === active ? ' is-active' : ''}`} />
                ))}
              </div>
              <span className="hv-evidence" style={{ marginLeft: 'auto' }}>
                Ver proyecto
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-lead-strong {
          color: #fff !important;
          font-weight: 700;
        }
        .hero-tagline {
          font-size: 15px !important;
          font-weight: 700;
          color: var(--secondary) !important;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-bottom: 28px !important;
        }

        .hero-icon-banner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: heroFadeIn 0.4s ease-out;
        }
        .hv-photo :global(img) {
          animation: heroFadeIn 0.4s ease-out;
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .hv-stats--rotator { display: flex; align-items: center; gap: 12px; }
        .hero-dots { display: flex; gap: 6px; }
        .hero-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--border);
          transition: background 0.3s, transform 0.3s;
        }
        .hero-dot.is-active {
          background: var(--primary);
          transform: scale(1.3);
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-icon-banner, .hv-photo :global(img) { animation: none; }
        }
      `}</style>
    </section>
  )
}
