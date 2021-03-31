'use strict';

const web3 = require('../../../web3');

const BlockService = require('./BlockService');

const blockService = new BlockService(web3);

module.exports = blockService;
