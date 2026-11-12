// /plataforma (nov 2026): la plataforma ordenada por capacidad, con el estado de cada herramienta.
// Solo dos estados públicos: disponible hoy ('available') y próximamente ('soon').
// Créditos Cívicos se presenta como capacidad complementaria, sin afirmaciones pendientes de aprobación.

const es = {
  meta: {
    title: 'Plataforma | Citixen',
    description: 'Inteligencia colectiva con IA, Opiná, propuestas, Mi Ciudad, comunicación institucional y un panel de gestión. Y lo que llega: Lugares y CoLab.',
  },
  hero: {
    eyebrow: 'Plataforma',
    title: 'Una plataforma para escuchar, comprender y actuar con tu comunidad.',
    lead: 'Herramientas para escuchar a los vecinos, ordenar lo que dicen, abrir la participación y mostrar lo que hace tu gestión. Cada una indica si está disponible hoy o llega próximamente.',
  },
  status: { available: 'Disponible hoy', soon: 'Próximamente' },
  groups: [
    {
      name: 'Escuchar',
      intro: 'Preguntale a tu ciudad donde está la gente.',
      tools: [
        { name: 'Opiná', status: 'available', body: 'Consultas y encuestas con la respuesta pública de tu municipio.', points: ['Consultas verificadas: responden vecinos con cuenta en tu ciudad.', 'Encuestas abiertas, sin crear cuenta, para compartir con QR, WhatsApp y redes.', 'El canal por el que llegó cada respuesta.', 'Al cierre, resultados y la respuesta oficial del municipio.'] },
        { name: 'Lugares', status: 'soon', body: 'Cada plaza, escuela o centro cultural con su canal permanente y su ficha.', points: ['Un QR fijo en cada lugar para opinar en cualquier momento.', 'La historia, las necesidades y las acciones de cada lugar en un solo sitio.'] },
      ],
    },
    {
      name: 'Comprender',
      intro: 'Del dato suelto a algo que tu equipo puede usar.',
      tools: [
        { name: 'Inteligencia colectiva', status: 'available', body: 'La inteligencia artificial lee todas las respuestas abiertas y las ordena, siempre con las citas que respaldan cada conclusión.', points: ['Temas que surgen, acuerdos y desacuerdos.', 'Voces minoritarias que el promedio no muestra.', 'Cómo cambian los temas mes a mes.', 'Incluida en el plan gratuito: hasta 1.000 aportes por mes.', 'La IA ordena y resume; las decisiones son de tu equipo.'] },
        { name: 'Resultados y reporte mensual', status: 'available', body: 'Lo que respondieron, claro y listo para comunicar.', points: ['Resultados de cada pregunta cerrada.', 'Lectura de cada respuesta abierta.', 'Un reporte mensual en PDF para el concejo o la prensa.'] },
      ],
    },
    {
      name: 'Participar',
      intro: 'Que los vecinos propongan, prioricen y se sumen.',
      tools: [
        { name: 'Propuestas', status: 'available', body: 'Las ideas de los vecinos, ordenadas.', points: ['Los vecinos proponen y apoyan ideas para su ciudad.', 'Ves qué quiere la ciudad, agrupado por tema.', 'Moderación con filtros automáticos y reportes de la comunidad.'] },
        { name: 'Consultas para priorizar', status: 'available', body: 'Para ordenar opciones y decidir en conjunto.', points: ['Los vecinos ordenan opciones y tu municipio publica qué hará.', 'App para vecinos en Android e iOS.'] },
      ],
    },
    {
      name: 'Cocrear',
      intro: 'Soluciones construidas con quienes las van a usar.',
      tools: [
        { name: 'CoLab', status: 'soon', body: 'Procesos de cocreación por etapas, con reglas anunciadas de antemano.', points: ['Un desafío planteado por tu equipo.', 'Ideas y mejoras de vecinos y organizaciones.', 'Una propuesta consolidada para llevar adelante.'] },
      ],
    },
    {
      name: 'Actuar y mostrar',
      intro: 'Que se vea lo que hace tu gestión.',
      tools: [
        { name: 'Mi Ciudad', status: 'available', body: 'La página pública de tu ciudad en citixen.org.', points: ['Obras con su estado y avance.', 'Proyectos y pruebas de cierre, abiertos a todos.', 'Encuestas y comunicados con su propia página para compartir.', 'Índice de transparencia.'] },
        { name: 'Comunicación institucional', status: 'available', body: 'Un canal oficial al teléfono de cada vecino.', points: ['Avisos, convocatorias y emergencias, por audiencia.', 'Las comunicaciones masivas quedan en un registro público.', 'Límites de envío y revisión de un segundo funcionario para las emergencias.'] },
      ],
    },
  ],
  team: {
    name: 'Para tu equipo',
    tool: { name: 'Panel de gestión', status: 'available', body: 'La operación del municipio, ordenada.', points: ['Cada funcionario con su cuenta y su perfil: revisión, proyectos y comunicación.', 'Registro de auditoría con autor, fecha y motivo de las acciones sensibles.', 'Expedientes de vecinos y organizaciones, y un mapa de la ciudad.'] },
  },
  complement: {
    label: 'Capacidad complementaria',
    name: 'Créditos Cívicos',
    body: 'Cuando tu ciudad decide abrir esa decisión, los vecinos asignan créditos a proyectos que tu gobierno ya aprobó, con las reglas que fija tu municipio.',
    link: 'Cómo funcionan',
  },
  cta: { title: 'Empezá por un lugar.', button: 'Solicitar un piloto' },
}

const pt = {
  meta: {
    title: 'Plataforma | Citixen',
    description: 'Inteligência coletiva com IA, consultas e pesquisas, propostas, Mi Ciudad, comunicação institucional e um painel de gestão. E o que vem por aí: Lugares e CoLab.',
  },
  hero: {
    eyebrow: 'Plataforma',
    title: 'Uma plataforma para ouvir, compreender e agir com a sua comunidade.',
    lead: 'Recursos para ouvir os cidadãos, organizar o que eles dizem, abrir a participação e mostrar o que a sua gestão faz. Cada um indica se está disponível hoje ou se chega em breve.',
  },
  status: { available: 'Disponível hoje', soon: 'Em breve' },
  groups: [
    {
      name: 'Ouvir',
      intro: 'Pergunte à sua cidade onde as pessoas estão.',
      tools: [
        { name: 'Opine', status: 'available', body: 'Consultas e pesquisas com a resposta pública do seu município.', points: ['Consultas verificadas: respondem cidadãos com conta na sua cidade.', 'Pesquisas abertas, sem criar conta, para compartilhar com QR, WhatsApp e redes sociais.', 'O canal por onde chegou cada resposta.', 'No encerramento, resultados e a resposta oficial do município.'] },
        { name: 'Lugares', status: 'soon', body: 'Cada praça, escola ou centro cultural com o seu canal permanente e a sua ficha.', points: ['Um QR fixo em cada lugar para opinar a qualquer momento.', 'A história, as necessidades e as ações de cada lugar em um só lugar.'] },
      ],
    },
    {
      name: 'Compreender',
      intro: 'Do dado solto a algo que a sua equipe pode usar.',
      tools: [
        { name: 'Inteligência coletiva', status: 'available', body: 'A inteligência artificial lê todas as respostas abertas e as organiza, sempre com as citações que sustentam cada conclusão.', points: ['Temas que surgem, acordos e desacordos.', 'Vozes minoritárias que a média não mostra.', 'Como os temas mudam mês a mês.', 'Incluída no plano gratuito: até 1.000 contribuições por mês.', 'A IA organiza e resume; as decisões são da sua equipe.'] },
        { name: 'Resultados e relatório mensal', status: 'available', body: 'O que responderam, claro e pronto para comunicar.', points: ['Resultados de cada pergunta fechada.', 'Leitura de cada resposta aberta.', 'Um relatório mensal em PDF para a câmara ou a imprensa.'] },
      ],
    },
    {
      name: 'Participar',
      intro: 'Que os cidadãos proponham, priorizem e participem.',
      tools: [
        { name: 'Propostas', status: 'available', body: 'As ideias dos cidadãos, organizadas.', points: ['Os cidadãos propõem e apoiam ideias para a sua cidade.', 'Você vê o que a cidade quer, agrupado por tema.', 'Moderação com filtros automáticos e denúncias da comunidade.'] },
        { name: 'Consultas para priorizar', status: 'available', body: 'Para ordenar opções e decidir em conjunto.', points: ['Os cidadãos ordenam opções e o seu município publica o que vai fazer.', 'App para cidadãos no Android e no iOS.'] },
      ],
    },
    {
      name: 'Cocriar',
      intro: 'Soluções construídas com quem vai usá-las.',
      tools: [
        { name: 'CoLab', status: 'soon', body: 'Processos de cocriação por etapas, com regras anunciadas com antecedência.', points: ['Um desafio apresentado pela sua equipe.', 'Ideias e melhorias de cidadãos e organizações.', 'Uma proposta consolidada para levar adiante.'] },
      ],
    },
    {
      name: 'Agir e mostrar',
      intro: 'Que apareça o que a sua gestão faz.',
      tools: [
        { name: 'Mi Ciudad', status: 'available', body: 'A página pública da sua cidade em citixen.org.', points: ['Obras com o seu status e andamento.', 'Projetos e provas de encerramento, abertos a todos.', 'Pesquisas e comunicados com página própria para compartilhar.', 'Índice de transparência.'] },
        { name: 'Comunicação institucional', status: 'available', body: 'Um canal oficial até o celular de cada cidadão.', points: ['Avisos, convocações e emergências, por público.', 'As comunicações em massa ficam em um registro público.', 'Limites de envio e revisão de um segundo servidor para as emergências.'] },
      ],
    },
  ],
  team: {
    name: 'Para a sua equipe',
    tool: { name: 'Painel de gestão', status: 'available', body: 'A operação do município, organizada.', points: ['Cada servidor com a sua conta e o seu perfil: revisão, projetos e comunicação.', 'Registro de auditoria com autor, data e motivo das ações sensíveis.', 'Fichas de cidadãos e organizações, e um mapa da cidade.'] },
  },
  complement: {
    label: 'Recurso complementar',
    name: 'Créditos Cívicos',
    body: 'Quando a sua cidade decide abrir essa decisão, os cidadãos destinam créditos a projetos que o seu governo já aprovou, com as regras definidas pelo seu município.',
    link: 'Como funcionam',
  },
  cta: { title: 'Comece por um lugar.', button: 'Solicitar um piloto' },
}

const en = {
  meta: {
    title: 'Platform | Citixen',
    description: 'Collective intelligence with AI, consultations and surveys, proposals, Mi Ciudad, official communications and a management panel. And what is coming: Places and CoLab.',
  },
  hero: {
    eyebrow: 'Platform',
    title: 'One platform to listen, understand and act with your community.',
    lead: 'Tools to listen to residents, organize what they say, open up participation and show what your administration does. Each one shows whether it is available today or coming soon.',
  },
  status: { available: 'Available today', soon: 'Coming soon' },
  groups: [
    {
      name: 'Listen',
      intro: 'Ask your city where people are.',
      tools: [
        { name: 'Have Your Say', status: 'available', body: 'Consultations and surveys with your municipality’s public response.', points: ['Verified consultations: answered by residents with an account in your city.', 'Open surveys, no account needed, to share by QR code, WhatsApp and social media.', 'The channel each response came from.', 'When they close, results and the municipality’s official response.'] },
        { name: 'Places', status: 'soon', body: 'Every square, school or community center with its own permanent channel and profile.', points: ['A fixed QR code at each place to share an opinion any time.', 'Each place’s history, needs and actions in one spot.'] },
      ],
    },
    {
      name: 'Understand',
      intro: 'From loose data to something your team can use.',
      tools: [
        { name: 'Collective intelligence', status: 'available', body: 'Artificial intelligence reads every open response and organizes it, always with the quotes behind each conclusion.', points: ['Emerging topics, agreements and disagreements.', 'Minority voices the average doesn’t show.', 'How topics change month by month.', 'Included in the free plan: up to 1,000 contributions a month.', 'AI organizes and summarizes; decisions stay with your team.'] },
        { name: 'Results and monthly report', status: 'available', body: 'What people answered, clear and ready to share.', points: ['Results for each closed question.', 'Reading every open response.', 'A monthly PDF report for the council or the press.'] },
      ],
    },
    {
      name: 'Participate',
      intro: 'Let residents propose, prioritize and get involved.',
      tools: [
        { name: 'Proposals', status: 'available', body: 'Residents’ ideas, organized.', points: ['Residents propose and support ideas for their city.', 'You see what the city wants, grouped by topic.', 'Moderation with automatic filters and community reports.'] },
        { name: 'Consultations to prioritize', status: 'available', body: 'To rank options and decide together.', points: ['Residents rank options and your municipality publishes what it will do.', 'App for residents on Android and iOS.'] },
      ],
    },
    {
      name: 'Co-create',
      intro: 'Solutions built with the people who will use them.',
      tools: [
        { name: 'CoLab', status: 'soon', body: 'Co-creation processes in stages, under rules announced in advance.', points: ['A challenge set by your team.', 'Ideas and improvements from residents and organizations.', 'A consolidated proposal to carry forward.'] },
      ],
    },
    {
      name: 'Act and show',
      intro: 'Make what your administration does visible.',
      tools: [
        { name: 'Mi Ciudad', status: 'available', body: 'Your city’s public page on citixen.org.', points: ['Public works with their status and progress.', 'Projects and closing evidence, open to everyone.', 'Surveys and notices with their own page to share.', 'Transparency index.'] },
        { name: 'Official communications', status: 'available', body: 'An official channel to every resident’s phone.', points: ['Notices, calls to participate and emergencies, by audience.', 'Mass communications are kept in a public record.', 'Sending limits, and a second official’s review for emergencies.'] },
      ],
    },
  ],
  team: {
    name: 'For your team',
    tool: { name: 'Management panel', status: 'available', body: 'Your municipality’s operations, organized.', points: ['Each official with their own account and role: review, projects and communications.', 'Audit log with who, when and why for sensitive actions.', 'Records for residents and organizations, and a map of the city.'] },
  },
  complement: {
    label: 'Complementary capability',
    name: 'Civic Credits',
    body: 'When your city decides to open that decision, residents allocate credits to projects your government has already approved, under the rules your municipality sets.',
    link: 'How they work',
  },
  cta: { title: 'Start with one place.', button: 'Request a pilot' },
}

export const platform = { es, pt, en }
