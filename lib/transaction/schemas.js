'use strict';

const getTxSchema = {
  params: {
    type: 'object',
    required: ['hash'],
    properties: {
      hash: {
        type: 'string',
        minLength: 1,
      }
    }
  }
};

const getTxReceiptSchema = {
  params: {
    type: 'object',
    required: ['hash'],
    properties: {
      hash: {
        type: 'string',
        minLength: 1,
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
        type: 'string'
      },
      from: {
        type: 'string'
      },
    }
  }
};

module.exports = {
  getTxSchema,
  sendTxSchema,
  getTxReceiptSchema,
};
