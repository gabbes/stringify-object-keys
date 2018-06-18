# Stringify Object Keys [![Build Status](https://travis-ci.org/gabbes/stringify-object-keys.svg?branch=master)](https://travis-ci.org/gabbes/stringify-object-keys) [![npm](https://img.shields.io/npm/v/stringify-object-keys.svg)](https://www.npmjs.com/package/stringify-object-keys)

> Get stringified keys from an object or array.

Recieves an object or array and returns an array with all keys/indices stringified.

## Install

```sh
npm install --save stringify-object-keys
```

## Usage

```js
const stringify = require('stringify-object-keys');

const person = {
  name: 'Nichael Bluth',
  born: {
    day: 14,
    month: 12,
    year: 1967
  },
  siblings: ['George', 'Lidsay', 'Buster']
};

const keys = stringify(person);

/*
  keys => [
    'name',
    'born.day',
    'born.month',
    'born.year',
    'siblings[0]',
    'siblings[1]',
    'siblings[2]',
  ]
*/
```

## Contribute

[Contribution guidelines.](./CONTRIBUTING.md)!

## Changelog

[See documentation.](./CHANGELOG.md)

## License

[MIT](./LICENSE)
