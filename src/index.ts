export = function(tree: any[] | { [key: string]: any }) {
  const array: string[] = [];

  function walk(
    obj: { [key: string]: any },
    keys: string[],
    previous: string
  ): void {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      let branch = previous;

      // Determine format and append to branch
      branch += Array.isArray(obj)
        ? "[" + key + "]"
        : key.indexOf(".") !== -1
        ? "['" + key + "']"
        : branch
        ? "." + key
        : key;

      // If key value is an object with keys, walk it
      if (!!obj[key] && typeof obj[key] === "object") {
        const objKeys = Object.keys(obj[key]);

        if (objKeys.length) {
          walk(obj[key], objKeys, branch);
          continue;
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
