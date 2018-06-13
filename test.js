const test = require('tape');
const _isEqual = require('lodash.isequal');
const stringifyObjectKeys = require('./');

test('does it work?', t => {
  t.plan(1);

  const obj = {
    _id: 213782167536,
    organization: {
      name: 'Bluth Company',
      business: 'real estate development firm',
      founded: {
        year: 1953,
        by: 'George Bluth'
      },
      associates: ['Lucille Austero', 'Stan Sitwell'],
      ceo: {
        name: {
          first: 'Lucille',
          last: 'Bluth'
        }
      }
    },
    otherVentures: [
      {
        name: 'Frozen Banana Stand',
        location: ['Newport Beach boardwalk', 'Balboa Island']
      }
    ]
  };

  const control = [
    '_id',
    'organization.name',
    'organization.business',
    'organization.founded.year',
    'organization.founded.by',
    'organization.associates[0]',
    'organization.associates[1]',
    'organization.ceo.name.first',
    'organization.ceo.name.last',
    'otherVentures[0].name',
    'otherVentures[0].location[0]',
    'otherVentures[0].location[1]'
  ];

  const result = stringifyObjectKeys(obj);

  t.true(_isEqual(result, control));
});
