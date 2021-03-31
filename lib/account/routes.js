'use strict';

const accountController = require('./controller');
const { getBalanceSchema } = require('./schemas');

async function accountRoutes(fastify) {
  fastify.get(
    '/api/balance/:address',
    { schema: getBalanceSchema },
    accountController.getBalance.bind(accountController)
  );

  // create account
  fastify.get(
    '/api/address',
    accountController.getAddress.bind(accountController)
  );

  // getAccounts
}

module.exports = accountRoutes;
