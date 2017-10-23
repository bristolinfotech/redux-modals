export interface ModalProps<DataType, ResponseType> {
    modalId: number;
    modalData: DataType;
    closeModal: (response: ResponseType) => void;
}
