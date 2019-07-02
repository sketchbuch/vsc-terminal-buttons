import * as vscode from 'vscode';
import updateStatusbar from './update_statusbar';

export const terminalUpdate = (buttons: vscode.StatusBarItem[], terminals: readonly vscode.Terminal[]): void => {
  if (terminals.length > 0) {
    updateStatusbar(vscode.window.activeTerminal, buttons);
  } else {
    updateStatusbar(undefined, buttons);
  }
};

const watchTerminals = (buttons: vscode.StatusBarItem[]): void => {
  vscode.window.onDidChangeActiveTerminal(() => {
    terminalUpdate(buttons, vscode.window.terminals);
  });

  vscode.window.onDidCloseTerminal(() => {
    terminalUpdate(buttons, vscode.window.terminals);
  });

  vscode.window.onDidOpenTerminal(() => {
    terminalUpdate(buttons, vscode.window.terminals);
  });
};

export default watchTerminals;
