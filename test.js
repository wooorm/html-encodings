'use strict'

var assert = require('assert')
var test = require('tape')
var htmlEncodings = require('.')

test('htmlEncodings.list', function (t) {
  t.ok(Array.isArray(htmlEncodings.list), 'should be an `array`')

  t.doesNotThrow(function () {
    htmlEncodings.list.forEach(each)

    function each(enc) {
      assert(typeof enc, 'string', '`' + enc + '` should be string')
    }
  }, 'should be all `string`')

  t.end()
})

test('htmlEncodings.groups', function (t) {
  t.equal(typeof htmlEncodings.groups, 'object', 'should be an `object`')

  t.doesNotThrow(function () {
    var groups = htmlEncodings.groups

    Object.keys(groups).forEach(group)

    function group(label) {
      groups[label].forEach(each)
    }

    function each(enc) {
      assert(typeof enc, 'string', '`' + enc + '` should be string')
    }
  }, 'should be all `string`')

  t.end()
})
