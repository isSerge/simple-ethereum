import tap from 'tap';

import build from '../app.mjs';
import config from './testConfig.json';

tap.test('returns accounts', async ({ equal, ok }) => {
  const app = build();
  tap.tearDown(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/account/',
  });

  equal(response.statusCode, 200);
  ok(response.json()[0].toLowerCase() === config.coinbase);
});
