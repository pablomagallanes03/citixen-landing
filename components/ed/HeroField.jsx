import { useEffect, useMemo, useRef, useState } from 'react'
import styles from './ed.module.css'

// Figura del hero: los mismos 48 puntos representan los aportes de la comunidad.
// En Escucha se agrupan en tres temas; en Decide se apilan como el apoyo de tres
// proyectos que avanzan hacia su meta. Datos ficticios (se rotula en la página).

const GROUPS = [20, 16, 12]
const COLS = 2
const GOAL_ROWS = 10 // el primer proyecto (20 puntos en filas de 2) llega justo a su meta

const FRAMES = {
  wide: { w: 1000, h: 350, cx: [200, 500, 800], cy: 168, c: 14, base: 300, s: 25 },
  narrow: { w: 600, h: 450, cx: [112, 300, 488], cy: 205, c: 15, base: 380, s: 27 },
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
        decide: { x: f.cx[g] + ((i % COLS) - (COLS - 1) / 2) * f.s, y: f.base - Math.floor(i / COLS) * f.s },
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
  const decideLabelY = f.base + f.s * 0.9
  const goalY = f.base - (GOAL_ROWS - 1) * f.s - f.s * 0.75

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
        {f.cx.map((cx, g) => (
          <span
            key={`goal-${g}`}
            className={styles.goal}
            style={{ left: pct(cx - 2.6 * f.s, f.w), width: pct(5.2 * f.s, f.w), top: pct(goalY, f.h) }}
          >
            <span>{g === 0 ? t.goalReached : t.goal}</span>
          </span>
        ))}

        {dots.map((d) => {
          const p = d[mode]
          return (
            <span
              key={d.id}
              className={styles.dot}
              style={{ left: pct(p.x, f.w), top: pct(p.y, f.h), transitionDelay: `${d.id * 14}ms` }}
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
    const b = setTimeout(() => { if (!touched.current) setMode('decide') }, 4300)
    return () => { clearTimeout(a); clearTimeout(b) }
  }, [])

  const select = (m) => { touched.current = true; setMode(m) }
  return [mode, select]
}
