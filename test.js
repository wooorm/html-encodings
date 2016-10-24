'use strict';

/* Dependencies. */
var test = require('tape');
var htmlEncodings = require('./');

/* Tests. */
test('htmlEncodings', function (t) {
  t.ok(
    Array.isArray(htmlEncodings),
    'should be an `array`'
  );

  htmlEncodings.forEach(function (encoding) {
    t.equal(
        typeof encoding,
        'string',
        '`' + encoding + '` should be a string'
    );
  });

  t.end();
});
