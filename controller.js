'use strict';

module.exports = {
  async getBlock(req, res) {
    const block = await this.web3Service.getBlock(req.params.hash);
    res.send(block);
  },

  async getLatestBlock(_, res) {
    const block = await this.web3Service.getLatestBlock();
    res.send(block);
  },

  async getBalance(req, res) {
    const tx = await this.web3Service.getBalance(req.params.address);
    res.send(tx);
  },

  async getTransaction(req, res) {
    const tx = await this.web3Service.getTransaction(req.params.address);
    res.send(tx);
  },

  async sendTransaction(req, res) {
    const result = await this.web3Service.sendTransaction(req.body);
    res.send(result);
  },

  async getTransactionReceipt(req, res) {
    const rt = await this.web3Service.getTransactionReceipt(req.params.hash);
    res.send(rt);
  },

  async getGasPrice(_, res) {
    const price = await this.web3Service.getGasPrice();
    res.send(price);
  },

  async getAddress(_, res) {
    const address = await this.web3Service.getAddress();
    res.send(address);
  }
};
