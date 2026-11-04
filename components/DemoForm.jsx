import { useState } from 'react'
import Link from 'next/link'
import Pieces from './brand/Pieces'
import styles from './DemoForm.module.css'

// Envía al backend (POST /api/government/register-light → MunicipalLead), con los campos
// que exige su validador. Solo en producción de Vercel envía de verdad: en preview y
// desarrollo simula el envío para no crear pedidos reales.
const LIVE = process.env.SITE_ENV === 'production'
const ENTITY_TYPES = ['Municipal', 'Provincial', 'Regional', 'District', 'County', 'Federal']

const EMPTY = {
  representativeName: '',
  representativeRole: '',
  institutionalEmail: '',
  governmentName: '',
  entityType: 'Municipal',
  country: '',
  province: '',
  city: '',
  _hp: '',
}

function Field({ name, label, type = 'text', value, onChange, autoComplete, minLength = 2, maxLength = 50 }) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        minLength={type === 'email' ? undefined : minLength}
        maxLength={maxLength}
        autoComplete={autoComplete}
      />
    </label>
  )
}

export default function DemoForm({ t }) {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    if (!LIVE) {
      await new Promise((r) => setTimeout(r, 600))
      setStatus('success')
      return
    }

    try {
      const res = await fetch('/api/government/register-light', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, acceptedTermsAndConditions: true }),
      })
      if (res.ok) return setStatus('success')
      setStatus('error')
      if (res.status === 409) return setError(t.errors.duplicate)
      if (res.status === 429) return setError(t.errors.rateLimited)
      return setError(t.errors.generic)
    } catch {
      setStatus('error')
      return setError(t.errors.network)
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <div className={styles.successMark}><Pieces state="together" tone="light" /></div>
        <p>{t.success}</p>
        {!LIVE && <p className={styles.demo}>{t.demoMode}</p>}
      </div>
    )
  }

  const f = t.fields
  return (
    <form className={styles.form} onSubmit={submit} noValidate={false}>
      {!LIVE && <p className={styles.demo}>{t.demoMode}</p>}

      {/* Trampa para bots: invisible para personas */}
      <input
        type="text"
        name="_hp"
        value={form._hp}
        onChange={set('_hp')}
        className={styles.honeypot}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className={styles.row}>
        <Field name="representativeName" label={f.representativeName} value={form.representativeName} onChange={set('representativeName')} autoComplete="name" />
        <Field name="representativeRole" label={f.representativeRole} value={form.representativeRole} onChange={set('representativeRole')} autoComplete="organization-title" />
      </div>
      <Field name="institutionalEmail" type="email" label={f.institutionalEmail} value={form.institutionalEmail} onChange={set('institutionalEmail')} autoComplete="email" maxLength={120} />
      <div className={styles.row}>
        <Field name="governmentName" label={f.governmentName} value={form.governmentName} onChange={set('governmentName')} autoComplete="organization" maxLength={100} />
        <label className={styles.field}>
          <span>{f.entityType}</span>
          <select name="entityType" value={form.entityType} onChange={set('entityType')} required>
            {ENTITY_TYPES.map((type) => <option key={type} value={type}>{t.entityTypes[type]}</option>)}
          </select>
        </label>
      </div>
      <div className={styles.row3}>
        <Field name="country" label={f.country} value={form.country} onChange={set('country')} autoComplete="country-name" />
        <Field name="province" label={f.province} value={form.province} onChange={set('province')} autoComplete="address-level1" />
        <Field name="city" label={f.city} value={form.city} onChange={set('city')} autoComplete="address-level2" />
      </div>

      <button type="submit" className={`btn-primary ${styles.submit}`} disabled={status === 'sending'}>
        {status === 'sending' ? t.sending : t.submit}
      </button>
      <p className={styles.privacy}>
        {t.privacy} <Link href="/privacy" locale="es">{t.privacyLink}</Link>.
      </p>
      {error && <p className={styles.error} role="alert">{error}</p>}
    </form>
  )
}
