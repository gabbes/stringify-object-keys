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

const family = {
  lastname: 'Bluth',
  members: [
    { firstname: 'Nichael' }
    { firstname: 'George' }
    { firstname: 'Buster' }
  ]
};

console.log(stringify(family));

/*
  [
    'lastname',
    'members[0].firstname
    'members[1].firstname
    'members[2].firstname
  ]
*/
```

## Contribute

[Contribution guidelines.](./CONTRIBUTING.md)

## Changelog

[See documentation.](./CHANGELOG.md)

## License

[MIT](./LICENSE)
