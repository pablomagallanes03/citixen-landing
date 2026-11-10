import { gated } from '../lib/claims.mjs'

export const how = {
  es: {
    meta: {
      title: 'Cómo funcionan los Créditos Cívicos | Citixen',
      description: 'Reglas públicas: el municipio habilita los proyectos y define cómo se generan los créditos, los vecinos deciden y lo decidido se cumple con pruebas.',
    },
    hero: {
      eyebrow: 'Créditos Cívicos',
      title: 'Reglas simples. Decisiones con consecuencia.',
      lead: 'El municipio habilita, los vecinos deciden y lo decidido se cumple. Así funciona cada parte.',
    },
    sections: [
      {
        piece: 'government',
        title: 'Cómo se generan los créditos',
        body: 'Cada municipio elige la modalidad que se ajusta a su realidad.',
        list: gated(
          'emission.modalities',
          [
            { term: 'Partida municipal', text: 'El municipio habilita una partida para el ciclo y la distribuye en créditos entre los vecinos habilitados.' },
            { term: 'Impuestos pagados', text: 'Una parte de los impuestos municipales que paga cada vecino genera créditos, según el porcentaje que el municipio fija para cada tributo.' },
            { term: 'Combinada', text: 'Las dos modalidades a la vez, con sus propias reglas.' },
          ],
          [
            { term: 'Impuestos pagados', text: 'Una parte de los impuestos municipales que paga cada vecino genera créditos, según el porcentaje que el municipio fija para cada tributo.' },
          ],
        ),
        note: gated(
          'currency.usd',
          '1 Crédito Cívico equivale a 1 dólar estadounidense. El panel lo muestra en moneda local con el tipo de cambio vigente.',
          null,
        ),
      },
      {
        piece: 'government',
        title: 'Quién propone y quién aprueba',
        body: 'Vecinos y organizaciones proponen proyectos. El municipio evalúa su viabilidad técnica, legal y presupuestaria antes de habilitarlos. Solo los proyectos aprobados reciben créditos.',
        list: [
          { term: 'Respaldo municipal', text: 'Si un proyecto necesita un terreno, un permiso o materiales, el municipio se compromete a aportarlos al aprobarlo.' },
        ],
      },
      {
        piece: 'citizen',
        title: 'Cómo se reparte el peso',
        body: gated(
          'limits.general',
          'El municipio fija un límite mensual general por vecino y proyecto, y puede definir excepciones para proyectos puntuales. Los límites se renuevan cada mes.',
          'El municipio fija un límite por vecino para cada proyecto, que puede renovarse cada mes.',
        ),
        list: [
          { term: 'Tu ciudad, tu decisión', text: 'Cada vecino apoya proyectos de su propia ciudad.' },
          { term: 'Aportes anónimos', text: 'Se muestran totales y cantidad de vecinos, nunca nombres ni montos individuales.' },
        ],
      },
      {
        piece: 'fulfilment',
        title: 'Qué pasa al llegar a la meta',
        body: gated(
          'execution.municipal',
          'Al aprobar el proyecto, el municipio define cómo se ejecuta: lo hace directamente o transfiere los fondos al responsable autorizado. Al llegar a la meta, se activa ese procedimiento.',
          'Al llegar a la meta se activa el financiamiento. El municipio autoriza el pago al responsable del proyecto por sus canales habituales y lo registra en la plataforma.',
        ),
        list: [
          { term: 'Si un proyecto se da de baja', text: 'Antes de financiarse, los créditos vuelven completos a cada vecino que los asignó.' },
        ],
      },
      {
        piece: 'fulfilment',
        title: 'Cómo se prueba',
        body: 'El responsable cierra el proyecto con fotos, documentos y la historia de lo que cambió. El municipio verifica el cierre, y todo queda público y permanente.',
      },
      {
        piece: 'project',
        title: 'Respaldo y trazabilidad',
        body: gated(
          'backing.budget',
          'Los créditos emitidos tienen respaldo en recursos que el municipio habilitó. Cada emisión, asignación y pago queda registrado y auditado.',
          'Cada asignación y cada pago quedan registrados. Toda acción del municipio deja constancia de autor, fecha y motivo.',
        ),
      },
    ],
    faq: {
      title: 'Preguntas de gobiernos',
      items: [
        {
          q: '¿Los Créditos Cívicos son dinero?',
          a: 'No. No se retiran, no se venden y no son un activo financiero. Representan la capacidad de decidir sobre recursos que el municipio habilitó.',
        },
        {
          q: '¿Quién decide qué proyectos pueden recibir créditos?',
          a: 'El municipio. Vecinos y organizaciones proponen, y solo los proyectos aprobados reciben créditos.',
        },
        {
          q: '¿El municipio pierde control de sus recursos?',
          a: gated(
            'emission.modalities',
            'No. Define cuánto habilita y cómo se generan los créditos, aprueba cada proyecto y fija los límites. Los vecinos deciden dentro de ese marco.',
            'No. Define qué impuestos generan créditos y en qué porcentaje, aprueba cada proyecto y fija los límites. Los vecinos deciden dentro de ese marco.',
          ),
        },
        {
          q: '¿Qué pasa si un proyecto no llega a su meta?',
          a: 'Sigue abierto para recibir créditos. Si se da de baja, los créditos vuelven completos a quienes los asignaron.',
        },
        {
          q: '¿Se puede empezar sin Créditos Cívicos?',
          a: 'Sí. Opiná, Propuestas, Mi Ciudad y la comunicación institucional funcionan por sí solas, y los Créditos Cívicos se suman cuando el municipio esté listo.',
        },
        {
          q: '¿Hace falta cambiar alguna norma?',
          a: 'Depende del marco de cada municipio. En el acompañamiento del primer ciclo revisamos juntos qué hace falta para ponerlo en marcha.',
        },
      ],
    },
    cta: {
      title: 'Diseñemos el primer ciclo de tu ciudad.',
      button: 'Pedir una demostración',
    },
  },

  pt: {
    meta: {
      title: 'Como funcionam os Créditos Cívicos | Citixen',
      description: 'Regras públicas: o município habilita os projetos e define como os créditos são gerados, os moradores decidem e o que foi decidido é cumprido com provas.',
    },
    hero: {
      eyebrow: 'Créditos Cívicos',
      title: 'Regras simples. Decisões com consequência.',
      lead: 'O município habilita, os moradores decidem e o que foi decidido é cumprido. Veja como funciona cada parte.',
    },
    sections: [
      {
        piece: 'government',
        title: 'Como os créditos são gerados',
        body: 'Cada município escolhe a modalidade que se ajusta à sua realidade.',
        list: gated(
          'emission.modalities',
          [
            { term: 'Dotação municipal', text: 'O município habilita uma dotação para o ciclo e a distribui em créditos entre os moradores habilitados.' },
            { term: 'Impostos pagos', text: 'Uma parte dos impostos municipais pagos por cada morador gera créditos, conforme a porcentagem que o município define para cada tributo.' },
            { term: 'Combinada', text: 'As duas modalidades ao mesmo tempo, cada uma com suas regras.' },
          ],
          [
            { term: 'Impostos pagos', text: 'Uma parte dos impostos municipais pagos por cada morador gera créditos, conforme a porcentagem que o município define para cada tributo.' },
          ],
        ),
        note: gated(
          'currency.usd',
          '1 Crédito Cívico equivale a 1 dólar americano. O painel mostra o valor em moeda local, com a taxa de câmbio vigente.',
          null,
        ),
      },
      {
        piece: 'government',
        title: 'Quem propõe e quem aprova',
        body: 'Moradores e organizações propõem projetos. O município avalia a viabilidade técnica, legal e orçamentária antes de habilitá-los. Só os projetos aprovados recebem créditos.',
        list: [
          { term: 'Apoio municipal', text: 'Se um projeto precisa de um terreno, de uma licença ou de materiais, o município se compromete a fornecê-los ao aprová-lo.' },
        ],
      },
      {
        piece: 'citizen',
        title: 'Como o peso é distribuído',
        body: gated(
          'limits.general',
          'O município define um limite mensal geral por morador e projeto, e pode criar exceções para projetos específicos. Os limites são renovados todo mês.',
          'O município define um limite por morador para cada projeto, que pode ser renovado todo mês.',
        ),
        list: [
          { term: 'Sua cidade, sua decisão', text: 'Cada morador apoia projetos da sua própria cidade.' },
          { term: 'Contribuições anônimas', text: 'São exibidos os totais e a quantidade de moradores, nunca nomes nem valores individuais.' },
        ],
      },
      {
        piece: 'fulfilment',
        title: 'O que acontece ao atingir a meta',
        body: gated(
          'execution.municipal',
          'Ao aprovar o projeto, o município define como ele será executado: diretamente ou com a transferência dos recursos ao responsável autorizado. Ao atingir a meta, esse procedimento é ativado.',
          'Ao atingir a meta, o financiamento é ativado. O município autoriza o pagamento ao responsável pelo projeto pelos seus canais habituais e o registra na plataforma.',
        ),
        list: [
          { term: 'Se um projeto for cancelado', text: 'Antes de ser financiado, os créditos voltam integralmente para cada morador que os destinou.' },
        ],
      },
      {
        piece: 'fulfilment',
        title: 'Como se comprova',
        body: 'O responsável encerra o projeto com fotos, documentos e a história do que mudou. O município verifica o encerramento, e tudo fica público e permanente.',
      },
      {
        piece: 'project',
        title: 'Respaldo e rastreabilidade',
        body: gated(
          'backing.budget',
          'Os créditos emitidos têm respaldo em recursos que o município habilitou. Cada emissão, destinação e pagamento fica registrado e auditado.',
          'Cada destinação e cada pagamento ficam registrados. Toda ação do município deixa registro de autor, data e motivo.',
        ),
      },
    ],
    faq: {
      title: 'Perguntas de governos',
      items: [
        {
          q: 'Os Créditos Cívicos são dinheiro?',
          a: 'Não. Não podem ser sacados nem vendidos e não são um ativo financeiro. Representam a capacidade de decidir sobre recursos que o município habilitou.',
        },
        {
          q: 'Quem decide quais projetos podem receber créditos?',
          a: 'O município. Moradores e organizações propõem, e só os projetos aprovados recebem créditos.',
        },
        {
          q: 'O município perde o controle dos seus recursos?',
          a: gated(
            'emission.modalities',
            'Não. Define quanto habilita e como os créditos são gerados, aprova cada projeto e define os limites. Os moradores decidem dentro desse marco.',
            'Não. Define quais impostos geram créditos e em que porcentagem, aprova cada projeto e define os limites. Os moradores decidem dentro desse marco.',
          ),
        },
        {
          q: 'O que acontece se um projeto não atingir a meta?',
          a: 'Ele continua aberto para receber créditos. Se for cancelado, os créditos voltam integralmente para quem os destinou.',
        },
        {
          q: 'Dá para começar sem os Créditos Cívicos?',
          a: 'Sim. Opine, Propostas, Minha Cidade e a comunicação institucional funcionam sozinhos, e os Créditos Cívicos entram quando o município estiver pronto.',
        },
        {
          q: 'É preciso mudar alguma norma?',
          a: 'Depende do marco de cada município. No acompanhamento do primeiro ciclo, avaliamos juntos o que é necessário para começar.',
        },
      ],
    },
    cta: {
      title: 'Vamos desenhar o primeiro ciclo da sua cidade.',
      button: 'Solicitar uma demonstração',
    },
  },

  en: {
    meta: {
      title: 'How Civic Credits work | Citixen',
      description: 'Public rules: the local government enables projects and sets how credits are generated, residents decide, and what is decided gets done, with evidence.',
    },
    hero: {
      eyebrow: 'Civic Credits',
      title: 'Simple rules. Decisions with consequences.',
      lead: 'The local government enables, residents decide, and what is decided gets done. Here is how each part works.',
    },
    sections: [
      {
        piece: 'government',
        title: 'How credits are generated',
        body: 'Each local government chooses the model that fits its reality.',
        list: gated(
          'emission.modalities',
          [
            { term: 'Budget allocation', text: 'The local government enables an allocation for the cycle and distributes it as credits among eligible residents.' },
            { term: 'Taxes paid', text: 'Part of the local taxes each resident pays generates credits, at the percentage the local government sets for each tax.' },
            { term: 'Combined', text: 'Both models at once, each with its own rules.' },
          ],
          [
            { term: 'Taxes paid', text: 'Part of the local taxes each resident pays generates credits, at the percentage the local government sets for each tax.' },
          ],
        ),
        note: gated(
          'currency.usd',
          '1 Civic Credit equals 1 US dollar. The dashboard shows it in local currency at the current exchange rate.',
          null,
        ),
      },
      {
        piece: 'government',
        title: 'Who proposes and who approves',
        body: 'Residents and organizations propose projects. The local government reviews their technical, legal and budget feasibility before enabling them. Only approved projects receive credits.',
        list: [
          { term: 'Municipal backing', text: 'If a project needs land, a permit or materials, the local government commits to providing them when it approves the project.' },
        ],
      },
      {
        piece: 'citizen',
        title: 'How influence is spread',
        body: gated(
          'limits.general',
          'The local government sets a general monthly limit per resident and project, and can define exceptions for specific projects. Limits renew every month.',
          'The local government sets a per-resident limit for each project, which can renew every month.',
        ),
        list: [
          { term: 'Your city, your decision', text: 'Each resident supports projects in their own city.' },
          { term: 'Anonymous contributions', text: 'Totals and the number of residents are shown, never names or individual amounts.' },
        ],
      },
      {
        piece: 'fulfilment',
        title: 'What happens at the goal',
        body: gated(
          'execution.municipal',
          'When it approves a project, the local government decides how it will be carried out: directly, or by transferring the funds to the authorized lead. Reaching the goal triggers that procedure.',
          'Reaching the goal activates funding. The local government authorizes payment to the project lead through its usual channels and records it on the platform.',
        ),
        list: [
          { term: 'If a project is withdrawn', text: 'Before it is funded, credits return in full to every resident who allocated them.' },
        ],
      },
      {
        piece: 'fulfilment',
        title: 'How it is proven',
        body: 'The lead closes the project with photos, documents and the story of what changed. The local government verifies the closing, and everything stays public and permanent.',
      },
      {
        piece: 'project',
        title: 'Backing and traceability',
        body: gated(
          'backing.budget',
          'Issued credits are backed by resources the local government made available. Every issuance, allocation and payment is recorded and audited.',
          'Every allocation and every payment is recorded. Every action by the local government leaves a record of who, when and why.',
        ),
      },
    ],
    faq: {
      title: 'Questions from governments',
      items: [
        {
          q: 'Are Civic Credits money?',
          a: 'No. They cannot be withdrawn or sold, and they are not a financial asset. They represent the ability to decide on resources the local government made available.',
        },
        {
          q: 'Who decides which projects can receive credits?',
          a: 'The local government. Residents and organizations propose, and only approved projects receive credits.',
        },
        {
          q: 'Does the local government lose control of its resources?',
          a: gated(
            'emission.modalities',
            'No. It decides how much to enable and how credits are generated, approves every project and sets the limits. Residents decide within that framework.',
            'No. It decides which taxes generate credits and at what percentage, approves every project and sets the limits. Residents decide within that framework.',
          ),
        },
        {
          q: 'What if a project does not reach its goal?',
          a: 'It stays open to receive credits. If it is withdrawn, credits return in full to the residents who allocated them.',
        },
        {
          q: 'Can we start without Civic Credits?',
          a: 'Yes. Have Your Say, Proposals, My City and official communications work on their own, and Civic Credits can be added when the local government is ready.',
        },
        {
          q: 'Do we need to change any regulations?',
          a: 'It depends on each local government’s framework. During first-cycle support we review together what is needed to get started.',
        },
      ],
    },
    cta: {
      title: 'Let’s design your city’s first cycle.',
      button: 'Request a demo',
    },
  },
}
