const test = require('tape');
const objTest = require('./obj-test');
const arrTest = require('./arr-test');
const stringTest = require('./string-test');
const nullTest = require('./null-test');

test('run tests', (t) => {
  t.plan(4);

  t.true(objTest());
  t.true(arrTest());
  t.true(stringTest());
  t.true(nullTest());
});
