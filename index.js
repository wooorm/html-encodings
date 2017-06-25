'use strict';

var groups = require('./groups');

exports.groups = groups;
exports.list = unwrap();

function unwrap() {
  var result = [];
  var key;

  for (key in groups) {
    result = result.concat(groups[key]);
  }

  return result;
}
