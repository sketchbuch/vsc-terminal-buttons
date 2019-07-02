import * as vscode from 'vscode';
import * as assert from 'assert';
import * as sinon from 'sinon';
import * as updateStatusbar from '../../utils/update_statusbar';
import createButtons from '../../utils/create_buttons';
import mockButtons from '../mocks/mockButtons';
import watchTerminals, { terminalUpdate } from '../../utils/watch_terminals';
import { getMockEditorTerminal } from './update_statusbar.test';

type SpiedActiveTerminal = sinon.SinonSpy<
  [(e: vscode.Terminal | undefined) => any, any?, (vscode.Disposable[] | undefined)?],
  vscode.Disposable
>;

type SpiedClosedTerminal = sinon.SinonSpy<
  [(e: vscode.Terminal) => any, any?, (vscode.Disposable[] | undefined)?],
  vscode.Disposable
>;

type SpiedOpenTerminal = sinon.SinonSpy<
  [(e: vscode.Terminal) => any, any?, (vscode.Disposable[] | undefined)?],
  vscode.Disposable
>;

type SpiedUpdateStatusbar = sinon.SinonSpy<[vscode.Terminal | undefined, vscode.StatusBarItem[]], void>;

suite('watchTerminals()', function() {
  test('updateStatusbar() calls terminal open/close/change events', function() {
    const spiedActiveTerminal: SpiedActiveTerminal = sinon.spy(vscode.window, 'onDidChangeActiveTerminal');
    const spiedCloseTerminal: SpiedClosedTerminal = sinon.spy(vscode.window, 'onDidCloseTerminal');
    const spiedOpenTerminal: SpiedOpenTerminal = sinon.spy(vscode.window, 'onDidOpenTerminal');
    const mockStatusButtons: vscode.StatusBarItem[] = createButtons(mockButtons);

    watchTerminals(mockStatusButtons);
    assert(spiedActiveTerminal.called);
    assert(spiedCloseTerminal.called);
    assert(spiedOpenTerminal.called);

    spiedActiveTerminal.restore();
    spiedCloseTerminal.restore();
    spiedOpenTerminal.restore();
  });
});

suite('terminalUpdate()', function() {
  suite('updateStatusbar()', function() {
    test('Called with undefined terminal if no terminals', function() {
      const spiedUpdateStatusbar: SpiedUpdateStatusbar = sinon.spy(updateStatusbar, 'default');
      const mockStatusButtons: vscode.StatusBarItem[] = createButtons(mockButtons);

      terminalUpdate(mockStatusButtons, []);
      assert(spiedUpdateStatusbar.calledWith(undefined, mockStatusButtons));

      spiedUpdateStatusbar.restore();
    });

    // TODO - fix test
    /* test('Called without undefined terminal if terminals', function() {
      const mockTerminal: vscode.Terminal = getMockEditorTerminal();
      sinon.stub(vscode.window, 'activeTerminal').returns(mockTerminal);
      const spiedUpdateStatusbar: SpiedUpdateStatusbar = sinon.spy(updateStatusbar, 'default');
      const mockStatusButtons: vscode.StatusBarItem[] = createButtons(mockButtons);

      terminalUpdate(mockStatusButtons, [mockTerminal]);
      assert(spiedUpdateStatusbar.calledWith(mockTerminal, mockStatusButtons));

      spiedUpdateStatusbar.restore();
    }); */
  });
});
