'use strict';

const { getBlockSchema } = require('./schemas');
const blockController = require('./controller');

async function blockRoutes(fastify) {
  fastify.get(
    '/api/block/:hashOrNumber',
    { schema: getBlockSchema },
    blockController.getBlock.bind(blockController)
  );

  fastify.get(
    '/api/block/latest',
    blockController.getLatestBlock.bind(blockController)
  );
}

module.exports = blockRoutes;
