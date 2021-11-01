import fs from 'node:fs'
import https from 'node:https'
import {bail} from 'bail'
import concat from 'concat-stream'

https
  .request('https://encoding.spec.whatwg.org/encodings.json', onrequest)
  .end()

function onrequest(response) {
  response.pipe(concat(onconcat))
}

function onconcat(body) {
  const lists = JSON.parse(body)
  const groups = {}
  let index = -1
  let offset
  let entry

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
      'export const groups = ' + JSON.stringify(groups, null, 2),
      '',
      'const own = {}.hasOwnProperty',
      '',
      '/** @type {string[]} */',
      'export const list = unwrap()',
      '',
      'function unwrap() {',
      '  const result = []',
      '  let key',
      '',
      '  for (key in groups) {',
      '    if (own.call(groups, key)) {',
      '      result.push(...groups[key])',
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
  const result = a.length - b.length
  return result === 0 ? a.charCodeAt(0) - b.charCodeAt(0) : result
}
