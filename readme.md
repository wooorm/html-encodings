# html-encodings

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Info on known HTML character encodings labels, from the [spec][].

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install html-encodings
```

## Use

```js
import {list, groups} from 'html-encodings'

console.log(list.slice(0, 10))
console.log(groups['UTF-8'])
```

Yields:

```js
[
  'utf8',
  'utf-8',
  'unicode11utf8',
  'unicode20utf8',
  'x-unicode20utf8',
  'unicode-1-1-utf-8',
  '866',
  'cp866',
  'ibm866',
  'csibm866'
]
[
  'utf8',
  'utf-8',
  'unicode11utf8',
  'unicode20utf8',
  'x-unicode20utf8',
  'unicode-1-1-utf-8'
]
```

## API

This package exports the following identifiers: `list` and `groups`.
There is no default export.

### `list`

`string[]` — List of lowercase encodings.

### `groups`

`Object.<string, string[]>` — Map where each key is a group label, and each
value is a list of synonymous lowercase encodings.

## Related

*   [`html-dangerous-encodings`](https://github.com/wooorm/html-dangerous-encodings)
    — List of dangerous HTML character encoding labels

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://github.com/wooorm/html-encodings/workflows/main/badge.svg

[build]: https://github.com/wooorm/html-encodings/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/html-encodings.svg

[coverage]: https://codecov.io/github/wooorm/html-encodings

[downloads-badge]: https://img.shields.io/npm/dm/html-encodings.svg

[downloads]: https://www.npmjs.com/package/html-encodings

[size-badge]: https://img.shields.io/bundlephobia/minzip/html-encodings.svg

[size]: https://bundlephobia.com/result?p=html-encodings

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[spec]: https://encoding.spec.whatwg.org/#names-and-labels
