import * as assert from 'assert'
import { buttons } from '../../../buttons/buttons'
import { BTN_RENAME_TERMINAL } from '../../../constants/buttons'

suite('buttons:', function () {
  test('Contains 1 button', function () {
    assert.strictEqual(buttons.length, 1)
  })

  test(`Button 0.command is "${BTN_RENAME_TERMINAL}"`, function () {
    assert.strictEqual(buttons[0].command, BTN_RENAME_TERMINAL)
  })
})
