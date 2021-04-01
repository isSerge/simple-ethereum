'use strict';

const txController = require('./controller');
const { getTxSchema } = require('./schemas');

async function transactionRoutes(fastify) {
  fastify.get(
    '/:hash',
    { schema: getTxSchema },
    txController.getTransaction.bind(txController)
  );

  fastify.get(
    '/receipt/:hash',
    { schema: getTxSchema },
    txController.getTransactionReceipt.bind(txController)
  );

  fastify.get('/gas-price', txController.getGasPrice.bind(txController));
}

module.exports = transactionRoutes;
