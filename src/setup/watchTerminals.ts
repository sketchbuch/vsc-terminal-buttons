import * as vscode from 'vscode'
import { updateStatusbar } from './updateStatusbar'

export const terminalUpdate = (
  statusbarButtons: vscode.StatusBarItem[],
  terminals: readonly vscode.Terminal[]
): void => {
  if (terminals.length > 0) {
    updateStatusbar(vscode.window.activeTerminal, statusbarButtons)
  } else {
    updateStatusbar(undefined, statusbarButtons)
  }
}

export const watchTerminals = (
  context: vscode.ExtensionContext,
  statusbarButtons: vscode.StatusBarItem[]
): void => {
  const activeTerminal = vscode.window.onDidChangeActiveTerminal(() => {
    terminalUpdate(statusbarButtons, vscode.window.terminals)
  })

  const closeTerminal = vscode.window.onDidCloseTerminal(() => {
    terminalUpdate(statusbarButtons, vscode.window.terminals)
  })

  const openTerminal = vscode.window.onDidOpenTerminal(() => {
    terminalUpdate(statusbarButtons, vscode.window.terminals)
  })

  context.subscriptions.push(activeTerminal)
  context.subscriptions.push(closeTerminal)
  context.subscriptions.push(openTerminal)
}
