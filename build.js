'use strict';

var fs = require('fs');
var path = require('path');
var https = require('https');
var bail = require('bail');
var concat = require('concat-stream');
var flatMap = require('lodash.flatmap');

https
  .request('https://encoding.spec.whatwg.org/encodings.json', function (response) {
    response.pipe(concat(function (body) {
      var groups = {};

      JSON.parse(body).forEach(function (group) {
        return flatMap(group.encodings, function (entry) {
          groups[entry.name] = entry.labels.concat().sort(sort);
          return entry.labels;
        });
      });

      fs.writeFile(path.join(__dirname, 'groups.json'), JSON.stringify(groups, 0, 2) + '\n', bail);
    }));
  })
  .end();

function sort(a, b) {
  var res = a.length - b.length;
  return res === 0 ? a.charCodeAt(0) - b.charCodeAt(0) : res;
}
