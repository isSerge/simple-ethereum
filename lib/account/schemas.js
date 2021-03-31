'use strict';

const getBalanceSchema = {
  params: {
    type: 'object',
    required: ['address'],
    properties: {
      address: {
        type: 'string',
        pattern: '^0x[0-9a-fA-F]{40}$'
      }
    }
  }
};

module.exports = {
  getBalanceSchema,
};
