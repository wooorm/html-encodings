# html-encodings

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Info on known HTML character encodings labels, from the [spec][].

## Install

[npm][]:

```sh
npm install html-encodings
```

## Use

```js
var inspect = require('util').inspect
var htmlEncodings = require('html-encodings')

console.log(htmlEncodings.list.slice(0, 10))
console.log(htmlEncodings.groups['UTF-8'])
```

Yields:

```js
[ 'utf8',
  'utf-8',
  'unicode-1-1-utf-8',
  '866',
  'cp866',
  'ibm866',
  'csibm866',
  'l2',
  'latin2',
  'iso88592' ]
[ 'utf8', 'utf-8', 'unicode-1-1-utf-8' ]
```

## API

### `htmlEncodings.list`

`Array.<string>` — List of lowercase encodings.

### `htmlEncodings.groups`

`Object.<Array.<string>>` — Map where each key is a group label, and each value
is a list of synonymous lowercase encodings.

## Related

*   [`html-dangerous-encodings`](https://github.com/wooorm/html-dangerous-encodings)
    — List of dangerous HTML character encoding labels

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/html-encodings.svg

[build]: https://travis-ci.org/wooorm/html-encodings

[downloads-badge]: https://img.shields.io/npm/dm/html-encodings.svg

[downloads]: https://www.npmjs.com/package/html-encodings

[size-badge]: https://img.shields.io/bundlephobia/minzip/html-encodings.svg

[size]: https://bundlephobia.com/result?p=html-encodings

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[spec]: https://encoding.spec.whatwg.org/#names-and-labels
