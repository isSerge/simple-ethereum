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
}


module.exports = AccountController;
