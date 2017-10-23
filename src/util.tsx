import { AnyAction } from 'redux';
import { ModalCloseAction, ModalOpenAction } from './types';
import { MODAL_OPEN, MODAL_CLOSE } from './actions';

export function isModalOpenAction<DataType>(action: AnyAction): action is ModalOpenAction<DataType> {
  return action.type === MODAL_OPEN;
}

export function isModalCloseAction<ResponseType>(action: AnyAction): action is ModalCloseAction<ResponseType> {
  return action.type === MODAL_CLOSE;
}
