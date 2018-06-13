# Stringify Object Keys

📝 Get full stringified paths of each key of an object.

## Install

```sh
$ npm install stringify-object-keys
```

## Usage

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
      }
    },
    {
      first: 'Buster',
      last: 'Bluth'
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
$ git clone https://github.com/gabbes/stringify-object-keys
```

## Contribute

Please do!

## License

[MIT](./LICENSE)
