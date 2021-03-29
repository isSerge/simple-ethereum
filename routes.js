'use strict';

const ethereumController = require('./controller');

async function routes(fastify) {
  fastify.get('/api/block', ethereumController.getBlock);
  fastify.get('/api/latest-block', ethereumController.getLatestBlock);
  fastify.get('/api/balance', ethereumController.getBalance);
  fastify.get('/api/transaction', ethereumController.getTransaction);
  fastify.post('/api/transaction', ethereumController.sendTransaction);
  fastify.get('/api/receipt', ethereumController.getTransactionReceipt);
  fastify.get('/api/gas-price', ethereumController.getGasPrice);
  fastify.get('/api/address', ethereumController.getAddress);
}

module.exports = routes;
