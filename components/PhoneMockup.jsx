import Image from 'next/image'

// iPhone construido en CSS — fuente única del mockup de la app.
// Usado en /soyvecino (hero) y /soygobierno (demo de producto).
// Las clases viven en styles/globals.css (.iphone-*, .phone-*).
export default function PhoneMockup() {
  return (
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
            <div style={{ width: 18 }}></div>
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
                    <div className="phone-progress-bar"><div className="phone-progress-fill" style={{ width: '62%' }}></div></div>
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
                    <div className="phone-progress-bar"><div className="phone-progress-fill" style={{ width: '84%' }}></div></div>
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
                    <div className="phone-progress-bar"><div className="phone-progress-fill" style={{ width: '35%' }}></div></div>
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
  )
}
