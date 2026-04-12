import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Scroll animations (IntersectionObserver)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))

    // Navbar scroll effect
    const navbar = document.getElementById('navbar')
    const handleScroll = () => {
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)

    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]')
    const handleAnchorClick = function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        const navLinks = document.getElementById('navLinks')
        if (navLinks) navLinks.classList.remove('active')
      }
    }
    anchors.forEach(anchor => anchor.addEventListener('click', handleAnchorClick))

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      anchors.forEach(anchor => anchor.removeEventListener('click', handleAnchorClick))
    }
  }, [])

  const toggleNav = () => {
    const navLinks = document.getElementById('navLinks')
    if (navLinks) navLinks.classList.toggle('active')
  }

  return (
    <>
      <Head>
        <title>Citixen — Tu voz, tu ciudad</title>
        <meta name="description" content="Citixen es la plataforma de participación ciudadana que conecta a los ciudadanos con proyectos de impacto real en su ciudad. Propone, apoya y transforma." />
        <meta name="keywords" content="citixen, participación ciudadana, civic tech, proyectos ciudadanos, monedas cívicas" />
        <meta property="og:title" content="Citixen — Tu voz, tu ciudad" />
        <meta property="og:description" content="La plataforma de participación ciudadana que conecta a los ciudadanos con proyectos de impacto real." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="og-image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      {/* NAVBAR */}
      <nav className="navbar" id="navbar">
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo">
            <svg viewBox="700 720 1600 1600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1798.8,1916.58c-23.62,0-47.24.12-70.87,0-17.76-.13-33.27-5.74-46.08-18.7-49.9-50.51-94.08-105.91-138.79-160.89-7.17-8.82-8.64-19.09-8.9-29.53-.84-32.79-1.18-65.59-1.54-98.4-.46-41.72,23.28-61.92,57.82-75.32,23.53-9.12,48.89-9.17,73.84-4.49,17.51,3.29,31.28,13.55,43,26.2,22.29,24,44.93,47.89,65.66,73.26,43.16,52.83,85.31,106.51,127.57,160.08A291.07,291.07,0,0,1,1925,1824.4c24.46,43-1.28,88.88-51.36,92.11-11.77.76-23.61.51-35.42.59-13.13.09-26.25,0-39.38,0Z" fill="#3477C1"/>
              <path d="M1201.2,1916.58c23.62,0,47.24.12,70.87,0,17.76-.13,33.27-5.74,46.08-18.7,49.9-50.51,94.08-105.91,138.79-160.89,7.17-8.82,8.64-19.09,8.9-29.53.84-32.79,1.18-65.59,1.54-98.4.46-41.72-23.28-61.92-57.82-75.32-23.53-9.12-48.89-9.17-73.84-4.49-17.51,3.29-31.28,13.55-43,26.2-22.29,24-44.93,47.89-65.66,73.26-43.16,52.83-85.31,106.51-127.57,160.08A291.07,291.07,0,0,0,1075,1824.4c-24.46,43,1.28,88.88,51.36,92.11,11.77.76,23.61.51,35.42.59,13.13.09,26.25,0,39.38,0Z" fill="#F7794E"/>
              <path d="M1201.2,1083.42c23.62,0,47.24-.12,70.87,0,17.76.13,33.27,5.74,46.08,18.7,49.9,50.51,94.08,105.91,138.79,160.89,7.17,8.82,8.64,19.09,8.9,29.53.84,32.79,1.18,65.59,1.54,98.4.46,41.72-23.28,61.92-57.82,75.32-23.53,9.12-48.89,9.17-73.84,4.49-17.51-3.29-31.28-13.55-43-26.2-22.29-24-44.93-47.89-65.66-73.26-43.16-52.83-85.31-106.51-127.57-160.08A291.07,291.07,0,0,1,1075,1175.6c-24.46-43,1.28-88.88,51.36-92.11,11.77-.76,23.61-.51,35.42-.59,13.13-.09,26.25,0,39.38,0Z" fill="#3C9ECE"/>
              <path d="M1798.8,1083.42c-23.62,0-47.24-.12-70.87,0-17.76.13-33.27,5.74-46.08,18.7-49.9,50.51-94.08,105.91-138.79,160.89-7.17,8.82-8.64,19.09-8.9,29.53-.84,32.79-1.18,65.59-1.54,98.4-.46,41.72,23.28,61.92,57.82,75.32,23.53,9.12,48.89,9.17,73.84,4.49,17.51-3.29,31.28-13.55,43-26.2,22.29-24,44.93-47.89,65.66-73.26,43.16-52.83,85.31-106.51,127.57-160.08A291.07,291.07,0,0,0,1925,1175.6c24.46-43-1.28-88.88-51.36-92.11-11.77-.76-23.61-.51-35.42-.59-13.13-.09-26.25,0-39.38,0Z" fill="#3477C1"/>
            </svg>
            <span>citixen</span>
          </a>
          <ul className="navbar-links" id="navLinks">
            <li><a href="#como-funciona">Cómo funciona</a></li>
            <li><a href="#funcionalidades">Funcionalidades</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#testimonios">Testimonios</a></li>
            <li>
              <a href="#descargar" className="navbar-cta">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Descargar
              </a>
            </li>
          </ul>
          <div className="navbar-toggle" id="navToggle" onClick={toggleNav}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-badge fade-up">
              <span className="dot"></span>
              Plataforma cívica activa
            </div>
            <h1 className="fade-up delay-1">
              Tu voz<br />construye <span className="highlight">tu ciudad</span>
            </h1>
            <p className="fade-up delay-2">
              Citixen conecta ciudadanos con proyectos de impacto real.
              Proponé, apoyá con Monedas Cívicas y transformá tu comunidad
              desde tu celular.
            </p>
            <div className="hero-buttons fade-up delay-3">
              <a href="#descargar" className="btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Descargar gratis
              </a>
              <a href="#como-funciona" className="btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
                Cómo funciona
              </a>
            </div>
            <div className="hero-stats fade-up delay-4">
              <div>
                <div className="hero-stat-number">500+</div>
                <div className="hero-stat-label">Ciudadanos activos</div>
              </div>
              <div>
                <div className="hero-stat-number">45</div>
                <div className="hero-stat-label">Proyectos creados</div>
              </div>
              <div>
                <div className="hero-stat-number">12K</div>
                <div className="hero-stat-label">CC distribuidas</div>
              </div>
            </div>
          </div>

          <div className="hero-mockup fade-up delay-2">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="phone-notch"></div>
                <div className="phone-screen-content">
                  <div className="mock-avatar"></div>
                  <div className="mock-greeting">Hola, Pablo</div>
                  <div className="mock-subtitle">Nivel: Ciudadano Activo</div>
                  <div className="mock-card">
                    <div className="mock-card-title">🌳 Reforestación Parque Norte</div>
                    <div className="mock-card-bar">
                      <div className="mock-card-bar-fill" style={{width:'72%'}}></div>
                    </div>
                    <div className="mock-card-text">72% financiado · 180 CC de 250</div>
                  </div>
                  <div className="mock-card">
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                      <div className="mock-card-title" style={{margin:0}}>Tus Monedas Cívicas</div>
                      <div className="mock-cc-badge">🪙 340 CC</div>
                    </div>
                  </div>
                  <div className="mock-card">
                    <div className="mock-card-title">📚 Biblioteca Comunitaria</div>
                    <div className="mock-card-bar">
                      <div className="mock-card-bar-fill" style={{width:'45%', background:'linear-gradient(90deg,#F7794E,#FFD700)'}}></div>
                    </div>
                    <div className="mock-card-text">45% financiado · 90 CC de 200</div>
                  </div>
                </div>
                <div className="mock-nav">
                  <div className="mock-nav-dot active"></div>
                  <div className="mock-nav-dot"></div>
                  <div className="mock-nav-dot"></div>
                  <div className="mock-nav-dot"></div>
                </div>
              </div>
            </div>
            <div className="floating-card card-cc">
              <div className="floating-icon" style={{background:'#FFF8E1', color:'#E6A800'}}>🪙</div>
              <div>
                <div style={{color:'var(--text-muted)', fontSize:'10px'}}>Monedas Cívicas</div>
                <div style={{color:'var(--text-primary)', fontWeight:700}}>+25 CC recibidas</div>
              </div>
            </div>
            <div className="floating-card card-project">
              <div className="floating-icon" style={{background:'rgba(52,199,89,0.1)', color:'#34C759'}}>✓</div>
              <div>
                <div style={{color:'var(--text-muted)', fontSize:'10px'}}>Proyecto apoyado</div>
                <div style={{color:'var(--text-primary)', fontWeight:700}}>Parque Norte</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="container">
          <p>Respaldado por</p>
          <div className="trust-logos">
            <span className="trust-logo">Gobierno Local</span>
            <span className="trust-logo">Fundación Cívica</span>
            <span className="trust-logo">Universidad Nacional</span>
            <span className="trust-logo">Impact Hub</span>
            <span className="trust-logo">BID Lab</span>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="how-section" id="como-funciona">
        <div className="container">
          <div className="section-label fade-up"><span className="bar"></span> Proceso</div>
          <h2 className="section-title fade-up">Cómo funciona Citixen</h2>
          <p className="section-desc fade-up">
            Tres pasos para convertir tu idea en un proyecto de impacto real
            para tu comunidad.
          </p>
          <div className="steps-grid">
            <div className="step-card fade-up delay-1">
              <div className="step-number">1</div>
              <h3 className="step-title">Proponé tu idea</h3>
              <p className="step-desc">Creá un proyecto ciudadano desde la app. Describí el problema, la solución y el impacto esperado en tu comunidad.</p>
            </div>
            <div className="step-card fade-up delay-2">
              <div className="step-number">2</div>
              <h3 className="step-title">Recibí apoyo</h3>
              <p className="step-desc">Otros ciudadanos descubren tu proyecto y lo apoyan con Monedas Cívicas (CC). Cada apoyo acerca tu idea a la realidad.</p>
            </div>
            <div className="step-card fade-up delay-3">
              <div className="step-number">3</div>
              <h3 className="step-title">Transformá tu ciudad</h3>
              <p className="step-desc">Los proyectos más apoyados ganan visibilidad ante gobiernos y organizaciones para su ejecución real.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section" id="funcionalidades">
        <div className="container">
          <div className="section-label fade-up"><span className="bar"></span> Funcionalidades</div>
          <h2 className="section-title fade-up">Todo lo que necesitás<br />para participar</h2>
          <p className="section-desc fade-up">
            Herramientas diseñadas para empoderar a ciudadanos activos
            y conectarlos con su comunidad.
          </p>
          <div className="features-grid">
            <div className="feature-card fade-up delay-1">
              <div className="feature-icon" style={{background:'rgba(52,119,193,0.1)'}}>🪙</div>
              <h3 className="feature-title">Monedas Cívicas (CC)</h3>
              <p className="feature-desc">Ganá CC por tu participación activa y usalas para apoyar los proyectos que más te importan.</p>
            </div>
            <div className="feature-card fade-up delay-2">
              <div className="feature-icon" style={{background:'rgba(247,121,78,0.1)'}}>🚀</div>
              <h3 className="feature-title">Crea Proyectos</h3>
              <p className="feature-desc">Proponé proyectos ciudadanos con un asistente paso a paso. Definí categoría, impacto y metas de financiamiento.</p>
            </div>
            <div className="feature-card fade-up delay-3">
              <div className="feature-icon" style={{background:'rgba(60,158,206,0.1)'}}>📊</div>
              <h3 className="feature-title">Seguimiento real</h3>
              <p className="feature-desc">Seguí el progreso de cada proyecto en tiempo real. Mirá el financiamiento, los apoyos y las actualizaciones.</p>
            </div>
            <div className="feature-card fade-up delay-1">
              <div className="feature-icon" style={{background:'rgba(52,199,89,0.1)'}}>🏅</div>
              <h3 className="feature-title">Sistema de niveles</h3>
              <p className="feature-desc">Subí de nivel como ciudadano activo. Desbloqueá insignias por tu participación y compromiso cívico.</p>
            </div>
            <div className="feature-card fade-up delay-2">
              <div className="feature-icon" style={{background:'rgba(235,194,64,0.1)'}}>🏢</div>
              <h3 className="feature-title">Organizaciones</h3>
              <p className="feature-desc">Creá o unite a organizaciones ciudadanas. Gestiona proyectos colectivos con más impacto.</p>
            </div>
            <div className="feature-card fade-up delay-3">
              <div className="feature-icon" style={{background:'rgba(234,70,88,0.1)'}}>🔒</div>
              <h3 className="feature-title">Seguro y verificado</h3>
              <p className="feature-desc">Verificación de identidad, OTP por email y transparencia total en cada transacción de Monedas Cívicas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* APP SHOWCASE */}
      <section className="showcase-section" id="app">
        <div className="container">
          <div className="showcase-header">
            <div className="section-label fade-up"><span className="bar"></span> La App</div>
            <h2 className="section-title fade-up">Diseñada para<br />la nueva ciudadanía</h2>
            <p className="section-desc fade-up">
              Interfaz moderna e intuitiva, pensada para jóvenes ciudadanos que
              quieren hacer la diferencia.
            </p>
          </div>
          <div className="showcase-phones">
            <div className="showcase-phone fade-up delay-1">
              <div className="showcase-frame">
                <div className="showcase-screen">
                  <div className="showcase-placeholder screen-home">
                    <span className="screen-icon">🏠</span>
                    <span>Inicio</span>
                    <span style={{fontSize:'10px', color:'var(--text-muted)', maxWidth:'140px', textAlign:'center'}}>Dashboard con proyectos, CC y nivel de ciudadano</span>
                  </div>
                </div>
              </div>
              <div className="showcase-label">Inicio</div>
              <div className="showcase-sublabel">Tu dashboard personal</div>
            </div>
            <div className="showcase-phone fade-up delay-2">
              <div className="showcase-frame">
                <div className="showcase-screen">
                  <div className="showcase-placeholder screen-projects">
                    <span className="screen-icon">🚀</span>
                    <span>Proyectos</span>
                    <span style={{fontSize:'10px', color:'var(--text-muted)', maxWidth:'140px', textAlign:'center'}}>Explora y apoya proyectos ciudadanos</span>
                  </div>
                </div>
              </div>
              <div className="showcase-label">Proyectos</div>
              <div className="showcase-sublabel">Descubrí iniciativas</div>
            </div>
            <div className="showcase-phone fade-up delay-3">
              <div className="showcase-frame">
                <div className="showcase-screen">
                  <div className="showcase-placeholder screen-wallet">
                    <span className="screen-icon">🪙</span>
                    <span>Monedas</span>
                    <span style={{fontSize:'10px', color:'var(--text-muted)', maxWidth:'140px', textAlign:'center'}}>Gestiona tus Monedas Cívicas y transacciones</span>
                  </div>
                </div>
              </div>
              <div className="showcase-label">Monedas CC</div>
              <div className="showcase-sublabel">Tu billetera cívica</div>
            </div>
            <div className="showcase-phone fade-up delay-4">
              <div className="showcase-frame">
                <div className="showcase-screen">
                  <div className="showcase-placeholder screen-profile">
                    <span className="screen-icon">👤</span>
                    <span>Perfil</span>
                    <span style={{fontSize:'10px', color:'var(--text-muted)', maxWidth:'140px', textAlign:'center'}}>Tu perfil, nivel e insignias ciudadanas</span>
                  </div>
                </div>
              </div>
              <div className="showcase-label">Perfil</div>
              <div className="showcase-sublabel">Tu identidad cívica</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS HIGHLIGHT */}
      <section className="projects-section" id="proyectos">
        <div className="container">
          <div className="section-label fade-up"><span className="bar"></span> Impacto</div>
          <h2 className="section-title fade-up">Proyectos que transforman</h2>
          <p className="section-desc fade-up">
            Iniciativas reales impulsadas por ciudadanos como vos.
          </p>
          <div className="projects-grid">
            <div className="project-card fade-up delay-1">
              <div className="project-emoji">🌳</div>
              <div className="project-category">Medio Ambiente</div>
              <h3 className="project-title">Reforestación Parque Norte</h3>
              <p className="project-desc">Plantar 500 árboles nativos en el Parque Norte para recuperar la biodiversidad del ecosistema urbano.</p>
              <div className="project-progress">
                <div className="project-progress-fill" style={{width:'72%'}}></div>
              </div>
              <div className="project-meta">
                <span><strong>180 CC</strong> de 250</span>
                <span>72% financiado</span>
              </div>
            </div>
            <div className="project-card fade-up delay-2">
              <div className="project-emoji">📚</div>
              <div className="project-category">Educación</div>
              <h3 className="project-title">Biblioteca Comunitaria Sur</h3>
              <p className="project-desc">Crear un espacio de lectura y aprendizaje digital gratuito para jóvenes del barrio sur.</p>
              <div className="project-progress">
                <div className="project-progress-fill" style={{width:'45%'}}></div>
              </div>
              <div className="project-meta">
                <span><strong>90 CC</strong> de 200</span>
                <span>45% financiado</span>
              </div>
            </div>
            <div className="project-card fade-up delay-3">
              <div className="project-emoji">🚲</div>
              <div className="project-category">Movilidad</div>
              <h3 className="project-title">Ciclovía Conecta Centro</h3>
              <p className="project-desc">Construir 3km de ciclovía segura que conecte el centro con los barrios residenciales del este.</p>
              <div className="project-progress">
                <div className="project-progress-fill" style={{width:'91%'}}></div>
              </div>
              <div className="project-meta">
                <span><strong>273 CC</strong> de 300</span>
                <span>91% financiado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section" id="testimonios">
        <div className="container">
          <div className="section-label fade-up"><span className="bar"></span> Testimonios</div>
          <h2 className="section-title fade-up">Lo que dicen los ciudadanos</h2>
          <p className="section-desc fade-up">
            Historias reales de personas que ya están transformando su ciudad.
          </p>
          <div className="testimonials-grid">
            <div className="testimonial-card fade-up delay-1">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">&quot;Nunca pensé que mi idea de un huerto comunitario pudiera hacerse realidad. Con Citixen, en 3 semanas conseguí el apoyo de toda mi comunidad.&quot;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{background:'linear-gradient(135deg,var(--primary),var(--secondary))'}}>M</div>
                <div>
                  <div className="testimonial-name">María González</div>
                  <div className="testimonial-role">Ciudadana · Nivel Activista</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card fade-up delay-2">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">&quot;Las Monedas Cívicas son geniales. Te incentivan a participar y sentís que tu voto de apoyo realmente cuenta para algo concreto.&quot;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{background:'linear-gradient(135deg,var(--accent),#FFD700)'}}>D</div>
                <div>
                  <div className="testimonial-name">Diego Fernández</div>
                  <div className="testimonial-role">Ciudadano · Nivel Constructor</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card fade-up delay-3">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">&quot;Como organización vecinal, Citixen nos dio visibilidad. Nuestros proyectos ahora llegan a gente que antes no sabía que existíamos.&quot;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{background:'linear-gradient(135deg,#34C759,var(--secondary))'}}>L</div>
                <div>
                  <div className="testimonial-name">Laura Mendoza</div>
                  <div className="testimonial-role">Líder · Org. Vecinos Unidos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA DOWNLOAD */}
      <section className="cta-section" id="descargar">
        <div className="container">
          <div className="cta-card fade-up">
            <div className="cta-content">
              <h2>Empezá a transformar<br />tu ciudad hoy</h2>
              <p>Descargá Citixen gratis y sumate a miles de ciudadanos que ya están construyendo la ciudad que quieren.</p>
              <div className="cta-buttons">
                <a href="#" className="btn-store">
                  <span className="btn-store-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                  </span>
                  <div className="btn-store-text">
                    <small>Descargá en el</small>
                    <strong>App Store</strong>
                  </div>
                </a>
                <a href="#" className="btn-store">
                  <span className="btn-store-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                      <path d="M3.18 23.77c-.41-.2-.68-.6-.68-1.06V1.29c0-.46.27-.86.68-1.06l11.22 11.77L3.18 23.77zM14.4 12l2.28 2.39-8.59 4.87L14.4 12zM14.4 12L8.09 4.74l8.59 4.87L14.4 12zM17.67 10.53l-2.28 2.39 2.28 2.39 2.73-1.55c.52-.3.52-1.07 0-1.37l-2.73-1.55v-.31z"/>
                    </svg>
                  </span>
                  <div className="btn-store-text">
                    <small>Disponible en</small>
                    <strong>Google Play</strong>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <div className="footer-logo">
                <svg viewBox="700 720 1600 1600" fill="none" xmlns="http://www.w3.org/2000/svg" height="28">
                  <path d="M1798.8,1916.58c-23.62,0-47.24.12-70.87,0-17.76-.13-33.27-5.74-46.08-18.7-49.9-50.51-94.08-105.91-138.79-160.89-7.17-8.82-8.64-19.09-8.9-29.53-.84-32.79-1.18-65.59-1.54-98.4-.46-41.72,23.28-61.92,57.82-75.32,23.53-9.12,48.89-9.17,73.84-4.49,17.51,3.29,31.28,13.55,43,26.2,22.29,24,44.93,47.89,65.66,73.26,43.16,52.83,85.31,106.51,127.57,160.08A291.07,291.07,0,0,1,1925,1824.4c24.46,43-1.28,88.88-51.36,92.11-11.77.76-23.61.51-35.42.59-13.13.09-26.25,0-39.38,0Z" fill="white"/>
                  <path d="M1201.2,1916.58c23.62,0,47.24.12,70.87,0,17.76-.13,33.27-5.74,46.08-18.7,49.9-50.51,94.08-105.91,138.79-160.89,7.17-8.82,8.64-19.09,8.9-29.53.84-32.79,1.18-65.59,1.54-98.4.46-41.72-23.28-61.92-57.82-75.32-23.53-9.12-48.89-9.17-73.84-4.49-17.51,3.29-31.28,13.55-43,26.2-22.29,24-44.93,47.89-65.66,73.26-43.16,52.83-85.31,106.51-127.57,160.08A291.07,291.07,0,0,0,1075,1824.4c-24.46,43,1.28,88.88,51.36,92.11,11.77.76,23.61.51,35.42.59,13.13.09,26.25,0,39.38,0Z" fill="#F7794E"/>
                  <path d="M1201.2,1083.42c23.62,0,47.24-.12,70.87,0,17.76.13,33.27,5.74,46.08,18.7,49.9,50.51,94.08,105.91,138.79,160.89,7.17,8.82,8.64,19.09,8.9,29.53.84,32.79,1.18,65.59,1.54,98.4.46,41.72-23.28,61.92-57.82,75.32-23.53,9.12-48.89,9.17-73.84,4.49-17.51-3.29-31.28-13.55-43-26.2-22.29-24-44.93-47.89-65.66-73.26-43.16-52.83-85.31-106.51-127.57-160.08A291.07,291.07,0,0,1,1075,1175.6c-24.46-43,1.28-88.88,51.36-92.11,11.77-.76,23.61-.51,35.42-.59,13.13-.09,26.25,0,39.38,0Z" fill="#3C9ECE"/>
                  <path d="M1798.8,1083.42c-23.62,0-47.24-.12-70.87,0-17.76.13-33.27,5.74-46.08,18.7-49.9,50.51-94.08,105.91-138.79,160.89-7.17,8.82-8.64,19.09-8.9,29.53-.84,32.79-1.18,65.59-1.54,98.4-.46,41.72,23.28,61.92,57.82,75.32,23.53,9.12,48.89,9.17,73.84,4.49,17.51-3.29,31.28-13.55,43-26.2,22.29-24,44.93-47.89,65.66-73.26,43.16-52.83,85.31-106.51,127.57-160.08A291.07,291.07,0,0,0,1925,1175.6c24.46-43-1.28-88.88-51.36-92.11-11.77-.76-23.61-.51-35.42-.59-13.13-.09-26.25,0-39.38,0Z" fill="white"/>
                </svg>
                <span>citixen</span>
              </div>
              <p>Plataforma de participación ciudadana que conecta a las personas con los proyectos que transforman su ciudad. Tecnología cívica al alcance de todos.</p>
            </div>
            <div>
              <h4>Plataforma</h4>
              <ul>
                <li><a href="#como-funciona">Cómo funciona</a></li>
                <li><a href="#funcionalidades">Funcionalidades</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#descargar">Descargar</a></li>
              </ul>
            </div>
            <div>
              <h4>Recursos</h4>
              <ul>
                <li><a href="#">Centro de ayuda</a></li>
                <li><a href="#">Guía del ciudadano</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">API para desarrolladores</a></li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Términos de uso</a></li>
                <li><a href="#">Política de privacidad</a></li>
                <li><a href="#">Protección de datos</a></li>
                <li><a href="#">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2026 Citixen. Todos los derechos reservados.</span>
            <div className="footer-social">
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
