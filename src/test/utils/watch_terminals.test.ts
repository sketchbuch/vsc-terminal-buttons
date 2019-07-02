import * as vscode from 'vscode';
import * as assert from 'assert';
import * as sinon from 'sinon';
import createButtons from '../../utils/create_buttons';
import mockButtons from '../mocks/mockButtons';
import watchTerminals from '../../utils/watch_terminals';

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
