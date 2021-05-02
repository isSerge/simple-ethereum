import accountController from './controller/index.mjs';
import { getBalanceSchema as schema } from './schemas.mjs';

async function accountRoutes(fastify) {
  fastify.get('/balance/:address', { schema }, accountController.getBalance.bind(accountController));
  fastify.get('/', accountController.getAccounts.bind(accountController));
}

export default accountRoutes;
