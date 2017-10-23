import { ModalCloseAction, ModalOpenAction } from './types';
export declare const MODAL_OPEN = "@@reduxModals/OPEN";
export declare const MODAL_CLOSE = "@@reduxModals/CLOSE";
export declare const openModal: (name: string, data?: any) => ModalOpenAction;
export declare const closeModal: (id: number, response?: any) => ModalCloseAction;
