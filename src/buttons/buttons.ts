import { BTN_RENAME_TERMINAL } from '../constants/buttons'
import { Button } from '../types/buttons'

const buttons: Button[] = [
  {
    command: BTN_RENAME_TERMINAL,
    text: localise('rename.text', '> Rename'),
    tooltip: localise('rename.tooltip', 'Rename the active terminal'),
  },
]

export default buttons
