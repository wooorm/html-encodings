'use strict'

var fs = require('fs')
var https = require('https')
var bail = require('bail')
var concat = require('concat-stream')

https
  .request('https://encoding.spec.whatwg.org/encodings.json', onrequest)
  .end()

function onrequest(response) {
  response.pipe(concat(onconcat))
}

function onconcat(body) {
  var lists = JSON.parse(body)
  var groups = {}
  var index = -1
  var offset
  var entry

  while (++index < lists.length) {
    offset = -1

    while (++offset < lists[index].encodings.length) {
      entry = lists[index].encodings[offset]
      groups[entry.name] = entry.labels.concat().sort(sort)
    }
  }

  fs.writeFile('groups.json', JSON.stringify(groups, 0, 2) + '\n', bail)
}

function sort(a, b) {
  var result = a.length - b.length
  return result === 0 ? a.charCodeAt(0) - b.charCodeAt(0) : result
}
