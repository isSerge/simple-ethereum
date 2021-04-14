import tap from 'tap';

import build from '../app.mjs';
import web3 from '../lib/web3.mjs';
import config from './testConfig.json';

tap.test('returns transaction receipt', async ({ equal, ok }) => {
  const value = '100';
  const from = config.coinbase;
  const address = (await web3.eth.personal.getAccounts())[0];
  const to = address || await web3.eth.personal.newAccount('');

  const { transactionHash } = await web3.eth.sendTransaction(
    {
      from,
      to,
      value,
    },
    '',
  );

  const app = build();
  tap.tearDown(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: `/api/transaction/receipt/${transactionHash}`,
  });

  equal(response.statusCode, 200);
  equal(response.json().from.toLowerCase(), from.toLowerCase());
  equal(response.json().to.toLowerCase(), to.toLowerCase());
  ok(response.json().blockNumber);
  ok(response.json().blockHash);
  ok(response.json().gasUsed);
  ok(response.json().status);
  ok(response.json().transactionHash);
});

tap.test('returns code 400 if transaction hash is invalid', async ({ equal }) => {
  const app = build();
  tap.tearDown(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/transaction/receipt/not-a-valid-hash',
  });

  equal(response.statusCode, 400);
});

tap.test('returns null if transaction was not found', async ({ equal }) => {
  const app = build();
  tap.tearDown(() => app.close());

  const txHash = '0xf3aed85207db679140e90da9ea95f2244c2df4ad496fb6a6f5ed5a339c5422ea';

  const response = await app.inject({
    method: 'GET',
    url: `/api/transaction/receipt/${txHash}`,
  });

  equal(response.statusCode, 200);
  equal(response.json(), null);
});
