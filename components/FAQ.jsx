import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    question: '¿Cuánto cuesta?',
    answer: 'Modo Comunidad es gratuito, sin límite de tiempo. Economía Participativa tiene un costo mensual que depende del tamaño de tu ciudad. Lo definimos juntos después de la primera conversación. Sin contratos de permanencia.',
  },
  {
    question: '¿Necesito aprobación del Concejo Deliberante?',
    answer: 'Para Modo Comunidad, no. Publicar un portal público con la gestión de tu municipio es un acto administrativo: es información que ya es pública. Si querés activar Economía Participativa, depende de tu marco normativo local — te asesoramos.',
  },
  {
    question: '¿Qué pasa si cambia el gobierno?',
    answer: 'Citixen es infraestructura de la ciudad, no del intendente. Los datos son públicos, el portal persiste entre gestiones, y la nueva administración recibe acceso completo al historial. La transparencia de tu gestión queda registrada para siempre.',
  },
  {
    question: '¿Puedo desactivarlo si no funciona?',
    answer: 'Sí. Cada modo se desactiva con un click. Sin penalidad, sin período mínimo, sin letra chica. Los datos que cargaste siguen siendo tuyos.',
  },
  {
    question: '¿Necesito un equipo de sistemas?',
    answer: 'No. La plataforma es autoservicio. Si tu equipo puede usar una planilla de Excel, puede usar Citixen. Y tenés soporte humano incluido para la configuración inicial y cualquier duda posterior.',
  },
  {
    question: '¿Qué son los Créditos Cívicos?',
    answer: <>Son capacidad de decisión ciudadana sobre recursos públicos. Se acreditan a partir de tus obligaciones fiscales — impuestos, tasas, multas. No son dinero, no se compran, no se venden. Cuando asignás CC a un proyecto, estás participando en la priorización colectiva de iniciativas de tu ciudad. <Link href="/economia-participativa" style={{ color: 'var(--primary)', fontWeight: 600 }}>Ver explicación completa &rarr;</Link></>,
  },
  {
    question: '¿Mis datos están seguros?',
    answer: 'Sí. Citixen usa autenticación con cookies seguras, control de acceso por roles con permisos diferenciados, registro de auditoría de toda acción de gobierno, y protección contra ataques comunes. Los datos viven en servidores con backups automáticos. No vendemos ni compartimos datos con terceros.',
  },
  {
    question: '¿Esto ya funciona en algún municipio?',
    answer: 'El sistema está operativo y probado. Estamos incorporando los primeros municipios — por eso el acceso anticipado incluye acompañamiento personalizado en la configuración y puesta en marcha.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-label fade-up"><span className="bar"></span> Preguntas frecuentes</div>
        <h2 className="section-title fade-up">Lo que nos preguntan antes de empezar</h2>
        <div className="faq-list fade-up">
          {faqs.map((faq, i) => (
            <div className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`} key={i}>
              <button className="faq-question" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                <span>{faq.question}</span>
                <span className="faq-toggle">{openIndex === i ? '\u2212' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
