import * as vscode from 'vscode';
import * as assert from 'assert';
import * as sinon from 'sinon';
import { afterEach, beforeEach } from 'mocha';
import * as createButtons from '../../utils/create_buttons';
import * as updateStatusbar from '../../utils/update_statusbar';
import * as watchTerminals from '../../utils/watch_terminals';
import { Button } from '../../types/buttons';
import * as ext from '../../core/activate';

type SpiedCreateButtons = sinon.SinonSpy<[Button[]], vscode.StatusBarItem[]>;
type SpiedWatchTerminals = sinon.SinonSpy<[vscode.StatusBarItem[]], void>;
type SpiedUpdateStatusbar = sinon.SinonSpy<[vscode.Terminal | undefined, vscode.StatusBarItem[]], void>;

suite('activate()', function() {
  const extensionPath = `${__dirname}../../../../`;

  test('Activates corectly', function() {
    let spiedSetupExtension: sinon.SinonSpy = sinon.spy(ext, 'setupExtension');
    ext.activate({ extensionPath } as vscode.ExtensionContext);
    assert(spiedSetupExtension.called);
  });

  suite('setupExtension()', function() {
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

    test('Sets up correctly', function() {
      ext.setupExtension(extensionPath, 'en');
      assert(spiedCreateButtons.called);
      assert(spiedWatchTerminals.called);
      assert(spiedUpdateStatusbar.called);
    });
  });
});
