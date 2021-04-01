'use strict';

const getTxSchema = {
  params: {
    type: 'object',
    required: ['hash'],
    properties: {
      hash: {
        type: 'string',
        pattern: '^0x([A-Fa-f0-9]{64})$',
      },
    },
  },
};

module.exports = {
  getTxSchema,
};
