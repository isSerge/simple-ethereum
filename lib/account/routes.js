'use strict';

const accountController = require('./controller');
const { getBalanceSchema } = require('./schemas');

async function accountRoutes(fastify) {
  fastify.get(
    '/balance/:address',
    { schema: getBalanceSchema },
    accountController.getBalance.bind(accountController)
  );

  fastify.get(
    '/address',
    accountController.getAddress.bind(accountController)
  );

  fastify.get(
    '/',
    accountController.getAccounts.bind(accountController)
  );
}

module.exports = accountRoutes;
