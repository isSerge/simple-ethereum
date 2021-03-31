'use strict';

const AccountController = require('./AccountController');
const accountService = require('../service');

const blockController = new AccountController(accountService);

module.exports = blockController;
