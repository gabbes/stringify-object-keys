'use strict';

module.exports = function(tree) {
  var array = [];

  function walk(obj, path) {
    var keys = Object.keys(obj);

    // Loop through each key and explore value
    for (var i = 0; i < keys.length; i++) {
      explore(obj, keys[i], path);
    }
  }

  function explore(obj, key, path) {
    var branch = path;

    // Determine format and append to branch
    if (Array.isArray(obj)) {
      branch += '[' + key + ']';
    } else if (key.indexOf('.') !== -1) {
      branch += '[\'' + key + '\']';
    } else if (branch) {
      branch += '.' + key;
    } else {
      branch += key;
    }

    // If key value is an object, walk it
    if (typeof obj[key] === 'object') {
      return walk(obj[key], branch);
    }

    return array.push(branch);
  }

  // If received tree is an object, initialize walk
  if (!!tree && typeof tree === 'object') {
    walk(tree, '');
  }

  return array;
};
