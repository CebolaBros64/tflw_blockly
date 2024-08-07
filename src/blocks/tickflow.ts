import * as Blockly from 'blockly';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{
  type: 'tickflow_op',
  message0: "%1<%2> %3",
  args0: [
    { type: 'input_value', name: "OP", /*"check": "Number"*/ },
    { type: 'input_value', name: "SPARG", /*"check": "Number"*/ },
    { type: 'input_value', name: "ARGS", /*"check": "Number"*/ }
  ],
  colour: 160,
  tooltip: "bla bla bla",
  helpUrl: 'https://rhmodding.github.io/resources-and-guides',
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
},
]);
