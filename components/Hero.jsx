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
    photo: '/mockup/iluminacion.jpg',
    progress: 45,
    supporters: '1.240 vecinos ya participaron',
  },
  {
    id: 'ciclovia',
    title: 'Ciclovías seguras',
    chip: 'Movilidad',
    desc: 'Conectar el centro con barrios residenciales.',
    photo: '/mockup/ciclovia.jpg',
    progress: 28,
    supporters: '876 vecinos ya participaron',
  },
  {
    id: 'cultura',
    title: 'Recuperar el Centro Cultural',
    chip: 'Cultura',
    desc: 'Refaccionar el edificio y reabrir sus actividades.',
    photo: '/mockup/centro-cultural.jpg',
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
            Tus impuestos financian tu ciudad. Pero aportar no siempre significa poder decidir
            qué proyectos reciben esos recursos.
          </p>
          <p className="hero-lead-strong fade-up delay-2">
            Con Citixen, una parte de tu contribución genera Créditos Cívicos para apoyar
            los proyectos que te importan, según las reglas de tu municipio.
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
            <div className="hv-photo">
              {PROJECTS.map((proj, i) => (
                <Image
                  key={proj.id}
                  src={proj.photo}
                  alt={proj.title}
                  fill
                  sizes="420px"
                  style={{ objectFit: 'cover' }}
                  priority={i === 0}
                  className={`hv-photo-layer${i === active ? ' is-active' : ''}`}
                />
              ))}
            </div>
            <div className="hv-card-body" style={{ paddingBottom: 4 }}>
              <div className="hv-card-text" key={p.id}>
                <span className="hv-chip">{p.chip}</span>
                <h3 className="hv-title hv-title--clamp">{p.title}</h3>
                <p className="hv-desc">
                  {p.desc} Proyectos y cifras ficticios.
                </p>
              </div>
              <div className="phone-progress">
                <div className="phone-progress-header">
                  <span className="phone-progress-label">Créditos Cívicos asignados</span>
                  <span className="phone-progress-pct">{p.progress}%</span>
                </div>
                <div className="phone-progress-bar"><div className="phone-progress-fill" style={{ width: `${p.progress}%` }} /></div>
              </div>
              <div className="phone-supporters" style={{ marginBottom: 0 }}>
                <div className="phone-supporters-avatars"><div className="phone-avatar" /><div className="phone-avatar" /><div className="phone-avatar" /><div className="phone-avatar" /></div>
                <span key={p.id} className="hv-supporters-text">{p.supporters}</span>
              </div>
            </div>
            <div className="hv-stats hv-stats--rotator">
              <div className="hero-dots">
                {PROJECTS.map((proj, i) => (
                  <span key={proj.id} className={`hero-dot${i === active ? ' is-active' : ''}`} />
                ))}
              </div>
              <span className="hv-evidence" style={{ marginLeft: 'auto' }}>
                Proyecto de ejemplo
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

        .hv-photo :global(.hv-photo-layer) {
          opacity: 0;
          transition: opacity 0.7s ease;
        }
        .hv-photo :global(.hv-photo-layer.is-active) {
          opacity: 1;
        }

        .hv-card-text,
        .hv-supporters-text {
          display: block;
          animation: heroTextIn 0.45s ease-out;
        }
        .hv-title--clamp {
          min-height: 44px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .hv-desc {
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          margin: 0 0 16px;
          min-height: 40px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes heroTextIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
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
          .hv-photo :global(.hv-photo-layer) { transition: none; }
          .hv-card-text,
          .hv-supporters-text { animation: none; }
        }
      `}</style>
    </section>
  )
}
