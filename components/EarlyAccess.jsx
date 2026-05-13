import { useState } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://citixen.app'

function GovernmentForm() {
  const [form, setForm] = useState({
    governmentName: '',
    entityType: '',
    country: '',
    province: '',
    city: '',
    representativeName: '',
    representativeRole: '',
    institutionalEmail: '',
    acceptedTermsAndConditions: false,
    _hp: '',
  })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (k) => (e) => setForm(prev => ({ ...prev, [k]: e.target.value }))
  const setCheck = (k) => (e) => setForm(prev => ({ ...prev, [k]: e.target.checked }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(`${API_URL}/api/government/register-light`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
      } else if (res.status === 409) {
        setErrorMsg('Ya existe una consulta con este email.')
        setStatus('error')
      } else if (res.status === 429) {
        setErrorMsg('Demasiados intentos. Intentá de nuevo más tarde.')
        setStatus('error')
      } else {
        setErrorMsg(data.message || 'Algo salió mal. Intentá de nuevo.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('No se pudo conectar con el servidor. Intentá de nuevo.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="access-success">
        <div className="success-icon">✓</div>
        <p>Consulta recibida. Te contactaremos pronto para coordinar los próximos pasos.</p>
      </div>
    )
  }

  return (
    <form className="access-form" onSubmit={handleSubmit}>
      {/* Honeypot — invisible para humanos, bots lo llenan */}
      <input
        type="text"
        name="_hp"
        value={form._hp}
        onChange={set('_hp')}
        style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0, tabIndex: -1 }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <input className="access-input" type="text" placeholder="Nombre del municipio / gobierno" value={form.governmentName} onChange={set('governmentName')} required minLength={2} maxLength={100} />
      <select className="access-input access-select" value={form.entityType} onChange={set('entityType')} required>
        <option value="">Tipo de entidad</option>
        <option value="Municipal">Municipal</option>
        <option value="Provincial">Provincial</option>
        <option value="Regional">Regional</option>
        <option value="District">Distrito</option>
        <option value="County">Condado</option>
        <option value="Federal">Federal</option>
      </select>
      <div className="access-form-row">
        <input className="access-input" type="text" placeholder="País" value={form.country} onChange={set('country')} required minLength={2} maxLength={50} />
        <input className="access-input" type="text" placeholder="Provincia / Estado" value={form.province} onChange={set('province')} required minLength={2} maxLength={50} />
      </div>
      <input className="access-input" type="text" placeholder="Ciudad" value={form.city} onChange={set('city')} required minLength={2} maxLength={50} />
      <div className="access-form-row">
        <input className="access-input" type="text" placeholder="Nombre del responsable" value={form.representativeName} onChange={set('representativeName')} required minLength={2} maxLength={50} />
        <input className="access-input" type="text" placeholder="Cargo" value={form.representativeRole} onChange={set('representativeRole')} required minLength={2} maxLength={50} />
      </div>
      <input className="access-input" type="email" placeholder="Email institucional" value={form.institutionalEmail} onChange={set('institutionalEmail')} required />
      <label className="access-checkbox-label">
        <input type="checkbox" checked={form.acceptedTermsAndConditions} onChange={setCheck('acceptedTermsAndConditions')} required />
        <span>Acepto los <a href="/terms" target="_blank" rel="noopener noreferrer">Términos de Uso</a> y la <a href="/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidad</a></span>
      </label>
      <button className="btn-access-gov" type="submit" disabled={status === 'loading' || !form.acceptedTermsAndConditions}>
        {status === 'loading' ? 'Enviando...' : 'Quiero activar Mi Ciudad'}
      </button>
      {status === 'error' && (
        <p style={{ fontSize: '13px', color: 'var(--accent)', textAlign: 'center' }}>
          {errorMsg}
        </p>
      )}
    </form>
  )
}

function CitizenDownload() {
  return (
    <div className="access-download">
      <div className="access-download-buttons">
        <a href="https://play.google.com/store/apps/details?id=tech.citixen.app" target="_blank" rel="noopener noreferrer" className="btn-access-citizen">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 9.291l-2.302 2.302L5.864 2.658z"/></svg>
          Google Play
        </a>
        <a href="#" className="btn-access-citizen btn-access-citizen--secondary" onClick={e => e.preventDefault()}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          App Store
        </a>
      </div>
      <p className="access-download-note">Disponible para Android. iOS próximamente.</p>
    </div>
  )
}

export default function EarlyAccess() {
  return (
    <section className="early-access-section" id="acceso">
      <div className="container">
        <div className="early-access-header">
          <h2 className="section-title fade-up">Tu municipio ya tiene proyectos en marcha.<br />Solo falta que se vean.</h2>
          <p className="section-desc fade-up" style={{ textAlign: 'center' }}>
            Modo Comunidad es gratuito. Activalo hoy y tené Mi Ciudad en un día.
          </p>
        </div>
        <div className="early-access-grid">
          <div className="access-card card-government fade-up delay-1">
            <div className="access-card-label">Municipios</div>
            <h3 className="access-card-title">Quiero activar Citixen</h3>
            <p className="access-card-desc">
              Registrá tu municipio y te ayudamos a tener Mi Ciudad operativo.
              Sin costo para Modo Comunidad, sin compromiso de permanencia.
            </p>
            <GovernmentForm />
          </div>
          <div className="access-card card-citizen fade-up delay-2">
            <div className="access-card-label">Ciudadanos</div>
            <h3 className="access-card-title">Descargá la app y sumá tu ciudad</h3>
            <p className="access-card-desc">
              Registrate, elegí tu ciudad y sé de los primeros vecinos en pedir Citixen. Tu registro es la primera señal de que tu ciudad debería tenerlo.
            </p>
            <CitizenDownload />
          </div>
        </div>
      </div>
    </section>
  )
}
