import blockController from './controller/index.mjs';
import { getBlockSchema as schema } from './schemas.mjs';

async function blockRoutes(fastify) {
  fastify.get('/:hashOrNumber', { schema }, blockController.getBlock.bind(blockController));
  fastify.get('/latest', blockController.getLatestBlock.bind(blockController));
}

export default blockRoutes;
