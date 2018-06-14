'use strict';

module.exports = function stringifyObjectKeys(tree) {
  var array = [];

  function walk(obj, path) {
    Object.keys(obj).forEach(function(key) {
      var branch = path;

      if (Array.isArray(obj)) {
        branch += `[${key}]`;
      } else if (branch) {
        branch += `.${key}`;
      } else {
        branch += key;
      }

      if (typeof obj[key] === 'object') {
        return walk(obj[key], branch);
      }

      return array.push(branch);
    });
  }

  walk(tree, '');

  return array;
}
