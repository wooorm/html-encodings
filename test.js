import assert from 'node:assert/strict'
import test from 'node:test'
import {list, groups} from './index.js'

const own = {}.hasOwnProperty

test('list', function () {
  assert.ok(Array.isArray(list), 'should be an `array`')

  let index = -1
  while (++index < list.length) {
    assert.equal(
      typeof list[index],
      'string',
      '`' + list[index] + '` should be string'
    )
  }
})

test('groups', function () {
  assert.equal(typeof groups, 'object', 'should be an `object`')

  /** @type {string} */
  let label

  for (label in groups) {
    if (own.call(groups, label)) {
      let index = -1
      while (++index < groups[label].length) {
        assert.equal(
          typeof groups[label][index],
          'string',
          '`' + groups[label][index] + '` should be string'
        )
      }
    }
  }
})
