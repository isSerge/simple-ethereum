import './env.mjs'
import app from './app.mjs';
import config from './config.mjs';

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
