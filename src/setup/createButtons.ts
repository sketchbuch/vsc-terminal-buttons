import * as vscode from 'vscode'
import { Button } from '../buttons/buttons'

export const BTN_PRIORITY: number = 100 // The higher the number the more left the button appears
export const BTN_ALIGNMENT: vscode.StatusBarAlignment = vscode.StatusBarAlignment.Right

export const createButtons = (buttons: Button[]): vscode.StatusBarItem[] => {
  return buttons.map((btn: Button): vscode.StatusBarItem => {
    const newBtn: vscode.StatusBarItem = vscode.window.createStatusBarItem(
      BTN_ALIGNMENT,
      BTN_PRIORITY
    )

    newBtn.command = btn.command
    newBtn.text = btn.text
    newBtn.tooltip = btn.tooltip

    return newBtn
  })
}
