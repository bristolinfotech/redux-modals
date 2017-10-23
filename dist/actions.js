Object.defineProperty(exports, "__esModule", { value: true });
exports.MODAL_OPEN = '@@reduxModals/OPEN';
exports.MODAL_CLOSE = '@@reduxModals/CLOSE';
function openModal(name, data) {
    if (data === void 0) { data = undefined; }
    return {
        type: exports.MODAL_OPEN,
        payload: {
            name: name,
            data: data,
        },
    };
}
exports.openModal = openModal;
function closeModal(id, name, response) {
    if (response === void 0) { response = undefined; }
    return {
        type: exports.MODAL_CLOSE,
        payload: {
            id: id,
            name: name,
            response: response,
        },
    };
}
exports.closeModal = closeModal;
