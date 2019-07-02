import * as vscode from 'vscode';
import * as assert from 'assert';
import * as sinon from 'sinon';
import { afterEach, beforeEach } from 'mocha';
import updateStatusbar from '../../utils/update_statusbar';

export const getMockEditorTerminal = (): vscode.Terminal => {
  return {} as vscode.Terminal;
};

suite('updateStatusbar()', function() {
  let mockButton: vscode.StatusBarItem;
  let mockButtons: vscode.StatusBarItem[];
  let spiedHide: sinon.SinonSpy<[], void>;
  let spiedShow: sinon.SinonSpy<[], void>;

  beforeEach(() => {
    mockButton = { hide: () => {}, show: () => {} } as vscode.StatusBarItem;
    mockButtons = [mockButton];
    spiedHide = sinon.spy(mockButton, 'hide');
    spiedShow = sinon.spy(mockButton, 'show');
  });

  afterEach(() => {
    spiedHide.restore();
    spiedShow.restore();
  });

  test('btn.hide() called if terminal is undefined', function() {
    updateStatusbar(undefined, mockButtons);
    assert(spiedHide.calledOnce);
    assert(spiedShow.notCalled);
  });

  test('btn.show() called if terminal exists', function() {
    const terminal = getMockEditorTerminal();
    updateStatusbar(terminal, mockButtons);
    assert(spiedHide.notCalled);
    assert(spiedShow.calledOnce);
  });
});
