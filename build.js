/**
 * @typedef Encoding
 * @property {Array<string>} labels
 * @property {string} name
 *
 * @typedef Label
 * @property {Array<Encoding>} encodings
 * @property {string} heading
 */

import fs from 'node:fs/promises'
import fetch from 'node-fetch'

const response = await fetch('https://encoding.spec.whatwg.org/encodings.json')
const text = await response.text()

/** @type {Array<Label>} */
const lists = JSON.parse(String(text))
/** @type {Record<string, Array<string>>} */
const groups = {}
let index = -1

while (++index < lists.length) {
  const list = lists[index]
  let offset = -1

  while (++offset < list.encodings.length) {
    const entry = list.encodings[offset]
    const labels = [...entry.labels]
    groups[entry.name] = labels.sort((a, b) => {
      const result = a.length - b.length
      return result === 0
        ? (a.codePointAt(0) || 0) - (b.codePointAt(0) || 0)
        : result
    })
  }
}

await fs.writeFile(
  'index.js',
  [
    '/**',
    ' * Map of group labels to lists of synonymous encodings (lowercase).',
    ' *',
    ' * @type {Record<string, Array<string>>}',
    ' */',
    'export const groups = ' + JSON.stringify(groups, null, 2),
    '',
    'const own = {}.hasOwnProperty',
    '',
    '/**',
    ' * List of all encodings (lowercase).',
    ' *',
    ' * @type {Array<string>}',
    ' */',
    'export const list = unwrap()',
    '',
    'function unwrap() {',
    '  /** @type {Array<string>} */',
    '  const result = []',
    '  /** @type {string} */',
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
  ].join('\n')
)
