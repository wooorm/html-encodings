'use strict';

/* Dependencies. */
var groups = require('./groups');

/* Expose. */
exports.groups = groups;
exports.list = unwrap();

/* Create a flat list. */
function unwrap() {
  var result = [];
  var key;

  for (key in groups) {
    result = result.concat(groups[key]);
  }

  return result;
}
