import fastify from 'fastify';

import blockRoutes from './lib/block/routes.mjs';
import accountRoutes from './lib/account/routes.mjs';
import transactionRoutes from './lib/transaction/routes.mjs';

function build(opts = {}) {
  const app = fastify(opts);

  app.register(blockRoutes, { prefix: '/api/block' });
  app.register(accountRoutes, { prefix: '/api/account' });
  app.register(transactionRoutes, { prefix: '/api/transaction' });

  return app;
}

export default build;
