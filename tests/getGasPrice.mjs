import tap from 'tap';

import build from '../app.mjs';

tap.test('returns gas price', async ({ equal, type }) => {
  const app = build();
  tap.tearDown(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/transaction/gas-price',
  });

  equal(response.statusCode, 200);
  type(response.body, 'string');
});
