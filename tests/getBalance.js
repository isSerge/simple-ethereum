'use strict';

const { test, tearDown } = require('tap');
const build = require('../app');
const config = require('./testConfig');

test('returns account balance', async ({ equal, ok }) => {
  const app = build();
  tearDown(() => app.close());

  const address = config.coinbase;

  const response = await app.inject({
    method: 'GET',
    url: `/api/account/balance/${address}`,
  });

  equal(response.statusCode, 200);
  equal(response.json().address, address);
  equal(response.json().symbol, 'eth');
  equal(response.json().units, 'wei');
  ok(response.json().balance);
});

test('returns code 400 if address is invalid', async ({ equal }) => {
  const app = build();
  tearDown(() => app.close());

  const address = 'not valid address';

  const response = await app.inject({
    method: 'GET',
    url: `/api/account/balance/${address}`,
  });

  equal(response.statusCode, 400);
});
