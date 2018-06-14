# Stringify Object Keys

[![Build Status](https://travis-ci.org/gabbes/stringify-object-keys.svg?branch=master)](https://travis-ci.org/gabbes/stringify-object-keys)[![npm](https://img.shields.io/npm/v/stringify-object-keys.svg)](https://www.npmjs.com/package/stringify-object-keys)

🌳 Get full stringified branch path for each key of an object.

## Installation

```sh
npm install stringify-object-keys
```

## Sample Usage

```js
const stringifyObjectKeys = require('stringify-object-keys');

const obj = {
  name: {
    first: 'Nichael',
    last: 'Bluth'
  },
  siblings: [
    {
      name: {
        first: 'George',
        last: 'Bluth'
      },
      name: {
        first: 'Buster',
        last: 'Bluth'
      }
    }
  ]
};

console.log(stringifyObjectKeys(obj));
/*
  [
    'name.first',
    'name.last',
    'siblings[0].name.first',
    'siblings[0].name.last',
    'siblings[1].name.first',
    'siblings[1].name.last',
  ]
*/
```

## Development

```sh
git clone https://github.com/gabbes/stringify-object-keys
```

If you wish to contribute your changes to this projects, please [read this](./CONTRIBUTING).

## Contribute

Please do, [but read this first](./CONTRIBUTING)!

## Changelog

[See documentation.](./CHANGELOG)

## License

[MIT](./LICENSE)
