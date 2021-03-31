'use strict';

class BlockService {
  constructor(web3) {
    this.web3 = web3;
  }

  getBlock(hash) {
    return this.web3.eth.getBlock(hash);
  }

  async getLatestBlock() {
    const blockNumber = await this.web3.eth.getBlockNumber();
    return this.web3.eth.getBlock(blockNumber);
  }
}

module.exports = BlockService;
