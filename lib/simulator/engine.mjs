// Motor del simulador de Créditos Cívicos. Funciones puras y deterministas:
// sin red, sin almacenamiento, sin aleatoriedad. La interfaz se monta encima.

export function createState(city) {
  return {
    generalLimit: city.generalLimit,
    allocations: Object.fromEntries(city.projects.map((p) => [p.id, 0])),
  }
}

function findProject(city, projectId) {
  const project = city.projects.find((p) => p.id === projectId)
  if (!project) throw new Error(`Proyecto desconocido: ${projectId}`)
  return project
}

// Límite efectivo: la excepción del proyecto si existe; si no, el límite general.
export function limitFor(city, state, projectId) {
  const project = findProject(city, projectId)
  return project.limitException ?? state.generalLimit
}

export function allocated(state) {
  return Object.values(state.allocations).reduce((sum, v) => sum + v, 0)
}

export function remaining(city, state) {
  return city.wallet - allocated(state)
}

// Máximo asignable a un proyecto: su límite y lo que queda en la billetera.
export function maxFor(city, state, projectId) {
  const others = allocated(state) - state.allocations[projectId]
  return Math.max(0, Math.min(limitFor(city, state, projectId), city.wallet - others))
}

function snap(value, step) {
  return Math.floor(value / step) * step
}

// Devuelve un estado nuevo con la asignación ajustada a los topes.
// `capped` indica qué tope frenó el valor pedido, para que la interfaz lo explique.
export function setAllocation(city, state, projectId, requested) {
  const value = Math.max(0, Number.isFinite(requested) ? requested : 0)
  const limit = limitFor(city, state, projectId)
  const max = maxFor(city, state, projectId)
  const applied = Math.min(snap(value, city.allocationStep), snap(max, city.allocationStep))

  let capped = null
  if (value > applied) capped = max === limit ? 'project_limit' : 'wallet'

  return {
    state: { ...state, allocations: { ...state.allocations, [projectId]: applied } },
    capped,
  }
}

// El municipio cambia el límite general. Las asignaciones que lo superan se recortan;
// los proyectos con excepción conservan la suya.
export function setGeneralLimit(city, state, requested) {
  const { min, max, step } = city.generalLimitRange
  const generalLimit = Math.min(max, Math.max(min, snap(requested, step)))
  const allocations = {}
  for (const p of city.projects) {
    const limit = p.limitException ?? generalLimit
    allocations[p.id] = Math.min(state.allocations[p.id], limit)
  }
  return { ...state, generalLimit, allocations }
}

// Proyección ilustrativa: ¿qué pasaría si todos los vecinos asignaran como el visitante?
// Lo que excede la meta no se asigna: queda disponible para quien lo aportó.
export function project(city, state) {
  return city.projects.map((p) => {
    const contribution = state.allocations[p.id] * city.neighbors
    const gap = Math.max(0, p.goal - p.alreadyAllocated)
    const accepted = Math.min(contribution, gap)
    const total = p.alreadyAllocated + accepted
    return {
      id: p.id,
      goal: p.goal,
      alreadyAllocated: p.alreadyAllocated,
      contribution,
      accepted,
      notAccepted: contribution - accepted,
      total,
      progress: total / p.goal,
      reached: total >= p.goal,
      execution: p.execution,
    }
  })
}

// Promedio por vecino que necesita cada proyecto para llegar a su meta.
export function neededPerNeighbor(city, projectId) {
  const p = findProject(city, projectId)
  return Math.ceil(Math.max(0, p.goal - p.alreadyAllocated) / city.neighbors)
}
