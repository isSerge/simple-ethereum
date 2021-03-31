'use strict';

class BlockController {
  constructor(blockService) {
    this.blockService = blockService;
  }

  async getBlock(req, res) {
    const block = await this.blockService.getBlock(req.params.hashOrNumber);
    res.send(block);
  }

  async getLatestBlock(_, res) {
    const block = await this.blockService.getLatestBlock();
    res.send(block);
  }
}

module.exports = BlockController;
