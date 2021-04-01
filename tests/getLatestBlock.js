'use strict';

const { test, tearDown } = require('tap');
const build = require('../app');

test('returns latest block', async ({ equal, ok }) => {
  const app = build();
  tearDown(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/block/latest',
  });

  equal(response.statusCode, 200);
  ok(response.json().hash);
  ok(response.json().gasLimit);
  ok(response.json().transactions);
});
