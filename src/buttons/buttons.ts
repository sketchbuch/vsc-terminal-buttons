export interface Button {
  command: string
  text: string
  tooltip: string
}

export const BTN_RENAME_TERMINAL: string = 'workbench.action.terminal.rename'
export const BTN_SHOW_TERMINAL: string = 'workbench.action.terminal.focus'

export const buttons: Button[] = [
  {
    command: BTN_RENAME_TERMINAL,
    text: 'buttons.rename.text',
    tooltip: 'buttons.rename.tooltip',
  },
  {
    command: BTN_SHOW_TERMINAL,
    text: 'buttons.show.text',
    tooltip: 'buttons.show.tooltip',
  },
]
