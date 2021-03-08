'use strict'

var assert = require('assert')
var test = require('tape')
var htmlEncodings = require('.')

test('htmlEncodings.list', function (t) {
  t.ok(Array.isArray(htmlEncodings.list), 'should be an `array`')

  t.doesNotThrow(function () {
    var index = -1
    while (++index < htmlEncodings.list) {
      assert(
        typeof htmlEncodings.list[index],
        'string',
        '`' + htmlEncodings.list[index] + '` should be string'
      )
    }
  }, 'should be all `string`')

  t.end()
})

test('htmlEncodings.groups', function (t) {
  t.equal(typeof htmlEncodings.groups, 'object', 'should be an `object`')

  t.doesNotThrow(function () {
    var groups = htmlEncodings.groups
    var label
    var index

    for (label in groups) {
      index = -1
      while (++index < groups[label].length) {
        assert(
          typeof groups[label][index],
          'string',
          '`' + groups[label][index] + '` should be string'
        )
      }
    }
  }, 'should be all `string`')

  t.end()
})
