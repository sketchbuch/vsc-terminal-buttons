import * as vscode from 'vscode';
import * as assert from 'assert';
import * as sinon from 'sinon';
import { afterEach, beforeEach } from 'mocha';
import * as createButtons from '../../utils/create_buttons';
import * as updateStatusbar from '../../utils/update_statusbar';
import * as watchTerminals from '../../utils/watch_terminals';
import activate from '../../core/activate';
import { Button } from '../../types/buttons';

type SpiedCreateButtons = sinon.SinonSpy<[Button[]], vscode.StatusBarItem[]>;
type SpiedWatchTerminals = sinon.SinonSpy<[vscode.StatusBarItem[]], void>;
type SpiedUpdateStatusbar = sinon.SinonSpy<[vscode.Terminal | undefined, vscode.StatusBarItem[]], void>;

suite('activate()', function() {
  let spiedCreateButtons: SpiedCreateButtons;
  let spiedWatchTerminals: SpiedWatchTerminals;
  let spiedUpdateStatusbar: SpiedUpdateStatusbar;

  beforeEach(function() {
    spiedCreateButtons = sinon.spy(createButtons, 'default');
    spiedWatchTerminals = sinon.spy(watchTerminals, 'default');
    spiedUpdateStatusbar = sinon.spy(updateStatusbar, 'default');
  });

  afterEach(function() {
    spiedCreateButtons.restore();
    spiedWatchTerminals.restore();
    spiedUpdateStatusbar.restore();
  });

  test('Activates correctly', function() {
    activate();
    assert(spiedCreateButtons.called);
    assert(spiedWatchTerminals.called);
    assert(spiedUpdateStatusbar.called);
  });
});
