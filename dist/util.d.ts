import { AnyAction } from 'redux';
import { ModalCloseAction, ModalOpenAction } from './types';
export declare function isModalOpenAction(action: AnyAction): action is ModalOpenAction;
export declare function isModalCloseAction(action: AnyAction): action is ModalCloseAction;
