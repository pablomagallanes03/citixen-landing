// Home «Ciudad que escucha» (maqueta, nov 2026). Solo en español por ahora: ver lib/draft.mjs.
//
// Reglas de este contenido (brief del 10-nov-2026):
//  - Lo disponible se afirma sin rótulo. Lo que todavía no está disponible lleva «Próximamente».
//  - La inteligencia colectiva se muestra como demostración conceptual, con datos ficticios.
//  - Valle Norte es una ciudad ficticia. Ninguna cifra es real. No hay clientes ni testimonios.
//  - No se promete anonimato. «Devolución» no se usa: se dice «respuesta del municipio».

import { spanishFirst } from '../lib/draft.mjs'
import { gated } from '../lib/claims.mjs'

export const landing = spanishFirst({
  meta: {
    title: 'Citixen | Gobernar con lo que sabe tu ciudad',
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
    lead: 'Citixen conecta a tu gobierno con el conocimiento de los vecinos: escucha cada espacio de la ciudad, ayuda a entender lo que dicen, impulsa propuestas y deja a la vista lo que tu gestión hace con eso.',
    primary: 'Pedir una demostración',
    secondary: 'Recorrer una ciudad',
    cardsLabel: 'Ilustración con datos ficticios',
    cards: [
      { type: 'plaza', name: 'Plaza del Encuentro', meta: '86 aportes este mes', line: 'Lo más mencionado: iluminación' },
      { type: 'culture', name: 'Centro Cultural La Estación', meta: 'Nueva propuesta vecinal', line: 'Talleres para adolescentes' },
      { type: 'school', name: 'Escuela N.º 14', meta: 'Respuesta publicada', line: 'Cruce peatonal en obra' },
    ],
  },

  problems: {
    title: 'Tu ciudad sabe cosas que no siempre llegan a tu gestión.',
    items: [
      { title: 'Llegan tarde o no llegan', body: 'Lo que pasa en una plaza, una escuela o un centro cultural se conoce cuando ya es un problema, o por un mensaje suelto.' },
      { title: 'Se dispersan sin dejar conocimiento', body: 'Opiniones en redes, formularios y reuniones que nadie llega a ordenar, comparar ni recordar.' },
      { title: 'Lo que hacés no se ve', body: 'Las respuestas y las obras no vuelven a quienes participaron, y la confianza no crece.' },
    ],
  },

  capabilities: {
    eyebrow: 'Una plataforma',
    title: 'Todo lo que necesita un gobierno para decidir con su comunidad.',
    lead: 'Cinco capacidades que funcionan juntas. Podés empezar por una y sumar las demás.',
    availableLabel: 'Hoy podés',
    soonLabel: 'Próximamente',
    items: [
      {
        id: 'listen',
        name: 'Escuchar',
        title: 'Escuchá a tu comunidad donde está.',
        body: 'Encuestas abiertas que se responden sin crear cuenta, con un QR en cada espacio o un enlace por WhatsApp. Consultas formales con la respuesta de tu municipio.',
        available: ['Encuestas abiertas con QR y WhatsApp', 'Consultas con respuesta del municipio', 'Saber de qué canal llegó cada respuesta'],
        soon: ['Un canal permanente para cada Lugar'],
      },
      {
        id: 'understand',
        name: 'Comprender',
        title: 'Convertí miles de opiniones en conocimiento.',
        body: 'Resultados claros de cada encuesta y consulta. Muy pronto, inteligencia artificial que ordena las respuestas abiertas en temas, siempre con las citas que lo respaldan.',
        available: ['Resultados de preguntas cerradas', 'Lectura de cada respuesta abierta', 'Reporte mensual de participación'],
        soon: ['Temas que surgen, con sus citas', 'Acuerdos, desacuerdos y voces minoritarias', 'Cómo cambian las necesidades en el tiempo'],
      },
      {
        id: 'participate',
        name: 'Participar',
        title: 'Que los vecinos propongan y se sumen.',
        body: 'Propuestas ciudadanas que otros vecinos apoyan, iniciativas comunitarias y una app para seguir todo lo que pasa en la ciudad.',
        available: ['Propuestas con apoyos de vecinos', 'Iniciativas ciudadanas', 'App para vecinos en iOS y Android'],
        soon: [],
      },
      {
        id: 'cocreate',
        name: 'Cocrear',
        title: 'Construí soluciones junto a quienes las van a usar.',
        body: 'CoLab organiza procesos por etapas: un desafío, ideas, mejoras y una propuesta consolidada que tu equipo puede llevar adelante.',
        available: ['Consultas para priorizar entre opciones'],
        soon: ['CoLab: propuestas construidas por etapas'],
      },
      {
        id: 'act',
        name: 'Actuar y mostrar',
        title: 'Que se vea lo que hace tu gobierno.',
        body: 'Obras con su estado, avisos institucionales y un portal público donde cada vecino puede ver qué se decidió y en qué quedó.',
        available: ['Obras con estado público', 'Avisos y comunicación institucional', 'Portal Mi Ciudad e índice de transparencia'],
        soon: ['Necesidades vinculadas a acciones', 'Tablero de tu ciudad, Lugar por Lugar'],
      },
    ],
  },

  places: {
    eyebrow: 'Lugares',
    title: 'Cada lugar de tu ciudad, con su propia voz.',
    lead: 'Plazas, parques, escuelas, centros culturales y oficinas municipales con una identidad digital propia: lo que dicen los vecinos, lo que necesita y lo que hizo tu gobierno. Tocá un lugar del mapa.',
    filtersLabel: 'Filtrar por tipo de lugar',
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
    card: {
      channel: 'Canal abierto',
      qr: 'QR en el lugar',
      contributions: 'aportes este mes',
      responses: 'respuestas a la encuesta activa',
      themes: 'Lo que más dicen',
      needs: 'Necesidades',
      response: 'Última respuesta del municipio',
      healthNote: 'Lugar de atención: los aportes se leen sin enviarse a proveedores de inteligencia artificial.',
    },
    needStates: {
      identified: 'Identificada',
      action: 'Acción registrada',
      done: 'Resuelta, con evidencia',
    },
    bridge: {
      title: 'Hoy ya podés empezar.',
      body: 'Mientras llegan los Lugares, cualquier espacio puede tener su encuesta abierta con QR, su obra con estado público y la respuesta de tu municipio.',
    },
    list: [
      {
        id: 'plaza-encuentro', type: 'plaza', name: 'Plaza del Encuentro', area: 'Barrio Centro', x: 470, y: 300,
        contributions: 86, themes: [['Iluminación', 41], ['Juegos para chicos', 27], ['Limpieza', 18]],
        needs: [['Más luz en el sector norte', 'action'], ['Bebederos', 'identified']],
        response: 'Licitamos el recambio de 24 luminarias. Obra prevista para marzo.',
      },
      {
        id: 'parque-costanera', type: 'plaza', name: 'Parque Costanera', area: 'Barrio Río', x: 190, y: 430,
        contributions: 132, themes: [['Actividades nocturnas', 34], ['Seguridad', 30], ['Bicisenda', 21]],
        needs: [['Bicisenda conectada al centro', 'identified'], ['Baños públicos', 'action']],
        response: 'Abrimos una consulta para priorizar los usos nocturnos del parque.',
      },
      {
        id: 'centro-cultural', type: 'culture', name: 'Centro Cultural La Estación', area: 'Barrio Estación', x: 700, y: 175,
        contributions: 54, themes: [['Talleres para adolescentes', 38], ['Horarios de fin de semana', 29], ['Accesibilidad', 14]],
        needs: [['Rampa en la sala principal', 'done']],
        response: 'Inauguramos la rampa de acceso. Sumamos dos talleres los sábados.',
      },
      {
        id: 'escuela-14', type: 'school', name: 'Escuela N.º 14', area: 'Barrio Norte', x: 560, y: 110,
        contributions: 47, themes: [['Cruce peatonal', 52], ['Veredas', 23], ['Arbolado', 11]],
        needs: [['Cruce peatonal en la avenida', 'action']],
        response: 'El cruce peatonal está en obra. Avance: 60 %.',
      },
      {
        id: 'polideportivo', type: 'sport', name: 'Polideportivo Municipal', area: 'Barrio Sur', x: 330, y: 520,
        contributions: 63, themes: [['Horarios de pileta', 36], ['Vestuarios', 31], ['Actividades para mayores', 19]],
        needs: [['Renovar vestuarios', 'identified']],
        response: 'Ampliamos los horarios de pileta libre de diciembre a febrero.',
      },
      {
        id: 'biblioteca', type: 'culture', name: 'Biblioteca Popular', area: 'Barrio Centro', x: 610, y: 360,
        contributions: 22, themes: [['Wifi', 45], ['Espacio de estudio', 32], ['Horarios', 18]],
        needs: [['Mejorar la conexión a internet', 'done']],
        response: 'Instalamos un nuevo punto de acceso a internet en la sala de lectura.',
      },
      {
        id: 'atencion-vecinal', type: 'office', name: 'Oficina de Atención Vecinal', area: 'Barrio Centro', x: 405, y: 215,
        contributions: 71, themes: [['Tiempos de espera', 48], ['Turnos en línea', 33], ['Trato', 9]],
        needs: [['Turnos en línea para trámites', 'action']],
        response: 'Desde el mes próximo los turnos se piden desde la app.',
      },
      {
        id: 'centro-salud', type: 'health', name: 'Centro de Salud Barrio Norte', area: 'Barrio Norte', x: 830, y: 260,
        contributions: 39, themes: [['Turnos', 44], ['Sala de espera', 28], ['Horarios', 20]],
        needs: [['Ampliar la sala de espera', 'identified']],
        response: 'Sumamos un turno de atención por la tarde dos veces por semana.',
      },
      {
        id: 'paseo-rio', type: 'public', name: 'Paseo del Río', area: 'Barrio Río', x: 95, y: 250,
        contributions: 58, themes: [['Bancos y sombra', 40], ['Feria de fin de semana', 26], ['Limpieza', 22]],
        needs: [['Más sombra en el paseo', 'action']],
        response: 'Plantamos 40 árboles nativos a lo largo del paseo.',
      },
    ],
  },

  journey: {
    eyebrow: 'Un ejemplo, de punta a punta',
    title: 'Así se escucha una plaza.',
    lead: 'Del QR en un banco a una respuesta que cualquier vecino puede consultar. Cada paso indica qué podés hacer hoy.',
    placeName: 'Plaza del Encuentro',
    neighborView: 'Lo que ve el vecino',
    teamView: 'Lo que ve tu equipo',
    prev: 'Paso anterior',
    next: 'Paso siguiente',
    steps: [
      {
        id: 'scan',
        name: 'Escuchar',
        title: 'El vecino escanea un QR y opina en un minuto.',
        body: 'Sin descargar nada y sin crear una cuenta. La encuesta es corta y dice para qué se usa lo que responde.',
        status: 'available',
        statusNote: 'Hoy, con encuestas abiertas',
        phone: { kind: 'survey', question: '¿Qué mejorarías de la plaza?', options: ['Iluminación', 'Juegos para chicos', 'Limpieza', 'Bancos y sombra'], selected: 0 },
        panel: { kind: 'counter', value: '86', label: 'respuestas esta semana', bars: [['QR en la plaza', 54], ['WhatsApp', 21], ['Instagram', 11]] },
      },
      {
        id: 'results',
        name: 'Ver',
        title: 'Tu equipo ve los resultados, sin planillas.',
        body: 'Qué opción eligieron, cuántos respondieron y por qué canal llegaron. Las respuestas abiertas se leen una por una.',
        status: 'available',
        statusNote: 'Hoy',
        phone: { kind: 'thanks', title: '¡Gracias!', body: 'Cuando el municipio responda, lo vas a ver en esta misma página.' },
        panel: { kind: 'results', rows: [['Iluminación', 41], ['Juegos para chicos', 27], ['Limpieza', 18], ['Bancos y sombra', 14]] },
      },
      {
        id: 'understand',
        name: 'Entender',
        title: 'La inteligencia artificial ordena lo que escribieron.',
        body: 'Las respuestas abiertas se agrupan en temas, cada uno con las citas que lo respaldan. Tu equipo revisa y decide.',
        status: 'soon',
        statusNote: 'Demostración conceptual',
        phone: { kind: 'idle' },
        panel: { kind: 'themes', rows: [['Sector norte sin luz de noche', 23, '«Después de las 8 no se puede cruzar por el lado de la escuela.»'], ['Juegos rotos', 14, '«La hamaca grande está rota desde el invierno.»']] },
      },
      {
        id: 'act',
        name: 'Actuar',
        title: 'La necesidad se convierte en una obra.',
        body: 'Registrás la obra con su estado y avance. Los vecinos la siguen desde el portal público y la app.',
        status: 'available',
        statusNote: 'Hoy, con obras públicas',
        phone: { kind: 'work', title: 'Recambio de luminarias', state: 'En curso', progress: 60 },
        panel: { kind: 'work', title: 'Recambio de luminarias', state: 'En curso', progress: 60, linked: 'Iluminación · 41 % de las respuestas' },
      },
      {
        id: 'respond',
        name: 'Responder',
        title: 'Tu municipio responde en público.',
        body: 'La respuesta queda junto a los resultados, a la vista de quienes participaron y de cualquier vecino.',
        status: 'available',
        statusNote: 'Hoy',
        phone: { kind: 'response', title: 'Respuesta del municipio', body: 'Licitamos el recambio de 24 luminarias del sector norte. La obra empieza en marzo.' },
        panel: { kind: 'published', title: 'Respuesta publicada', body: 'Visible en el portal, en la app y en la página de la encuesta.' },
      },
    ],
  },

  intelligence: {
    eyebrow: 'Inteligencia colectiva',
    title: 'De miles de opiniones a conocimiento para decidir.',
    lead: 'Así va a funcionar la lectura de respuestas abiertas con inteligencia artificial. Probala con una consulta de ejemplo.',
    disclaimer: 'Datos ficticios. Esta capacidad todavía no está disponible.',
    question: '¿Qué cambiarías del Parque Costanera?',
    responsesLabel: 'respuestas abiertas',
    run: 'Organizar las respuestas',
    reset: 'Volver a empezar',
    running: 'Organizando…',
    tabs: {
      themes: 'Temas que surgen',
      agreement: 'Acuerdos y desacuerdos',
      minority: 'Voces minoritarias',
      time: 'Cómo cambia en el tiempo',
    },
    quotesLabel: 'Citas que lo respaldan',
    responsesCount: 'respuestas',
    themes: [
      { id: 'light', name: 'Iluminación y seguridad', share: 31 },
      { id: 'kids', name: 'Espacios para chicos', share: 25 },
      { id: 'clean', name: 'Limpieza y mantenimiento', share: 19 },
      { id: 'night', name: 'Uso nocturno del parque', share: 13 },
      { id: 'access', name: 'Accesibilidad', share: 6 },
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
    agreement: {
      agree: { title: 'Amplio acuerdo', body: 'La mayoría pide mejorar la iluminación del camino al río. Casi nadie se opone.', quote: '«Necesitamos más luces en el camino que va al río.»' },
      disagree: { title: 'Desacuerdo', body: 'El uso nocturno divide opiniones: unos quieren ferias y música, otros prefieren tranquilidad.', quotes: ['«Me gustaría que haya ferias y música los viernes a la noche.»', '«Prefiero que de noche sea un lugar tranquilo, vivo enfrente.»'] },
    },
    minority: {
      title: 'Pocas respuestas, una necesidad concreta',
      body: 'Dos personas hablan de accesibilidad. Son pocas, pero describen una barrera real que el promedio no muestra.',
      quotes: ['«Con la silla de ruedas no puedo llegar al mirador.»', '«Las rampas están rotas en la entrada principal.»'],
    },
    time: {
      title: 'Menciones por mes',
      months: ['Ago', 'Sep', 'Oct', 'Nov'],
      series: [
        { theme: 'Iluminación y seguridad', values: [12, 18, 26, 31] },
        { theme: 'Espacios para chicos', values: [22, 24, 23, 25] },
        { theme: 'Limpieza y mantenimiento', values: [30, 24, 21, 19] },
      ],
      note: 'La preocupación por la iluminación creció desde agosto.',
    },
    principles: [
      { title: 'Cada conclusión, con sus citas', body: 'Ningún tema aparece sin las respuestas reales que lo respaldan.' },
      { title: 'La IA asiste, tu equipo decide', body: 'La inteligencia artificial ordena y resume. Las decisiones son de las personas.' },
      { title: 'Lo sensible se protege', body: 'Antes del análisis se quitan los datos personales que el sistema detecta, y lo sensible se reserva sin enviarse a proveedores externos.' },
    ],
  },

  cocreation: {
    eyebrow: 'Participación y cocreación',
    title: 'Las mejores soluciones se construyen con quienes las van a usar.',
    today: {
      label: 'Hoy',
      title: 'Propuestas, consultas e iniciativas',
      items: [
        { title: 'Propuestas ciudadanas', body: 'Un vecino propone, otros la apoyan, y tu equipo ve qué temas mueven a la ciudad.' },
        { title: 'Consultas para priorizar', body: 'Los vecinos ordenan opciones y tu municipio publica qué hará con el resultado.' },
        { title: 'Iniciativas comunitarias', body: 'Proyectos que los propios vecinos llevan adelante, con apoyo y difusión.' },
      ],
      proposal: { title: 'Huerta comunitaria en el Paseo del Río', supports: '128 apoyos', tag: 'Ambiente' },
    },
    colab: {
      label: 'CoLab · Próximamente',
      title: 'Procesos de cocreación por etapas',
      body: 'Tu equipo plantea un desafío y los vecinos lo trabajan en etapas, con reglas anunciadas de antemano. El resultado es una propuesta que mejora con cada aporte.',
      example: 'Rediseño del Paseo del Río',
      stages: [
        { name: 'Desafío', body: '¿Cómo hacemos del paseo un lugar para todo el día?' },
        { name: 'Ideas', body: '64 ideas de vecinos y organizaciones' },
        { name: 'Mejoras', body: 'Las ideas se combinan y se ajustan' },
        { name: 'Propuesta', body: 'Una versión consolidada para tu equipo' },
      ],
    },
  },

  action: {
    eyebrow: 'Acción pública visible',
    title: 'Escuchar es el comienzo. Lo importante es lo que pasa después.',
    lead: 'Cada vecino puede ver qué se decidió, qué obras avanzan y qué respondió tu municipio. Y tu equipo tiene un reporte mensual para mostrar lo hecho.',
    portal: {
      url: 'citixen.org/valle-norte',
      title: 'Mi Ciudad · Valle Norte',
      transparency: 'Índice de transparencia',
      transparencyValue: '78',
      works: [
        { title: 'Recambio de luminarias · Plaza del Encuentro', state: 'En curso', progress: 60 },
        { title: 'Cruce peatonal · Escuela N.º 14', state: 'En curso', progress: 35 },
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
    items: [
      { title: 'Obras con estado público', body: 'En curso, demorada o terminada, con su avance.' },
      { title: 'Avisos institucionales', body: 'Comunicados a toda la ciudad o a quienes participaron, con registro público.' },
      { title: 'Reporte mensual', body: 'Un PDF con las cifras del mes y una frase lista para comunicar.' },
    ],
  },

  start: {
    eyebrow: 'Cómo empezar',
    title: 'Empezá por un lugar.',
    lead: 'Sin normas nuevas y sin tocar el presupuesto. Elegís un espacio, escuchás, respondés y sumás los que quieras.',
    steps: [
      { title: 'Elegí un espacio', body: 'Una plaza, un parque o un centro cultural que quieras conocer mejor.' },
      { title: 'Salí con una encuesta y un QR', body: 'La preparamos juntos y la compartís en el lugar, por WhatsApp y en redes.' },
      { title: 'Respondé en público', body: 'Publicás qué vas a hacer con lo que dijeron los vecinos, y registrás la obra si corresponde.' },
      { title: 'Mostrá lo hecho y sumá lugares', body: 'Con el reporte del mes mostrás los resultados y elegís el próximo espacio.' },
    ],
    cta: 'Pedir una demostración',
  },

  rules: {
    eyebrow: 'Reglas que podés defender',
    title: 'Confianza, para tus vecinos y para tu equipo.',
    items: [
      { title: 'Las reglas se anuncian antes', body: 'Cada encuesta y consulta dice para qué se usa lo que se responde y si es vinculante.' },
      { title: 'Respuestas, no personas', body: 'Contamos respuestas y aportes. Nunca afirmamos cuántas personas votaron si no podemos comprobarlo.' },
      { title: 'Lo publicado no se borra', body: 'Las respuestas y los avisos del municipio quedan registrados. Si hay un error, se publica una corrección.' },
      { title: 'Inteligencia artificial con límites', body: 'Cuando la sumes, va a ordenar y resumir siempre con citas. No decide ni califica a las personas, y lo sensible se reserva.' },
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
