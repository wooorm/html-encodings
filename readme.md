# html-encodings [![Build Status][build-badge]][build-page]

Info on known HTML character encodings labels, from the [spec][].

## Installation

[npm][]:

```bash
npm install html-encodings
```

## Usage

```javascript
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

`Array.<string>` — List of all lower-case encodings.

### `htmlEncodings.groups`

`Object.<Array.<string>>` — Map where each key is a group
label, and each value is a list of synonymous lower-case encodings.

## Related

*   [`html-dangerous-encodings`](https://github.com/wooorm/html-dangerous-encodings)
    — List of dangerous HTML character encoding labels

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/html-encodings.svg

[build-page]: https://travis-ci.org/wooorm/html-encodings

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[spec]: https://encoding.spec.whatwg.org/#names-and-labels
