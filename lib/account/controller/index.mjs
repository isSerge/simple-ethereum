import AccountController from './AccountController.mjs';
import accountService from '../service/index.mjs';

const blockController = new AccountController(accountService);

export default blockController;
