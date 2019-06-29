const assert = require("assert");
const _get = require("lodash.get");
const stringify = require("./dist");

describe("stringify-object-keys", () => {
  it("handles invalid parameter", () => {
    assert.deepEqual(stringify(), []);
    assert.deepEqual(stringify({}), []);
    assert.deepEqual(stringify([]), []);
    assert.deepEqual(stringify(undefined), []);
    assert.deepEqual(stringify(null), []);
    assert.deepEqual(stringify(false), []);
    assert.deepEqual(stringify(3.14), []);
    assert.deepEqual(stringify("string"), []);
    assert.deepEqual(stringify(Symbol()), []);
    assert.deepEqual(stringify(function() {}), []);
  });

  describe("object parameter", () => {
    it("handles objects", () => {
      const obj = { a: "a", b: { c: "c", d: { e: { f: "f" } } }, g: "g" };
      const expected = ["a", "b.c", "b.d.e.f", "g"];

      assert.deepEqual(stringify(obj), expected);
    });

    it("handles object keys with dots", () => {
      const obj = { a: { "b.b": { c: "c" } } };
      const expected = ["a['b.b'].c"];

      assert.deepEqual(stringify(obj), expected);
    });

    it("handles empty objects", () => {
      const obj = [1, {}, 2, { a: {} }, 4];
      const expected = ["[0]", "[1]", "[2]", "[3].a", "[4]"];

      assert.deepEqual(stringify(obj), expected);
    });

    it("handles null or undefined values", () => {
      const obj = { a: undefined, b: { c: null }, d: "d" };
      const expected = ["a", "b.c", "d"];

      assert.deepEqual(stringify(obj), expected);
    });
  });

  describe("array parameter", () => {
    it("handles arrays", () => {
      const obj = ["a", ["b", "c", ["d"]], "e"];
      const expected = ["[0]", "[1][0]", "[1][1]", "[1][2][0]", "[2]"];

      assert.deepEqual(stringify(obj), expected);
    });

    it("handles empty arrays", () => {
      const obj = [1, [], 2, [[[]]], 3];
      const expected = ["[0]", "[1]", "[2]", "[3][0][0]", "[4]"];

      assert.deepEqual(stringify(obj), expected);
    });

    it("handles undefined or null values", () => {
      const obj = [undefined, null, [undefined], false];
      const expected = ["[0]", "[1]", "[2][0]", "[3]"];

      assert.deepEqual(stringify(obj), expected);
    });
  });

  describe("mixed object/array parameter", () => {
    it("handles mixed object/array", () => {
      const obj = ["a", { b: "b", c: ["c", { "d.d": "d" }] }, {}];
      const expected = ["[0]", "[1].b", "[1].c[0]", "[1].c[1]['d.d']", "[2]"];

      assert.deepEqual(stringify(obj), expected);
    });
  });

  describe("usage with other projects", () => {
    it("handles lodash.get", () => {
      const obj = [1, { a: [{ "b.c.d": [{}] }] }, 3];
      const keys = stringify(obj);

      assert.deepEqual(_get(obj, keys[1]), {});
    });
  });
});
