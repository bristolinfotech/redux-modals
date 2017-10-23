Object.defineProperty(exports, "__esModule", { value: true });
exports.MODAL_OPEN = '@@reduxModals/OPEN';
exports.MODAL_CLOSE = '@@reduxModals/CLOSE';
exports.openModal = function (name, data) {
    if (data === void 0) { data = {}; }
    return {
        type: exports.MODAL_OPEN,
        payload: {
            name: name,
            data: data,
        },
    };
};
exports.closeModal = function (id, response) {
    if (response === void 0) { response = {}; }
    return {
        type: exports.MODAL_CLOSE,
        payload: {
            id: id,
            response: response,
        },
    };
};
