'use strict';

require('dotenv').config();
const fastify = require('fastify');
const config = require('./config');
const blockRoutes = require('./lib/block/routes');
const accountRoutes = require('./lib/account/routes');
const transactionRoutes = require('./lib/transaction/routes');

const app = fastify({
  logger: { prettyPrint: true }
});

app.register(blockRoutes);
app.register(accountRoutes);
app.register(transactionRoutes);

app.listen(config.port, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
