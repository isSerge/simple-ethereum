'use strict';

const { getBlockSchema } = require('./schemas');
const blockController = require('./controller');

async function blockRoutes(fastify) {
  fastify.get(
    '/:hashOrNumber',
    { schema: getBlockSchema },
    blockController.getBlock.bind(blockController)
  );

  fastify.get('/latest', blockController.getLatestBlock.bind(blockController));
}

module.exports = blockRoutes;
