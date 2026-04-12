import { useState } from 'react'

function CitizenForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'citizen', email }),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="access-success">
        <div className="success-icon">✓</div>
        <p>Registrado. Te avisamos cuando Citixen llegue a tu ciudad.</p>
      </div>
    )
  }

  return (
    <form className="access-form" onSubmit={handleSubmit}>
      <input
        className="access-input"
        type="email"
        placeholder="tu@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button className="btn-access-citizen" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Registrando...' : 'Quiero acceso anticipado'}
      </button>
      {status === 'error' && (
        <p style={{ fontSize: '13px', color: 'var(--accent)', textAlign: 'center' }}>
          Algo salió mal. Intentá de nuevo.
        </p>
      )}
    </form>
  )
}

function GovernmentForm() {
  const [form, setForm] = useState({ name: '', role: '', municipality: '', email: '' })
  const [status, setStatus] = useState('idle')

  const set = (k) => (e) => setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'government', ...form }),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="access-success">
        <div className="success-icon">✓</div>
        <p>Recibimos tu consulta. Te contactamos a la brevedad para coordinar una conversación.</p>
      </div>
    )
  }

  return (
    <form className="access-form" onSubmit={handleSubmit}>
      <input className="access-input" type="text" placeholder="Nombre completo" value={form.name} onChange={set('name')} required />
      <input className="access-input" type="text" placeholder="Cargo" value={form.role} onChange={set('role')} required />
      <input className="access-input" type="text" placeholder="Municipio" value={form.municipality} onChange={set('municipality')} required />
      <input className="access-input" type="email" placeholder="Email institucional" value={form.email} onChange={set('email')} required />
      <button className="btn-access-gov" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Enviando...' : 'Quiero conocer más'}
      </button>
      {status === 'error' && (
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>
          Algo salió mal. Intentá de nuevo.
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
          <div className="section-label fade-up"><span className="bar"></span> Acceso anticipado</div>
          <h2 className="section-title fade-up">Citixen está en fase de lanzamiento</h2>
          <p className="section-desc fade-up">
            El sistema está operativo. Estas son las formas de sumarse desde el inicio.
          </p>
        </div>
        <div className="early-access-grid">
          <div className="access-card card-citizen fade-up delay-1">
            <div className="access-card-label">Ciudadanos</div>
            <h3 className="access-card-title">Soy ciudadano</h3>
            <p className="access-card-desc">
              Registrate para recibir acceso cuando Citixen llegue a tu ciudad.
              Sin costo, sin compromisos.
            </p>
            <CitizenForm />
          </div>
          <div className="access-card card-government fade-up delay-2">
            <div className="access-card-label">Municipios</div>
            <h3 className="access-card-title">Soy un municipio</h3>
            <p className="access-card-desc">
              Hablemos sobre cómo implementar Citixen en tu ciudad.
              Coordinamos una conversación sin compromiso.
            </p>
            <GovernmentForm />
          </div>
        </div>
      </div>
    </section>
  )
}
