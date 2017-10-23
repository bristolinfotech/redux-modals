import { Action } from 'redux';
import { ModalCloseAction, ModalOpenAction } from './types';

export const MODAL_OPEN = '@@reduxModals/OPEN';
export const MODAL_CLOSE = '@@reduxModals/CLOSE';

export function openModal<DataType>(name: string, data: DataType = undefined): ModalOpenAction<DataType> {
  return {
    type: MODAL_OPEN,
    payload: {
      name,
      data,
    },
  };
}

export function closeModal<ResponseType>(
  id: number,
  name: string,
  response: ResponseType = undefined,
): ModalCloseAction<ResponseType> {
  return {
    type: MODAL_CLOSE,
    payload: {
      id,
      name,
      response,
    },
  };
}
