import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Pieces from './brand/Pieces'
import { useLocale } from '../lib/i18n.mjs'
import styles from './DemoForm.module.css'

// Pedido de piloto o de demostración → POST /api/government/register-light (crea un MunicipalLead).
// Desde nov 2026 pide solo nombre, email institucional, municipio u organismo, país e interés;
// el resto se conversa después. Requiere el backend con tipo, provincia, ciudad y cargo opcionales
// (rama feat/lead-form-simplificado): desplegar el backend antes que esta landing.
// Solo en producción de Vercel envía de verdad: en preview y desarrollo simula el envío.
const LIVE = process.env.SITE_ENV === 'production'
const INTERESTS = ['pilot', 'demo']

const EMPTY = {
  representativeName: '',
  institutionalEmail: '',
  governmentName: '',
  country: '',
  interest: 'pilot',
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
  const locale = useLocale()
  const { query } = useRouter()
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  // «Pedir una demostración» llega con ?interes=demo: deja elegida esa opción.
  useEffect(() => {
    if (query.interes === 'demo' || query.interes === 'pilot') setForm((prev) => ({ ...prev, interest: query.interes }))
  }, [query.interes])

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
        body: JSON.stringify({ ...form, locale, acceptedTermsAndConditions: true }),
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
    <form className={styles.form} onSubmit={submit}>
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

      <fieldset className={styles.interest}>
        <legend>{f.interest}</legend>
        <div className={styles.choices}>
          {INTERESTS.map((value) => (
            <label key={value} className={`${styles.choice} ${form.interest === value ? styles.choiceOn : ''}`}>
              <input type="radio" name="interest" value={value} checked={form.interest === value} onChange={set('interest')} />
              <span>{t.interests[value]}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.row}>
        <Field name="representativeName" label={f.representativeName} value={form.representativeName} onChange={set('representativeName')} autoComplete="name" />
        <Field name="institutionalEmail" type="email" label={f.institutionalEmail} value={form.institutionalEmail} onChange={set('institutionalEmail')} autoComplete="email" maxLength={120} />
      </div>
      <div className={styles.row}>
        <Field name="governmentName" label={f.governmentName} value={form.governmentName} onChange={set('governmentName')} autoComplete="organization" maxLength={100} />
        <Field name="country" label={f.country} value={form.country} onChange={set('country')} autoComplete="country-name" />
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
