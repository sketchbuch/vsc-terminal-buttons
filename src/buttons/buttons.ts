import * as nls from 'vscode-nls';
import { Button } from '../types/buttons';
import { BTN_RENAME_TERMINAL } from '../constants/buttons';

const localise: nls.LocalizeFunc = nls.config({ messageFormat: nls.MessageFormat.file })();

const buttons: Button[] = [
  {
    command: BTN_RENAME_TERMINAL,
    text: localise('rename.text', '> Rename'),
    tooltip: localise('rename.tooltip', 'Rename the active terminal'),
  },
];

export default buttons;
