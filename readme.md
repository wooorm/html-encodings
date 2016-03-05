# html-encodings [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

List of known HTML character encodings labels, from the [spec][].

## Installation

[npm][]:

```bash
npm install html-encodings
```

**html-encodings** is also available as an AMD, CommonJS, and globals
module, [uncompressed and compressed][releases].

## Usage

Dependencies:

```javascript
var inspect = require('util').inspect;
var htmlEncodings = require('html-encodings');
```

Inspecting the first 20 entries yields:

```js
[ 'unicode-1-1-utf-8',
  'utf-8',
  'utf8',
  '866',
  'cp866',
  'csibm866',
  'ibm866',
  'csisolatin2',
  'iso-8859-2',
  'iso-ir-101',
  'iso8859-2',
  'iso88592',
  'iso_8859-2',
  'iso_8859-2:1987',
  'l2',
  'latin2',
  'csisolatin3',
  'iso-8859-3',
  'iso-ir-109',
  'iso8859-3' ]
```

## API

### `htmlEncodings`

`Array.<string>` — List of lower-case types.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/html-encodings.svg

[build-page]: https://travis-ci.org/wooorm/html-encodings

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/html-encodings.svg

[coverage-page]: https://codecov.io/github/wooorm/html-encodings?branch=master

[npm]: https://docs.npmjs.com/cli/install

[releases]: https://github.com/wooorm/html-encodings/releases

[license]: LICENSE

[author]: http://wooorm.com

[spec]: https://encoding.spec.whatwg.org/#names-and-labels