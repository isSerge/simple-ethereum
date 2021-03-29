'use strict';

module.exports = {
  async getBlock(req, res) {
    try {
      const block = await this.web3Service.getBlock(req.params.hash);
      res.send(block);
    } catch (err) {
      res.send(err);
    }
  },

  async getLatestBlock(_, res) {
    try {
      const block = await this.web3Service.getLatestBlock();
      res.send(block);
    } catch (err) {
      res.send(err);
    }
  },

  async getBalance(req, res) {
    try {
      const tx = await this.web3Service.getBalance(req.params.address);
      res.send(tx);
    } catch (err) {
      res.send(err);
    }
  },

  async getTransaction(req, res) {
    try {
      const tx = await this.web3Service.getTransaction(req.params.address);
      res.send(tx);
    } catch (err) {
      res.send(err);
    }
  },

  async sendTransaction(req, res) {
    try {
      const result = await this.web3Service.sendTransaction(req.body);
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  },

  async getTransactionReceipt(req, res) {
    try {
      const rt = await this.web3Service.getTransactionReceipt(req.params.hash);
      res.send(rt);
    } catch (err) {
      res.send(err);
    }
  },

  async getGasPrice(_, res) {
    try {
      const price = await this.web3Service.getGasPrice();
      res.send(price);
    } catch (err) {
      res.send(err);
    }
  },

  async getAddress(_, res) {
    try {
      const address = await this.web3Service.getAddress();
      res.send(address);
    } catch (err) {
      res.send(err);
    }
  }
};
