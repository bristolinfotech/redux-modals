import * as React from 'react';
import { compose } from 'recompose';
import { connect, Dispatch } from 'react-redux';
import { closeModal } from './../actions';
import { ModalsState } from './../types';

import { ModalStack, ModalStackInnerProps, ModalStackOuterProps } from './ModalStack';

export interface ConnectedModalStackInnerProps extends ModalStackInnerProps {}

export interface ConnectedModalStackOuterProps extends ModalStackOuterProps {
  getStateFromStore?: (state: any) => ModalsState;
}

const getStateFromStore = (state: any): ModalsState => state.modals;

const mapStateToProps = (state: any, props: ConnectedModalStackOuterProps): Partial<ConnectedModalStackInnerProps> => {
  const getModalsState = props.getStateFromStore ? props.getStateFromStore : getStateFromStore;
  const modalsState = getModalsState(state);
  return {
    stack: modalsState.stack,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<void>): Partial<ConnectedModalStackInnerProps> => ({
  closeModal: (id: number, name: string, response: any) => dispatch(closeModal(id, name, response)),
});

const enhance = compose<ConnectedModalStackInnerProps, ConnectedModalStackOuterProps>(
  connect(mapStateToProps, mapDispatchToProps),
);

export const ConnectedModalStack = enhance(ModalStack);
