import { useEffect, useMemo, useRef, useState } from 'react'
import styles from './ed.module.css'

// Figura del hero: los mismos 48 puntos representan los aportes de la comunidad.
// En Escucha se agrupan en tres temas. En Decide fluyen hacia tres proyectos y se absorben:
// cada proyecto es un anillo que se llena hacia su meta (uno la alcanza). Datos ficticios.

const GROUPS = [20, 16, 12]
// Avance de cada proyecto hacia su meta, en %. El primero la alcanza.
const PROGRESS = [100, 72, 46]

const FRAMES = {
  wide: { w: 1000, h: 350, cx: [200, 500, 800], cy: 168, c: 14, ring: 74, stroke: 9 },
  narrow: { w: 600, h: 350, cx: [112, 300, 488], cy: 150, c: 15, ring: 72, stroke: 12 },
}

// Pseudoaleatorio determinista: el estado inicial coincide en servidor y cliente.
function seeded(n) {
  const x = Math.sin(n * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

function layout(frame) {
  const f = FRAMES[frame]
  const dots = []
  GROUPS.forEach((size, g) => {
    for (let i = 0; i < size; i += 1) {
      const id = dots.length
      const angle = i * 2.39996
      const r = f.c * Math.sqrt(i + 0.5)
      dots.push({
        id,
        group: g,
        scatter: { x: f.w * (0.06 + seeded(id + 1) * 0.88), y: f.h * (0.08 + seeded(id + 101) * 0.7) },
        listen: { x: f.cx[g] + r * Math.cos(angle), y: f.cy + r * Math.sin(angle) },
        // Al centro del anillo de su proyecto, donde se absorben.
        decide: { x: f.cx[g] + r * 0.18 * Math.cos(angle), y: f.cy + r * 0.18 * Math.sin(angle) },
      })
    }
  })
  return { f, dots }
}

const pct = (v, total) => `${(v / total) * 100}%`

export default function HeroField({ t, mode, onSelect }) {
  const [frame, setFrame] = useState('wide')

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    const update = () => setFrame(mq.matches ? 'narrow' : 'wide')
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const { f, dots } = useMemo(() => layout(frame), [frame])
  const shown = mode === 'scatter' ? 'listen' : mode
  const listenLabelY = f.cy + f.c * Math.sqrt(GROUPS[0]) + 22
  const decideLabelY = f.cy + f.ring + f.stroke + 18

  return (
    <figure className={styles.field}>
      <div className={styles.switch} role="group" aria-label={t.switchLabel}>
        <span className={`${styles.switchPill} ${shown === 'decide' ? styles.switchRight : ''}`} aria-hidden="true" />
        {['listen', 'decide'].map((m) => (
          <button
            key={m}
            type="button"
            className={styles.switchBtn}
            aria-pressed={shown === m}
            onClick={() => onSelect(m)}
          >
            {t.modes[m].tab}
          </button>
        ))}
      </div>

      <div
        className={`${styles.canvas} ${styles[`mode_${mode}`]}`}
        style={{ aspectRatio: `${f.w} / ${f.h}` }}
        aria-hidden="true"
      >
        <svg className={styles.rings} viewBox={`0 0 ${f.w} ${f.h}`} preserveAspectRatio="none">
          {f.cx.map((cx, g) => (
            <g key={`ring-${g}`} style={{ '--p': PROGRESS[g], '--rd': `${400 + g * 120}ms` }}>
              <circle cx={cx} cy={f.cy} r={f.ring} className={styles.ringTrack} strokeWidth={f.stroke} />
              <circle
                cx={cx}
                cy={f.cy}
                r={f.ring}
                pathLength="100"
                className={styles.ringFill}
                strokeWidth={f.stroke}
                transform={`rotate(-90 ${cx} ${f.cy})`}
              />
              {g === 0 && (
                <path
                  className={styles.ringCheck}
                  d={`M${cx - f.ring * 0.3} ${f.cy + 2} l${f.ring * 0.2} ${f.ring * 0.2} l${f.ring * 0.4} -${f.ring * 0.42}`}
                  pathLength="100"
                  strokeWidth={f.stroke}
                />
              )}
            </g>
          ))}
        </svg>
        {f.cx.slice(1).map((cx, i) => (
          <span key={`pc-${i}`} className={styles.ringValue} style={{ left: pct(cx, f.w), top: pct(f.cy, f.h), '--rd': `${520 + i * 120}ms` }}>
            {PROGRESS[i + 1]}<small>%</small>
          </span>
        ))}

        {dots.map((d) => {
          const p = d[mode]
          return (
            <span
              key={d.id}
              className={styles.dot}
              style={{ left: pct(p.x, f.w), top: pct(p.y, f.h), '--d': `${d.id * 14}ms` }}
            />
          )
        })}

        {f.cx.map((cx, g) => (
          <span key={`lt-${g}`} className={`${styles.label} ${styles.labelListen}`} style={{ left: pct(cx, f.w), top: pct(listenLabelY, f.h) }}>
            {t.themes[g]}
          </span>
        ))}
        {f.cx.map((cx, g) => (
          <span key={`ld-${g}`} className={`${styles.label} ${styles.labelDecide}`} style={{ left: pct(cx, f.w), top: pct(decideLabelY, f.h) }}>
            {t.projects[g]}
            {g === 0 && <em className={styles.labelGoal}>{t.goalReached}</em>}
          </span>
        ))}
      </div>

      <figcaption className={styles.caption}>{t.modes[shown].caption}</figcaption>
    </figure>
  )
}

// Recorrido inicial: dispersos → Escucha → Decide, una sola vez y en menos de 5 s
// (WCAG 2.2.2). Se detiene si la persona elige un modo o prefiere menos movimiento.
export function useHeroSequence() {
  const [mode, setMode] = useState('scatter')
  const touched = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setMode('listen')
      return undefined
    }
    const a = setTimeout(() => { if (!touched.current) setMode('listen') }, 350)
    const b = setTimeout(() => { if (!touched.current) setMode('decide') }, 3300)
    return () => { clearTimeout(a); clearTimeout(b) }
  }, [])

  const select = (m) => { touched.current = true; setMode(m) }
  return [mode, select]
}
