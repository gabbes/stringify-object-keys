'use strict';

module.exports = function stringifyObjectKeys(tree) {
  // If not an object, return an empty array
  if (!tree || typeof tree !== 'object') {
    return [];
  }

  var array = [];

  function walk(obj, path) {
    // Loop through each key of recieved object
    Object.keys(obj).forEach(function(key) {
      var branch = path;

      // Determine if key should be an array index or an object key
      if (Array.isArray(obj)) {
        branch += '[' + key + ']';
      } else if (branch) {
        branch += '.' + key;
      } else {
        branch += key;
      }

      // If object key is a object, walk through its keys
      if (typeof obj[key] === 'object') {
        return walk(obj[key], branch);
      }

      return array.push(branch);
    });
  }

  walk(tree, '');

  return array;
};
