import { gated } from '../lib/claims.mjs'

// Textos del simulador. La experiencia interactiva se integra cuando se valide el
// prototipo; mientras tanto, el Home muestra la escena inicial en versión estática.

export const simulator = {
  es: {
    badge: 'Simulación · ciudad y proyectos ficticios',
    cityLabel: 'Valle Norte, ciudad argentina ficticia',
    title: 'Tenés 30.000 Créditos Cívicos. ¿Dónde los ponés?',
    walletEquivalent: null,
    intro: 'Valle Norte aprobó tres proyectos. Cada uno tiene una meta y un límite mensual por vecino.',
    goal: 'Meta',
    allocated: 'Ya asignado',
    limit: 'Límite por mes',
    limitException: 'Límite especial definido por el municipio',
    credits: 'CC',
    pending: 'La experiencia interactiva se suma acá cuando validemos el prototipo.',
    projects: {
      plaza: { name: 'Plaza Los Álamos', detail: 'Juegos nuevos y sombra', proposedBy: 'Propuesto por la asociación vecinal' },
      luces: { name: 'Luces para la Costanera', detail: '36 luminarias nuevas', proposedBy: 'Propuesto por un vecino' },
      biblioteca: { name: 'Biblioteca abierta los sábados', detail: 'Un año de apertura los fines de semana', proposedBy: 'Propuesto por la biblioteca popular' },
    },
  },
  pt: {
    badge: 'Simulação · cidade e projetos fictícios',
    cityLabel: 'Valle Norte, cidade argentina fictícia',
    title: 'Você tem 30.000 Créditos Cívicos. Onde vai colocá-los?',
    walletEquivalent: null,
    intro: 'Valle Norte aprovou três projetos. Cada um tem uma meta e um limite mensal por morador.',
    goal: 'Meta',
    allocated: 'Já destinado',
    limit: 'Limite por mês',
    limitException: 'Limite especial definido pelo município',
    credits: 'CC',
    pending: 'A experiência interativa entra aqui quando validarmos o protótipo.',
    projects: {
      plaza: { name: 'Praça Los Álamos', detail: 'Brinquedos novos e sombra', proposedBy: 'Proposto pela associação de moradores' },
      luces: { name: 'Luzes para a Costanera', detail: '36 novas luminárias', proposedBy: 'Proposto por um morador' },
      biblioteca: { name: 'Biblioteca aberta aos sábados', detail: 'Um ano de abertura nos fins de semana', proposedBy: 'Proposto pela biblioteca comunitária' },
    },
  },
  en: {
    badge: 'Simulation · fictional city and projects',
    cityLabel: 'Valle Norte, a fictional Argentine city',
    title: 'You have 30,000 Civic Credits. Where do they go?',
    walletEquivalent: null,
    intro: 'Valle Norte approved three projects. Each one has a goal and a monthly limit per resident.',
    goal: 'Goal',
    allocated: 'Allocated so far',
    limit: 'Monthly limit',
    limitException: 'Special limit set by the local government',
    credits: 'CC',
    pending: 'The interactive experience comes in here once the prototype is validated.',
    projects: {
      plaza: { name: 'Los Álamos Square', detail: 'New playground and shade', proposedBy: 'Proposed by the neighborhood association' },
      luces: { name: 'Lights for the Riverside', detail: '36 new streetlights', proposedBy: 'Proposed by a resident' },
      biblioteca: { name: 'Library open on Saturdays', detail: 'A year of weekend opening hours', proposedBy: 'Proposed by the community library' },
    },
  },
}
