export interface Button {
  command: string
  textKey: string
  tooltipKey: string
}

export const BTN_RENAME_TERMINAL: string = 'workbench.action.terminal.rename'
export const BTN_SHOW_TERMINAL: string = 'workbench.action.terminal.focus'

export const buttons: Button[] = [
  {
    command: BTN_RENAME_TERMINAL,
    textKey: 'buttons.rename.text',
    tooltipKey: 'buttons.rename.tooltip',
  },
  {
    command: BTN_SHOW_TERMINAL,
    textKey: 'buttons.show.text',
    tooltipKey: 'buttons.show.tooltip',
  },
]
