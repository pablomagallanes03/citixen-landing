import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
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
            destinar tus impuestos.
          </p>
          <p className="hero-tagline fade-up delay-2">
            Créditos Cívicos para convertir impuestos en decisiones ciudadanas.
          </p>
          <div className="hero-buttons fade-up delay-3">
            <Link href="/soyvecino" className="btn-primary">Quiero participar</Link>
            <a href="#como-funciona" className="btn-secondary">Conocé más ↓</a>
          </div>
          <div className="hero-points fade-up delay-3">
            <div className="hero-point">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="10.6" x2="15.4" y2="6.4"/><line x1="8.6" y1="13.4" x2="15.4" y2="17.6"/></svg>
              Más participación real
            </div>
            <div className="hero-point">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Ciudades más transparentes
            </div>
            <div className="hero-point">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Proyectos con respaldo ciudadano
            </div>
          </div>
        </div>

        {/* Visual: proyecto destacado — mismo patrón hv-card usado en /soygobierno, con la barra de
            financiamiento phone-progress-* que ya usa PhoneMockup. Cero CSS nuevo para esta pieza. */}
        <div className="hero-mockup fade-up delay-2">
          <div className="hv-card">
            <div className="hv-photo">
              <Image src="/mockup/plaza.png" alt="Recuperación de la Plaza San Martín" fill sizes="420px" style={{ objectFit: 'cover' }} priority />
              <span className="hv-photo-stamp" style={{ background: 'var(--accent)' }}>Proyecto destacado</span>
            </div>
            <div className="hv-card-body" style={{ paddingBottom: 4 }}>
              <span className="hv-chip">Espacio público</span>
              <h3 className="hv-title">Recuperación de la Plaza San Martín</h3>
              <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 16px', lineHeight: 1.5 }}>
                Espacio público y comunitario para el barrio.
              </p>
              <div className="phone-progress">
                <div className="phone-progress-header">
                  <span className="phone-progress-label">Créditos Cívicos asignados</span>
                  <span className="phone-progress-pct">67%</span>
                </div>
                <div className="phone-progress-bar"><div className="phone-progress-fill" style={{ width: '67%' }} /></div>
              </div>
              <div className="phone-supporters" style={{ marginBottom: 0 }}>
                <div className="phone-supporters-avatars"><div className="phone-avatar" /><div className="phone-avatar" /><div className="phone-avatar" /><div className="phone-avatar" /></div>
                <span>3.482 vecinos ya participaron</span>
              </div>
            </div>
            <div className="hv-stats">
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
        .hero-points {
          display: flex;
          flex-wrap: wrap;
          gap: 20px 28px;
        }
        .hero-point {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.75);
        }
        .hero-point svg { flex-shrink: 0; color: var(--secondary); }
        @media (max-width: 600px) {
          .hero-points { gap: 14px 20px; }
        }
      `}</style>
    </section>
  )
}
