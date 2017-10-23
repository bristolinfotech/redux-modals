import { Action } from 'redux';
import { ModalCloseAction, ModalOpenAction } from './types';

export const MODAL_OPEN = '@@reduxModals/OPEN';
export const MODAL_CLOSE = '@@reduxModals/CLOSE';

export const openModal = (name: string, data: any = {}): ModalOpenAction => {
  return {
    type: MODAL_OPEN,
    payload: {
      name,
      data,
    },
  };
};

export const closeModal = (id: number, response: any = {}): ModalCloseAction => {
  return {
    type: MODAL_CLOSE,
    payload: {
      id,
      response,
    },
  };
};
