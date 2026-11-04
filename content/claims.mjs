// Registro de afirmaciones condicionadas a Créditos Cívicos V2.
//
// Cada afirmación del modelo completo que todavía no está en producción vive acá con
// su estado. Los textos se escriben en content/*.mjs con gated(id, completo, verificado).
//
// Regla de despliegue (lib/claims.mjs):
//  - En producción solo se muestra el texto completo si el estado es "verified".
//    Si no, se muestra el texto verificado de respaldo (o nada, si es null).
//  - En preview y desarrollo se muestran los textos completos, para evaluar el diseño.
//
// Pasar una afirmación a "verified" requiere la aprobación explícita del dueño del
// producto, con la evidencia técnica y funcional de V2 a la vista. Registrar quién y
// cuándo en approvedBy / approvedAt.

export const CLAIMS = {
  'emission.modalities': {
    status: 'pending',
    capability: 'Emisión desde partida municipal, desde impuestos o combinada',
    approvedBy: null,
    approvedAt: null,
  },
  'limits.general': {
    status: 'pending',
    capability: 'Límite mensual general por ciudadano y proyecto, con excepciones por proyecto',
    approvedBy: null,
    approvedAt: null,
  },
  'execution.municipal': {
    status: 'pending',
    capability: 'Ejecución municipal directa o transferencia al beneficiario autorizado',
    approvedBy: null,
    approvedAt: null,
  },
  'currency.local': {
    status: 'pending',
    capability: '1 Crédito Cívico = 1 unidad de moneda local',
    approvedBy: null,
    approvedAt: null,
  },
  'backing.budget': {
    status: 'pending',
    capability: 'Respaldo presupuestario de los créditos emitidos',
    approvedBy: null,
    approvedAt: null,
  },
}

export const CLAIM_STATUSES = ['pending', 'verified']
