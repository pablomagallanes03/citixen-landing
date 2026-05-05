import { useState } from 'react'

const faqs = [
  {
    question: '¿Cuánto cuesta?',
    answer: 'El Nivel 1 (Transparencia) es gratuito, sin límite de tiempo. Los niveles 2 y 3 tienen un costo mensual accesible que depende del tamaño de tu ciudad. Sin sorpresas, sin contratos de permanencia.',
  },
  {
    question: '¿Necesito aprobación del Concejo Deliberante?',
    answer: 'No para el Nivel 1. Publicar un portal de transparencia es un acto administrativo que no requiere ordenanza. Si querés activar Nivel 2 o 3, depende de tu marco normativo local — te asesoramos.',
  },
  {
    question: '¿Qué pasa si cambia el gobierno?',
    answer: 'Citixen es infraestructura de la ciudad, no del intendente. Los datos son públicos, el portal persiste entre gestiones, y la nueva administración recibe acceso completo al historial.',
  },
  {
    question: '¿Quién puede ver los datos?',
    answer: 'El portal de transparencia es público — cualquier vecino puede verlo. El panel de gestión es privado y solo acceden los funcionarios que vos autorices, con roles y permisos diferenciados.',
  },
  {
    question: '¿Puedo desactivarlo si no funciona?',
    answer: 'Sí. Cada nivel se desactiva con un click. Sin penalidad, sin período mínimo. Los datos que cargaste siguen siendo tuyos.',
  },
  {
    question: '¿Necesito un equipo de sistemas?',
    answer: 'No. La plataforma es autoservicio. Si tu equipo puede usar una planilla de Excel, puede usar Citixen. Para dudas, tenés soporte humano incluido.',
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
                <span className="faq-toggle">{openIndex === i ? '−' : '+'}</span>
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
