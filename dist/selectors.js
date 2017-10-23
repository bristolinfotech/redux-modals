Object.defineProperty(exports, "__esModule", { value: true });
exports.getLatestModal = function (name, state) {
    return state.stack.length > 0 ? state.stack[0] : null;
};
exports.getLatestModalByName = function (name, state) {
    var modal = state.stack.find(function (m) {
        return m.name === name;
    });
    return modal ? modal : null;
};
exports.getModalsByName = function (name, state) {
    return state.stack.filter(function (modal) {
        return modal.name === name;
    });
};
