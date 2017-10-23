/// <reference types="react" />
import { ModalProps } from './';
export interface ModalConfig {
    name: string;
    component: new (props: ModalProps<any, any>) => React.Component<ModalProps<any, any>>;
    props?: any;
}
