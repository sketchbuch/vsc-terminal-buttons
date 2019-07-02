import * as vscode from 'vscode';
import buttons from '../buttons/buttons';
import createButtons from '../utils/create_buttons';
import updateStatusbar from '../utils/update_statusbar';
import watchTerminals from '../utils/watch_terminals';

const activate = () => {
  const statusButtons: vscode.StatusBarItem[] = createButtons(buttons);
  watchTerminals(statusButtons);
  updateStatusbar(vscode.window.activeTerminal, statusButtons);
};

export default activate;
