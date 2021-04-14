import txController from './controller/index.mjs';
import { getTxSchema } from './schemas.mjs';

async function transactionRoutes(fastify) {
  fastify.get(
    '/:hash',
    { schema: getTxSchema },
    txController.getTransaction.bind(txController),
  );

  fastify.get(
    '/receipt/:hash',
    { schema: getTxSchema },
    txController.getTransactionReceipt.bind(txController),
  );

  fastify.get('/gas-price', txController.getGasPrice.bind(txController));
}

export default transactionRoutes;
