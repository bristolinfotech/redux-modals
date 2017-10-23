import { Action } from 'redux';

export interface ModalOpenAction<DataType> extends Action {
  payload: {
    name: string;
    data: DataType;
  };
}
