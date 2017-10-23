Object.defineProperty(exports, "__esModule", { value: true });
var recompose_1 = require("recompose");
var react_redux_1 = require("react-redux");
var actions_1 = require("./../actions");
var ModalStack_1 = require("./ModalStack");
var getStateFromStore = function (state) { return state.modals; };
var mapStateToProps = function (state, props) {
    var getModalsState = props.getStateFromStore ? props.getStateFromStore : getStateFromStore;
    var modalsState = getModalsState(state);
    return {
        stack: modalsState.stack,
    };
};
var mapDispatchToProps = function (dispatch) { return ({
    closeModal: function (id, name, response) { return dispatch(actions_1.closeModal(id, name, response)); },
}); };
var enhance = recompose_1.compose(react_redux_1.connect(mapStateToProps, mapDispatchToProps));
exports.ConnectedModalStack = enhance(ModalStack_1.ModalStack);
