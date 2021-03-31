'use strict';

const { test } = require('tap');
const build = require('../app');

test('returns block by number', async ({ equal, has }) => {
  const app = build();

  const response = await app.inject({
    method: 'GET',
    url: '/api/block/0',
  });

  equal(response.statusCode, 200);
  has(response.body, 'hash');
  has(response.body, 'timestamp');
  has(response.body, 'transactions');
  has(response.body, 'gasLimit');
  has(response.body, 'gasUsed');
});

test('returns latest block', async ({ equal, has }) => {
  const app = build();

  const response = await app.inject({
    method: 'GET',
    url: '/api/block/latest',
  });

  equal(response.statusCode, 200);
  has(response.body, 'hash');
  has(response.body, 'timestamp');
  has(response.body, 'transactions');
  has(response.body, 'gasLimit');
  has(response.body, 'gasUsed');
});

test('returns code 400 if block number is not provided', async ({ equal }) => {
  const app = build();

  const response = await app.inject({
    method: 'GET',
    url: '/api/block/',
  });

  equal(response.statusCode, 400);
});

test('returns code 400 if block number value is invalid', async ({ equal }) => {
  const app = build();

  const response = await app.inject({
    method: 'GET',
    url: '/api/block/is-not-a-valid-block',
  });

  equal(response.statusCode, 400);
});
