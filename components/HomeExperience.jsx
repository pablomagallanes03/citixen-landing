import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import EarlyAccess from './EarlyAccess'
import s from '../styles/HomeExperience.module.css'

const PROJECTS = [
  { id: 'plaza', name: 'Recuperar Plaza del Barrio Sur', goalUsd: 20000, limit: 40 },
  { id: 'luz', name: 'Nueva iluminación pública', goalUsd: 12000, limit: 30 },
  { id: 'ciclovia', name: 'Ciclovías seguras', goalUsd: 35000, limit: 20 },
  { id: 'cultura', name: 'Recuperar el Centro Cultural', goalUsd: 8000, limit: 10 },
]
const PAID = 100
const ALLOCATION_PCT = 70
const BUDGET = (PAID * ALLOCATION_PCT) / 100
const fmt = (n) => n.toLocaleString('es-AR')

function Icon({ name, ...props }) {
  const paths = {
    plaza: <><path d="m12 3-7 9h4l-5 6h16l-5-6h4z"/><path d="M12 18v4"/></>,
    luz: <><path d="M9 18h6m-5 3h4M8 13a6 6 0 1 1 8 0c-1 1-1 2-1 2H9s0-1-1-2Z"/></>,
    ciclovia: <><circle cx="5" cy="17" r="4"/><circle cx="19" cy="17" r="4"/><path d="m5 17 5-9 5 9m-8-9h5m3-5h3l1 4M10 8h8l1 9"/></>,
    cultura: <><path d="m3 8 9-5 9 5H3Zm0 13h18M5 11v7m7-7v7m7-7v7"/></>,
    arrow: <><path d="M4 12h16m-6-6 6 6-6 6"/></>,
    receipt: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6m-6 4h6"/></>,
    credits: <><circle cx="9" cy="9" r="6"/><path d="M16 8a7 7 0 1 1-8 8M9 6v6m-2-3h4"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    document: <><path d="M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8m-8 4h8"/></>,
  }
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>
}

function Allocator() {
  const [amounts, setAmounts] = useState([30, 20, 15, 5])
  const total = amounts.reduce((sum, amount) => sum + amount, 0)
  const handleChange = (index, rawValue) => {
    const projectMax = PROJECTS[index].limit
    const othersSum = amounts.reduce((sum, amount, i) => i === index ? sum : sum + amount, 0)
    const budgetMax = BUDGET - othersSum
    const max = Math.min(projectMax, budgetMax)
    const val = Math.max(0, Math.min(max, Number(rawValue)))
    setAmounts((prev) => prev.map((amount, i) => i === index ? val : amount))
  }
  return (
    <div className={s.allocator}>
      <div className={s.allocatorTop}>
        <div><span className={s.miniLabel}>Tu decisión, proyecto a proyecto</span><h3>Distribuí tus Créditos</h3></div>
        <span className={s.demo}>Simulador</span>
      </div>
      <div className={s.balance} aria-live="polite" aria-atomic="true">
        <div><span>Disponibles para asignar</span><strong>{BUDGET - total} <small>CC</small></strong></div>
        <span>de {BUDGET} CC</span>
      </div>
      <p className={s.sliderHelp}>Mové las barras para probar. Cada proyecto tiene un límite por persona.</p>
      <div className={s.projects}>
        {PROJECTS.map((project, i) => (
          <div className={s.project} key={project.id}>
            <div className={s.projectTop}>
              <span className={s.projectIcon}><Icon name={project.id}/></span>
              <label htmlFor={`allocate-${project.id}`}>{project.name}<span>Meta: ${fmt(project.goalUsd)} · {fmt(project.goalUsd)} CC</span></label>
              <output htmlFor={`allocate-${project.id}`}>{amounts[i]} <small>CC</small></output>
            </div>
            <input id={`allocate-${project.id}`} type="range" min="0" max={project.limit} value={amounts[i]}
              onChange={(e) => handleChange(i, e.target.value)} aria-label={`Créditos Cívicos para ${project.name}`}
              aria-describedby={`limit-${project.id}`} className={s.slider} style={{ '--progress': `${amounts[i] / project.limit * 100}%` }}/>
            <div className={s.rangeLabels}><span>0 CC</span><span id={`limit-${project.id}`}>Límite: {project.limit} CC</span></div>
          </div>
        ))}
      </div>
      <div className={s.allocatorTotal}><span>Créditos asignados</span><strong>{total} / {BUDGET} CC</strong></div>
      <p className={s.disclaimer}>Ejemplo ilustrativo. Proyectos, porcentajes, metas y límites ficticios.</p>
    </div>
  )
}

export default function HomeExperience() {
  return (
    <main className={s.home}>
      <section className={s.hero}>
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <p className={s.eyebrow}>Una ciudad que decidimos juntos</p>
            <h1>Tus impuestos.<br/>Tu ciudad.<br/><span>Tu decisión.</span></h1>
            <p className={s.heroIntro}>Tus impuestos financian tu ciudad. Con Citixen, también podés decidir qué proyectos reciben una parte de esos recursos.</p>
            <p className={s.heroDetail}>Los <strong>Créditos Cívicos</strong> convierten tu contribución en capacidad de decisión, según las reglas de tu municipio.</p>
            <div className={s.actions}><Link className={s.primary} href="/soyvecino">Quiero participar <Icon name="arrow"/></Link><a className={s.heroLink} href="#como-funciona">Cómo funciona <span aria-hidden="true">↓</span></a></div>
          </div>
          <div className={s.heroVisual}>
            <div className={s.visualHeading}><span>Así se ve una decisión compartida</span><span>01 / Proyecto</span></div>
            <article className={s.heroProject}>
              <div className={s.heroPhoto}><Image src="/mockup/plaza.png" alt="Vista ilustrativa de una plaza de barrio" fill priority sizes="(max-width: 800px) 90vw, 520px" style={{ objectFit: 'cover' }}/><span className={s.photoLabel}>Ejemplo ilustrativo</span></div>
              <div className={s.heroProjectBody}>
                <span className={s.miniLabel}>Espacio público</span><h2>Recuperar Plaza<br/>del Barrio Sur</h2>
                <div className={s.funding}><strong>13.400 <span>CC asignados</span></strong><span>67%</span></div>
                <div className={s.progressTrack}><span/></div>
                <div className={s.fundingFoot}><span>Meta: 20.000 CC</span><span>$20.000 de decisión</span></div>
              </div>
            </article>
            <div className={s.visualFoot}><Icon name="credits"/><span>Vos elegís. El municipio ejecuta.</span></div>
            <p className={s.heroDisclaimer}>Proyecto y cifras ficticios para mostrar el mecanismo.</p>
          </div>
        </div>
        <div className={`${s.wrap} ${s.heroBottom}`}><span>De tu contribución a un cambio visible.</span><a href="#asignacion">Probá el ejemplo de $100 <Icon name="arrow"/></a></div>
      </section>

      <section className={`${s.section} ${s.mechanism}`} id="como-funciona">
        <div className={s.wrap}>
          <div className={s.sectionHeading}><p className={s.eyebrow}>01 — El mecanismo</p><h2>Tu contribución.<br/>Una decisión concreta.</h2><p>Pagás como siempre. Participás de una forma nueva.</p></div>
          <div className={s.steps}>
            {[
              ['receipt', 'Contribuís a tu ciudad', 'Pagás tus impuestos y contribuciones como lo hacés hoy.'],
              ['credits', 'Recibís Créditos Cívicos', 'El municipio define qué porcentaje genera créditos y qué proyectos son elegibles.'],
              ['check', 'Elegís qué proyectos apoyar', 'Asignás tus créditos a las prioridades que te importan y seguís su ejecución.'],
            ].map(([icon, title, text], i) => <article className={s.step} key={title}><div className={s.stepTop}><Icon name={icon}/><span>0{i + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className={s.rules}><strong>Son capacidad de decisión.</strong><p>No se retiran, no se venden y no se transfieren entre personas.</p></div>
          <div className={s.quote}><span>Más que opinar</span><p>De «me gustaría que hicieran esto» a<br/><strong>«quiero que una parte de los recursos vaya acá».</strong></p></div>
        </div>
      </section>

      <section className={`${s.section} ${s.example}`} id="asignacion">
        <div className={`${s.wrap} ${s.exampleGrid}`}>
          <div className={s.exampleCopy}>
            <p className={s.eyebrow}>02 — Probalo con un ejemplo</p><h2>De tu impuesto<br/>al proyecto.</h2>
            <div className={s.formula}><strong>$1</strong><span>=</span><strong>1 CC</strong><span>=</span><strong>$1 <small>de decisión</small></strong></div>
            <p>Un CC es un Crédito Cívico: representa $1 de decisión sobre los recursos habilitados por el municipio.</p>
            <ol className={s.moneySteps}><li><span>Pagaste un impuesto municipal</span><strong>${PAID}</strong></li><li><span>El municipio destina a decisión ciudadana</span><strong>{ALLOCATION_PCT}%</strong></li><li><span>Recibís para asignar a proyectos</span><strong>{BUDGET} CC</strong></li></ol>
            <p>El resto financia los servicios habituales. El porcentaje lo define cada municipio; el 70% es ilustrativo.</p>
            <div className={s.exampleNote}><Icon name="document"/><p>Los límites distribuyen el apoyo entre proyectos. Si el municipio los ajusta por razones previamente definidas, los cambios quedan visibles.</p></div>
          </div>
          <Allocator/>
        </div>
      </section>

      <section className={`${s.section} ${s.execution}`}>
        <div className={s.wrap}>
          <div className={s.executionHeading}><div><p className={s.eyebrow}>03 — De la meta a la ejecución</p><h2>Vos elegís.<br/><span>El municipio ejecuta.</span></h2></div><p>Alcanzar la meta es el comienzo de la ejecución. Cada paso tiene un responsable y condiciones que cumplir.</p></div>
          <ol className={s.timeline}>
            <li><span className={s.timelineNumber}>01</span><h3>La comunidad alcanza la meta</h3><p>En nuestro ejemplo, 20.000 CC representan los $20.000 previstos para recuperar la plaza.</p></li>
            <li><span className={s.timelineNumber}>02</span><h3>El municipio libera los fondos</h3><p>El responsable solicita la ejecución. El municipio verifica las condiciones del proyecto antes de liberar los recursos.</p></li>
            <li><span className={s.timelineNumber}>03</span><h3>Podés seguir los resultados</h3><p>Fotos, documentos y comprobantes permiten consultar qué se hizo y qué cambió en el barrio.</p></li>
          </ol>
          <div className={s.publicFunds}><strong>Recursos públicos. Destino trazable.</strong><p>Citixen no cobra comisión sobre estos recursos. Los fondos siguen siendo públicos hasta su ejecución.</p></div>
        </div>
      </section>

      <section className={`${s.section} ${s.evidence}`}>
        <div className={`${s.wrap} ${s.evidenceGrid}`}>
          <div className={s.evidenceCopy}><p className={s.eyebrow}>La confianza se puede comprobar</p><h2>Una decisión.<br/>Un resultado visible.</h2><p>La historia del proyecto queda pública y permanente: qué se hizo, cómo se ejecutó y a cuántos vecinos alcanzó.</p><ul><li><Icon name="check"/>Fotos del antes y el después</li><li><Icon name="check"/>Documentos y comprobantes</li><li><Icon name="check"/>Evidencia de cierre en el perfil del proyecto</li></ul></div>
          <article className={s.evidenceCard}><div className={s.evidenceCardTop}><Icon name="document"/><span>Registro del proyecto</span><span className={s.demo}>Ejemplo</span></div><h3>Plaza del Barrio Sur</h3><p className={s.evidenceStatus}><span/>Cierre documentado · ilustrativo</p><div className={s.documents}><div><span>01</span><p>Antes y después<small>Registro fotográfico</small></p><strong>12 fotos</strong></div><div><span>02</span><p>Ejecución<small>Documentación del proyecto</small></p><strong>3 documentos</strong></div><div><span>03</span><p>Impacto en el barrio<small>Historia de cierre</small></p><strong>412 vecinos</strong></div></div><p className={s.disclaimer}>Proyecto, estado y cifras ficticios. No representa un caso ejecutado.</p></article>
        </div>
        <div className={`${s.wrap} ${s.aiNote}`}><strong>La IA asiste, no decide.</strong><p>En las consultas, ayuda a agrupar respuestas y mostrar acuerdos y diferencias. Las decisiones quedan en manos de los vecinos y del municipio.</p></div>
      </section>

      <section className={s.cta}><div className={s.wrap}><p className={s.eyebrow}>El próximo paso empieza con vos</p><h2>Tu ciudad.<br/>También es tu decisión.</h2><div className={s.actions}><Link href="/soyvecino" className={s.primary}>Quiero participar <Icon name="arrow"/></Link><a href="#acceso" className={s.secondary}>Llevar Citixen a mi municipio <Icon name="arrow"/></a></div></div></section>
      <div className={s.contact}><EarlyAccess/></div>
    </main>
  )
}
