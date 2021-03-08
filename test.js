import assert from 'assert'
import test from 'tape'
import {list, groups} from './index.js'

var own = {}.hasOwnProperty

test('list', function (t) {
  t.ok(Array.isArray(list), 'should be an `array`')

  t.doesNotThrow(function () {
    var index = -1
    while (++index < list.length) {
      assert.equal(
        typeof list[index],
        'string',
        '`' + list[index] + '` should be string'
      )
    }
  }, 'should be all `string`')

  t.end()
})

test('groups', function (t) {
  t.equal(typeof groups, 'object', 'should be an `object`')

  t.doesNotThrow(function () {
    var label
    var index

    for (label in groups) {
      if (own.call(groups, label)) {
        index = -1
        while (++index < groups[label].length) {
          assert.equal(
            typeof groups[label][index],
            'string',
            '`' + groups[label][index] + '` should be string'
          )
        }
      }
    }
  }, 'should be all `string`')

  t.end()
})
