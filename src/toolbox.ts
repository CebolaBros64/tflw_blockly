export const toolbox = {
  kind: 'categoryToolbox',
  contents: [{
    kind: 'category',
    name: "General",
    contents: [{
      kind: 'block',
      type: 'num_hex',
    }, {
      kind: 'block',
      type: 'math_number',
    },  {
      kind: 'block',
      type: 'text',
    }, {
      kind: 'block',
      type: 'lists_create_with',
    },]
  }, {
    kind: 'category',
    name: "Tickflow",
    contents: [{
      kind: 'block',
      type: 'tickflow_op',
      inputs: {
        OP: {
          shadow: {
            type: 'num_hex',
            fields: { NUM: 100 },
          },
        }
      }
    },]
  }, {
    kind: 'category',
    name: "Tickompiler",
    contents: [{
      kind: 'block',
      type: 'tickflow_sub',
      fields: { SUBNAME: "cues" }
    }, {
      kind: 'block',
      type: 'tickompiler_rest',
    }, {
      kind: 'block',
      type: 'tickompiler_async_call',
    }, {
      kind: 'block',
      type: 'tickompiler_call',
    },]
  },
  ]
};
