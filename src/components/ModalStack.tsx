import * as React from 'react';
import { compose } from 'recompose';
import { connect, Dispatch } from 'react-redux';
import { Modal, ModalConfig, ModalProps } from './../types';

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
export interface ModalStackState {}

export class ModalStack extends React.Component<ModalStackInnerProps, ModalStackState> {

  public render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        {this.getStack().map(this.renderModal)}
      </div>
    );
  }

  public renderModal = (modal: Modal) => {
    const config = this.getModalConfig(modal.name);
    if (config) {
      const ModalComponent = config.component;
      return (
        <ModalComponent
          {...config.props}
          key={`Modal${modal.id}`}
          modalId={modal.id}
          modalData={modal.data}
          modalName={modal.name}
          closeModal={(response: any) => this.props.closeModal(modal.id, modal.name, response)}
        />
      );
    } else {
      return null;
    }
  }

  protected getStack = (): Modal[] => {
    if (this.props.reverse) {
      return [...this.props.stack].reverse();
    } else {
      return this.props.stack;
    }
  }

  protected getModalConfig = (name: string): ModalConfig | undefined => {
    return this.props.modals.find((config) => {
      return config.name === name;
    });
  }
}
