import { useEffect, useRef, useState } from 'react'

/**
 * CivicLoopScroll — scrollytelling del recorrido de los Créditos Cívicos.
 *
 * Panel sticky con una FOTO real de una plaza que arranca gris/apagada y va
 * recuperando color y luz a medida que scrolleás los 5 pasos (el efecto lo
 * maneja la variable `--restore` aplicada como filtro sobre la imagen). Sobre
 * la foto flota un chip de UI mínimo que cuenta cada paso, y abajo el timeline
 * con la moneda CC que viaja.
 *
 * Mecánica de motion: medición barata en scroll → render en rAF con lerp
 * (peso/inercia), gated por IntersectionObserver. `renderPos` maneja por DOM
 * directo opacidad/posición de los pasos, fill del timeline, moneda y `--restore`
 * (con easing). setState solo para el índice (swap del chip/caption).
 *
 * Sin dependencias. Degrada a lista estática en mobile y con prefers-reduced-motion.
 *
 * @param {Array<{number,icon,title,desc}>} steps — fuente única de los pasos.
 */

// Frames de imagen posicionados sobre el eje de scroll (0→4 = los 5 pasos).
// Pasos 1,2,3,5 tienen una imagen dedicada; el paso 4 ("se materializa") es un
// MONTAJE: cross-fade por el time-lapse del lugar (abandonado → disfrutada).
const FRAMES = [
  { src: '/loop/step1.jpg', pos: 0 },     // 1 · Pagás impuestos   (vecino pagando)
  { src: '/loop/step2.jpg', pos: 1 },     // 2 · Te acreditan CC    (mira el teléfono)
  { src: '/loop/step3.jpg', pos: 2 },     // 3 · Elegís proyecto    (elige en la app)
  { src: '/loop/build1.jpg', pos: 2.55 }, // 4 · montaje: abandonado
  { src: '/loop/build2.jpg', pos: 2.75 }, //          obra
  { src: '/loop/build3.jpg', pos: 2.95 }, //          construcción
  { src: '/loop/build4.jpg', pos: 3.20 }, //          plaza terminada
  { src: '/loop/build5.jpg', pos: 3.45 }, //          plaza disfrutada
  { src: '/loop/step5.jpg', pos: 4 },     // 5 · Queda registrado   (revisa el panel)
]

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)

// Notificaciones push (una por paso) — estilo push nativo que se desliza desde arriba.
// La posición varía por paso para no tapar al sujeto de cada foto.
const NOTIFS = [
  { title: 'Pago registrado', body: 'Tu Tasa municipal fue procesada.', pos: 'pos-tl' },
  { title: '+150 Créditos Cívicos', body: 'Se acreditaron en tu cuenta.', pos: 'pos-tl' },
  { title: 'Apoyaste un proyecto', body: 'Asignaste tus CC a Plaza San Martín.', pos: 'pos-tr' },
  { title: '¡Proyecto financiado!', body: 'Plaza San Martín alcanzó su meta.', pos: 'pos-tc' },
  { title: 'Registro público', body: 'Tu aporte quedó trazable y auditable.', pos: 'pos-tr' },
]

const LERP = 0.12 // peso del scroll: más bajo = más inercia

export default function CivicLoopScroll({ steps = [] }) {
  const [active, setActive] = useState(0)
  const stepRefs = useRef([])
  const imgRefs = useRef([])
  const railFillRef = useRef(null)
  const coinRef = useRef(null)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!steps.length) return
    const els = stepRefs.current.filter(Boolean)
    if (!els.length) return

    const scrubEnabled =
      window.matchMedia('(min-width: 861px)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!scrubEnabled) {
      els.forEach((el) => { el.style.opacity = ''; el.style.transform = '' })
      return
    }

    const last = els.length - 1
    let targetPos = 0
    let renderPos = 0
    let raf = 0
    let running = false
    let lastRounded = -1
    let vh = window.innerHeight

    const measure = () => {
      const center = vh / 2
      const centers = els.map((el) => {
        const r = el.getBoundingClientRect()
        return r.top + r.height / 2
      })
      if (center <= centers[0]) { targetPos = 0; return }
      if (center >= centers[last]) { targetPos = last; return }
      let k = 0
      while (k < last && center >= centers[k + 1]) k++
      const span = centers[k + 1] - centers[k] || 1
      targetPos = k + (center - centers[k]) / span
    }

    const paint = () => {
      const ratio = last ? renderPos / last : 0

      // cross-fade entre los dos frames que rodean la posición actual del scroll.
      // En los extremos (antes del 1ro / en o después del último) se fija ese frame
      // a opacidad 1 — así nunca queda la escena en negro al seguir scrolleando.
      const lastF = FRAMES.length - 1
      let lo = 0
      while (lo < lastF && FRAMES[lo + 1].pos <= renderPos) lo++
      if (lo >= lastF) {
        imgRefs.current.forEach((im, i) => { if (im) im.style.opacity = i === lastF ? '1' : '0' })
      } else {
        const span = FRAMES[lo + 1].pos - FRAMES[lo].pos || 1
        const t = clamp01((renderPos - FRAMES[lo].pos) / span)
        imgRefs.current.forEach((im, i) => {
          if (im) im.style.opacity = (i === lo + 1 ? t : i === lo ? 1 - t : 0).toFixed(3)
        })
      }

      els.forEach((el, i) => {
        const d = Math.abs(i - renderPos)
        el.style.opacity = Math.max(0.16, 1 - d * 0.82).toFixed(3)
        el.style.transform = `translateY(${(Math.min(d, 1) * 7).toFixed(1)}px)`
        el.classList.toggle('is-active', Math.round(renderPos) === i)
      })

      if (railFillRef.current) railFillRef.current.style.width = `${(ratio * 100).toFixed(2)}%`
      if (coinRef.current) coinRef.current.style.left = `${(ratio * 100).toFixed(2)}%`

      const rounded = Math.round(renderPos)
      if (rounded !== lastRounded) { lastRounded = rounded; setActive(rounded) }
    }

    const tick = () => {
      renderPos += (targetPos - renderPos) * LERP
      if (Math.abs(targetPos - renderPos) < 0.0008) renderPos = targetPos
      paint()
      raf = running ? requestAnimationFrame(tick) : 0
    }

    const start = () => { if (!running) { running = true; raf = requestAnimationFrame(tick) } }
    const stop = () => { running = false; if (raf) cancelAnimationFrame(raf); raf = 0 }

    const onScroll = () => { measure() }
    const onResize = () => { vh = window.innerHeight; measure() }

    const io = new IntersectionObserver(
      (entries) => { entries[0].isIntersecting ? start() : stop() },
      { threshold: 0 }
    )
    if (rootRef.current) io.observe(rootRef.current)

    measure()
    renderPos = targetPos
    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      stop()
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [steps])

  if (!steps.length) return null

  const notif = NOTIFS[active] || NOTIFS[0]

  return (
    <div className="loop-scroll" ref={rootRef}>
      <div className="loop-grid">
        {/* Panel sticky — foto que revive (decorativa) */}
        <div className="loop-stage-wrap" aria-hidden="true">
          <div className="loop-stage">
            <div className="loop-stage-label">El recorrido de tu contribución</div>

            <div className="loop-scene-viewport">
              {FRAMES.map((f, i) => (
                <img
                  key={i}
                  ref={(el) => (imgRefs.current[i] = el)}
                  className="loop-photo"
                  src={f.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                />
              ))}
              <div className="loop-scene-scrim" />
              <div className={'loop-notif ' + (notif.pos || 'pos-tl')} key={'notif-' + active}>
                <img className="loop-notif-icon" src="/favicon.svg" alt="" />
                <div className="loop-notif-main">
                  <div className="loop-notif-top">
                    <span className="loop-notif-app">Citixen</span>
                    <span className="loop-notif-time">ahora</span>
                  </div>
                  <div className="loop-notif-title">{notif.title}</div>
                  <div className="loop-notif-text">{notif.body}</div>
                </div>
              </div>
            </div>

            <div className="loop-rail">
              <div className="loop-rail-track">
                <div className="loop-rail-fill" ref={railFillRef} style={{ width: '0%' }} />
                <div className="loop-rail-coin" ref={coinRef} style={{ left: '0%' }}>CC</div>
              </div>
              <div className="loop-rail-nodes">
                {steps.map((s, i) => (
                  <div
                    key={i}
                    className={
                      'loop-rail-node' +
                      (i < active ? ' is-done' : '') +
                      (i === active ? ' is-active' : '')
                    }
                  >
                    <span>{s.number}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="loop-stage-counter">
              Paso {active + 1} <span>de {steps.length}</span>
            </div>
          </div>
        </div>

        {/* Pasos reales — contenido semántico que scrollea */}
        <ol className="loop-steps">
          {steps.map((step, i) => (
            <li
              key={i}
              data-index={i}
              ref={(el) => (stepRefs.current[i] = el)}
              className={'loop-step' + (i === active ? ' is-active' : '')}
            >
              <div className="loop-step-head">
                <div className="loop-step-icon">{step.icon}</div>
                <div className="loop-step-index">Paso {step.number}</div>
              </div>
              <h3 className="loop-step-title">{step.title}</h3>
              <p className="loop-step-desc">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
