import { Action } from 'redux';
import { Modal, ModalsState } from './types';
import { isModalCloseAction, isModalOpenAction } from './util';

const initialState: ModalsState = {
  idCounter: 0,
  stack: [],
};

export const modalsReducer = (state: ModalsState = initialState, action: Action): Partial<ModalsState> => {
  if (isModalOpenAction(action)) {
    const modal: Modal = {
      id: state.idCounter + 1,
      name: action.payload.name,
      data: action.payload.data,
    };
    return {
      ...state,
      idCounter: modal.id,
      stack: [modal, ...state.stack],
    };
  } else if (isModalCloseAction(action)) {
    return {
      ...state,
      stack: state.stack.filter((modal) => {
        return modal.id !== action.payload.id;
      }),
    };
  } else {
    return state;
  }
};
