import tap from 'tap';

import build from '../app.mjs';

tap.test('returns block by number', async ({ equal, ok }) => {
  const app = build();
  tap.tearDown(() => app.close());

  const blockNumber = 0;

  const response = await app.inject({
    method: 'GET',
    url: `/api/block/${blockNumber}`,
  });

  equal(response.statusCode, 200);
  ok(response.json().hash);
  ok(response.json().gasLimit);
  ok(response.json().transactions);
  equal(response.json().timestamp, 0);
  equal(response.json().number, blockNumber);
});

tap.test('returns code 400 if block number is not provided', async ({ equal }) => {
  const app = build();
  tap.tearDown(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/block/',
  });

  equal(response.statusCode, 400);
});

tap.test('returns code 400 if block number value is invalid', async ({ equal }) => {
  const app = build();
  tap.tearDown(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/block/is-not-a-valid-block',
  });

  equal(response.statusCode, 400);
});
