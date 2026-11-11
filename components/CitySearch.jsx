import { useEffect, useId, useState } from 'react'
import { formatNumber, useLocale } from '../lib/i18n.mjs'
import { PLAY_STORE_URL, APP_STORE_URL } from '../content/site.mjs'
import styles from './CitySearch.module.css'

// Rutas relativas: en producción Nginx envía /api al backend; en preview lo hace next.config.js.
const API = ''

export default function CitySearch({ t, downloadLabel }) {
  const locale = useLocale()
  const listId = useId()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [searching, setSearching] = useState(false)
  const [searched, setSearched] = useState(false)
  const [stats, setStats] = useState(null)
  const [loadingStats, setLoadingStats] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (stats) return undefined
    const q = query.trim()
    if (q.length < 2) {
      setResults([])
      setSearching(false)
      setSearched(false)
      return undefined
    }
    setSearching(true)
    const controller = new AbortController()
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`${API}/api/cities?search=${encodeURIComponent(q)}&limit=8`, { signal: controller.signal })
        if (!res.ok) throw new Error('search_failed')
        const data = await res.json()
        setResults(data?.data?.cities || data?.cities || [])
        setSearched(true)
        setError(null)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setResults([])
          setError(t.error)
        }
      } finally {
        setSearching(false)
      }
    }, 350)
    return () => { clearTimeout(timer); controller.abort() }
  }, [query, stats, t.error])

  async function select(city) {
    setResults([])
    setQuery(city.name)
    setLoadingStats(true)
    setError(null)
    try {
      const res = await fetch(`${API}/api/cities/${encodeURIComponent(city.slug)}/stats`)
      if (!res.ok) throw new Error('stats_failed')
      const data = await res.json()
      const payload = data?.data || data
      if (!payload?.cityStatus) throw new Error('stats_invalid')
      setStats(payload)
    } catch {
      setError(t.statsError)
    } finally {
      setLoadingStats(false)
    }
  }

  function reset() {
    setStats(null)
    setQuery('')
    setResults([])
    setSearched(false)
    setError(null)
  }

  const count = stats?.stats?.citizenCount || 0
  const status = stats?.cityStatus

  return (
    <div className={styles.search}>
      {!stats && (
        <div className={styles.field}>
          <label htmlFor={`${listId}-input`} className="visually-hidden">{t.label}</label>
          <input
            id={`${listId}-input`}
            type="search"
            className={styles.input}
            placeholder={t.placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            aria-controls={results.length > 0 ? `${listId}-list` : undefined}
            aria-describedby={`${listId}-status`}
          />
          {results.length > 0 && (
            <ul id={`${listId}-list`} className={styles.results}>
              {results.map((c) => (
                <li key={c._id || c.slug}>
                  <button type="button" onClick={() => select(c)}>
                    <span className={styles.resultName}>{c.name}</span>
                    {(c.province || c.country) && (
                      <span className={styles.resultRegion}>{[c.province, c.country].filter(Boolean).join(' · ')}</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <p id={`${listId}-status`} className={styles.status} aria-live="polite">
        {searching && t.searching}
        {loadingStats && t.loading}
        {!searching && searched && results.length === 0 && !stats && !error && t.noResults}
        {error}
      </p>

      {stats && (
        <div className={styles.result}>
          <span className={`${styles.badge} ${styles[status] || ''}`}>{t.status[status] || status}</span>
          <p className={styles.cityName}>{stats.city?.name}</p>
          {(stats.city?.province || stats.city?.country) && (
            <p className={styles.cityRegion}>{[stats.city.province, stats.city.country].filter(Boolean).join(' · ')}</p>
          )}
          {t.message[status] && <p className={styles.message}>{t.message[status]}</p>}
          {count > 0 && (
            <p className={styles.count}>
              <strong>{formatNumber(count, locale)}</strong> {count === 1 ? t.people.one : t.people.other}
            </p>
          )}
          <button type="button" className={styles.reset} onClick={reset}>← {t.reset}</button>
        </div>
      )}

      <div className={styles.stores}>
        <span className={styles.storesLabel}>{downloadLabel}</span>
        <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className={styles.store}>Google Play</a>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={styles.store}>App Store</a>
      </div>
    </div>
  )
}
