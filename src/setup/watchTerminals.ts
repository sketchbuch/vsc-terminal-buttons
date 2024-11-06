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

export const watchTerminals = (statusbarButtons: vscode.StatusBarItem[]): void => {
  vscode.window.onDidChangeActiveTerminal(() => {
    terminalUpdate(statusbarButtons, vscode.window.terminals)
  })

  vscode.window.onDidCloseTerminal(() => {
    terminalUpdate(statusbarButtons, vscode.window.terminals)
  })

  vscode.window.onDidOpenTerminal(() => {
    terminalUpdate(statusbarButtons, vscode.window.terminals)
  })
}
