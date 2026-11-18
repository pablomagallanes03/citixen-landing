// Lugares de Valle Norte (ciudad ficticia): mapa y ficha de cada lugar, en tres idiomas.
// Lo usan la home «Escucha y Decide» (sección Escucha) y la home anterior (content/landing.mjs).
// Módulo propio para que la home nueva no cargue el resto del contenido anterior.

const PLACES = [
  { id: 'plaza-encuentro', type: 'plaza', name: 'Plaza del Encuentro', area: 'Barrio Centro', x: 470, y: 300, contributions: 86, shares: [41, 27, 18], needs: ['action', 'identified'], survey: { responses: 86, open: true }, channels: 0, actions: [10] },
  { id: 'parque-costanera', type: 'plaza', name: 'Parque de la Ribera', area: 'Barrio Río', x: 190, y: 430, contributions: 132, shares: [34, 30, 21], needs: ['identified', 'action'], survey: { responses: 132, open: true }, channels: 1, actions: [15] },
  { id: 'centro-cultural', type: 'culture', name: 'Centro Cultural La Estación', area: 'Barrio Estación', x: 700, y: 175, contributions: 54, shares: [38, 29, 14], needs: ['done'], survey: { responses: 54, open: false }, channels: 2, actions: [100] },
  { id: 'escuela-14', type: 'school', name: 'Escuela N.º 14', area: 'Barrio Norte', x: 560, y: 110, contributions: 47, shares: [52, 23, 11], needs: ['action'], survey: { responses: 47, open: false }, channels: 0, actions: [60] },
  { id: 'polideportivo', type: 'sport', name: 'Polideportivo Municipal', area: 'Barrio Sur', x: 330, y: 520, contributions: 63, shares: [36, 31, 19], needs: ['identified'], survey: { responses: 63, open: true }, channels: 1, actions: [] },
  { id: 'biblioteca', type: 'culture', name: 'Biblioteca Municipal', area: 'Barrio Centro', x: 610, y: 360, contributions: 22, shares: [45, 32, 18], needs: ['done'], survey: { responses: 22, open: false }, channels: 2, actions: [100] },
  { id: 'atencion-vecinal', type: 'office', name: 'Oficina de Atención Vecinal', area: 'Barrio Centro', x: 405, y: 215, contributions: 71, shares: [48, 33, 9], needs: ['action'], survey: { responses: 71, open: true }, channels: 0, actions: [40] },
  { id: 'centro-salud', type: 'health', name: 'Centro de Salud Barrio Norte', area: 'Barrio Norte', x: 830, y: 260, contributions: 39, shares: [44, 28, 20], needs: ['identified'], survey: { responses: 39, open: true }, channels: 1, actions: [] },
  { id: 'paseo-rio', type: 'public', name: 'Paseo del Río', area: 'Barrio Río', x: 95, y: 250, contributions: 58, shares: [40, 26, 22], needs: ['done'], survey: { responses: 58, open: false }, channels: 2, actions: [100] },
]

const DISTRICTS = [['Barrio Río', 34, 44], ['Barrio Norte', 600, 30], ['Barrio Estación', 790, 118], ['Barrio Centro', 470, 418], ['Barrio Sur', 250, 604]]

// Une los datos compartidos con los textos de cada idioma.
function places(texts, channelSets) {
  return PLACES.map((p, i) => {
    const tx = texts[i]
    return {
      id: p.id, type: p.type, name: p.name, area: p.area, x: p.x, y: p.y, since: tx.since,
      contributions: p.contributions,
      themes: tx.themes.map((name, k) => [name, p.shares[k]]),
      needs: tx.needs.map((name, k) => [name, p.needs[k]]),
      response: tx.response,
      history: tx.history,
      survey: { title: tx.survey, responses: p.survey.responses, open: p.survey.open },
      channels: channelSets[p.channels],
      actions: tx.actions.map(([title, state], k) => [title, state, p.actions[k]]),
    }
  })
}
const placesOf = (cardFields) => ({ districts: DISTRICTS, ...cardFields })

const es = {
  labels: {
    soon: 'Próximamente',
    available: 'Disponible hoy',
    concept: 'Demostración conceptual',
    fictional: 'Datos ficticios',
    cityName: 'Valle Norte',
    cityNote: 'Valle Norte es una ciudad ficticia. Todas las cifras son de ejemplo.',
  },
  places: placesOf({
    eyebrow: 'Lugares',
    title: 'Cada lugar de tu ciudad, con su propia memoria.',
    lead: 'Cada plaza, escuela o centro cultural tiene su ficha permanente: lo que dicen los vecinos, sus necesidades, cómo participan y qué hizo tu gobierno. El plan gratuito incluye 5 Lugares. Toca un lugar del mapa.',
    filtersLabel: 'Filtrar por tipo de lugar',
    sizeNote: 'El tamaño de cada círculo indica los aportes del mes.',
    all: 'Todos',
    types: { plaza: 'Plazas y parques', culture: 'Cultura', school: 'Educación', sport: 'Deporte', health: 'Salud', office: 'Atención municipal', public: 'Espacios públicos' },
    card: {
      since: 'Ficha abierta desde',
      contributions: 'aportes este mes',
      qr: 'QR en el lugar',
      tabs: { summary: 'Resumen', history: 'Historial', needs: 'Necesidades', participation: 'Participación', actions: 'Acciones' },
      tabStatus: { summary: 'available', history: 'available', needs: 'available', participation: 'available', actions: 'available' },
      tabNotes: {
        summary: 'La inteligencia artificial ordena lo que dicen los vecinos de cada lugar en temas, con sus citas.',
        history: 'Todo lo que pasó en el lugar, en orden: encuestas, obras, acciones y respuestas.',
        needs: 'Cada necesidad muestra su estado: identificada, con una acción registrada o resuelta con evidencia.',
        participation: 'Un QR fijo para opinar en cualquier momento, encuestas del lugar y el canal por el que llegó cada respuesta.',
        actions: 'Las acciones y obras del lugar, con su estado y avance, también en su página pública.',
      },
      themes: 'Lo que más dicen',
      response: 'Última respuesta del municipio',
      survey: 'Encuesta del lugar',
      surveyResponses: 'respuestas',
      surveyOpen: 'Abierta',
      surveyClosed: 'Cerrada',
      channels: 'Llegaron por',
      noActions: 'Todavía no hay obras registradas para este lugar.',
      healthNote: 'Lugar de atención: sus aportes no se van a enviar a proveedores externos de inteligencia artificial.',
    },
    needStates: { identified: 'Identificada', action: 'Acción registrada', done: 'Resuelta, con evidencia' },
    bridge: {
      title: 'Empieza con un lugar.',
      body: 'Elige una plaza o un centro cultural, coloca su QR y empieza a escuchar hoy. Después suma más lugares.',
    },
    list: places([
      { since: 'marzo de 2026', themes: ['Iluminación', 'Juegos infantiles', 'Limpieza'], needs: ['Más luz en el sector norte', 'Bebederos'], response: 'Licitamos el recambio de 24 luminarias. Obra prevista para marzo.', history: [['Nov', 'Respuesta publicada: recambio de 24 luminarias'], ['Oct', 'Encuesta con QR: 86 respuestas en el mes'], ['Ago', 'Primer aporte sobre la luz del sector norte']], survey: '¿Qué mejorarías de la plaza?', actions: [['Recambio de luminarias', 'Licitada']] },
      { since: 'abril de 2026', themes: ['Actividades nocturnas', 'Seguridad', 'Ciclovía'], needs: ['Ciclovía conectada al centro', 'Baños públicos'], response: 'Abrimos una consulta para priorizar los usos nocturnos del parque.', history: [['Nov', 'Consulta abierta sobre los usos nocturnos'], ['Sep', 'Baños públicos: obra licitada'], ['Abr', 'El parque suma su ficha y su QR']], survey: '¿Cómo usarías el parque de noche?', actions: [['Baños públicos', 'Licitada']] },
      { since: 'febrero de 2026', themes: ['Talleres para adolescentes', 'Horarios de fin de semana', 'Accesibilidad'], needs: ['Rampa en la sala principal'], response: 'Inauguramos la rampa de acceso. Sumamos dos talleres los sábados.', history: [['Oct', 'Rampa de acceso inaugurada'], ['Sep', 'Dos talleres nuevos los sábados'], ['May', 'La accesibilidad aparece como necesidad']], survey: '¿Qué talleres te gustaría sumar?', actions: [['Rampa en la sala principal', 'Terminada']] },
      { since: 'marzo de 2026', themes: ['Cruce peatonal', 'Aceras', 'Arbolado'], needs: ['Cruce peatonal en la avenida'], response: 'El cruce peatonal está en obra. Avance: 60 %.', history: [['Nov', 'Avance de obra: 60 %'], ['Sep', 'Comienza la obra del cruce peatonal'], ['Jul', 'Las familias piden un cruce seguro']], survey: '¿Cómo llegan tus hijos a la escuela?', actions: [['Cruce peatonal en la avenida', 'En curso']] },
      { since: 'mayo de 2026', themes: ['Horarios de la piscina', 'Vestuarios', 'Actividades para mayores'], needs: ['Renovar vestuarios'], response: 'Ampliamos los horarios de piscina libre en la temporada de verano.', history: [['Nov', 'Anuncio: más horarios de piscina en verano'], ['Oct', 'Vestuarios: necesidad identificada'], ['May', 'Primera encuesta del lugar']], survey: '¿Qué horarios usarías?', actions: [] },
      { since: 'junio de 2026', themes: ['Wifi', 'Espacio de estudio', 'Horarios'], needs: ['Mejorar la conexión a internet'], response: 'Instalamos un nuevo punto de acceso a internet en la sala de lectura.', history: [['Oct', 'Nuevo punto de acceso a internet'], ['Ago', 'El wifi, tema principal del mes']], survey: '¿Para qué vienes a la biblioteca?', actions: [['Punto de acceso a internet', 'Terminada']] },
      { since: 'marzo de 2026', themes: ['Tiempos de espera', 'Citas en línea', 'Trato'], needs: ['Citas en línea para trámites'], response: 'Desde el próximo mes las citas se piden desde la app.', history: [['Nov', 'Anuncio: citas desde la app'], ['Sep', 'Los tiempos de espera encabezan los aportes'], ['Mar', 'QR en el mostrador de atención']], survey: '¿Cómo fue tu atención hoy?', actions: [['Citas en línea', 'En curso']] },
      { since: 'julio de 2026', themes: ['Citas', 'Sala de espera', 'Horarios'], needs: ['Ampliar la sala de espera'], response: 'Sumamos un horario de atención por la tarde dos veces por semana.', history: [['Oct', 'Nuevo horario de atención por la tarde'], ['Ago', 'Sala de espera: necesidad identificada']], survey: '¿Cómo fue tu espera hoy?', actions: [] },
      { since: 'abril de 2026', themes: ['Bancos y sombra', 'Feria de fin de semana', 'Limpieza'], needs: ['Más sombra en el paseo'], response: 'Plantamos 40 árboles nativos a lo largo del paseo.', history: [['Oct', '40 árboles nativos plantados'], ['Ago', 'Propuesta de huerta comunitaria: 128 apoyos'], ['May', 'La sombra, tema principal']], survey: '¿Qué le falta al paseo?', actions: [['Arbolado del paseo', 'Terminada']] },
    ], [['QR en el lugar', 'WhatsApp', 'Instagram'], ['QR en el lugar', 'Instagram'], ['QR en el lugar', 'WhatsApp']]),
  }),
}

const pt = {
  labels: {
    soon: 'Em breve',
    available: 'Disponível hoje',
    concept: 'Demonstração conceitual',
    fictional: 'Dados fictícios',
    cityName: 'Valle Norte',
    cityNote: 'Valle Norte é uma cidade fictícia. Todos os números são de exemplo.',
  },
  places: placesOf({
    eyebrow: 'Lugares',
    title: 'Cada lugar da sua cidade, com a sua própria memória.',
    lead: 'Cada praça, escola ou centro cultural tem a sua ficha permanente: o que os cidadãos dizem, suas necessidades, como participam e o que o seu governo fez. O plano gratuito inclui 5 Lugares. Toque em um lugar do mapa.',
    filtersLabel: 'Filtrar por tipo de lugar',
    sizeNote: 'O tamanho de cada círculo indica as contribuições do mês.',
    all: 'Todos',
    types: { plaza: 'Praças e parques', culture: 'Cultura', school: 'Educação', sport: 'Esporte', health: 'Saúde', office: 'Atendimento municipal', public: 'Espaços públicos' },
    card: {
      since: 'Ficha aberta desde',
      contributions: 'contribuições este mês',
      qr: 'QR no local',
      tabs: { summary: 'Resumo', history: 'Histórico', needs: 'Necessidades', participation: 'Participação', actions: 'Ações' },
      tabStatus: { summary: 'available', history: 'available', needs: 'available', participation: 'available', actions: 'available' },
      tabNotes: {
        summary: 'A inteligência artificial organiza o que os cidadãos dizem de cada lugar em temas, com suas citações.',
        history: 'Tudo o que aconteceu no lugar, em ordem: pesquisas, obras, ações e respostas.',
        needs: 'Cada necessidade mostra o seu status: identificada, com uma ação registrada ou resolvida com evidência.',
        participation: 'Um QR fixo para opinar a qualquer momento, pesquisas do lugar e o canal por onde chegou cada resposta.',
        actions: 'As ações e obras do lugar, com seu status e andamento, também na sua página pública.',
      },
      themes: 'O que mais dizem',
      response: 'Última resposta do município',
      survey: 'Pesquisa do lugar',
      surveyResponses: 'respostas',
      surveyOpen: 'Aberta',
      surveyClosed: 'Encerrada',
      channels: 'Chegaram por',
      noActions: 'Ainda não há obras registradas para este lugar.',
      healthNote: 'Local de atendimento: suas contribuições não vão ser enviadas a provedores externos de inteligência artificial.',
    },
    needStates: { identified: 'Identificada', action: 'Ação registrada', done: 'Resolvida, com evidência' },
    bridge: {
      title: 'Comece com um lugar.',
      body: 'Escolha uma praça ou um centro cultural, coloque o QR e comece a ouvir hoje. Depois você inclui mais lugares.',
    },
    list: places([
      { since: 'março de 2026', themes: ['Iluminação', 'Brinquedos para crianças', 'Limpeza'], needs: ['Mais luz no setor norte', 'Bebedouros'], response: 'Abrimos a licitação para trocar 24 luminárias. Obra prevista para março.', history: [['Nov', 'Resposta publicada: troca de 24 luminárias'], ['Out', 'Pesquisa com QR: 86 respostas no mês'], ['Ago', 'Primeira contribuição sobre a luz do setor norte']], survey: 'O que você melhoraria na praça?', actions: [['Troca de luminárias', 'Em licitação']] },
      { since: 'abril de 2026', themes: ['Atividades noturnas', 'Segurança', 'Ciclovia'], needs: ['Ciclovia ligada ao centro', 'Banheiros públicos'], response: 'Abrimos uma consulta para priorizar os usos noturnos do parque.', history: [['Nov', 'Consulta aberta sobre os usos noturnos'], ['Set', 'Banheiros públicos: obra licitada'], ['Abr', 'O parque ganha a sua ficha e o seu QR']], survey: 'Como você usaria o parque à noite?', actions: [['Banheiros públicos', 'Em licitação']] },
      { since: 'fevereiro de 2026', themes: ['Oficinas para adolescentes', 'Horários de fim de semana', 'Acessibilidade'], needs: ['Rampa na sala principal'], response: 'Inauguramos a rampa de acesso. Incluímos duas oficinas aos sábados.', history: [['Out', 'Rampa de acesso inaugurada'], ['Set', 'Duas oficinas novas aos sábados'], ['Mai', 'A acessibilidade aparece como necessidade']], survey: 'Que oficinas você gostaria de incluir?', actions: [['Rampa na sala principal', 'Concluída']] },
      { since: 'março de 2026', themes: ['Faixa de pedestres', 'Calçadas', 'Arborização'], needs: ['Faixa de pedestres na avenida'], response: 'A faixa de pedestres está em obra. Andamento: 60 %.', history: [['Nov', 'Andamento da obra: 60 %'], ['Set', 'Começa a obra da faixa de pedestres'], ['Jul', 'As famílias pedem uma travessia segura']], survey: 'Como os seus filhos chegam à escola?', actions: [['Faixa de pedestres na avenida', 'Em andamento']] },
      { since: 'maio de 2026', themes: ['Horários da piscina', 'Vestiários', 'Atividades para idosos'], needs: ['Reformar os vestiários'], response: 'Ampliamos os horários de piscina livre de dezembro a fevereiro.', history: [['Nov', 'Anúncio: mais horários de piscina no verão'], ['Out', 'Vestiários: necessidade identificada'], ['Mai', 'Primeira pesquisa do lugar']], survey: 'Que horários você usaria?', actions: [] },
      { since: 'junho de 2026', themes: ['Wi-Fi', 'Espaço de estudo', 'Horários'], needs: ['Melhorar a conexão à internet'], response: 'Instalamos um novo ponto de acesso à internet na sala de leitura.', history: [['Out', 'Novo ponto de acesso à internet'], ['Ago', 'O Wi-Fi, tema principal do mês']], survey: 'Para que você vem à biblioteca?', actions: [['Ponto de acesso à internet', 'Concluída']] },
      { since: 'março de 2026', themes: ['Tempo de espera', 'Agendamento on-line', 'Atendimento'], needs: ['Agendamento on-line para serviços'], response: 'A partir do mês que vem, o agendamento é feito pelo app.', history: [['Nov', 'Anúncio: agendamento pelo app'], ['Set', 'O tempo de espera lidera as contribuições'], ['Mar', 'QR no balcão de atendimento']], survey: 'Como foi o seu atendimento hoje?', actions: [['Agendamento on-line', 'Em andamento']] },
      { since: 'julho de 2026', themes: ['Agendamentos', 'Sala de espera', 'Horários'], needs: ['Ampliar a sala de espera'], response: 'Incluímos um turno de atendimento à tarde duas vezes por semana.', history: [['Out', 'Novo turno de atendimento à tarde'], ['Ago', 'Sala de espera: necessidade identificada']], survey: 'Como foi a sua espera hoje?', actions: [] },
      { since: 'abril de 2026', themes: ['Bancos e sombra', 'Feira de fim de semana', 'Limpeza'], needs: ['Mais sombra no passeio'], response: 'Plantamos 40 árvores nativas ao longo do passeio.', history: [['Out', '40 árvores nativas plantadas'], ['Ago', 'Proposta de horta comunitária: 128 apoios'], ['Mai', 'A sombra, tema principal']], survey: 'O que falta no passeio?', actions: [['Arborização do passeio', 'Concluída']] },
    ], [['QR no local', 'WhatsApp', 'Instagram'], ['QR no local', 'Instagram'], ['QR no local', 'WhatsApp']]),
  }),
}

const en = {
  labels: {
    soon: 'Coming soon',
    available: 'Available today',
    concept: 'Concept demo',
    fictional: 'Fictional data',
    cityName: 'Valle Norte',
    cityNote: 'Valle Norte is a fictional city. All figures are examples.',
  },
  places: placesOf({
    eyebrow: 'Places',
    title: 'Every place in your city, with its own memory.',
    lead: 'Every square, school or community center has its own permanent profile: what residents say, its needs, how people take part and what your government did. The free plan includes 5 Places. Tap a place on the map.',
    filtersLabel: 'Filter by type of place',
    sizeNote: 'The size of each circle shows the month’s contributions.',
    all: 'All',
    types: { plaza: 'Squares and parks', culture: 'Culture', school: 'Education', sport: 'Sports', health: 'Health', office: 'Municipal services', public: 'Public spaces' },
    card: {
      since: 'Profile open since',
      contributions: 'contributions this month',
      qr: 'QR code on site',
      tabs: { summary: 'Summary', history: 'History', needs: 'Needs', participation: 'Participation', actions: 'Actions' },
      tabStatus: { summary: 'available', history: 'available', needs: 'available', participation: 'available', actions: 'available' },
      tabNotes: {
        summary: 'Artificial intelligence organizes what residents say about each place into topics, with their quotes.',
        history: 'Everything that happened at the place, in order: surveys, public works, actions and responses.',
        needs: 'Each need shows its status: identified, with an action recorded, or resolved with evidence.',
        participation: 'A fixed QR code to share an opinion at any time, the place’s surveys and the channel each response came from.',
        actions: 'The place’s actions and public works, with their status and progress, also on its public page.',
      },
      themes: 'What people mention most',
      response: 'Latest response from the municipality',
      survey: 'Survey for this place',
      surveyResponses: 'responses',
      surveyOpen: 'Open',
      surveyClosed: 'Closed',
      channels: 'Received via',
      noActions: 'No public works have been registered for this place yet.',
      healthNote: 'Care facility: its contributions will not be sent to external artificial intelligence providers.',
    },
    needStates: { identified: 'Identified', action: 'Action registered', done: 'Resolved, with evidence' },
    bridge: {
      title: 'Start with one place.',
      body: 'Pick a square or a community center, put up its QR code and start listening today. Then add more places.',
    },
    list: places([
      { since: 'March 2026', themes: ['Lighting', 'Play equipment', 'Cleaning'], needs: ['More light in the north section', 'Drinking fountains'], response: 'We put the replacement of 24 streetlights out to tender. Work is planned for March.', history: [['Nov', 'Response published: replacement of 24 streetlights'], ['Oct', 'QR survey: 86 responses this month'], ['Aug', 'First contribution about lighting in the north section']], survey: 'What would you improve in the square?', actions: [['Streetlight replacement', 'Out to tender']] },
      { since: 'April 2026', themes: ['Evening activities', 'Safety', 'Bike lane'], needs: ['Bike lane connected to downtown', 'Public restrooms'], response: 'We opened a consultation to prioritize evening uses of the park.', history: [['Nov', 'Consultation opened on evening uses'], ['Sep', 'Public restrooms: work put out to tender'], ['Apr', 'The park gets its profile and QR code']], survey: 'How would you use the park at night?', actions: [['Public restrooms', 'Out to tender']] },
      { since: 'February 2026', themes: ['Workshops for teenagers', 'Weekend hours', 'Accessibility'], needs: ['Ramp in the main hall'], response: 'We opened the access ramp. We added two workshops on Saturdays.', history: [['Oct', 'Access ramp opened'], ['Sep', 'Two new Saturday workshops'], ['May', 'Accessibility comes up as a need']], survey: 'Which workshops would you like to add?', actions: [['Ramp in the main hall', 'Completed']] },
      { since: 'March 2026', themes: ['Pedestrian crossing', 'Sidewalks', 'Trees'], needs: ['Pedestrian crossing on the avenue'], response: 'The pedestrian crossing is under construction. Progress: 60%.', history: [['Nov', 'Construction progress: 60%'], ['Sep', 'Work on the pedestrian crossing begins'], ['Jul', 'Families ask for a safe crossing']], survey: 'How do your children get to school?', actions: [['Pedestrian crossing on the avenue', 'In progress']] },
      { since: 'May 2026', themes: ['Pool hours', 'Locker rooms', 'Activities for older adults'], needs: ['Renovate the locker rooms'], response: 'We extended open-swim hours from December to February.', history: [['Nov', 'Announcement: more pool hours in summer'], ['Oct', 'Locker rooms: need identified'], ['May', 'First survey for this place']], survey: 'Which hours would you use?', actions: [] },
      { since: 'June 2026', themes: ['Wi-Fi', 'Study space', 'Opening hours'], needs: ['Improve the internet connection'], response: 'We installed a new internet access point in the reading room.', history: [['Oct', 'New internet access point'], ['Aug', 'Wi-Fi, the month’s main topic']], survey: 'What do you come to the library for?', actions: [['Internet access point', 'Completed']] },
      { since: 'March 2026', themes: ['Wait times', 'Online appointments', 'Service'], needs: ['Online appointments for procedures'], response: 'Starting next month, appointments are booked through the app.', history: [['Nov', 'Announcement: appointments through the app'], ['Sep', 'Wait times top the contributions'], ['Mar', 'QR code at the service desk']], survey: 'How was your visit today?', actions: [['Online appointments', 'In progress']] },
      { since: 'July 2026', themes: ['Appointments', 'Waiting room', 'Opening hours'], needs: ['Expand the waiting room'], response: 'We added an afternoon service shift twice a week.', history: [['Oct', 'New afternoon service shift'], ['Aug', 'Waiting room: need identified']], survey: 'How was your wait today?', actions: [] },
      { since: 'April 2026', themes: ['Benches and shade', 'Weekend market', 'Cleaning'], needs: ['More shade along the walkway'], response: 'We planted 40 native trees along the walkway.', history: [['Oct', '40 native trees planted'], ['Aug', 'Community garden proposal: 128 supporters'], ['May', 'Shade, the main topic']], survey: 'What is the walkway missing?', actions: [['Walkway trees', 'Completed']] },
    ], [['QR code on site', 'WhatsApp', 'Instagram'], ['QR code on site', 'Instagram'], ['QR code on site', 'WhatsApp']]),
  }),
}

export const placesContent = { es, pt, en }
