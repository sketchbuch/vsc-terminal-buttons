import { t } from 'vscode-ext-localisation'
import { BTN_RENAME_TERMINAL } from '../constants/buttons'
import { Button } from '../types/buttons'

export const buttons: Button[] = [
  {
    command: BTN_RENAME_TERMINAL,
    text: t('buttons.rename.label'),
    tooltip: t('buttons.rename.tooltip'),
  },
]
