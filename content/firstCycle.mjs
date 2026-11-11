export const firstCycle = {
  es: {
    meta: {
      title: 'Solicitar un piloto | Citixen',
      description: 'Conocé Citixen con el contexto de tu municipio y empezá por un lugar: una encuesta con QR, la respuesta de tu gobierno y el reporte del mes.',
    },
    hero: {
      eyebrow: 'Para gobiernos',
      title: 'Empecemos por un lugar de tu ciudad.',
      lead: 'Te mostramos Citixen con el contexto de tu municipio y te acompañamos a escuchar el primer espacio, responder y mostrar lo hecho.',
    },
    steps: [
      { title: 'Demostración', body: 'Recorremos la plataforma con el contexto de tu ciudad: tus prioridades, tu equipo y tus tiempos.' },
      { title: 'Primer lugar', body: 'Elegimos juntos un espacio y preparamos la encuesta, el QR y la forma de responder.' },
      { title: 'Acompañamiento', body: 'Te ayudamos a publicar la respuesta de tu municipio, leer los resultados y sumar los próximos lugares.' },
    ],
    form: {
      title: 'Pedí un piloto o una demostración',
      body: 'Completá tus datos y te contactamos.',
      fields: {
        interest: 'Me interesa',
        representativeName: 'Nombre y apellido',
        institutionalEmail: 'Email institucional',
        governmentName: 'Municipio u organismo',
        country: 'País',
      },
      interests: { pilot: 'Un piloto', demo: 'Una demostración' },
      submit: 'Enviar pedido',
      sending: 'Enviando…',
      privacy: 'Usamos estos datos para responder tu pedido y coordinar la demostración o el piloto. Más información en nuestra',
      privacyLink: 'Política de privacidad',
      success: 'Recibimos tu pedido. Te contactamos para conversar sobre el piloto o la demostración.',
      errors: {
        duplicate: 'Ya recibimos un pedido con este email. Te vamos a contactar.',
        rateLimited: 'Recibimos varios pedidos seguidos. Probá de nuevo más tarde.',
        network: 'No pudimos conectar con el servidor. Probá de nuevo.',
        generic: 'Algo salió mal. Probá de nuevo.',
      },
      demoMode: 'Vista previa: el formulario no envía datos.',
    },
  },

  pt: {
    meta: {
      title: 'Solicitar um piloto | Citixen',
      description: 'Conheça o Citixen com o contexto do seu município e comece por um lugar: uma pesquisa com QR, a resposta do seu governo e o relatório do mês.',
    },
    hero: {
      eyebrow: 'Para governos',
      title: 'Vamos começar por um lugar da sua cidade.',
      lead: 'Mostramos o Citixen com o contexto do seu município e acompanhamos você para ouvir o primeiro espaço, responder e mostrar o que foi feito.',
    },
    steps: [
      { title: 'Demonstração', body: 'Percorremos a plataforma com o contexto da sua cidade: suas prioridades, sua equipe e seus prazos.' },
      { title: 'Primeiro lugar', body: 'Escolhemos juntos um espaço e preparamos a pesquisa, o QR e a forma de responder.' },
      { title: 'Acompanhamento', body: 'Ajudamos você a publicar a resposta do seu município, ler os resultados e incluir os próximos lugares.' },
    ],
    form: {
      title: 'Peça um piloto ou uma demonstração',
      body: 'Preencha seus dados e entraremos em contato.',
      fields: {
        interest: 'Tenho interesse em',
        representativeName: 'Nome e sobrenome',
        institutionalEmail: 'E-mail institucional',
        governmentName: 'Município ou órgão',
        country: 'País',
      },
      interests: { pilot: 'Um piloto', demo: 'Uma demonstração' },
      submit: 'Enviar pedido',
      sending: 'Enviando…',
      privacy: 'Usamos estes dados para responder ao seu pedido e combinar a demonstração ou o piloto. Mais informações na nossa',
      privacyLink: 'Política de privacidade (em espanhol)',
      success: 'Recebemos o seu pedido. Entraremos em contato para conversar sobre o piloto ou a demonstração.',
      errors: {
        duplicate: 'Já recebemos um pedido com este e-mail. Entraremos em contato.',
        rateLimited: 'Recebemos vários pedidos seguidos. Tente de novo mais tarde.',
        network: 'Não foi possível conectar ao servidor. Tente de novo.',
        generic: 'Algo deu errado. Tente de novo.',
      },
      demoMode: 'Pré-visualização: o formulário não envia dados.',
    },
  },

  en: {
    meta: {
      title: 'Request a pilot | Citixen',
      description: 'See Citixen in your municipality’s context and start with one place: a survey with a QR code, your government’s response and the monthly report.',
    },
    hero: {
      eyebrow: 'For governments',
      title: 'Let’s start with one place in your city.',
      lead: 'We show you Citixen in your municipality’s context and support you as you listen to the first space, respond and show what was done.',
    },
    steps: [
      { title: 'Demo', body: 'We walk through the platform in your city’s context: your priorities, your team and your timeline.' },
      { title: 'First place', body: 'Together we choose a space and prepare the survey, the QR code and how you will respond.' },
      { title: 'Support', body: 'We help you publish your municipality’s response, read the results and add the next places.' },
    ],
    form: {
      title: 'Request a pilot or a demo',
      body: 'Share your details and we will get in touch.',
      fields: {
        interest: 'I’m interested in',
        representativeName: 'Full name',
        institutionalEmail: 'Work email',
        governmentName: 'Municipality or agency',
        country: 'Country',
      },
      interests: { pilot: 'A pilot', demo: 'A demo' },
      submit: 'Send request',
      sending: 'Sending…',
      privacy: 'We use these details to answer your request and arrange the demo or pilot. More information in our',
      privacyLink: 'Privacy policy (in Spanish)',
      success: 'We received your request. We will get in touch to talk about the pilot or the demo.',
      errors: {
        duplicate: 'We already have a request with this email. We will be in touch.',
        rateLimited: 'We received several requests in a row. Please try again later.',
        network: 'We could not reach the server. Please try again.',
        generic: 'Something went wrong. Please try again.',
      },
      demoMode: 'Preview: this form does not send any data.',
    },
  },
}
