'use strict';

require('dotenv').config();
const fastify = require('fastify');
const blockRoutes = require('./lib/block/routes');
const accountRoutes = require('./lib/account/routes');
const transactionRoutes = require('./lib/transaction/routes');

function build(opts = {}) {
  const app = fastify(opts);

  app.register(blockRoutes, { prefix: '/api/block' });
  app.register(accountRoutes, { prefix: '/api/account' });
  app.register(transactionRoutes, { prefix: '/api/transaction' });

  return app;
}

module.exports = build;
