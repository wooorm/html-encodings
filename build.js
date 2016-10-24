'use strict';

/* Dependencies. */
var fs = require('fs');
var path = require('path');
var https = require('https');
var concat = require('concat-stream');
var flatMap = require('lodash.flatmap');

/* Constants. */
var INPUT = 'https://encoding.spec.whatwg.org/encodings.json';
var OUTPUT = path.join(__dirname, 'index.json');

/* Core. */
https
  .request(INPUT, function (response) {
    response.pipe(concat(function (body) {
      var data = flatMap(JSON.parse(body), function (group) {
        return flatMap(group.encodings, function (entry) {
          return entry.labels;
        });
      });

      fs.writeFile(OUTPUT, JSON.stringify(data, 0, 2) + '\n');
    }));
  })
  .end();
