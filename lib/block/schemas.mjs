export const getBlockSchema = {
  params: {
    type: 'object',
    required: ['hashOrNumber'],
    properties: {
      hashOrNumber: {
        type: 'string',
        pattern: '^(0x([A-Fa-f0-9]{64}))|([0-9]+)$',
      },
    },
  },
};
