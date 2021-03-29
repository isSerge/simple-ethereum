'use strict';

const Web3 = require('web3');

const config = require('../config');
const Web3Service = require('./web3Service');

const web3 = new Web3(new Web3.providers.HttpProvider(config.httpProvider));

const web3Service = new Web3Service(web3);

module.exports = web3Service;
