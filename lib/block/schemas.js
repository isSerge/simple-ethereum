'use strict';

const getBlockSchema = {
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

module.exports = {
  getBlockSchema,
};
