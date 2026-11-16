// Home «Escucha y Decide» (16-nov-2026, Documento Maestro v1.1 §6).
// Dos soluciones comerciales independientes: Citixen Escucha y Citixen Decide.
//
// Reglas de precisión (no relajar sin decisión de Pablo):
//  - Créditos Cívicos: unidades de participación, no dinero. Modelo continuo: cada proyecto
//    aprobado avanza hacia su meta; sin ranking ni fecha de cierre. Proponen vecinos y
//    organizaciones; el gobierno aprueba.
//  - La IA de Escucha existe en el producto, pero en producción se habilita por municipio
//    (apagada desde el 16-nov-2026 hasta resolver las condiciones legales, D6). Se muestra como
//    capacidad opcional, nunca «Disponible hoy» ni activada por omisión.
//  - Los parámetros de la demo de Decide son ejemplos; «Meta alcanzada» no promete ejecución
//    inmediata: sigue los procedimientos administrativos y presupuestarios del municipio.
//  - Todo ejemplo usa datos ficticios y lo dice.

const es = {
  meta: {
    title: 'Citixen | Escuchá a tu comunidad. Decidí con ella.',
    description: 'Citixen Escucha ayuda a tu gobierno a comprender lo que tu comunidad necesita. Citixen Decide le da a la ciudadanía poder de decisión sobre proyectos públicos con Créditos Cívicos.',
  },
  illustrative: 'Ejemplo ilustrativo con datos ficticios',
  hero: {
    titleA: 'Escuchá a tu comunidad.',
    titleB: 'Decidí con ella.',
    lead: 'Dos soluciones para comprender lo que tu comunidad necesita y convertir su participación en decisiones públicas.',
    cta: 'Solicitar una demostración',
    switchLabel: 'Ver cada solución',
    modes: {
      listen: { tab: 'Escucha', caption: 'Los aportes de la comunidad se ordenan en temas.' },
      decide: { tab: 'Decide', caption: 'Los Créditos Cívicos impulsan proyectos hasta su meta.' },
    },
    themes: ['Iluminación', 'Juegos', 'Limpieza'],
    projects: ['Luminarias', 'Juegos inclusivos', 'Más cestos'],
    goal: 'Meta',
    goalReached: 'Meta alcanzada',
  },
  listen: {
    eyebrow: 'Citixen Escucha',
    title: 'Comprendé lo que tu comunidad necesita.',
    body: 'Recibí experiencias, necesidades e ideas en cada lugar de tu ciudad y transformalas en temas, acuerdos y desacuerdos que ayudan a tu equipo a decidir con información.',
    demo: {
      place: 'Plaza Belgrano',
      placeKind: 'Lugar · con su QR',
      prompt: '¿Cómo es tu experiencia en esta plaza?',
      contributions: 'Aportes',
      themes: 'Lo que surge',
      count: (n) => (n === 1 ? '1 aporte' : `${n} aportes`),
      agreement: 'Acuerdo',
      disagreement: 'Desacuerdo',
      replay: 'Ver de nuevo',
      aiNote: 'Con el análisis con IA activado',
      themeNames: ['Iluminación', 'Juegos para chicos', 'Limpieza'],
      items: [
        { text: 'De noche la plaza queda muy oscura.', theme: 0 },
        { text: 'Faltan juegos para los más chicos.', theme: 1 },
        { text: 'Con más luz la usaríamos hasta más tarde.', theme: 0 },
        { text: 'Los cestos se llenan el fin de semana.', theme: 2 },
        { text: 'Me gustaría que haya juegos inclusivos.', theme: 1 },
        { text: 'La luz de la esquina no funciona.', theme: 0 },
        { text: 'Prefiero que el espacio quede libre, sin más juegos.', theme: 1, dissent: true },
      ],
    },
    points: [
      { title: 'Lugares', body: 'Plazas, escuelas u oficinas escuchan todo el año con su propio QR.' },
      { title: 'Consultas', body: 'Preguntas puntuales cuando necesitás una respuesta.' },
      { title: 'Acciones', body: 'Lo que surge se convierte en acciones con seguimiento y respuesta a la comunidad.' },
      { title: 'Inteligencia artificial', body: 'Opcional. Tu municipio la activa al acordar las condiciones de tratamiento de los datos. Asiste a tu equipo; no decide por él.' },
    ],
  },
  decide: {
    eyebrow: 'Citixen Decide',
    title: 'Dale a la ciudadanía poder de decisión.',
    body: 'Con Créditos Cívicos, cada vecino habilitado distribuye su participación entre proyectos aprobados por el gobierno. Los que reúnen más apoyo llegan antes a su meta.',
    demo: {
      wallet: 'Tus Créditos Cívicos',
      limit: 'Límite de ejemplo: 5 por proyecto por mes',
      left: (n) => (n === 1 ? 'Te queda 1' : `Te quedan ${n}`),
      add: (p) => `Asignar un crédito a ${p}`,
      yours: 'Tu apoyo',
      of: 'de',
      limitReached: 'Límite del mes',
      goalReached: 'Meta alcanzada',
      configurable: 'Saldo, límites y metas son ejemplos: cada municipio define los suyos.',
      reset: 'Empezar de nuevo',
      projects: [
        { name: 'Nuevas luminarias', place: 'Plaza Belgrano', by: 'Propuesto por vecinos', goal: 400, start: 396 },
        { name: 'Juegos inclusivos', place: 'Parque del Sur', by: 'Propuesto por una organización', goal: 600, start: 318 },
        { name: 'Huerta comunitaria', place: 'Barrio Norte', by: 'Propuesto por vecinos', goal: 300, start: 141 },
      ],
    },
    points: [
      { title: 'No son dinero', body: 'Los Créditos Cívicos son unidades de participación: no se compran, no se transfieren y no se cambian por dinero.' },
      { title: 'Reglas del gobierno', body: 'Tu municipio define de dónde salen los créditos, sus límites y qué proyectos se habilitan.' },
      { title: 'Con seguimiento', body: 'Al llegar a su meta, el proyecto deja de recibir créditos y sigue los procedimientos administrativos y presupuestarios de tu municipio, hasta su cierre con evidencia.' },
    ],
  },
  close: {
    title: 'Escucha, Decide o las dos.',
    body: 'Cada solución funciona por sí sola. Juntas, conectan lo que tu comunidad necesita con lo que decide.',
    formTitle: 'Solicitá una demostración',
    formBody: 'Te mostramos Citixen con el contexto de tu municipio.',
  },
}

const pt = {
  meta: {
    title: 'Citixen | Ouça sua comunidade. Decida com ela.',
    description: 'O Citixen Escuta ajuda seu governo a entender o que a comunidade precisa. O Citixen Decide dá aos cidadãos poder de decisão sobre projetos públicos com Créditos Cívicos.',
  },
  illustrative: 'Exemplo ilustrativo com dados fictícios',
  hero: {
    titleA: 'Ouça sua comunidade.',
    titleB: 'Decida com ela.',
    lead: 'Duas soluções para entender o que a sua comunidade precisa e transformar a participação dela em decisões públicas.',
    cta: 'Solicitar uma demonstração',
    switchLabel: 'Ver cada solução',
    modes: {
      listen: { tab: 'Escuta', caption: 'As contribuições da comunidade se organizam em temas.' },
      decide: { tab: 'Decide', caption: 'Os Créditos Cívicos levam projetos até a meta.' },
    },
    themes: ['Iluminação', 'Brinquedos', 'Limpeza'],
    projects: ['Iluminação', 'Brinquedos inclusivos', 'Mais lixeiras'],
    goal: 'Meta',
    goalReached: 'Meta atingida',
  },
  listen: {
    eyebrow: 'Citixen Escuta',
    title: 'Entenda o que a sua comunidade precisa.',
    body: 'Receba experiências, necessidades e ideias em cada lugar da sua cidade e transforme-as em temas, acordos e desacordos que ajudam sua equipe a decidir com informação.',
    demo: {
      place: 'Praça Belgrano',
      placeKind: 'Lugar · com seu QR',
      prompt: 'Como é a sua experiência nesta praça?',
      contributions: 'Contribuições',
      themes: 'O que surge',
      count: (n) => (n === 1 ? '1 contribuição' : `${n} contribuições`),
      agreement: 'Acordo',
      disagreement: 'Desacordo',
      replay: 'Ver de novo',
      aiNote: 'Com a análise por IA ativada',
      themeNames: ['Iluminação', 'Brinquedos para crianças', 'Limpeza'],
      items: [
        { text: 'À noite a praça fica muito escura.', theme: 0 },
        { text: 'Faltam brinquedos para os menores.', theme: 1 },
        { text: 'Com mais luz a usaríamos até mais tarde.', theme: 0 },
        { text: 'As lixeiras enchem no fim de semana.', theme: 2 },
        { text: 'Gostaria que houvesse brinquedos inclusivos.', theme: 1 },
        { text: 'A luz da esquina não funciona.', theme: 0 },
        { text: 'Prefiro que o espaço fique livre, sem mais brinquedos.', theme: 1, dissent: true },
      ],
    },
    points: [
      { title: 'Lugares', body: 'Praças, escolas ou repartições escutam o ano todo com seu próprio QR.' },
      { title: 'Consultas', body: 'Perguntas pontuais quando você precisa de uma resposta.' },
      { title: 'Ações', body: 'O que surge vira ações com acompanhamento e resposta à comunidade.' },
      { title: 'Inteligência artificial', body: 'Opcional. Seu município a ativa ao acordar as condições de tratamento dos dados. Apoia sua equipe; não decide por ela.' },
    ],
  },
  decide: {
    eyebrow: 'Citixen Decide',
    title: 'Dê aos cidadãos poder de decisão.',
    body: 'Com Créditos Cívicos, cada cidadão habilitado distribui sua participação entre projetos aprovados pelo governo. Os que reúnem mais apoio chegam antes à meta.',
    demo: {
      wallet: 'Seus Créditos Cívicos',
      limit: 'Limite de exemplo: 5 por projeto por mês',
      left: (n) => (n === 1 ? 'Resta 1' : `Restam ${n}`),
      add: (p) => `Atribuir um crédito a ${p}`,
      yours: 'Seu apoio',
      of: 'de',
      limitReached: 'Limite do mês',
      goalReached: 'Meta atingida',
      configurable: 'Saldo, limites e metas são exemplos: cada município define os seus.',
      reset: 'Começar de novo',
      projects: [
        { name: 'Nova iluminação', place: 'Praça Belgrano', by: 'Proposto por moradores', goal: 400, start: 396 },
        { name: 'Brinquedos inclusivos', place: 'Parque do Sul', by: 'Proposto por uma organização', goal: 600, start: 318 },
        { name: 'Horta comunitária', place: 'Bairro Norte', by: 'Proposto por moradores', goal: 300, start: 141 },
      ],
    },
    points: [
      { title: 'Não são dinheiro', body: 'Os Créditos Cívicos são unidades de participação: não se compram, não se transferem e não se trocam por dinheiro.' },
      { title: 'Regras do governo', body: 'Seu município define de onde vêm os créditos, seus limites e quais projetos são habilitados.' },
      { title: 'Com acompanhamento', body: 'Ao atingir a meta, o projeto deixa de receber créditos e segue os procedimentos administrativos e orçamentários do seu município, até o encerramento com evidências.' },
    ],
  },
  close: {
    title: 'Escuta, Decide ou as duas.',
    body: 'Cada solução funciona por si só. Juntas, conectam o que a sua comunidade precisa com o que ela decide.',
    formTitle: 'Solicite uma demonstração',
    formBody: 'Mostramos o Citixen com o contexto do seu município.',
  },
}

const en = {
  meta: {
    title: 'Citixen | Listen to your community. Decide with it.',
    description: 'Citixen Listen helps your government understand what your community needs. Citixen Decide gives residents a real say over public projects with Civic Credits.',
  },
  illustrative: 'Illustrative example with fictional data',
  hero: {
    titleA: 'Listen to your community.',
    titleB: 'Decide with it.',
    lead: 'Two solutions to understand what your community needs and turn its participation into public decisions.',
    cta: 'Request a demo',
    switchLabel: 'See each solution',
    modes: {
      listen: { tab: 'Listen', caption: 'Community input is organized into themes.' },
      decide: { tab: 'Decide', caption: 'Civic Credits move projects toward their goal.' },
    },
    themes: ['Lighting', 'Play', 'Cleaning'],
    projects: ['Lighting', 'Inclusive play', 'More bins'],
    goal: 'Goal',
    goalReached: 'Goal reached',
  },
  listen: {
    eyebrow: 'Citixen Listen',
    title: 'Understand what your community needs.',
    body: 'Collect experiences, needs and ideas at every place in your city and turn them into themes, agreements and disagreements that help your team decide with evidence.',
    demo: {
      place: 'Belgrano Square',
      placeKind: 'Place · with its own QR',
      prompt: 'What is your experience in this square?',
      contributions: 'Input',
      themes: 'What emerges',
      count: (n) => (n === 1 ? '1 contribution' : `${n} contributions`),
      agreement: 'Agreement',
      disagreement: 'Disagreement',
      replay: 'Play again',
      aiNote: 'With AI analysis turned on',
      themeNames: ['Lighting', 'Play for kids', 'Cleaning'],
      items: [
        { text: 'The square gets very dark at night.', theme: 0 },
        { text: 'There is nothing for the little ones to play on.', theme: 1 },
        { text: 'With more light we would stay later.', theme: 0 },
        { text: 'The bins overflow on weekends.', theme: 2 },
        { text: 'I would love inclusive play equipment.', theme: 1 },
        { text: 'The corner light is out.', theme: 0 },
        { text: 'I would rather keep the space open, no more play equipment.', theme: 1, dissent: true },
      ],
    },
    points: [
      { title: 'Places', body: 'Squares, schools or offices listen all year round with their own QR code.' },
      { title: 'Consultations', body: 'Specific questions when you need an answer.' },
      { title: 'Actions', body: 'What emerges becomes tracked actions and a response to the community.' },
      { title: 'Artificial intelligence', body: 'Optional. Your municipality turns it on once the data processing terms are agreed. It supports your team; it never decides for it.' },
    ],
  },
  decide: {
    eyebrow: 'Citixen Decide',
    title: 'Give residents a real say.',
    body: 'With Civic Credits, every eligible resident spreads their participation across projects approved by the government. The ones with the most support reach their goal first.',
    demo: {
      wallet: 'Your Civic Credits',
      limit: 'Example limit: 5 per project per month',
      left: (n) => (n === 1 ? '1 left' : `${n} left`),
      add: (p) => `Assign one credit to ${p}`,
      yours: 'Your support',
      of: 'of',
      limitReached: 'Monthly limit',
      goalReached: 'Goal reached',
      configurable: 'Balance, limits and goals are examples: each municipality sets its own.',
      reset: 'Start over',
      projects: [
        { name: 'New street lights', place: 'Belgrano Square', by: 'Proposed by residents', goal: 400, start: 396 },
        { name: 'Inclusive playground', place: 'South Park', by: 'Proposed by an organization', goal: 600, start: 318 },
        { name: 'Community garden', place: 'North District', by: 'Proposed by residents', goal: 300, start: 141 },
      ],
    },
    points: [
      { title: 'Not money', body: 'Civic Credits are units of participation: they cannot be bought, transferred or exchanged for money.' },
      { title: 'Government rules', body: 'Your municipality sets where credits come from, their limits and which projects are eligible.' },
      { title: 'Followed through', body: 'Once a project reaches its goal it stops receiving credits and follows your municipality’s administrative and budget procedures until it closes with evidence.' },
    ],
  },
  close: {
    title: 'Listen, Decide, or both.',
    body: 'Each solution works on its own. Together, they connect what your community needs with what it decides.',
    formTitle: 'Request a demo',
    formBody: 'We will show you Citixen in the context of your municipality.',
  },
}

export const escuchaDecide = { es, pt, en }
