'use strict';

require('dotenv').config();
const fastify = require('fastify');

const config = require('./config');
const routes = require('./routes');
const web3Service = require('./web3Service');

const app = fastify({
  logger: true
});

app.register(routes);

app.decorate('web3Service', web3Service);

app.listen(config.port, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
