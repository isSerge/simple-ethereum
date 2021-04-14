import tap from 'tap';

import build from '../app.mjs';

tap.test('returns latest block', async ({ equal, ok }) => {
  const app = build();
  tap.tearDown(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/block/latest',
  });

  equal(response.statusCode, 200);
  ok(response.json().hash);
  ok(response.json().gasLimit);
  ok(response.json().transactions);
});
