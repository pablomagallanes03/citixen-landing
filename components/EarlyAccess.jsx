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

export default function EarlyAccess() {
  return (
    <section className="early-access-section" id="acceso">
      <div className="container">
        <div className="early-access-header">
          <h2 className="section-title fade-up">Que la próxima obra de tu ciudad<br />la decidan tus vecinos.</h2>
          <p className="section-desc fade-up" style={{ textAlign: 'center' }}>
            Empezá gratis con Modo Comunidad y activá la decisión vinculante cuando
            tu ciudad esté lista. Sin contrato, reversible cuando quieras.
          </p>
          <div className="early-access-control fade-up">
            <span className="early-access-control-label">Vos mantenés el control</span>
            <ul className="early-access-control-list">
              <li>Definís qué porcentaje de cada ingreso genera Créditos Cívicos</li>
              <li>Aprobás qué proyectos son elegibles y cuándo se ejecutan</li>
              <li>Pausás o desactivás cuando quieras — sin poner dinero nuevo</li>
            </ul>
          </div>
        </div>
        <div className="early-access-grid early-access-grid--single">
          <div className="access-card card-government fade-up delay-1">
            <div className="access-card-label">Municipios</div>
            <h3 className="access-card-title">Quiero activar Citixen</h3>
            <p className="access-card-desc">
              Registrá tu municipio y te ayudamos a tenerlo operativo en un día.
              Sin costo para Modo Comunidad, sin compromiso de permanencia.
            </p>
            <GovernmentForm />
          </div>
        </div>
      </div>
    </section>
  )
}
