import { useEffect, useState } from 'react'

// Obligaciones fiscales que un municipio puede configurar como fuente de CC
// (ver §32 Revenue Sources). Rotan para mostrar el alcance.
const WORDS = ['impuestos', 'tasas', 'multas', 'patentes']
const INTERVAL = 2200

export default function RotatingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="rotating-word" aria-live="polite">
      <span key={index} className="rotating-word__active">
        {WORDS[index]}
      </span>
    </span>
  )
}
