import * as Blockly from 'blockly';
import * as En from 'blockly/msg/en';
import { tickompilerGenerator } from './generators/tickompiler';
import { blocks as generalBlocks } from './blocks/general';
import { blocks as tickflowBlocks } from './blocks/tickflow';
import { blocks as tickompilerBlocks } from './blocks/tickompiler';
import { toolbox } from './toolbox';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <p>Hello World</p>
    <!--<input type='button' id='btn_save' value="Save" disabled=''> -->
    <input type='button' id='btn_gen' value="Generate"> 
    <!--<input type='button' id='btn_run' value="Run"> -->
  </div>
  <div id="blocklyDiv" style="height: 480px; width: 600px;">
  </div>
  <div id="blocklyCode">
  </div>
`;

Blockly.setLocale(En);
Blockly.common.defineBlocks({...generalBlocks, ...tickflowBlocks, ...tickompilerBlocks});

const workspace = Blockly.inject('blocklyDiv', { toolbox/*, renderer: 'zelos'*/ });

document.querySelector<HTMLDivElement>('#btn_gen')!.onclick = () => 
  document.querySelector<HTMLDivElement>('#blocklyCode')!.innerText = tickompilerGenerator.workspaceToCode(workspace);

/*document.querySelector<HTMLDivElement>('#btn_run')!.onclick = () => {
  const blocks = workspace.getAllBlocks();
  const startSub = blocks.find(block => block.type === 'tickflow_sub' && block.getFieldValue('SUBNAME') === "start");

  if (startSub) {
    console.log(startSub.getInput('MEMBERS'));
    blocks.map(
      block => {
        if (block.type === 'tickflow_op') {
          const op = Number(tickompilerGenerator.valueToCode(block, 'OP', 0));
          workspace.highlightBlock(block.id);
          switch (op) {
            case 0x0E:  // 'rest' command
              console.log(`resting by ${'idk'} ticks...`);
              break;
            default:
              break;
          };
        };
      }
    );
  } else alert("I can't run Tickflow code without a sub named 'start', dummy");
};*/
