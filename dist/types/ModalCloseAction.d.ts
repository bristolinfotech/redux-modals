import { Action } from 'redux';
export interface ModalCloseAction extends Action {
    payload: {
        id: number;
        response: any;
    };
}
