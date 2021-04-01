'use strict';

const { test, tearDown } = require('tap');
const build = require('../app');
const config = require('./testConfig');

test('returns accounts', async ({ equal, ok }) => {
  const app = build();
  tearDown(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/account/',
  });

  equal(response.statusCode, 200);
  ok(response.json()[0].toLowerCase() === config.coinbase);
});
