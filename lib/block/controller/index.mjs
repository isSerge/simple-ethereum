import BlockController from './BlockController.mjs';
import blockService from '../service/index.mjs';

const blockController = new BlockController(blockService);

export default blockController;
