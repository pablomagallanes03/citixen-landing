import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="fade-up delay-1">
            Lo que tus vecinos deciden,<br />la ciudad lo construye.
          </h1>
          <p className="fade-up delay-2">
            Con Citixen, los vecinos priorizan en qué proyectos invierte el municipio
            — y esa decisión se ejecuta, no queda en una consulta sin efecto.
            Los Créditos Cívicos son el mecanismo que la hace vinculante; el municipio
            mantiene el control y la ejecución.
          </p>
          <div className="hero-buttons fade-up delay-3">
            <a href="#acceso" className="btn-primary">
              Activá Citixen en tu ciudad
            </a>
            <Link href="/soyvecino" className="btn-secondary">
              Ver proyectos reales →
            </Link>
          </div>
          <div className="hero-proof fade-up delay-4">
            <div className="hero-proof-item">
              <span className="hero-proof-number">Vinculante</span>
              <span className="hero-proof-label">Lo que la ciudad decide, se ejecuta</span>
            </div>
            <div className="hero-proof-divider"></div>
            <div className="hero-proof-item">
              <span className="hero-proof-number">Proyectos reales</span>
              <span className="hero-proof-label">Obras concretas, no una encuesta más</span>
            </div>
            <div className="hero-proof-divider"></div>
            <div className="hero-proof-item">
              <span className="hero-proof-number">Con control municipal</span>
              <span className="hero-proof-label">El municipio aprueba y ejecuta cada proyecto</span>
            </div>
          </div>
        </div>

        {/* Visual: arco decisión → obra. Reemplaza el mockup-wallet (jun 2026). */}
        <div className="hero-mockup fade-up delay-2">
          <div className="hero-visual">
            <div className="hv-bg" aria-hidden="true">
              <div className="hv-bg-card">
                <span className="hv-bg-title">Luminarias Av. Mitre</span>
                <span className="hv-status hv-status--done">Ejecutado</span>
              </div>
              <div className="hv-bg-card">
                <span className="hv-bg-title">Bicisenda Costanera</span>
                <span className="hv-status hv-status--vote">En votación</span>
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
                <h3 className="hv-title">Plaza San Martín — Barrio Norte</h3>
                <p className="hv-decision">
                  <strong>412 vecinos</strong> lo eligieron · el más priorizado del barrio
                </p>
                <div className="hv-timeline">
                  <span className="hv-step hv-step--done">Priorizado por los vecinos</span>
                  <span className="hv-step hv-step--done">Aprobado por el municipio</span>
                  <span className="hv-step hv-step--done">En obra</span>
                  <span className="hv-step hv-step--done">Listo</span>
                </div>
              </div>
              <div className="hv-stats">
                <span className="hv-stat"><strong>1.240</strong> vecinos decidiendo</span>
                <span className="hv-stat-div"></span>
                <span className="hv-stat"><strong>7</strong> proyectos ejecutados este año</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
        CHALLENGER A/B (jun 2026) — H1 alternativo más punzante, archivado para test:
        "Tus vecinos no opinan: deciden. Y la ciudad lo construye."
        Diferencia más fuerte de la consulta simbólica, pero mayor riesgo de pinchar
        el miedo de control del intendente. Activar como variante cuando haya tráfico.
      */}
    </section>
  )
}
