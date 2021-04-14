import web3 from '../../web3.mjs';
import TxService from './TxService.mjs';

const txService = new TxService(web3);

export default txService;
