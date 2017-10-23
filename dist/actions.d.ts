import { ModalCloseAction, ModalOpenAction } from './types';
export declare const MODAL_OPEN = "@@reduxModals/OPEN";
export declare const MODAL_CLOSE = "@@reduxModals/CLOSE";
export declare function openModal<DataType>(name: string, data?: DataType): ModalOpenAction<DataType>;
export declare function closeModal<ResponseType>(id: number, name: string, response?: ResponseType): ModalCloseAction<ResponseType>;
