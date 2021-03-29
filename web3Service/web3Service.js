'use strict';

class Web3Service {
  constructor(web3) {
    this.web3 = web3;
  }

  getBlock(hash) {
    return this.web3.eth.getBlock(hash);
  }

  async getGasPrice() {
    return this.web3.utils.fromWei(await this.web3.eth.getGasPrice(), 'wei');
  }

  async getLatestBlock() {
    const blockNumber = await this.web3.eth.getBlockNumber();
    return this.web3.eth.getBlock(blockNumber);
  }

  async getTransaction(hash) {
    return this.web3.eth.getTransaction(hash);
  }

  getTransactionReceipt(hash) {
    return this.web3.eth.getTransactionReceipt(hash);
  }

  async getBalance(address) {
    const balance = await this.web3.eth.getBalance(address);
    return { address, balance, symbol: 'eth', units: 'wei' };
  }

  sendTransaction(tx) {
    return this.web3.eth.sendTransaction(tx);
  }
}

module.exports = Web3Service;
