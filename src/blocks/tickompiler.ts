import * as Blockly from 'blockly';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{
  type: 'tickflow_sub',
  message0: "%1:\nAsync?%2\n%3",
  args0: [{
    type: 'field_input',
    name: 'SUBNAME',
    check: 'String'
  }, {
    type: 'field_checkbox',
    name: 'ASYNC',
    check: 'String'
  }, {
    type: 'input_statement',
    name: 'MEMBERS',
  }],
  colour: 241,
  tooltip: "bla bla bla",
  helpUrl: 'https://rhmodding.github.io/resources-and-guides',
}, {
  type: 'tickompiler_rest',
  message0: "rest",
  output: null,
  colour: 241,
  tooltip: "bla bla bla",
  helpUrl: 'https://rhmodding.github.io/resources-and-guides',
}, {
  type: 'tickompiler_async_call',
  message0: "async_call",
  output: null,
  colour: 241,
  tooltip: "bla bla bla",
  helpUrl: 'https://rhmodding.github.io/resources-and-guides',
}, {
  type: 'tickompiler_call',
  message0: "call",
  output: null,
  colour: 241,
  tooltip: "bla bla bla",
  helpUrl: 'https://rhmodding.github.io/resources-and-guides',
},
]);