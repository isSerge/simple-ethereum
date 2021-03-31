'use strict';

const getBalanceSchema = {
  params: {
    type: 'object',
    required: ['address'],
    properties: {
      address: {
        type: 'string',
        minLength: 1,
      }
    }
  }
};

module.exports = {
  getBalanceSchema,
};
