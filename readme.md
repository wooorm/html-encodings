# html-encodings

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Info on HTML character encodings.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`list`](#list)
    *   [`groups`](#groups)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package contains info on HTML character encoding labels.
These are defined by the [Encoding spec][spec].

## When should I use this?

Maybe when you’re writing an HTML parser, minifier, or formatter, otherwise
probably never!

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install html-encodings
```

In Deno with [`esm.sh`][esmsh]:

```js
import {list, groups} from 'https://esm.sh/html-encodings@3'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {list, groups} from 'https://esm.sh/html-encodings@3?bundle'
</script>
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

This package exports the identifier `list` and `groups`.
There is no default export.

### `list`

List of all encodings (lowercase) (`Array<string>`).

### `groups`

Map of group labels to lists of synonymous (lowercase) encodings
(`Record<string, Array<string>>`).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/html-dangerous-encodings`](https://github.com/wooorm/html-dangerous-encodings)
    — list of dangerous HTML character encoding labels

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

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

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[spec]: https://encoding.spec.whatwg.org/#names-and-labels
