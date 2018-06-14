const isEqual = require('lodash.isequal');
const stringifyObjectKeys = require('../');

module.exports = function stringTest() {
  const result = stringifyObjectKeys('no touching!');

  return isEqual(result, []);
};
