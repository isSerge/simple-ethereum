import TxController from './TxController.mjs';
import txService from '../service/index.mjs';

const txController = new TxController(txService);

export default txController;
