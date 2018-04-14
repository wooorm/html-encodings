'use strict'

var fs = require('fs')
var https = require('https')
var bail = require('bail')
var concat = require('concat-stream')
var flatMap = require('lodash.flatmap')

https
  .request('https://encoding.spec.whatwg.org/encodings.json', onrequest)
  .end()

function onrequest(response) {
  response.pipe(concat(onconcat))
}

function onconcat(body) {
  var groups = {}

  JSON.parse(body).forEach(add)

  fs.writeFile('groups.json', JSON.stringify(groups, 0, 2) + '\n', bail)

  function add(group) {
    return flatMap(group.encodings, map)
  }

  function map(entry) {
    groups[entry.name] = entry.labels.concat().sort(sort)
    return entry.labels
  }
}

function sort(a, b) {
  var res = a.length - b.length
  return res === 0 ? a.charCodeAt(0) - b.charCodeAt(0) : res
}
