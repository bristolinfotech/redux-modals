import { AnyAction } from 'redux';
import { ModalCloseAction, ModalOpenAction } from './types';
export declare function isModalOpenAction<DataType>(action: AnyAction): action is ModalOpenAction<DataType>;
export declare function isModalCloseAction<ResponseType>(action: AnyAction): action is ModalCloseAction<ResponseType>;
