import web3 from '../../web3.mjs';
import BlockService from './BlockService.mjs';

const blockService = new BlockService(web3);

export default blockService;
