'use strict';

const txController = require('./controller');
const { getTxSchema, sendTxSchema } = require('./schemas');

async function transactionRoutes(fastify) {
  fastify.get(
    '/:hash',
    { schema: getTxSchema },
    txController.getTransaction.bind(txController)
  );

  fastify.post(
    '/',
    { schema: sendTxSchema },
    txController.sendTransaction.bind(txController)
  );

  fastify.get('/gas-price', txController.getGasPrice.bind(txController));
}

module.exports = transactionRoutes;
