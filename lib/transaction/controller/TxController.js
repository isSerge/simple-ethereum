'use strict';

class TxController {
  constructor(txService) {
    this.txService = txService;
  }

  async getTransaction(req, res) {
    const tx = await this.txService.getTransaction(req.params.hash);
    res.send(tx);
  }

  async getTransactionReceipt(req, res) {
    const receipt = await this.txService.getTransactionReceipt(req.params.hash);
    res.send(receipt);
  }

  async sendTransaction(req, res) {
    const result = await this.txService.sendTransaction(req.body);
    res.send(result);
  }

  async getGasPrice(_, res) {
    const price = await this.txService.getGasPrice();
    res.send(price);
  }
}

module.exports = TxController;
