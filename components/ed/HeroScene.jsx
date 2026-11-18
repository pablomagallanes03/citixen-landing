import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './HeroScene.module.css'

// Hero «Escucha y Decide»: escena de producto. El celular del vecino delante del panel del
// municipio. Escucha: escanea el QR, escribe y envía; el aporte vuela al panel, el contador y
// el tema suben. Decide: tres Créditos Cívicos salen de la billetera y completan la meta.
// La escena se dibuja a 880×400 y se escala para que el hero entre en la primera pantalla.
// La secuencia automática dura ~11 s, una sola vez; «Detener animación» cumple WCAG 2.2.2.

const W = 880
const H = 400
const START = 397
const GOAL = 400
const LISTEN_MS = 7300
const DECIDE_MS = 4200

const QR = (() => {
  let seed = 11
  const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280
  const cells = []
  for (let y = 0; y < 25; y += 1) {
    for (let x = 0; x < 25; x += 1) {
      const finder = (x < 8 && y < 8) || (x > 16 && y < 8) || (x < 8 && y > 16)
      const center = x >= 10 && x < 15 && y >= 10 && y < 15
      if (!finder && !center && rnd() > 0.52) cells.push([x, y])
    }
  }
  return cells
})()

function Finder({ x, y }) {
  return (
    <>
      <rect x={x} y={y} width="7" height="7" fill="#0B1736" />
      <rect x={x + 1} y={y + 1} width="5" height="5" fill="#fff" />
      <rect x={x + 2} y={y + 2} width="3" height="3" fill="#0B1736" />
    </>
  )
}

function Mark({ className }) {
  return (
    <svg className={className} viewBox="0 0 26 26" aria-hidden="true">
      <g transform="rotate(45 13 13)">
        <rect x="10.5" y="1" width="5" height="10" rx="2.5" fill="#0A3D91" />
        <rect x="15" y="10.5" width="10" height="5" rx="2.5" fill="#0A3D91" />
        <rect x="10.5" y="15" width="5" height="10" rx="2.5" fill="#F7794E" />
        <rect x="1" y="10.5" width="10" height="5" rx="2.5" fill="#0A3D91" />
      </g>
    </svg>
  )
}

const Check = ({ size, color, width = 3 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

export default function HeroScene({ t, illustrative, onMode }) {
  const s = t.scene
  const rootRef = useRef(null)
  const stageRef = useRef(null)
  const wrapRef = useRef(null)
  const timers = useRef([])
  const scaleRef = useRef(1)
  const touched = useRef(false)
  const [mode, setMode] = useState('listen')
  const [started, setStarted] = useState(false)
  const [running, setRunning] = useState(false)
  const [desktop, setDesktop] = useState(true)
  const [scale, setScale] = useState(1)

  const q = (k) => rootRef.current.querySelector(`[data-r="${k}"]`)
  const qa = (k) => rootRef.current.querySelectorAll(`[data-r="${k}"]`)
  const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const clear = useCallback(() => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    stageRef.current?.querySelectorAll('[data-fx]').forEach((e) => e.remove())
  }, [])

  // ── Estado de la escena (atributos y textos, sin re-render) ─────────────────────────────
  const setStep = (k) => { q('step-tag').textContent = k === 'dec' || k === 'goal' ? t.modes.decide.tab : t.modes.listen.tab; q('step').textContent = s.steps[k] }
  const setListenData = (after) => {
    const root = rootRef.current
    root.dataset.arrived = after ? '1' : ''
    q('cnt').textContent = after ? '87' : '86'
    q('pct').textContent = s.pct(after ? 41 : 40)
    q('tbar').style.setProperty('--w', after ? '68%' : '66%')
    q('t1').dataset.up = after ? '1' : ''
  }
  const setCredits = (m) => {
    const root = rootRef.current
    stageRef.current.style.setProperty('--m', m)
    qa('tot').forEach((e) => { e.textContent = START + m })
    q('mine').textContent = m
    q('wal').textContent = 10 - m
    qa('coin').forEach((c, i) => { c.dataset.off = i >= 10 - m ? '1' : '' })
    q('ring').style.setProperty('--pc', ((START + m) / GOAL) * 100)
    root.dataset.goal = m >= GOAL - START ? '1' : ''
  }
  const finalState = (m) => {
    const root = rootRef.current
    clear()
    root.dataset.focus = ''
    q('typed').textContent = s.typed
    if (m === 'listen') { root.dataset.scr = 'done'; setListenData(true); setStep('sent') } else { root.dataset.scr = 'dec'; setCredits(GOAL - START); setStep('goal') }
  }

  // ── Movimiento ───────────────────────────────────────────────────────────────────────
  const pt = (el, where) => {
    const st = stageRef.current.getBoundingClientRect()
    const r = el.getBoundingClientRect()
    const k = scaleRef.current
    const x = r.left + r.width / 2
    const y = where === 'top' ? r.top + 4 : r.top + r.height / 2
    return [(x - st.left) / k, (y - st.top) / k]
  }
  const arc = (from, to, opt) => {
    const stage = stageRef.current
    const [x0, y0] = from
    const [x1, y1] = to
    const cx = (x0 + x1) / 2
    const cy = Math.min(y0, y1) - (opt.lift || 110)
    const mk = (cls, txt) => { const e = document.createElement('div'); e.className = `${styles.flyer} ${cls}`; e.dataset.fx = '1'; if (txt) e.textContent = txt; stage.appendChild(e); return e }
    const main = mk(opt.kind === 'dot' ? styles.dotFly : styles.bubFly, opt.text)
    const ghosts = opt.kind === 'dot' ? [0, 1, 2, 3].map(() => mk(styles.ghost)) : []
    const start = performance.now()
    const dur = opt.dur || 900
    const ease = (u) => (u < 0.5 ? 4 * u * u * u : 1 - ((-2 * u + 2) ** 3) / 2)
    const at = (u) => { const v = 1 - u; return [v * v * x0 + 2 * v * u * cx + u * u * x1, v * v * y0 + 2 * v * u * cy + u * u * y1] }
    const frame = (now) => {
      if (!main.isConnected) return
      const raw = Math.min(1, (now - start) / dur)
      const [x, y] = at(ease(raw))
      const sc = opt.kind === 'dot' ? 1 : 1 - 0.4 * ease(raw)
      main.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${sc})`
      main.style.opacity = raw < 0.08 ? raw / 0.08 : raw > 0.92 ? (1 - raw) / 0.08 : 1
      ghosts.forEach((g, i) => {
        const [gx, gy] = at(ease(Math.max(0, raw - 0.05 * (i + 1))))
        g.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%) scale(${0.85 - i * 0.15})`
        g.style.opacity = raw > 0.05 * (i + 1) && raw < 0.98 ? 0.45 - i * 0.1 : 0
      })
      if (raw < 1) requestAnimationFrame(frame)
      else { main.remove(); ghosts.forEach((g) => g.remove()); opt.done?.() }
    }
    requestAnimationFrame(frame)
  }
  const tap = (el) => {
    const [x, y] = pt(el)
    const r = document.createElement('span')
    r.className = styles.ripple
    r.dataset.fx = '1'
    r.style.left = `${x}px`
    r.style.top = `${y}px`
    stageRef.current.appendChild(r)
    r.animate([{ transform: 'scale(0.3)', opacity: 0.9 }, { transform: 'scale(1.4)', opacity: 0 }], { duration: 520, easing: 'ease-out' }).onfinish = () => r.remove()
  }
  const at = (ms, f) => { timers.current.push(setTimeout(f, ms)) }
  const bump = (el) => { el.dataset.bump = ''; void el.offsetWidth; el.dataset.bump = '1' }

  const playListen = (offset = 0) => {
    const root = rootRef.current
    const ty = q('typed')
    setListenData(false)
    root.dataset.goal = ''
    ty.textContent = ''
    at(offset, () => { root.dataset.scr = 'scan'; root.dataset.focus = 'phone'; setStep('scan') })
    at(offset + 700, () => { root.dataset.scr = 'form'; setStep('form') })
    ;[...s.typed].forEach((_, i) => at(offset + 1100 + i * 68, () => { ty.textContent = s.typed.slice(0, i + 1) }))
    at(offset + 2900, () => tap(q('send')))
    at(offset + 3050, () => {
      const from = pt(q('typebox'))
      const [fx, fy] = pt(q('feed'), 'top')
      root.dataset.focus = 'panel'
      root.dataset.scr = 'done'
      setStep('sent')
      arc(from, [fx, fy + 14], { kind: 'bub', text: s.feed[0].text, dur: 1000, lift: 120, done: () => { root.dataset.arrived = '1'; q('cnt').textContent = '87'; bump(q('cnt')) } })
    })
    at(offset + 4650, () => { q('t1').dataset.up = '1'; q('pct').textContent = s.pct(41); q('tbar').style.setProperty('--w', '68%') })
  }
  const playDecide = (offset = 0) => {
    const root = rootRef.current
    at(offset, () => { root.dataset.arrived = '1'; root.dataset.scr = 'dec'; root.dataset.focus = 'phone'; setCredits(0); setStep('dec') })
    ;[0, 1, 2].forEach((k) => {
      at(offset + 900 + k * 800, () => {
        tap(q('plus'))
        const coin = qa('coin')[9 - k]
        const from = pt(coin)
        coin.dataset.off = '1'
        q('wal').textContent = 9 - k
        if (k === 0) root.dataset.focus = ''
        const ring = q('ring')
        const [rx, ry] = pt(ring, 'top')
        arc(from, [rx, ry + 4], {
          kind: 'dot',
          dur: 850,
          lift: 90,
          done: () => {
            setCredits(k + 1)
            ring.dataset.hit = ''; void ring.offsetWidth; ring.dataset.hit = '1'
            if (k === 2) { root.dataset.focus = 'panel'; setStep('goal') }
          },
        })
      })
    })
  }

  const runAll = useCallback(() => {
    clear()
    setStarted(true)
    if (reduced()) { setMode('listen'); finalState('listen'); return }
    setRunning(true)
    setMode('listen')
    playListen(0)
    at(LISTEN_MS, () => setMode('decide'))
    playDecide(LISTEN_MS)
    at(LISTEN_MS + DECIDE_MS, () => { rootRef.current.dataset.focus = ''; setRunning(false) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const select = (m) => {
    touched.current = true
    clear()
    setStarted(true)
    setMode(m)
    if (reduced()) { finalState(m); setRunning(false); return }
    setRunning(true)
    if (m === 'listen') playListen(0); else playDecide(0)
    at(m === 'listen' ? LISTEN_MS - 1500 : DECIDE_MS, () => { rootRef.current.dataset.focus = ''; setRunning(false) })
  }
  const stop = () => { touched.current = true; finalState(mode); setRunning(false) }

  useEffect(() => { onMode?.(started ? mode : null) }, [mode, started, onMode])

  // Arranca al verse, una sola vez.
  useEffect(() => {
    const el = rootRef.current
    if (!('IntersectionObserver' in window)) return undefined
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { io.disconnect(); if (!touched.current) setTimeout(() => { if (!touched.current) runAll() }, 400) }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); clear() }
  }, [runAll, clear])

  // Escala según el alto disponible (escritorio) para que el hero entre en una pantalla.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 861px)')
    const fit = () => {
      const isDesk = mq.matches
      setDesktop(isDesk)
      if (!isDesk) { scaleRef.current = 1; setScale(1); return }
      const wrap = wrapRef.current
      const section = rootRef.current.closest('section')
      const inner = section.firstElementChild
      const cs = getComputedStyle(section)
      const twoCols = getComputedStyle(inner).display === 'grid'
      const other = (twoCols ? rootRef.current.offsetHeight : inner.offsetHeight) - wrap.offsetHeight
      const avail = window.innerHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom) - other - 8
      const k = Math.max(0.5, Math.min(1, avail / H, wrap.clientWidth / W))
      scaleRef.current = k
      setScale(k)
    }
    fit()
    window.addEventListener('resize', fit)
    mq.addEventListener('change', fit)
    return () => { window.removeEventListener('resize', fit); mq.removeEventListener('change', fit) }
  }, [])

  const switchMode = started ? mode : 'listen'

  return (
    <figure ref={rootRef} className={styles.root} data-mode={switchMode} data-scr="form" data-focus="">
      <div className={styles.switch} role="group" aria-label={t.switchLabel}>
        <span className={`${styles.pill} ${switchMode === 'decide' ? styles.pillRight : ''}`} aria-hidden="true" />
        {['listen', 'decide'].map((m) => (
          <button key={m} type="button" className={styles.switchBtn} aria-pressed={switchMode === m} onClick={() => select(m)}>
            {t.modes[m].tab}
          </button>
        ))}
      </div>

      <div ref={wrapRef} className={styles.wrap} style={desktop ? { height: `${H * scale}px` } : undefined}>
        <div ref={stageRef} className={styles.stage} style={desktop ? { transform: `translateX(-50%) scale(${scale})` } : undefined} aria-hidden="true">
          <div className={styles.glow} />

          <div className={styles.win}>
            <div className={styles.main}>
              <div className={styles.crumb}>
                <Mark className={styles.mk} />
                {s.city} <span>/</span> <b className={styles.cL}>{s.places}</b><b className={styles.cD}>{s.projectsCrumb}</b>
              </div>

              <div className={`${styles.view} ${styles.vA}`}>
                <div className={styles.vhead}>
                  <div><small>{s.placeType}</small><h4>{s.place}</h4></div>
                  <div className={styles.stat}><b data-r="cnt">86</b><small>{s.perMonth}</small></div>
                </div>
                <div className={styles.cols}>
                  <div>
                    <p className={styles.lab}>{s.latest}</p>
                    <ul className={styles.feed} data-r="feed">
                      {s.feed.map((f, i) => (
                        <li key={f.text} className={i === 0 ? styles.new : ''}><span>{f.text}</span><small>{f.meta}</small></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className={styles.lab}>{s.themesLabel} <span className={styles.chip}>{s.aiChip}</span></p>
                    <ul className={styles.tb}>
                      <li data-r="t1"><span>{s.themes[0]}</span><b data-r="pct">{s.pct(40)}</b><span className={styles.lbar}><i data-r="tbar" style={{ '--w': '66%' }} /></span></li>
                      <li><span>{s.themes[1]}</span><b>{s.pct(27)}</b><span className={styles.lbar}><i style={{ '--w': '45%' }} /></span></li>
                      <li><span>{s.themes[2]}</span><b>{s.pct(18)}</b><span className={styles.lbar}><i style={{ '--w': '30%' }} /></span></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`${styles.view} ${styles.vC}`}>
                <div className={styles.vhead}>
                  <div><small>{s.projectKicker}</small><h4>{s.project}</h4></div>
                  <div className={styles.stat}><b>3</b><small>{s.activeProjects}</small></div>
                </div>
                <div className={styles.pbig}>
                  <div className={styles.ring} data-r="ring" style={{ '--pc': (START / GOAL) * 100 }}>
                    <svg viewBox="0 0 132 132"><circle className={styles.tr} cx="66" cy="66" r="54" /><circle className={styles.fl} cx="66" cy="66" r="54" pathLength="100" /></svg>
                    <div className={styles.rt}><b data-r="tot">{START}</b><small>{s.of} {GOAL}</small></div>
                    <div className={styles.ck}><Check size={44} color="#F7794E" /></div>
                  </div>
                  <div className={styles.pmeta}>
                    <p className={styles.desc}>{s.desc}</p>
                    <div className={styles.facts}>
                      <span><small>{s.sourceLabel}</small>{s.source}</span>
                      <span><small>{s.goalLabel}</small>{s.goal}</span>
                    </div>
                    <span className={styles.goalchip}>{s.goalReached}</span>
                    <ul className={styles.others}>
                      {s.others.map((o, i) => (
                        <li key={o}><span>{o}</span><span className={styles.lbar}><i style={{ '--w': `${[72, 46][i]}%` }} /></span><b>{s.pct([72, 46][i])}</b></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.phone}>
            <div className={styles.screen}>
              <span className={styles.island} />
              <div className={styles.sbar}><span>9:41</span><i /></div>

              <div className={`${styles.scr} ${styles.sScan}`}>
                <div className={styles.qrwrap}>
                  <svg viewBox="0 0 25 25" shapeRendering="crispEdges">
                    {QR.map(([x, y]) => <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#0B1736" />)}
                    <Finder x={0} y={0} /><Finder x={18} y={0} /><Finder x={0} y={18} />
                    <rect x="10" y="10" width="5" height="5" fill="#0B1736" /><rect x="11" y="11" width="3" height="3" fill="#fff" /><rect x="12" y="12" width="1" height="1" fill="#F7794E" />
                  </svg>
                  <div className={styles.corners}><i /><i /><i /><i /></div>
                  <span className={styles.scanline} />
                </div>
                <p>{s.scan}</p>
              </div>

              <div className={`${styles.scr} ${styles.sForm}`}>
                <svg className={styles.illo} viewBox="0 0 190 104" preserveAspectRatio="xMidYMid slice">
                  <defs><linearGradient id="hs-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0A1F4D" /><stop offset="1" stopColor="#23427E" /></linearGradient></defs>
                  <rect width="190" height="104" fill="url(#hs-sky)" />
                  <circle cx="150" cy="24" r="7" fill="#E9EEF8" opacity=".85" /><circle cx="153" cy="22" r="6" fill="#1A3368" />
                  <g fill="#fff" opacity=".7"><circle cx="30" cy="18" r=".9" /><circle cx="62" cy="30" r=".7" /><circle cx="110" cy="14" r=".8" /><circle cx="176" cy="44" r=".7" /></g>
                  <rect y="80" width="190" height="24" fill="#123064" />
                  <circle cx="34" cy="62" r="17" fill="#173A75" /><circle cx="50" cy="68" r="13" fill="#1B4282" /><rect x="40" y="70" width="3" height="12" fill="#0E2550" />
                  <rect x="120" y="40" width="3" height="42" fill="#3A5A93" /><rect x="113" y="37" width="17" height="5" rx="2" fill="#3A5A93" /><circle cx="121.5" cy="44" r="3" fill="#5A6E93" />
                  <rect x="138" y="72" width="34" height="3" rx="1.5" fill="#2E4F8C" /><rect x="141" y="75" width="2.5" height="6" fill="#2E4F8C" /><rect x="166" y="75" width="2.5" height="6" fill="#2E4F8C" />
                </svg>
                <small>{s.placeType.split(' · ')[1] ? `${s.place} · ${s.placeType.split(' · ')[1]}` : s.place}</small>
                <strong>{s.ask}</strong>
                <div className={styles.typebox} data-r="typebox"><span className={styles.typed} data-r="typed">{s.typed}</span></div>
                <span className={styles.send} data-r="send">{s.send}</span>
              </div>

              <div className={`${styles.scr} ${styles.sDone}`}>
                <span className={styles.okc}><Check size={26} color="#fff" /></span>
                <strong>{s.thanks}</strong>
                <small>{s.thanksBody[0]}<br />{s.thanksBody[1]} <b>87</b> {s.thanksBody[2]}</small>
              </div>

              <div className={`${styles.scr} ${styles.sDec}`}>
                <small>{s.wallet}</small>
                <div className={styles.wal}><span data-r="wal">10</span><em>/10</em></div>
                <div className={styles.coins}>{Array.from({ length: 10 }, (_, i) => <i key={i} data-r="coin" />)}</div>
                <div className={styles.pcard}>
                  <small>{s.place}</small>
                  <strong>{s.project}</strong>
                  <span className={styles.lbar}><i className={styles.oth} /><i className={styles.mn} /></span>
                  <div className={styles.prow2}>
                    <span><span className={styles.togo}><span data-r="tot">{START}</span> {s.of} {GOAL}</span><span className={styles.okp}>{s.goalReached}</span></span>
                    <span className={styles.plusB} data-r="plus">+</span>
                  </div>
                  <small>{s.yours}: <b data-r="mine">0</b> · {s.limit}</small>
                </div>
              </div>
            </div>
          </div>

          <p className={styles.step}><small data-r="step-tag">{t.modes.listen.tab}</small><span data-r="step">{s.steps.form}</span></p>
        </div>
      </div>

      <figcaption className={styles.caption}>{t.modes[switchMode].caption}</figcaption>
      <p className={styles.note}>
        {illustrative}
        {started && (
          <button type="button" className={styles.ctl} onClick={running ? stop : () => { touched.current = true; runAll() }}>
            {running ? t.stop : t.replay}
          </button>
        )}
      </p>
    </figure>
  )
}
