'use strict';

const web3 = require('../../web3');

const AccountService = require('./AccountService');

const accountService = new AccountService(web3);

module.exports = accountService;
