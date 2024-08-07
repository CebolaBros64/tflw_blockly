import * as Blockly from 'blockly';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{
  type: 'num_hex',
  message0: "0x%1",
  args0: [{
    type: 'field_input',
    name: 'NUM',
    check: 'String'
  }],
  output: 'NUM',
  colour: 230,
  tooltip: "bla bla bla",
  helpUrl: 'https://rhmodding.github.io/resources-and-guides',
}, {
  type: 'args',
  message0: "0x%1",
  args0: [{
    type: 'field_input',
    name: 'NUM',
    check: 'String'
  }],
  output: 'NUM',
  colour: 230,
  tooltip: "bla bla bla",
  helpUrl: 'https://rhmodding.github.io/resources-and-guides',
},
]);


