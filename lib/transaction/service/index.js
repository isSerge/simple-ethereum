'use strict';

const web3 = require('../../../web3');

const TxService = require('./TxService');

const txService = new TxService(web3);

module.exports = txService;
