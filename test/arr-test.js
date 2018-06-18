const isEqual = require('lodash.isequal');
const stringifyObjectKeys = require('../');

module.exports = function objTest() {
  const arr = [
    'George Oscar Bluth, Sr.',
    {
      siblings: [
        'Oscar George Bluth'
      ]
    }
  ];

  const control = [
    '[0]',
    '[1].siblings[0]'
  ];

  const result = stringifyObjectKeys(arr);

  return isEqual(result, control);
};
