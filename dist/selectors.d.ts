import { Modal, ModalsState } from './types';
export declare const getLatestModal: (name: string, state: ModalsState) => Modal;
export declare const getLatestModalByName: (name: string, state: ModalsState) => Modal;
export declare const getModalsByName: (name: string, state: ModalsState) => Modal[];
