import * as Blockly from 'blockly';

const Order = { ATOMIC: 0 };

const commands = [
  { op: 0x02, keyword: 'async_call'},
  { op: 0x06, keyword: 'call'},
  { op: 0x0E, keyword: 'rest' }
];

const numToHex = (num: number): string =>
  num > 9 ? `0x${num.toString(16).padStart(2, '0').toUpperCase()}` : String(num);

const numToOp = (num: number): string => {
  const command = commands.find(command => command.op === num);
  return command ? command.keyword : numToHex(num);
}

export const tickompilerGenerator = new Blockly.Generator("Tickflow");

commands.map(command => {
  tickompilerGenerator.forBlock[`tickompiler_${command.keyword}`] = () => [String(command.op), Order.ATOMIC]
});

tickompilerGenerator.forBlock['num_hex'] = block => [String(Number(`0x${block.getFieldValue('NUM')}`)), Order.ATOMIC];
tickompilerGenerator.forBlock['tickflow_op'] = (block, generator) => {
  const op = generator.valueToCode(block, 'OP', Order.ATOMIC);
  const formatted_op = numToOp(Number(op));
  const spArg = generator.valueToCode(block, 'SPARG', Order.ATOMIC);
  const formatted_spArg = spArg && `<${numToHex(Number(spArg))}>`;
  const nextBlock = generator.blockToCode(block.getNextBlock());
  const args = generator.valueToCode(block, 'ARGS', Order.ATOMIC);

  return [`${formatted_op}${formatted_spArg} ${args}`, nextBlock].join('\n');
};
tickompilerGenerator.forBlock['tickflow_sub'] = (block, generator) => {
  const asynchronous = block.getFieldValue('ASYNC') === 'TRUE';
  const terminator = asynchronous ? 'stop' : 'return';
  return (
    `${block.getFieldValue('SUBNAME')}:
    ${generator.statementToCode(block, 'MEMBERS')}
    ${terminator}`
  );
};


tickompilerGenerator.forBlock['text'] = block => [`u"${block.getFieldValue('TEXT')}"`, Order.ATOMIC];
tickompilerGenerator.forBlock['math_number'] = block => [String(Number(block.getFieldValue('NUM'))), Order.ATOMIC];
tickompilerGenerator.forBlock['lists_create_with'] = (block, generator) => {
  return [block.inputList.map(
    input => numToHex(Number(generator.valueToCode(block, input.name, Order.ATOMIC)))
  ).join(', '), Order.ATOMIC];
};
