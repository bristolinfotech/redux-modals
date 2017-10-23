/// <reference types="react" />
import * as React from 'react';
import { Modal, ModalConfig } from './../types';
export interface ModalStackInnerProps extends ModalStackOuterProps {
    stack: Modal[];
    closeModal: (id: number, name: string, response: any) => void;
}
export interface ModalStackOuterProps {
    className?: string;
    style?: React.CSSProperties;
    reverse?: boolean;
    modals: ModalConfig[];
}
export interface ModalStackState {
}
export declare class ModalStack extends React.Component<ModalStackInnerProps, ModalStackState> {
    render(): JSX.Element;
    renderModal: (modal: Modal) => JSX.Element;
    protected getStack: () => Modal[];
    protected getModalConfig: (name: string) => ModalConfig;
}
