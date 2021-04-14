import { getBlockSchema } from './schemas.mjs';
import blockController from './controller/index.mjs';

async function blockRoutes(fastify) {
  fastify.get(
    '/:hashOrNumber',
    { schema: getBlockSchema },
    blockController.getBlock.bind(blockController),
  );

  fastify.get('/latest', blockController.getLatestBlock.bind(blockController));
}

export default blockRoutes;
