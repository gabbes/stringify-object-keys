export = function(tree: { [key: string]: any }) {
  var array: string[] = [];

  function walk(
    obj: { [key: string]: any },
    keys: string[],
    path: string
  ): void {
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var branch = path;

      // Determine format and append to branch
      if (Array.isArray(obj)) {
        branch += "[" + key + "]";
      } else if (key.indexOf(".") !== -1) {
        branch += "['" + key + "']";
      } else if (branch) {
        branch += "." + key;
      } else {
        branch += key;
      }

      // If key value is an object with keys, walk it
      if (typeof obj[key] === "object") {
        var objKeys = Object.keys(obj[key]);

        if (objKeys.length) {
          return walk(obj[key], objKeys, branch);
        }
      }

      array.push(branch);
    }
  }

  // If received tree is an object, initialize walk
  if (!!tree && typeof tree === "object") {
    walk(tree, Object.keys(tree), "");
  }

  return array;
};
