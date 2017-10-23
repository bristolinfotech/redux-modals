import { AnyAction } from 'redux';
import { ModalCloseAction, ModalOpenAction } from './types';
import { MODAL_OPEN, MODAL_CLOSE } from './actions';

export function isModalOpenAction(action: AnyAction): action is ModalOpenAction {
  return action.type === MODAL_OPEN;
}

export function isModalCloseAction(action: AnyAction): action is ModalCloseAction {
  return action.type === MODAL_CLOSE;
}
