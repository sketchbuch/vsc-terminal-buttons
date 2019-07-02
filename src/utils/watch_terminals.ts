import * as vscode from 'vscode';
import updateStatusbar from './update_statusbar';

const watchTerminals = (buttons: vscode.StatusBarItem[]): void => {
  vscode.window.onDidCloseTerminal(() => {
    if (vscode.window.terminals.length > 0) {
      updateStatusbar(vscode.window.activeTerminal, buttons);
    } else {
      updateStatusbar(undefined, buttons);
    }
  });

  vscode.window.onDidOpenTerminal(() => {
    if (vscode.window.terminals.length > 0) {
      updateStatusbar(vscode.window.activeTerminal, buttons);
    } else {
      updateStatusbar(undefined, buttons);
    }
  });
};

export default watchTerminals;
