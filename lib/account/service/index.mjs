import web3 from '../../web3.mjs';
import AccountService from './AccountService.mjs';

const accountService = new AccountService(web3);

export default accountService;
