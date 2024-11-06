import { t } from 'vscode-ext-localisation'

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
    text: t('buttons.rename.text'),
    tooltip: t('buttons.rename.tooltip'),
  },
  {
    command: BTN_SHOW_TERMINAL,
    text: t('buttons.show.text'),
    tooltip: t('buttons.show.tooltip'),
  },
]
