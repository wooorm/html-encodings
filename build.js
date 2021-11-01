import fs from 'node:fs'
import https from 'node:https'
import {bail} from 'bail'
import concat from 'concat-stream'

https
  .request('https://encoding.spec.whatwg.org/encodings.json', (response) => {
    response.pipe(
      concat((body) => {
        /** @type {Array<{encodings: Array<{labels: string[], name: string}>, heading: string}>} */
        const lists = JSON.parse(String(body))
        /** @type {Record<string, Array<string>>} */
        const groups = {}
        let index = -1

        while (++index < lists.length) {
          let offset = -1

          while (++offset < lists[index].encodings.length) {
            const entry = lists[index].encodings[offset]
            const labels = [...entry.labels]
            groups[entry.name] = labels.sort((a, b) => {
              const result = a.length - b.length
              return result === 0 ? a.charCodeAt(0) - b.charCodeAt(0) : result
            })
          }
        }

        fs.writeFile(
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
          ].join('\n'),
          bail
        )
      })
    )
  })
  .end()
