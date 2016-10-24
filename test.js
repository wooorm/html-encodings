'use strict';

/* Dependencies. */
var assert = require('assert');
var test = require('tape');
var htmlEncodings = require('./');

/* Tests. */
test('htmlEncodings.list', function (t) {
  t.ok(
    Array.isArray(htmlEncodings.list),
    'should be an `array`'
  );

  t.doesNotThrow(function () {
    htmlEncodings.list.forEach(function (enc) {
      assert(typeof enc, 'string', '`' + enc + '` should be string');
    });
  }, 'should be all `string`');

  t.end();
});

/* Tests. */
test('htmlEncodings.groups', function (t) {
  t.equal(
    typeof htmlEncodings.groups,
    'object',
    'should be an `object`'
  );

  t.doesNotThrow(function () {
    var groups = htmlEncodings.groups;

    Object.keys(groups).forEach(function (label) {
      groups[label].forEach(function (enc) {
        assert(typeof enc, 'string', '`' + enc + '` should be string');
      });
    });
  }, 'should be all `string`');

  t.end();
});
