const assert = require('assert');
const stringify = require('./');

describe('stringify-object-keys', () => {
  it('handles incorrect parameter correctly', () => {
    assert.deepEqual(stringify(), []);
    assert.deepEqual(stringify(undefined), []);
    assert.deepEqual(stringify(null), []);
    assert.deepEqual(stringify(false), []);
    assert.deepEqual(stringify(3.14), []);
    assert.deepEqual(stringify('string'), []);
    assert.deepEqual(stringify(Symbol()), []);
    assert.deepEqual(stringify(function() {}), []);
  });

  describe('object parameter', () => {
    it('handles objects correctly', () => {
      const obj = { a: 'a', b: { c: 'c', d: { e: { f: 'f' } } } };
      const expected = ['a', 'b.c', 'b.d.e.f'];

      assert.deepEqual(stringify(obj), expected);
    });

    it('handles arrays correctly', () => {
      const obj = ['a', [ 'b', 'c', [ 'd' ] ]]
      const expected = ['[0]', '[1][0]', '[1][1]', '[1][2][0]'];

      assert.deepEqual(stringify(obj), expected);
    });

    it('handles mixed objects and arrays correctly', () => {
      const obj = ['a', { b: 'b', c: [ 'd', { e: 'e' } ] }]
      const expected = ['[0]', '[1].b', '[1].c[0]', '[1].c[1].e'];

      assert.deepEqual(stringify(obj), expected);
    });
  });
});
