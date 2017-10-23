Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
function isModalOpenAction(action) {
    return action.type === actions_1.MODAL_OPEN;
}
exports.isModalOpenAction = isModalOpenAction;
function isModalCloseAction(action) {
    return action.type === actions_1.MODAL_CLOSE;
}
exports.isModalCloseAction = isModalCloseAction;
