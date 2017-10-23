import { Action } from 'redux';
export interface ModalOpenAction extends Action {
    payload: {
        name: string;
        data: any;
    };
}
