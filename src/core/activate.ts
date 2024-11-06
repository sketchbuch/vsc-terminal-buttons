import * as vscode from 'vscode'
import { getVscodeLang, loadTranslations } from 'vscode-ext-localisation'
import { buttons } from '../buttons/buttons'
import { createButtons } from '../utils/create_buttons'
import { updateStatusbar } from '../utils/update_statusbar'
import { watchTerminals } from '../utils/watch_terminals'

export const setupExt = (context: vscode.ExtensionContext, lang: string) => {
  loadTranslations(lang, context.extensionPath)

  const statusButtons: vscode.StatusBarItem[] = createButtons(buttons)
  watchTerminals(statusButtons)
  updateStatusbar(vscode.window.activeTerminal, statusButtons)
}

export const activate = (context: vscode.ExtensionContext): void => {
  setupExt(context, getVscodeLang(process.env.VSCODE_NLS_CONFIG))
}
