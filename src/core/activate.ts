
import { getVscodeLang, loadTranslations } from 'vscode-ext-localisation';
import * as vscode from 'vscode';
import buttons from '../buttons/buttons';
import createButtons from '../utils/create_buttons';
import updateStatusbar from '../utils/update_statusbar';
import watchTerminals from '../utils/watch_terminals';

export const setupExtension = (extensionPath: string, lang: string) => {
  loadTranslations(lang, extensionPath);
  const statusButtons: vscode.StatusBarItem[] = createButtons(buttons);
  watchTerminals(statusButtons);
  updateStatusbar(vscode.window.activeTerminal, statusButtons);
};



export const activate = (context: vscode.ExtensionContext): void => {
  setupExtension(context.extensionPath, getVscodeLang(process.env.VSCODE_NLS_CONFIG));
};

export default activate;
