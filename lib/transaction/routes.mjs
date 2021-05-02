import txController from './controller/index.mjs';
import { getTxSchema as schema } from './schemas.mjs';

async function transactionRoutes(fastify) {
  fastify.get('/:hash', { schema }, txController.getTransaction.bind(txController));
  fastify.get('/receipt/:hash', { schema }, txController.getTransactionReceipt.bind(txController));
  fastify.get('/gas-price', txController.getGasPrice.bind(txController));
}

export default transactionRoutes;
