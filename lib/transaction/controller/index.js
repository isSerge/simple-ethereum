'use strict';

const TxController = require('./TxController');
const txService = require('../service');

const txController = new TxController(txService);

module.exports = txController;
