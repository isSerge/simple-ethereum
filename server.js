'use strict';

const app = require('./app');
const config = require('./config');

const server = app({
  logger: { prettyPrint: true },
});

server.listen(config.port, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`server listening on ${address}`);
});
