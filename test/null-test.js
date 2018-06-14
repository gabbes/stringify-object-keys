const isEqual = require('lodash.isequal');
const stringifyObjectKeys = require('../');

module.exports = function nullTest() {
  const result = stringifyObjectKeys(null);

  return isEqual(result, []);
};
