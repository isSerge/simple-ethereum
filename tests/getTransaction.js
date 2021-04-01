'use strict';

const { test, tearDown } = require('tap');
const build = require('../app');
const web3 = require('../lib/web3');
const config = require('./testConfig');

test('returns transaction object', async ({ equal }) => {
  const value = '100';
  const from = config.coinbase;
  const address = (await web3.eth.personal.getAccounts())[0];
  const to = address ? address : await web3.eth.personal.newAccount('');

  const { transactionHash } = await web3.eth.sendTransaction(
    {
      from,
      to,
      value,
    },
    ''
  );

  const app = build();
  tearDown(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: `/api/transaction/${transactionHash}`,
  });

  equal(response.statusCode, 200);
  equal(response.json().from.toLowerCase(), from.toLowerCase());
  equal(response.json().to.toLowerCase(), to.toLowerCase());
  equal(response.json().value, value);
});

test('returns code 400 if transaction hash is invalid', async ({ equal }) => {
  const app = build();
  tearDown(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/transaction/not-a-valid-hash',
  });

  equal(response.statusCode, 400);
});

test('returns null if transaction was not found', async ({ equal }) => {
  const app = build();
  tearDown(() => app.close());

  const txHash =
    '0xf3aed85207db679140e90da9ea95f2244c2df4ad496fb6a6f5ed5a339c5422ea';

  const response = await app.inject({
    method: 'GET',
    url: `/api/transaction/${txHash}`,
  });

  equal(response.statusCode, 200);
  equal(response.json(), null);
});
