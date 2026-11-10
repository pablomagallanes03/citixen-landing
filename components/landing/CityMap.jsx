import styles from './Landing.module.css'

// Base del mapa de Valle Norte (ciudad ficticia), en un lienzo de 1000 × 620.
// La usan el hero y la sección Lugares; los lugares se dibujan encima.
export const MAP_W = 1000
export const MAP_H = 620

// Parques y plazas: áreas abiertas donde no hay manzanas.
const PARKS = [
  { x: 432, y: 262, w: 78, h: 76 },  // Plaza del Encuentro
  { x: 128, y: 384, w: 128, h: 104 }, // Parque Costanera
  { x: 812, y: 470, w: 120, h: 80 },
]

const inPark = (x, y, s) => PARKS.some((p) => x + s > p.x - 6 && x < p.x + p.w + 6 && y + s > p.y - 6 && y < p.y + p.h + 6)

// Manzanas en una grilla irregular, a la derecha del río.
const BLOCKS = (() => {
  const out = []
  const size = 46
  for (let ci = 0; ci < 12; ci += 1) {
    for (let ri = 0; ri < 10; ri += 1) {
      const x = 240 + ci * 60 + (ri % 2 ? 6 : 0)
      const y = 14 + ri * 60
      if (x > 960 || y > 600) continue
      if ((ci * 7 + ri * 3) % 13 === 0) continue
      if (inPark(x, y, size)) continue
      out.push({ x, y, w: ci % 3 === 2 ? size + 14 : size, h: size, key: `${ci}-${ri}` })
    }
  }
  // Algunas manzanas en la orilla oeste.
  ;[[24, 300], [24, 470], [70, 540]].forEach(([x, y], i) => out.push({ x, y, w: 44, h: 44, key: `w${i}` }))
  return out
})()

const RIVER = 'M60 -10 C 150 120, 40 220, 140 330 S 120 520, 230 640'

export default function CityMap({ districts = [] }) {
  return (
    <g aria-hidden="true">
      <rect x="0" y="0" width={MAP_W} height={MAP_H} className={styles.mapGround} />
      {PARKS.map((p) => <rect key={`${p.x}-${p.y}`} x={p.x} y={p.y} width={p.w} height={p.h} rx="16" className={styles.mapPark} />)}
      {BLOCKS.map((b) => <rect key={b.key} x={b.x} y={b.y} width={b.w} height={b.h} rx="8" className={styles.mapBlock} />)}
      <path d={RIVER} className={styles.mapRiver} />
      <path d={RIVER} className={styles.mapRiverEdge} />
      <path d="M200 640 L 990 30" className={styles.mapAvenue} />
      <path d="M230 245 L 1000 245" className={styles.mapStreet} />
      <path d="M520 0 L 520 620" className={styles.mapStreet} />
      {districts.map(([name, x, y]) => (
        <text key={name} x={x} y={y} className={styles.mapDistrict}>{name.toUpperCase()}</text>
      ))}
    </g>
  )
}
