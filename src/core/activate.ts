import * as vscode from 'vscode'
import { getVscodeLang, loadTranslations } from 'vscode-ext-localisation'
import { buttons } from '../buttons/buttons'
import { createButtons } from '../setup/createButtons'
import { updateStatusbar } from '../setup/updateStatusbar'
import { watchTerminals } from '../setup/watchTerminals'

export const setupExt = (context: vscode.ExtensionContext, lang: string) => {
  loadTranslations(lang, context.extensionPath)

  const statusButtons: vscode.StatusBarItem[] = createButtons(buttons)
  watchTerminals(statusButtons)
  updateStatusbar(vscode.window.activeTerminal, statusButtons)
}

export const activate = (context: vscode.ExtensionContext): void => {
  setupExt(context, getVscodeLang(process.env.VSCODE_NLS_CONFIG))
}
