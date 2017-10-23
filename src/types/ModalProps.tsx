export interface ModalProps<DataType, ResponseType> {
  modalId: number;
  modalData: DataType;
  modalName: string;
  closeModal: (response: ResponseType) => void;
}
