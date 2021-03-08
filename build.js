import fs from 'fs'
import https from 'https'
import bail from 'bail'
import concat from 'concat-stream'

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

  fs.writeFile(
    'index.js',
    [
      'export var groups = ' + JSON.stringify(groups, null, 2),
      '',
      'var own = {}.hasOwnProperty',
      '',
      'export var list = unwrap()',
      '',
      'function unwrap() {',
      '  var result = []',
      '  var key',
      '',
      '  for (key in groups) {',
      '    if (own.call(groups, key)) {',
      '      result = result.concat(groups[key])',
      '    }',
      '  }',
      '',
      '  return result',
      '}',
      ''
    ].join('\n'),
    bail
  )
}

function sort(a, b) {
  var result = a.length - b.length
  return result === 0 ? a.charCodeAt(0) - b.charCodeAt(0) : result
}
