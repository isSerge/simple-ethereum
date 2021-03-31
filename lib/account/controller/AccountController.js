'use strict';

class AccountController {
  constructor(accountService) {
    this.accountService = accountService;
  }

  async getBalance(req, res) {
    const tx = await this.accountService.getBalance(req.params.address);
    res.send(tx);
  }

  async getAddress(_, res) {
    const address = await this.accountService.getAddress();
    res.send(address);
  }

  async getAccounts(_, res) {
    const accounts = await this.accountService.getAccounts();
    res.send(accounts);
  }
}

module.exports = AccountController;
