import { test } from 'node:test'
import assert from 'node:assert/strict'
import { CLAIMS } from '../content/claims.mjs'
import { gated, resolveContent, claimVisible, showsUnverifiedClaims } from './claims.mjs'

const PENDING = Object.keys(CLAIMS).find((id) => CLAIMS[id].status === 'pending')

test('existe al menos una afirmación pendiente para probar', () => {
  assert.ok(PENDING)
})

test('producción muestra la versión verificada de una afirmación pendiente', () => {
  const value = resolveContent({ text: gated(PENDING, 'completo', 'verificado') }, 'production')
  assert.equal(value.text, 'verificado')
})

test('sin entorno definido se comporta como producción', () => {
  assert.equal(showsUnverifiedClaims(undefined), false)
  assert.equal(resolveContent(gated(PENDING, 'completo', 'verificado'), undefined), 'verificado')
})

test('cualquier entorno que no sea preview o development se comporta como producción', () => {
  for (const env of ['production', 'local-build', 'staging', '']) {
    assert.equal(claimVisible(PENDING, env), false, env)
  }
})

test('preview y desarrollo muestran la versión completa', () => {
  for (const env of ['preview', 'development']) {
    assert.equal(resolveContent(gated(PENDING, 'completo', 'verificado'), env), 'completo')
  }
})

test('una versión verificada null se omite en listas', () => {
  const list = resolveContent(['a', gated(PENDING, 'b', null), 'c'], 'production')
  assert.deepEqual(list, ['a', 'c'])
})

test('una afirmación desconocida rompe en vez de mostrarse', () => {
  assert.throws(() => resolveContent(gated('no.existe', 'x', 'y'), 'production'))
})

test('una afirmación verificada se muestra completa en producción', () => {
  const id = PENDING
  const original = CLAIMS[id].status
  CLAIMS[id].status = 'verified'
  try {
    assert.equal(resolveContent(gated(id, 'completo', 'verificado'), 'production'), 'completo')
  } finally {
    CLAIMS[id].status = original
  }
})

test('los textos condicionados anidados se resuelven completos', () => {
  const value = resolveContent(
    { list: gated(PENDING, [{ t: 'uno' }, { t: 'dos' }], [{ t: 'uno' }]) },
    'production',
  )
  assert.deepEqual(value, { list: [{ t: 'uno' }] })
})
