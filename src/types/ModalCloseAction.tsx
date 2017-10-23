import { Action } from 'redux';

export interface ModalCloseAction<ResponseType> extends Action {
  payload: {
    id: number;
    name: string;
    response: ResponseType;
  };
}
