import Image from 'next/image'
import { useState, useEffect } from 'react'

const ROTATING_WORDS = ['impuestos', 'multas', 'tasas']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="fade-up delay-1">
            Pagás{' '}
            <span className="rotating-word">
              <span key={wordIndex} className="rotating-word__active">{ROTATING_WORDS[wordIndex]}</span>
            </span>,<br />ahora también decidí adónde van.
          </h1>
          <p className="fade-up delay-2">
            Citixen cambia tu relación con tu ciudad: participás de las decisiones,
            priorizás los proyectos que importan y ves cómo se hacen realidad. Cerca y con efecto real.
          </p>
          <div className="hero-buttons fade-up delay-3">
            <a href="#acceso" className="btn-primary">
              Activá Citixen en tu ciudad
            </a>
            <a href="#gobierno" className="btn-secondary">
              Ver cómo funciona →
            </a>
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

      {/*
        CHALLENGER A/B (jun 2026) — H1 alternativo más punzante, archivado para test:
        "Tus vecinos no opinan: deciden. Y la ciudad lo construye."
        Diferencia más fuerte de la consulta simbólica, pero mayor riesgo de pinchar
        el miedo de control del intendente. Activar como variante cuando haya tráfico.
      */}
    </section>
  )
}
