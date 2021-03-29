'use strict';

const ethereumController = require('./controller');

async function routes(fastify) {
  fastify.get('/api/block/:hash', ethereumController.getBlock);
  fastify.get('/api/latest-block', ethereumController.getLatestBlock);
  fastify.get('/api/balance/:address', ethereumController.getBalance);
  fastify.get('/api/transaction/:hash', ethereumController.getTransaction);
  fastify.post('/api/transaction', ethereumController.sendTransaction);
  fastify.get('/api/receipt/:hash', ethereumController.getTransactionReceipt);
  fastify.get('/api/gas-price', ethereumController.getGasPrice);
  fastify.get('/api/address', ethereumController.getAddress);
}

module.exports = routes;
