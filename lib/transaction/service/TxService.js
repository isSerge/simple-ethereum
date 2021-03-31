'use strict';

class TxService {
  constructor(web3) {
    this.web3 = web3;
  }

  async getGasPrice() {
    return this.web3.utils.fromWei(await this.web3.eth.getGasPrice(), 'wei');
  }

  async getTransaction(hash) {
    return this.web3.eth.getTransaction(hash);
  }

  sendTransaction(tx) {
    return this.web3.eth.sendTransaction(tx);
  }
}

module.exports = TxService;
