'use strict';

const getTxSchema = {
  params: {
    type: 'object',
    required: ['hash'],
    properties: {
      hash: {
        type: 'string',
        pattern: '^0x([A-Fa-f0-9]{64})$',
      }
    }
  }
};

const sendTxSchema = {
  body: {
    type: 'object',
    required: ['value', 'to', 'from'],
    properties: {
      value: {
        type: 'string'
      },
      to: {
        type: 'string',
        pattern: '^0x[0-9a-fA-F]{40}$'
      },
      from: {
        type: 'string',
        pattern: '^0x[0-9a-fA-F]{40}$'
      },
    }
  }
};

module.exports = {
  getTxSchema,
  sendTxSchema,
};
