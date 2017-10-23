var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var initialState = {
    idCounter: 0,
    stack: [],
};
exports.modalsReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    if (util_1.isModalOpenAction(action)) {
        var modal = {
            id: state.idCounter + 1,
            name: action.payload.name,
            data: action.payload.data,
        };
        return __assign({}, state, { idCounter: modal.id, stack: [modal].concat(state.stack) });
    }
    else if (util_1.isModalCloseAction(action)) {
        return __assign({}, state, { stack: state.stack.filter(function (modal) {
                return modal.id !== action.payload.id;
            }) });
    }
    else {
        return state;
    }
};
