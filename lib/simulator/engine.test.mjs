import { test } from 'node:test'
import assert from 'node:assert/strict'
import { VALLE_NORTE as city } from './city.mjs'
import {
  createState, limitFor, maxFor, remaining, setAllocation, setGeneralLimit, project, neededPerNeighbor,
} from './engine.mjs'

const alloc = (state, id, value) => setAllocation(city, state, id, value)

test('el estado inicial no tiene asignaciones y usa el límite general', () => {
  const s = createState(city)
  assert.equal(remaining(city, s), city.wallet)
  assert.equal(limitFor(city, s, 'plaza'), city.generalLimit)
})

test('la excepción del proyecto reemplaza al límite general', () => {
  const s = createState(city)
  assert.equal(limitFor(city, s, 'biblioteca'), 6_000)
})

test('una asignación no supera el límite del proyecto y lo informa', () => {
  const { state, capped } = alloc(createState(city), 'plaza', 20_000)
  assert.equal(state.allocations.plaza, 12_000)
  assert.equal(capped, 'project_limit')
})

test('una asignación no supera lo que queda en la billetera y lo informa', () => {
  let s = createState(city)
  s = setGeneralLimit(city, s, 18_000)
  s = alloc(s, 'plaza', 18_000).state
  const { state, capped } = alloc(s, 'luces', 18_000)
  assert.equal(state.allocations.luces, 12_000)
  assert.equal(capped, 'wallet')
  assert.equal(remaining(city, state), 0)
})

test('las asignaciones se ajustan al paso y nunca son negativas', () => {
  const s = createState(city)
  assert.equal(alloc(s, 'plaza', 1_234).state.allocations.plaza, 1_000)
  assert.equal(alloc(s, 'plaza', -500).state.allocations.plaza, 0)
  assert.equal(alloc(s, 'plaza', Number.NaN).state.allocations.plaza, 0)
})

test('los tres límites suman exactamente la billetera: para usarla toda hay que repartir', () => {
  const s = createState(city)
  const total = city.projects.reduce((sum, p) => sum + limitFor(city, s, p.id), 0)
  assert.equal(total, city.wallet)
})

test('bajar el límite general recorta asignaciones pero respeta las excepciones', () => {
  let s = createState(city)
  s = alloc(s, 'plaza', 12_000).state
  s = alloc(s, 'biblioteca', 6_000).state
  s = setGeneralLimit(city, s, 4_000)
  assert.equal(s.allocations.plaza, 4_000)
  assert.equal(s.allocations.biblioteca, 6_000)
})

test('el límite general queda dentro del rango permitido', () => {
  const s = createState(city)
  assert.equal(setGeneralLimit(city, s, 999_999).generalLimit, city.generalLimitRange.max)
  assert.equal(setGeneralLimit(city, s, 0).generalLimit, city.generalLimitRange.min)
})

test('maxFor nunca es negativo', () => {
  let s = createState(city)
  s = setGeneralLimit(city, s, 18_000)
  s = alloc(s, 'plaza', 18_000).state
  s = alloc(s, 'luces', 12_000).state
  assert.equal(maxFor(city, s, 'biblioteca'), 0)
})

test('la proyección no supera la meta y separa lo que no se acepta', () => {
  let s = createState(city)
  s = alloc(s, 'biblioteca', 6_000).state
  const bib = project(city, s).find((p) => p.id === 'biblioteca')
  assert.equal(bib.total, bib.goal)
  assert.equal(bib.reached, true)
  assert.equal(bib.notAccepted, 6_000 * city.neighbors - (bib.goal - bib.alreadyAllocated))
})

test('sin asignaciones ningún proyecto llega a la meta', () => {
  assert.ok(project(city, createState(city)).every((p) => !p.reached))
})

test('repartiendo bien se pueden alcanzar las tres metas', () => {
  let s = createState(city)
  for (const p of city.projects) s = alloc(s, p.id, limitFor(city, s, p.id)).state
  assert.ok(project(city, s).every((p) => p.reached))
})

test('el resultado depende de cómo se reparte', () => {
  let s = createState(city)
  s = alloc(s, 'plaza', 12_000).state
  s = alloc(s, 'luces', 12_000).state
  s = alloc(s, 'biblioteca', 2_000).state
  const result = Object.fromEntries(project(city, s).map((p) => [p.id, p.reached]))
  assert.deepEqual(result, { plaza: true, luces: true, biblioteca: false })
})

test('cada proyecto es alcanzable dentro de su límite', () => {
  const s = createState(city)
  for (const p of city.projects) {
    assert.ok(neededPerNeighbor(city, p.id) <= limitFor(city, s, p.id), p.id)
  }
})

test('las cifras de emisión de la ciudad son coherentes con la billetera', () => {
  const { budgetAllocation, taxBased, eligibleNeighbors } = city.emission
  assert.equal((budgetAllocation + taxBased) / eligibleNeighbors, city.wallet)
})
