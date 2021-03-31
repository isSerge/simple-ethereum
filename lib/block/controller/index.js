'use strict';

const BlockController = require('./BlockController');
const blockService = require('../service');

const blockController = new BlockController(blockService);

module.exports = blockController;
