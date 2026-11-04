// Las cuatro piezas de la X de Citixen, como sistema gráfico.
// Geometría tomada del logotipo (components/Logo.jsx). Cada pieza tiene un papel fijo:
//   arriba a la derecha  → el gobierno (habilita)
//   abajo a la izquierda → la ciudadanía (decide) — siempre coral, la única coral en pantalla
//   arriba a la izquierda → el proyecto
//   abajo a la derecha   → el cumplimiento
// state="apart": proceso abierto (piezas separadas). state="together": acuerdo cumplido (la X).
import styles from './Pieces.module.css'

const PIECES = [
  { role: 'project', d: 'M1483.09,1398.74c9.74,0,19.47,0,29.2,0,7.33,0,13.72,2.37,19,7.71,20.56,20.81,38.77,43.64,57.19,66.29,3,3.63,3.56,7.86,3.67,12.17.34,13.51.49,27,.63,40.54.19,17.2-9.59,25.52-23.82,31-9.69,3.76-20.15,3.78-30.43,1.85-7.21-1.36-12.88-5.59-17.71-10.8-9.18-9.91-18.51-19.73-27-30.18-17.79-21.77-35.16-43.89-52.57-66a118.64,118.64,0,0,1-10.08-14.69c-10.08-17.7.53-36.62,21.16-38,4.85-.31,9.73-.21,14.6-.24,5.41,0,10.82,0,16.22,0Z', dx: -1, dy: -1 },
  { role: 'government', d: 'M1729.33,1398.74c-9.73,0-19.46,0-29.2,0-7.32,0-13.71,2.37-19,7.71-20.56,20.81-38.76,43.64-57.18,66.29-3,3.63-3.56,7.86-3.67,12.17-.34,13.51-.49,27-.64,40.54-.18,17.2,9.6,25.52,23.83,31,9.69,3.76,20.14,3.78,30.42,1.85,7.22-1.36,12.89-5.59,17.72-10.8,9.18-9.91,18.51-19.73,27.05-30.18,17.79-21.77,35.16-43.89,52.57-66a118.64,118.64,0,0,0,10.08-14.69c10.08-17.7-.53-36.62-21.16-38-4.85-.31-9.73-.21-14.6-.24-5.41,0-10.82,0-16.23,0Z', dx: 1, dy: -1 },
  { role: 'citizen', d: 'M1483.09,1742c9.74,0,19.47.06,29.2,0,7.33,0,13.72-2.37,19-7.71,20.56-20.81,38.77-43.64,57.19-66.29,3-3.63,3.56-7.87,3.67-12.17.34-13.51.49-27,.63-40.54.19-17.2-9.59-25.52-23.82-31-9.69-3.76-20.15-3.78-30.43-1.85-7.21,1.36-12.88,5.59-17.71,10.8-9.18,9.91-18.51,19.73-27,30.18-17.79,21.77-35.16,43.89-52.57,66a119.28,119.28,0,0,0-10.08,14.68c-10.08,17.71.53,36.63,21.16,38,4.85.31,9.73.21,14.6.24,5.41,0,10.82,0,16.22,0Z', dx: -1, dy: 1 },
  { role: 'fulfilment', d: 'M1729.33,1742c-9.73,0-19.46.06-29.2,0-7.32,0-13.71-2.37-19-7.71-20.56-20.81-38.76-43.64-57.18-66.29-3-3.63-3.56-7.87-3.67-12.17-.34-13.51-.49-27-.64-40.54-.18-17.2,9.6-25.52,23.83-31,9.69-3.76,20.14-3.78,30.42-1.85,7.22,1.36,12.89,5.59,17.72,10.8,9.18,9.91,18.51,19.73,27.05,30.18,17.79,21.77,35.16,43.89,52.57,66a119.28,119.28,0,0,1,10.08,14.68c10.08,17.71-.53,36.63-21.16,38-4.85.31-9.73.21-14.6.24-5.41,0-10.82,0-16.23,0Z', dx: 1, dy: 1 },
]

export default function Pieces({
  state = 'together',
  highlight = null,
  tone = 'night',
  drift = false,
  title,
  className = '',
}) {
  const classes = [
    styles.pieces,
    styles[tone],
    state === 'apart' ? styles.apart : styles.together,
    drift ? styles.drift : '',
    highlight ? styles.focused : '',
    className,
  ].join(' ')

  return (
    <svg
      className={classes}
      viewBox="1356 1320 500 500"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {PIECES.map((p) => (
        <path
          key={p.role}
          d={p.d}
          className={`${styles.piece} ${styles[p.role]} ${highlight === p.role ? styles.active : ''}`}
          style={{ '--dx': p.dx, '--dy': p.dy }}
        />
      ))}
    </svg>
  )
}
