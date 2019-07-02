import * as vscode from 'vscode';
import updateStatusbar from './update_statusbar';

const terminalUpdate = (buttons: vscode.StatusBarItem[]): void => {
  if (vscode.window.terminals.length > 0) {
    updateStatusbar(vscode.window.activeTerminal, buttons);
  } else {
    updateStatusbar(undefined, buttons);
  }
};

const watchTerminals = (buttons: vscode.StatusBarItem[]): void => {
  vscode.window.onDidChangeActiveTerminal(() => {
    terminalUpdate(buttons);
  });

  vscode.window.onDidCloseTerminal(() => {
    terminalUpdate(buttons);
  });

  vscode.window.onDidOpenTerminal(() => {
    terminalUpdate(buttons);
  });
};

export default watchTerminals;
