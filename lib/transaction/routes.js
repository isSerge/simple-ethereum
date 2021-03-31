'use strict';

const txController = require('./controller');
const { getTxSchema, sendTxSchema } = require('./schemas');

async function transactionRoutes(fastify) {
  fastify.get(
    '/api/transaction/:hash',
    { schema: getTxSchema },
    txController.getTransaction.bind(txController)
  );

  fastify.post(
    '/api/transaction',
    { schema: sendTxSchema },
    txController.sendTransaction.bind(txController)
  );

  fastify.get(
    '/api/receipt/:hash',
    { schema: getTxSchema },
    txController.getTransactionReceipt.bind(txController)
  );

  fastify.get('/api/gas-price', txController.getGasPrice.bind(txController));
}

module.exports = transactionRoutes;
