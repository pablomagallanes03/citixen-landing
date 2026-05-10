export default function Trust() {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-grid trust-grid-compact">
          <div className="trust-card trust-card-security fade-up delay-1">
            <h3 className="trust-card-title">Seguridad y privacidad</h3>
            <ul className="trust-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Autenticación segura con control de acceso por roles
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Registro de auditoría de toda acción gubernamental
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                5 perfiles operativos con permisos diferenciados
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Backups automáticos · No vendemos datos
              </li>
            </ul>
          </div>

          <div className="trust-card trust-card-contact fade-up delay-2">
            <h3 className="trust-card-title">Contacto directo</h3>
            <p className="trust-contact-email">hello@citixen.org</p>
            <p className="trust-contact-note">
              No hay formularios infinitos ni bots. Escribinos y te respondemos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
