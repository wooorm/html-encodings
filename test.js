/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module html-encodings
 * @fileoverview Test suite for `html-encodings`.
 */

'use strict';

/* eslint-env node */

/*
 * Module dependencies.
 */

var test = require('tape');
var htmlEncodings = require('./index.js');

/*
 * Tests.
 */

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
