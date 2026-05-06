import { useState } from 'react'

const faqs = [
  {
    question: '\u00bfCu\u00e1nto cuesta?',
    answer: 'Modo Comunidad (transparencia + participaci\u00f3n) es gratuito, sin l\u00edmite de tiempo. Econom\u00eda Participativa tiene un costo mensual accesible que depende del tama\u00f1o de tu ciudad. Sin sorpresas, sin contratos de permanencia.',
  },
  {
    question: '\u00bfNecesito aprobaci\u00f3n del Concejo Deliberante?',
    answer: 'No para Modo Comunidad. Publicar un portal de transparencia es un acto administrativo que no requiere ordenanza. Si quer\u00e9s activar Econom\u00eda Participativa, depende de tu marco normativo local \u2014 te asesoramos.',
  },
  {
    question: '\u00bfQu\u00e9 pasa si cambia el gobierno?',
    answer: 'Citixen es infraestructura de la ciudad, no del intendente. Los datos son p\u00fablicos, el portal persiste entre gestiones, y la nueva administraci\u00f3n recibe acceso completo al historial.',
  },
  {
    question: '\u00bfQui\u00e9n puede ver los datos?',
    answer: 'El portal de transparencia es p\u00fablico \u2014 cualquier vecino puede verlo. El panel de gesti\u00f3n es privado y solo acceden los funcionarios que vos autorices, con roles y permisos diferenciados.',
  },
  {
    question: '\u00bfPuedo desactivarlo si no funciona?',
    answer: 'S\u00ed. Cada modo se desactiva con un click. Sin penalidad, sin per\u00edodo m\u00ednimo. Los datos que cargaste siguen siendo tuyos.',
  },
  {
    question: '\u00bfNecesito un equipo de sistemas?',
    answer: 'No. La plataforma es autoservicio. Si tu equipo puede usar una planilla de Excel, puede usar Citixen. Para dudas, ten\u00e9s soporte humano incluido.',
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
