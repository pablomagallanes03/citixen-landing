import { gated } from '../lib/claims.mjs'

export const home = {
  es: {
    meta: {
      title: 'Citixen | Lo que la ciudad decide, se cumple',
      description: 'Citixen es la plataforma de participación donde los vecinos asignan Créditos Cívicos a proyectos que su municipio ya aprobó. Cuando un proyecto llega a su meta, se financia.',
    },
    hero: {
      title: 'Lo que la ciudad decide, se cumple.',
      lead: 'Citixen es la plataforma de participación donde los vecinos asignan Créditos Cívicos a proyectos que su municipio ya aprobó. Cuando un proyecto llega a su meta, se financia.',
      primary: 'Probá cómo funciona',
      secondary: 'Pedir una demostración',
    },
    threeTimes: {
      title: 'Lo que acabás de hacer funciona así.',
      steps: [
        {
          piece: 'government',
          title: 'El gobierno habilita.',
          body: gated(
            'limits.general',
            'Aprueba los proyectos viables, define cómo se generan los créditos y cuánto puede asignar cada vecino por mes.',
            'Aprueba los proyectos viables, define cómo se generan los créditos y cuánto puede asignar cada vecino.',
          ),
        },
        {
          piece: 'citizen',
          title: 'La ciudadanía decide.',
          body: 'Cada vecino reparte sus créditos entre lo que le importa. Los límites hacen que nadie decida solo.',
        },
        {
          piece: 'fulfilment',
          title: 'Lo decidido se cumple.',
          body: gated(
            'execution.municipal',
            'El proyecto que llega a su meta se ejecuta, por el municipio o por su responsable, y se cierra con pruebas públicas.',
            'El proyecto que llega a su meta se financia, se ejecuta y se cierra con pruebas públicas.',
          ),
        },
      ],
    },
    rules: {
      title: 'Vos ponés las reglas. Tus vecinos, la decisión.',
      items: [
        {
          title: 'Cómo se generan los créditos',
          body: gated(
            'emission.modalities',
            'Desde una partida que tu municipio habilita, desde los impuestos que pagan los vecinos, o combinando ambas.',
            'Definís qué impuestos generan Créditos Cívicos y en qué porcentaje.',
          ),
        },
        {
          title: 'Qué proyectos entran',
          body: 'Vecinos y organizaciones proponen. Nada recibe créditos sin tu aprobación.',
        },
        {
          title: 'Cuánto puede asignar cada vecino',
          body: gated(
            'limits.general',
            'Un límite mensual general, con excepciones para los proyectos que lo necesiten.',
            'Un límite por proyecto para cada vecino, que puede renovarse cada mes.',
          ),
        },
        {
          title: 'Qué pasa al llegar a la meta',
          body: gated(
            'execution.municipal',
            'Tu municipio lo ejecuta directamente o transfiere los fondos al responsable autorizado, según lo definido al aprobarlo.',
            'Se activa su financiamiento y autorizás el pago al responsable por tus canales de siempre.',
          ),
        },
      ],
      backing: gated(
        'backing.budget',
        'Cada crédito está respaldado por recursos que tu municipio habilitó.',
        null,
      ),
      control: 'Nada se financia sin tu aprobación. Cada paso queda registrado.',
      link: 'Ver cómo funciona en detalle',
    },
    different: {
      title: 'No es una encuesta.\nNo es una colecta.',
      body: 'Una encuesta pregunta y no compromete. Una colecta junta dinero sin una institución detrás.',
      strong: 'Citixen une la decisión de los vecinos con el compromiso de su gobierno.',
    },
    evidence: {
      title: 'Cada proyecto termina con pruebas.',
      body: 'Fotos del antes y el después, documentos y la historia de lo que cambió. Públicos y permanentes.',
      card: {
        status: 'Proyecto completado',
        project: 'Plaza Los Álamos',
        items: ['24 fotos del antes y el después', '6 documentos de ejecución', 'Historia del cierre'],
      },
    },
    platform: {
      title: 'Los Créditos Cívicos son el centro. No son lo único.',
      items: [
        { name: 'Opiná', body: 'Consultas verificadas y encuestas abiertas, que se comparten por WhatsApp o con un código QR.' },
        { name: 'Propuestas', body: 'Los vecinos proponen y apoyan ideas. Ves qué quiere la ciudad, agrupado por tema.' },
        { name: 'Mi Ciudad', body: 'El portal público con los proyectos, sus avances y sus pruebas de cierre.' },
        { name: 'Comunicación institucional', body: 'Avisos oficiales al teléfono de cada vecino, segmentados y auditables.' },
        { name: 'Panel y aplicaciones', body: 'Gestión con roles y registro de auditoría. App para vecinos en Android e iOS.' },
      ],
      link: 'Ver la plataforma',
    },
    neighbors: {
      title: '¿Tu ciudad ya usa Citixen?',
      body: 'Buscá tu ciudad, descargá la app y empezá a participar. Si todavía no está, podés invitar a tu municipio.',
      cta: 'Buscar mi ciudad',
    },
    firstCycle: {
      title: 'Diseñemos el primer ciclo de tu ciudad.',
      steps: [
        'Una demostración con el contexto de tu municipio.',
        'Definimos juntos las reglas y los primeros proyectos.',
        'Te acompañamos en el lanzamiento y el seguimiento.',
      ],
      cta: 'Pedir una demostración',
    },
  },

  pt: {
    meta: {
      title: 'Citixen | O que a cidade decide é cumprido',
      description: 'Citixen é a plataforma de participação em que os moradores destinam Créditos Cívicos a projetos que o seu município já aprovou. Quando um projeto atinge a meta, ele é financiado.',
    },
    hero: {
      title: 'O que a cidade decide é cumprido.',
      lead: 'Citixen é a plataforma de participação em que os moradores destinam Créditos Cívicos a projetos que o seu município já aprovou. Quando um projeto atinge a meta, ele é financiado.',
      primary: 'Experimente como funciona',
      secondary: 'Solicitar uma demonstração',
    },
    threeTimes: {
      title: 'O que você acabou de fazer funciona assim.',
      steps: [
        {
          piece: 'government',
          title: 'O governo habilita.',
          body: gated(
            'limits.general',
            'Aprova os projetos viáveis, define como os créditos são gerados e quanto cada morador pode destinar por mês.',
            'Aprova os projetos viáveis, define como os créditos são gerados e quanto cada morador pode destinar.',
          ),
        },
        {
          piece: 'citizen',
          title: 'Os cidadãos decidem.',
          body: 'Cada morador distribui seus créditos entre o que importa para ele. Os limites fazem com que ninguém decida sozinho.',
        },
        {
          piece: 'fulfilment',
          title: 'O que foi decidido é cumprido.',
          body: gated(
            'execution.municipal',
            'O projeto que atinge a meta é executado, pelo município ou pelo seu responsável, e encerrado com provas públicas.',
            'O projeto que atinge a meta é financiado, executado e encerrado com provas públicas.',
          ),
        },
      ],
    },
    rules: {
      title: 'Você define as regras. Os moradores, a decisão.',
      items: [
        {
          title: 'Como os créditos são gerados',
          body: gated(
            'emission.modalities',
            'A partir de uma dotação que o seu município habilita, dos impostos pagos pelos moradores ou da combinação das duas.',
            'Você define quais impostos geram Créditos Cívicos e em que porcentagem.',
          ),
        },
        {
          title: 'Quais projetos entram',
          body: 'Moradores e organizações propõem. Nada recebe créditos sem a sua aprovação.',
        },
        {
          title: 'Quanto cada morador pode destinar',
          body: gated(
            'limits.general',
            'Um limite mensal geral, com exceções para os projetos que precisarem.',
            'Um limite por projeto para cada morador, que pode ser renovado todo mês.',
          ),
        },
        {
          title: 'O que acontece ao atingir a meta',
          body: gated(
            'execution.municipal',
            'O seu município executa diretamente ou transfere os recursos ao responsável autorizado, conforme definido na aprovação.',
            'O financiamento é ativado e você autoriza o pagamento ao responsável pelos canais de sempre.',
          ),
        },
      ],
      backing: gated(
        'backing.budget',
        'Cada crédito tem o respaldo de recursos que o seu município habilitou.',
        null,
      ),
      control: 'Nada é financiado sem a sua aprovação. Cada etapa fica registrada.',
      link: 'Ver como funciona em detalhe',
    },
    different: {
      title: 'Não é uma enquete.\nNão é uma vaquinha.',
      body: 'Uma enquete pergunta e não se compromete. Uma vaquinha junta dinheiro sem uma instituição por trás.',
      strong: 'Citixen une a decisão dos moradores ao compromisso do seu governo.',
    },
    evidence: {
      title: 'Todo projeto termina com provas.',
      body: 'Fotos do antes e do depois, documentos e a história do que mudou. Públicos e permanentes.',
      card: {
        status: 'Projeto concluído',
        project: 'Praça Los Álamos',
        items: ['24 fotos do antes e do depois', '6 documentos de execução', 'História do encerramento'],
      },
    },
    platform: {
      title: 'Os Créditos Cívicos são o centro. Não são tudo.',
      items: [
        { name: 'Opine', body: 'Consultas verificadas e enquetes abertas, compartilhadas por WhatsApp ou com um código QR.' },
        { name: 'Propostas', body: 'Os moradores propõem e apoiam ideias. Você vê o que a cidade quer, agrupado por tema.' },
        { name: 'Minha Cidade', body: 'O portal público com os projetos, seu andamento e suas provas de encerramento.' },
        { name: 'Comunicação institucional', body: 'Avisos oficiais no celular de cada morador, segmentados e auditáveis.' },
        { name: 'Painel e aplicativos', body: 'Gestão com perfis e registro de auditoria. App para moradores em Android e iOS.' },
      ],
      link: 'Ver a plataforma',
    },
    neighbors: {
      title: 'A sua cidade já usa o Citixen?',
      body: 'Procure a sua cidade, baixe o app e comece a participar. Se ela ainda não estiver, você pode convidar o seu município.',
      cta: 'Procurar minha cidade',
    },
    firstCycle: {
      title: 'Vamos desenhar o primeiro ciclo da sua cidade.',
      steps: [
        'Uma demonstração com o contexto do seu município.',
        'Definimos juntos as regras e os primeiros projetos.',
        'Acompanhamos você no lançamento e no monitoramento.',
      ],
      cta: 'Solicitar uma demonstração',
    },
  },

  en: {
    meta: {
      title: 'Citixen | What the city decides gets done',
      description: 'Citixen is the participation platform where residents allocate Civic Credits to projects their local government has already approved. When a project reaches its goal, it gets funded.',
    },
    hero: {
      title: 'What the city decides gets done.',
      lead: 'Citixen is the participation platform where residents allocate Civic Credits to projects their local government has already approved. When a project reaches its goal, it gets funded.',
      primary: 'Try how it works',
      secondary: 'Request a demo',
    },
    threeTimes: {
      title: 'What you just did works like this.',
      steps: [
        {
          piece: 'government',
          title: 'Government enables.',
          body: gated(
            'limits.general',
            'It approves viable projects, sets how credits are generated and how much each resident can allocate per month.',
            'It approves viable projects, sets how credits are generated and how much each resident can allocate.',
          ),
        },
        {
          piece: 'citizen',
          title: 'Citizens decide.',
          body: 'Each resident spreads their credits across what matters to them. Limits make sure no one decides alone.',
        },
        {
          piece: 'fulfilment',
          title: 'What is decided gets done.',
          body: gated(
            'execution.municipal',
            'A project that reaches its goal is carried out, by the local government or by its lead, and closed with public evidence.',
            'A project that reaches its goal is funded, carried out and closed with public evidence.',
          ),
        },
      ],
    },
    rules: {
      title: 'You set the rules. Your residents make the call.',
      items: [
        {
          title: 'How credits are generated',
          body: gated(
            'emission.modalities',
            'From a budget allocation your local government enables, from the local taxes residents pay, or a combination of both.',
            'You choose which local taxes generate Civic Credits, and at what percentage.',
          ),
        },
        {
          title: 'Which projects take part',
          body: 'Residents and organizations propose. Nothing receives credits without your approval.',
        },
        {
          title: 'How much each resident can allocate',
          body: gated(
            'limits.general',
            'A general monthly limit, with exceptions for the projects that need them.',
            'A per-project limit for each resident, which can renew every month.',
          ),
        },
        {
          title: 'What happens at the goal',
          body: gated(
            'execution.municipal',
            'Your local government carries it out directly or transfers the funds to the authorized lead, as agreed at approval.',
            'Funding is activated and you authorize payment to the lead through your usual channels.',
          ),
        },
      ],
      backing: gated(
        'backing.budget',
        'Every credit is backed by resources your local government made available.',
        null,
      ),
      control: 'Nothing is funded without your approval. Every step is recorded.',
      link: 'See how it works in detail',
    },
    different: {
      title: 'Not a poll.\nNot a fundraiser.',
      body: 'A poll asks and commits to nothing. A fundraiser collects money with no institution behind it.',
      strong: 'Citixen joins what residents decide with what their government commits to.',
    },
    evidence: {
      title: 'Every project ends with evidence.',
      body: 'Before-and-after photos, documents and the story of what changed. Public and permanent.',
      card: {
        status: 'Project completed',
        project: 'Los Álamos Square',
        items: ['24 before-and-after photos', '6 delivery documents', 'Closing story'],
      },
    },
    platform: {
      title: 'Civic Credits are the core. Not the whole story.',
      items: [
        { name: 'Have Your Say', body: 'Verified consultations and open surveys, shared on WhatsApp or with a QR code.' },
        { name: 'Proposals', body: 'Residents propose and back ideas. You see what the city wants, grouped by topic.' },
        { name: 'My City', body: 'The public portal with projects, their progress and their closing evidence.' },
        { name: 'Official communications', body: 'Official notices on every resident’s phone, targeted and auditable.' },
        { name: 'Dashboard and apps', body: 'Management with roles and an audit log. Resident app on Android and iOS.' },
      ],
      link: 'See the platform',
    },
    neighbors: {
      title: 'Is your city already on Citixen?',
      body: 'Find your city, download the app and start taking part. If it is not there yet, you can invite your local government.',
      cta: 'Find my city',
    },
    firstCycle: {
      title: 'Let’s design your city’s first cycle.',
      steps: [
        'A demo built around your local government’s context.',
        'Together we define the rules and the first projects.',
        'We support you through launch and follow-up.',
      ],
      cta: 'Request a demo',
    },
  },
}
