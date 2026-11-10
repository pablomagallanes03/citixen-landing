// Home «Ciudad que escucha» (maqueta, nov 2026). Solo en español por ahora: ver lib/draft.mjs.
//
// Reglas de este contenido (brief del 10-nov-2026, segunda iteración):
//  - Lo disponible se afirma sin rótulo o con «Disponible hoy». Lo que no está disponible lleva «Próximamente».
//  - La inteligencia colectiva se muestra como demostración conceptual, con datos ficticios.
//  - Valle Norte es una ciudad ficticia. Ninguna cifra es real. No hay clientes ni testimonios.
//  - Sin promesas absolutas: no se promete anonimato, ni que nada falle, ni que algo sirva en cualquier jurisdicción.
//  - «Devolución» no se usa: se dice «respuesta del municipio».

import { spanishFirst } from '../lib/draft.mjs'
import { gated } from '../lib/claims.mjs'

export const landing = spanishFirst({
  meta: {
    title: 'Citixen | Conocé mejor tu ciudad',
    description: 'Citixen conecta a los gobiernos locales con el conocimiento de sus vecinos: escucha ciudadana, inteligencia colectiva, participación, cocreación y acción pública visible.',
  },

  labels: {
    soon: 'Próximamente',
    available: 'Disponible hoy',
    concept: 'Demostración conceptual',
    fictional: 'Datos ficticios',
    cityName: 'Valle Norte',
    cityNote: 'Valle Norte es una ciudad ficticia. Todas las cifras son de ejemplo.',
  },

  // Variantes del titular para evaluar en la vista previa (la barra de revisión las alterna).
  hero: {
    eyebrow: 'Para gobiernos locales',
    variants: [
      { id: 'a', title: 'Conocé mejor tu ciudad. Construí su futuro con quienes la viven.' },
      { id: 'b', title: 'Tu ciudad tiene mucho que decir. Ahora podés escucharla.' },
      { id: 'c', title: 'Cada lugar de tu ciudad tiene algo para contarte.' },
      { id: 'd', title: 'Gobernar con lo que sabe tu ciudad.' },
    ],
    lead: 'Citixen reúne lo que los vecinos dicen de cada plaza, escuela y centro cultural, lo convierte en conocimiento para tu equipo y deja a la vista lo que tu gestión hace con eso.',
    primary: 'Pedir una demostración',
    secondary: 'Explorar una ciudad',
    summaryLabel: 'Valle Norte · este mes',
    summary: [
      ['9', 'lugares escuchando'],
      ['572', 'aportes'],
      ['3', 'temas en crecimiento'],
    ],
    calloutLabel: 'Lo que más dicen',
    reading: {
      title: 'Lectura de Valle Norte',
      rows: [
        ['Iluminación y seguridad', '4 lugares', 'up'],
        ['Turnos y tiempos de espera', '2 lugares', 'up'],
        ['Espacios para chicos', '3 lugares', 'flat'],
      ],
    },
    mapLabel: 'Ilustración: mapa de una ciudad ficticia con sus lugares, los aportes de los vecinos y una lectura de toda la ciudad.',
    caption: 'Ilustración con datos ficticios. Lugares y la lectura de la ciudad llegan próximamente.',
  },

  problems: {
    title: 'Tu ciudad sabe cosas que no siempre llegan a tu gestión.',
    items: [
      { title: 'Llegan tarde o no llegan', body: 'Lo que pasa en una plaza, una escuela o un centro cultural se conoce cuando ya es un problema, o por un mensaje suelto.' },
      { title: 'Se dispersan sin dejar conocimiento', body: 'Opiniones en redes, formularios y reuniones que nadie llega a ordenar, comparar ni recordar.' },
      { title: 'Lo que hacés no se ve', body: 'Las respuestas y las obras no vuelven a quienes participaron, y la confianza no crece.' },
    ],
  },

  places: {
    eyebrow: 'Lugares',
    title: 'Cada lugar de tu ciudad, con su propia memoria.',
    lead: 'Cada plaza, escuela o centro cultural tiene una ficha permanente: lo que dicen los vecinos, sus necesidades, cómo participan y qué hizo tu gobierno. Mes a mes, el lugar acumula su historia. Tocá un lugar del mapa.',
    filtersLabel: 'Filtrar por tipo de lugar',
    sizeNote: 'El tamaño de cada círculo indica los aportes del mes.',
    all: 'Todos',
    types: {
      plaza: 'Plazas y parques',
      culture: 'Cultura',
      school: 'Educación',
      sport: 'Deporte',
      health: 'Salud',
      office: 'Atención municipal',
      public: 'Espacios públicos',
    },
    districts: [
      ['Barrio Río', 34, 44],
      ['Barrio Norte', 600, 30],
      ['Barrio Estación', 790, 118],
      ['Barrio Centro', 470, 418],
      ['Barrio Sur', 250, 604],
    ],
    card: {
      since: 'Ficha abierta desde',
      contributions: 'aportes este mes',
      qr: 'QR en el lugar',
      tabs: {
        summary: 'Resumen',
        history: 'Historial',
        needs: 'Necesidades',
        participation: 'Participación',
        actions: 'Acciones',
      },
      tabStatus: {
        summary: 'soon',
        history: 'soon',
        needs: 'soon',
        participation: 'available',
        actions: 'available',
      },
      tabNotes: {
        summary: 'Los temas de cada lugar, ordenados con inteligencia artificial, llegan próximamente.',
        history: 'La historia de cada lugar llega con las fichas permanentes.',
        needs: 'Las necesidades vinculadas a acciones llegan próximamente.',
        participation: 'Hoy podés abrir una encuesta con QR para cualquier espacio y recibir propuestas de vecinos.',
        actions: 'Hoy podés publicar obras con su estado y responder en público.',
      },
      themes: 'Lo que más dicen',
      response: 'Última respuesta del municipio',
      survey: 'Encuesta del lugar',
      surveyResponses: 'respuestas',
      surveyOpen: 'Abierta',
      surveyClosed: 'Cerrada',
      proposals: 'propuestas de vecinos sobre este lugar',
      noActions: 'Todavía no hay obras registradas para este lugar.',
      healthNote: 'Lugar de atención: sus aportes no se van a enviar a proveedores de inteligencia artificial.',
    },
    needStates: {
      identified: 'Identificada',
      action: 'Acción registrada',
      done: 'Resuelta, con evidencia',
    },
    bridge: {
      title: 'Hoy ya podés empezar.',
      body: 'Mientras llegan las fichas de Lugares, cualquier espacio puede tener su encuesta abierta con QR, sus obras con estado público y la respuesta de tu municipio.',
    },
    list: [
      {
        id: 'plaza-encuentro', type: 'plaza', name: 'Plaza del Encuentro', area: 'Barrio Centro', x: 470, y: 300, since: 'marzo de 2026',
        contributions: 86, themes: [['Iluminación', 41], ['Juegos para chicos', 27], ['Limpieza', 18]],
        needs: [['Más luz en el sector norte', 'action'], ['Bebederos', 'identified']],
        response: 'Licitamos el recambio de 24 luminarias. Obra prevista para marzo.',
        history: [['Nov', 'Respuesta publicada: recambio de 24 luminarias'], ['Oct', 'Encuesta con QR: 86 respuestas en el mes'], ['Ago', 'Primer aporte sobre la luz del sector norte']],
        survey: { title: '¿Qué mejorarías de la plaza?', responses: 86, open: true },
        proposals: 3,
        actions: [['Recambio de luminarias', 'Licitada', 10]],
      },
      {
        id: 'parque-costanera', type: 'plaza', name: 'Parque Costanera', area: 'Barrio Río', x: 190, y: 430, since: 'abril de 2026',
        contributions: 132, themes: [['Actividades nocturnas', 34], ['Seguridad', 30], ['Bicisenda', 21]],
        needs: [['Bicisenda conectada al centro', 'identified'], ['Baños públicos', 'action']],
        response: 'Abrimos una consulta para priorizar los usos nocturnos del parque.',
        history: [['Nov', 'Consulta abierta sobre los usos nocturnos'], ['Sep', 'Baños públicos: obra licitada'], ['Abr', 'El parque suma su ficha y su QR']],
        survey: { title: '¿Cómo usarías el parque de noche?', responses: 132, open: true },
        proposals: 5,
        actions: [['Baños públicos', 'Licitada', 15]],
      },
      {
        id: 'centro-cultural', type: 'culture', name: 'Centro Cultural La Estación', area: 'Barrio Estación', x: 700, y: 175, since: 'febrero de 2026',
        contributions: 54, themes: [['Talleres para adolescentes', 38], ['Horarios de fin de semana', 29], ['Accesibilidad', 14]],
        needs: [['Rampa en la sala principal', 'done']],
        response: 'Inauguramos la rampa de acceso. Sumamos dos talleres los sábados.',
        history: [['Oct', 'Rampa de acceso inaugurada'], ['Sep', 'Dos talleres nuevos los sábados'], ['May', 'La accesibilidad aparece como necesidad']],
        survey: { title: '¿Qué talleres te gustaría sumar?', responses: 54, open: false },
        proposals: 2,
        actions: [['Rampa en la sala principal', 'Terminada', 100]],
      },
      {
        id: 'escuela-14', type: 'school', name: 'Escuela N.º 14', area: 'Barrio Norte', x: 560, y: 110, since: 'marzo de 2026',
        contributions: 47, themes: [['Cruce peatonal', 52], ['Veredas', 23], ['Arbolado', 11]],
        needs: [['Cruce peatonal en la avenida', 'action']],
        response: 'El cruce peatonal está en obra. Avance: 60 %.',
        history: [['Nov', 'Avance de obra: 60 %'], ['Sep', 'Comienza la obra del cruce peatonal'], ['Jul', 'Las familias piden un cruce seguro']],
        survey: { title: '¿Cómo llegan tus hijos a la escuela?', responses: 47, open: false },
        proposals: 1,
        actions: [['Cruce peatonal en la avenida', 'En curso', 60]],
      },
      {
        id: 'polideportivo', type: 'sport', name: 'Polideportivo Municipal', area: 'Barrio Sur', x: 330, y: 520, since: 'mayo de 2026',
        contributions: 63, themes: [['Horarios de pileta', 36], ['Vestuarios', 31], ['Actividades para mayores', 19]],
        needs: [['Renovar vestuarios', 'identified']],
        response: 'Ampliamos los horarios de pileta libre de diciembre a febrero.',
        history: [['Nov', 'Anuncio: más horarios de pileta en verano'], ['Oct', 'Vestuarios: necesidad identificada'], ['May', 'Primera encuesta del lugar']],
        survey: { title: '¿Qué horarios usarías?', responses: 63, open: true },
        proposals: 2,
        actions: [],
      },
      {
        id: 'biblioteca', type: 'culture', name: 'Biblioteca Popular', area: 'Barrio Centro', x: 610, y: 360, since: 'junio de 2026',
        contributions: 22, themes: [['Wifi', 45], ['Espacio de estudio', 32], ['Horarios', 18]],
        needs: [['Mejorar la conexión a internet', 'done']],
        response: 'Instalamos un nuevo punto de acceso a internet en la sala de lectura.',
        history: [['Oct', 'Nuevo punto de acceso a internet'], ['Ago', 'El wifi, tema principal del mes']],
        survey: { title: '¿Para qué venís a la biblioteca?', responses: 22, open: false },
        proposals: 1,
        actions: [['Punto de acceso a internet', 'Terminada', 100]],
      },
      {
        id: 'atencion-vecinal', type: 'office', name: 'Oficina de Atención Vecinal', area: 'Barrio Centro', x: 405, y: 215, since: 'marzo de 2026',
        contributions: 71, themes: [['Tiempos de espera', 48], ['Turnos en línea', 33], ['Trato', 9]],
        needs: [['Turnos en línea para trámites', 'action']],
        response: 'Desde el mes próximo los turnos se piden desde la app.',
        history: [['Nov', 'Anuncio: turnos desde la app'], ['Sep', 'Los tiempos de espera encabezan los aportes'], ['Mar', 'QR en el mostrador de atención']],
        survey: { title: '¿Cómo fue tu atención hoy?', responses: 71, open: true },
        proposals: 0,
        actions: [['Turnos en línea', 'En curso', 40]],
      },
      {
        id: 'centro-salud', type: 'health', name: 'Centro de Salud Barrio Norte', area: 'Barrio Norte', x: 830, y: 260, since: 'julio de 2026',
        contributions: 39, themes: [['Turnos', 44], ['Sala de espera', 28], ['Horarios', 20]],
        needs: [['Ampliar la sala de espera', 'identified']],
        response: 'Sumamos un turno de atención por la tarde dos veces por semana.',
        history: [['Oct', 'Nuevo turno de atención por la tarde'], ['Ago', 'Sala de espera: necesidad identificada']],
        survey: { title: '¿Cómo fue tu espera hoy?', responses: 39, open: true },
        proposals: 0,
        actions: [],
      },
      {
        id: 'paseo-rio', type: 'public', name: 'Paseo del Río', area: 'Barrio Río', x: 95, y: 250, since: 'abril de 2026',
        contributions: 58, themes: [['Bancos y sombra', 40], ['Feria de fin de semana', 26], ['Limpieza', 22]],
        needs: [['Más sombra en el paseo', 'done']],
        response: 'Plantamos 40 árboles nativos a lo largo del paseo.',
        history: [['Oct', '40 árboles nativos plantados'], ['Ago', 'Propuesta de huerta comunitaria: 128 apoyos'], ['May', 'La sombra, tema principal']],
        survey: { title: '¿Qué le falta al paseo?', responses: 58, open: false },
        proposals: 4,
        actions: [['Arbolado del paseo', 'Terminada', 100]],
      },
    ],
  },

  intelligence: {
    eyebrow: 'Inteligencia colectiva',
    title: 'De opiniones sueltas a conocimiento para decidir.',
    lead: 'Así va a funcionar la lectura de respuestas abiertas con inteligencia artificial: temas, acuerdos, desacuerdos y voces minoritarias, y cada conclusión con las respuestas que la respaldan. Probala con una consulta de ejemplo.',
    disclaimer: 'Datos ficticios. Esta capacidad todavía no está disponible.',
    question: '¿Qué cambiarías del Parque Costanera?',
    responsesLabel: 'respuestas abiertas',
    run: 'Organizar las respuestas',
    reset: 'Volver a empezar',
    running: 'Organizando…',
    steps: [
      'Se quitan los nombres y datos de contacto detectados',
      'Se agrupan las respuestas en temas',
      'Se buscan acuerdos y desacuerdos',
      'Cada conclusión se vincula con sus citas',
    ],
    stats: {
      responses: 'respuestas leídas',
      themes: 'temas',
      agree: 'acuerdo amplio',
      disagree: 'desacuerdo',
      minority: 'voz minoritaria',
      traced: 'respuestas citadas',
    },
    blocks: {
      themes: 'Temas que surgen',
      themesHint: 'El tamaño indica cuántas respuestas hablan de cada tema. Tocá uno.',
      positions: 'Acuerdos y desacuerdos',
      favor: 'a favor',
      against: 'en contra',
      minority: 'Voces minoritarias',
      time: 'Cómo cambia en el tiempo',
      trace: 'De dónde sale',
      traceHint: 'Tocá cualquier conclusión para ver las respuestas que la respaldan.',
      responseWord: 'Respuesta',
    },
    channels: ['QR en el parque', 'WhatsApp', 'Instagram', 'QR en el parque'],
    themes: [
      { id: 'light', name: 'Iluminación y seguridad' },
      { id: 'kids', name: 'Espacios para chicos' },
      { id: 'clean', name: 'Limpieza y mantenimiento' },
      { id: 'night', name: 'Uso nocturno del parque' },
      { id: 'access', name: 'Accesibilidad' },
    ],
    responses: [
      { theme: 'light', text: 'De noche el sector de la costanera queda a oscuras.' },
      { theme: 'kids', text: 'Faltan juegos para chicos más grandes.' },
      { theme: 'clean', text: 'Los cestos se llenan el sábado y quedan así hasta el lunes.' },
      { theme: 'night', text: 'Me gustaría que haya ferias y música los viernes a la noche.' },
      { theme: 'light', text: 'Necesitamos más luces en el camino que va al río.' },
      { theme: 'access', text: 'Con la silla de ruedas no puedo llegar al mirador.' },
      { theme: 'kids', text: 'Un arenero con sombra para los más chicos.' },
      { theme: 'night', text: 'Prefiero que de noche sea un lugar tranquilo, vivo enfrente.' },
      { theme: 'clean', text: 'El pasto está muy alto en la zona de los bancos.' },
      { theme: 'light', text: 'Volvemos caminando de trabajar y da miedo pasar.' },
      { theme: 'kids', text: 'Los juegos están oxidados, alguno se puede romper.' },
      { theme: 'clean', text: 'Faltan baños limpios cerca de la cancha.' },
      { theme: 'light', text: 'Cámaras o más presencia de noche.' },
      { theme: 'night', text: 'Más actividades a la noche traen más gente y más seguridad.' },
      { theme: 'access', text: 'Las rampas están rotas en la entrada principal.' },
      { theme: 'kids', text: 'Una plaza de juegos inclusiva.' },
    ],
    // Índices de `responses` que respaldan cada posición.
    positions: [
      { id: 'lights', kind: 'agree', label: 'Amplio acuerdo', text: 'Más luz en el camino al río', favor: [0, 4, 9, 12], against: [] },
      { id: 'night', kind: 'disagree', label: 'Desacuerdo', text: 'Ferias y música los viernes a la noche', favor: [3, 13], against: [7] },
    ],
    minority: {
      id: 'access',
      title: 'Pocas respuestas, una barrera concreta',
      body: 'Dos personas describen problemas para llegar con silla de ruedas. Son pocas, pero señalan algo que el promedio no muestra.',
      quotes: [5, 14],
    },
    time: {
      months: ['Ago', 'Sep', 'Oct', 'Nov'],
      series: [
        { theme: 'Iluminación y seguridad', values: [12, 18, 26, 31] },
        { theme: 'Limpieza y mantenimiento', values: [30, 24, 21, 19] },
      ],
      note: 'La preocupación por la iluminación creció desde agosto.',
    },
    principles: [
      { title: 'Cada conclusión, con sus citas', body: 'Ningún tema aparece sin las respuestas que lo respaldan, y cualquiera se puede revisar.' },
      { title: 'La IA asiste, tu equipo decide', body: 'La inteligencia artificial ordena y resume. Las decisiones son de las personas.' },
      { title: 'Cuidado con los datos', body: 'Antes del análisis se busca quitar nombres y datos de contacto. Ningún sistema detecta todo, por eso tu equipo revisa, y los aportes de lugares de atención no se envían a proveedores externos.' },
    ],
  },

  // Participación, cocreación y acción visible, juntas.
  action: {
    eyebrow: 'De la escucha a la acción',
    title: 'Lo que escuchás se convierte en decisiones que se ven.',
    lead: 'Los vecinos proponen y priorizan, tu equipo actúa y cualquiera puede seguir qué se decidió y en qué quedó.',
    columns: [
      {
        name: 'Participar',
        status: 'available',
        items: [
          { title: 'Propuestas ciudadanas', body: 'Un vecino propone y otros la apoyan. Tu equipo ve qué temas mueven a la ciudad.' },
          { title: 'Consultas para priorizar', body: 'Los vecinos ordenan opciones y tu municipio publica qué hará con el resultado.' },
          { title: 'Iniciativas comunitarias', body: 'Proyectos que los propios vecinos llevan adelante.' },
        ],
        proposal: { title: 'Huerta comunitaria en el Paseo del Río', supports: '128 apoyos', tag: 'Ambiente' },
      },
      {
        name: 'Cocrear',
        status: 'soon',
        body: 'Con CoLab, tu equipo plantea un desafío y los vecinos lo trabajan por etapas, con reglas anunciadas de antemano. El resultado es una propuesta consolidada.',
        example: 'Rediseño del Paseo del Río',
        stages: ['Desafío', 'Ideas', 'Mejoras', 'Propuesta'],
        current: 1,
        note: '64 ideas · etapa 2 de 4 · ejemplo ficticio',
      },
      {
        name: 'Actuar y mostrar',
        status: 'available',
        items: [
          { title: 'Obras con estado público', body: 'En curso, demorada o terminada, con su avance.' },
          { title: 'Avisos institucionales', body: 'A toda la ciudad o a quienes participaron, con registro público.' },
          { title: 'Reporte mensual', body: 'Un PDF con las cifras del mes, listo para comunicar.' },
        ],
      },
    ],
    portal: {
      url: 'citixen.org/valle-norte',
      title: 'Mi Ciudad · Valle Norte',
      transparency: 'Índice de transparencia',
      transparencyValue: '78',
      works: [
        { title: 'Cruce peatonal · Escuela N.º 14', state: 'En curso', progress: 60 },
        { title: 'Recambio de luminarias · Plaza del Encuentro', state: 'Licitada', progress: 10 },
        { title: 'Rampa de acceso · Centro Cultural', state: 'Terminada', progress: 100 },
      ],
      notice: { label: 'Aviso del municipio', title: 'Corte de tránsito en la avenida Costanera el sábado' },
    },
    report: {
      label: 'Reporte mensual',
      title: 'Participación en Valle Norte · Octubre',
      lines: [['Respuestas a encuestas', '1.240'], ['Propuestas nuevas', '18'], ['Obras con avance publicado', '9']],
      quote: '«En octubre, 1.240 respuestas ayudaron a definir las obras de tres espacios públicos.»',
    },
    exampleNote: 'Ejemplo con datos ficticios',
  },

  platform: {
    eyebrow: 'La plataforma',
    title: 'Una plataforma para escuchar, comprender y actuar con tu comunidad.',
    lead: 'Cinco capacidades que funcionan juntas. Podés empezar por una y sumar las demás.',
    availableLabel: 'Hoy',
    soonLabel: 'Próximamente',
    items: [
      { id: 'listen', name: 'Escuchar', available: ['Encuestas abiertas con QR y WhatsApp, sin crear cuenta', 'Consultas con respuesta del municipio', 'De qué canal llegó cada respuesta'], soon: ['Un canal permanente para cada Lugar'] },
      { id: 'understand', name: 'Comprender', available: ['Resultados de preguntas cerradas', 'Lectura de cada respuesta abierta', 'Reporte mensual de participación'], soon: ['Temas, acuerdos y voces minoritarias con IA', 'Evolución de las necesidades'] },
      { id: 'participate', name: 'Participar', available: ['Propuestas con apoyos de vecinos', 'Iniciativas ciudadanas', 'App para vecinos en iOS y Android'], soon: [] },
      { id: 'cocreate', name: 'Cocrear', available: ['Consultas para priorizar entre opciones'], soon: ['CoLab: propuestas construidas por etapas'] },
      { id: 'act', name: 'Actuar y mostrar', available: ['Obras con estado público', 'Avisos institucionales', 'Portal Mi Ciudad e índice de transparencia'], soon: ['Necesidades vinculadas a acciones', 'Fichas de Lugares'] },
    ],
  },

  start: {
    eyebrow: 'Cómo empezar',
    title: 'Empezá por un lugar.',
    lead: 'Con un espacio y un equipo chico ya podés escuchar, responder y mostrar resultados. Después sumás los lugares que quieras.',
    steps: [
      { title: 'Elegí un espacio', body: 'Una plaza, un parque o un centro cultural que quieras conocer mejor.' },
      { title: 'Salí con una encuesta y un QR', body: 'La preparamos juntos y la compartís en el lugar, por WhatsApp y en redes.' },
      { title: 'Respondé en público', body: 'Publicás qué vas a hacer con lo que dijeron los vecinos, y registrás la obra si corresponde.' },
      { title: 'Mostrá lo hecho y sumá lugares', body: 'Con el reporte del mes mostrás los resultados y elegís el próximo espacio.' },
    ],
    cta: 'Pedir una demostración',
    rulesTitle: 'Reglas que podés defender',
    rules: [
      { title: 'Las reglas se anuncian antes', body: 'Cada encuesta y consulta dice para qué se usa lo que se responde y si es vinculante.' },
      { title: 'Respuestas, no personas', body: 'Cuando no se puede comprobar quién respondió, contamos respuestas y aportes, no personas.' },
      { title: 'Lo publicado deja registro', body: 'Un aviso del municipio no se edita después de enviado: si tiene un error, se publica una rectificación vinculada. Las respuestas a encuestas guardan sus versiones.' },
      { title: 'Inteligencia artificial con límites', body: 'Cuando la sumes, cada tema va a mostrar las respuestas que lo respaldan. No decide ni califica a las personas.' },
    ],
  },

  civicCredits: {
    eyebrow: 'Créditos Cívicos',
    title: 'Cuando tu comunidad esté lista, también puede decidir.',
    body: gated(
      'emission.modalities',
      'Con Créditos Cívicos, los vecinos asignan una parte de los recursos que tu municipio habilita a proyectos que vos ya aprobaste. Es la forma más avanzada de participación en Citixen, y se suma cuando tu ciudad la necesita.',
      'Con Créditos Cívicos, los vecinos asignan a proyectos que vos ya aprobaste los créditos que generan los impuestos que pagan. Es la forma más avanzada de participación en Citixen, y se suma cuando tu ciudad la necesita.',
    ),
    points: [
      'Tu gobierno aprueba los proyectos y fija las reglas',
      gated('limits.general', 'Cada vecino reparte sus créditos con un límite mensual', 'Cada vecino reparte sus créditos con un límite que fija tu municipio'),
      'Los proyectos que llegan a su meta se ejecutan y se cierran con pruebas públicas',
    ],
    link: 'Conocer Créditos Cívicos',
  },

  final: {
    title: 'Conocé Citixen con el contexto de tu ciudad.',
    body: 'Te mostramos la plataforma con tus espacios, tus prioridades y tus tiempos.',
  },

  review: {
    label: 'Maqueta',
    heroLabel: 'Titular',
    note: 'Solo en la vista previa',
  },
})
