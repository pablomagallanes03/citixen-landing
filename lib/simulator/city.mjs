// Ciudad argentina ficticia del simulador. Todas las cifras son ilustrativas,
// en pesos argentinos, con 1 Crédito Cívico = $1 (afirmación currency.local).
// No representan un presupuesto municipal real ni promedio.

export const VALLE_NORTE = {
  id: 'valle-norte',
  name: 'Valle Norte',
  currency: 'ARS',

  // Cómo se emiten los créditos del ciclo (modalidad combinada, ilustrativa)
  emission: {
    budgetAllocation: 48_000_000, // partida municipal habilitada para el ciclo
    taxBased: 24_000_000,         // créditos generados por impuestos pagados
    eligibleNeighbors: 2_400,
  },

  // Créditos Cívicos que recibe el visitante en el ciclo
  wallet: 30_000,

  // Límite mensual general por vecino y proyecto; el municipio puede moverlo
  generalLimit: 12_000,
  generalLimitRange: { min: 3_000, max: 18_000, step: 1_000 },

  allocationStep: 500,

  // Proyecciones: el visitante más el resto de los vecinos elegibles
  neighbors: 2_400,

  projects: [
    {
      id: 'plaza',
      goal: 36_000_000,
      alreadyAllocated: 12_000_000,
      limitException: null,
      execution: 'municipal',
    },
    {
      id: 'luces',
      goal: 27_000_000,
      alreadyAllocated: 9_000_000,
      limitException: null,
      execution: 'transfer',
    },
    {
      id: 'biblioteca',
      goal: 9_000_000,
      alreadyAllocated: 2_000_000,
      limitException: 6_000, // excepción definida por el municipio al aprobarlo
      execution: 'transfer',
    },
  ],
}
