import tap from 'tap';

import build from '../app.mjs';
import config from './testConfig.json';

tap.test('returns account balance', async ({ equal, ok }) => {
  const app = build();
  tap.tearDown(() => app.close());

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

tap.test('returns code 400 if address is invalid', async ({ equal }) => {
  const app = build();
  tap.tearDown(() => app.close());

  const address = 'not valid address';

  const response = await app.inject({
    method: 'GET',
    url: `/api/account/balance/${address}`,
  });

  equal(response.statusCode, 400);
});
