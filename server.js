'use strict';

const fastify = require('fastify');

const routes = require('./routes');

const PORT = 3000;

const app = fastify({
  logger: true
});

app.register(routes);

app.listen(PORT, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
