'use strict';

const { test, tearDown } = require('tap');
const build = require('../app');

test('returns gas price', async ({ equal, type }) => {
  const app = build();
  tearDown(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/transaction/gas-price',
  });

  equal(response.statusCode, 200);
  type(response.body, 'string');
});
