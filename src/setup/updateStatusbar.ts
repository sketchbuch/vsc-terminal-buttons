import * as vscode from 'vscode'

export const updateStatusbar = (
  terminal: vscode.Terminal | undefined,
  statusbarButtons: vscode.StatusBarItem[]
): void => {
  let showButtons: boolean = !!terminal

  statusbarButtons.forEach((btn: vscode.StatusBarItem) => {
    if (showButtons) {
      btn.show()
    } else {
      btn.hide()
    }
  })
}
