/// <reference types="react" />
import * as React from 'react';
import { ModalsState } from './../types';
import { ModalStackInnerProps, ModalStackOuterProps } from './ModalStack';
export interface ConnectedModalStackInnerProps extends ModalStackInnerProps {
}
export interface ConnectedModalStackOuterProps extends ModalStackOuterProps {
    getStateFromStore?: (state: any) => ModalsState;
}
export declare const ConnectedModalStack: React.ComponentClass<ConnectedModalStackOuterProps>;
