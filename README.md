# Stringify Object Keys [![npm](https://img.shields.io/npm/v/stringify-object-keys.svg)](https://www.npmjs.com/package/stringify-object-keys)

> Get stringified keys from an object or array.

Recieves an object or array and returns an array with all keys/indices stringified.

Key strings are formatted in syntax compatible with popular framework methods, such as lodash.get, even supports keys with dots in their names!

## Install

```sh
npm install --save stringify-object-keys
```

## Usage

```js
const stringify = require("stringify-object-keys");

const family = {
  lastname: "Bluth",
  members: [
    {
      firstname: "Nichael",
      nicknames: []
    },
    {
      "first.name": "George",
      nicknames: ["GOB", "Getaway"]
    }
  ]
};

console.log(stringify(family));
```

This would result in the following output:

```js
[
  "lastname",
  "members[0].firstname",
  "members[0].nicknames",
  "members[1]['first.name']",
  "members[1].nicknames[0]"
  "members[1].nicknames[1]"
]
```

## Changelog

[See documentation.](./CHANGELOG.md)

## License

[MIT](./LICENSE)
