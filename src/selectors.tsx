import { Modal, ModalsState } from './types';

export const getLatestModal = (name: string, state: ModalsState): null | Modal => {
  return state.stack.length > 0 ? state.stack[0] : null;
};

export const getLatestModalByName = (name: string, state: ModalsState): null | Modal => {
  const modal = state.stack.find((m) => {
    return m.name === name;
  });
  return modal ? modal : null;
};

export const getModalsByName = (name: string, state: ModalsState): Modal[] => {
  return state.stack.filter((modal) => {
    return modal.name === name;
  });
};
