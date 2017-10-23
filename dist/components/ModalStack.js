var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ModalStack = (function (_super) {
    __extends(ModalStack, _super);
    function ModalStack() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderModal = function (modal) {
            var config = _this.getModalConfig(modal.name);
            if (config) {
                var ModalComponent = config.component;
                return (React.createElement(ModalComponent, __assign({}, config.props, { key: "Modal" + modal.id, modalId: modal.id, modalData: modal.data, closeModal: function (response) { return _this.props.closeModal(modal.id, modal.name, response); } })));
            }
            else {
                return null;
            }
        };
        _this.getStack = function () {
            if (_this.props.reverse) {
                return _this.props.stack.slice().reverse();
            }
            else {
                return _this.props.stack;
            }
        };
        _this.getModalConfig = function (name) {
            return _this.props.modals.find(function (config) {
                return config.name === name;
            });
        };
        return _this;
    }
    ModalStack.prototype.render = function () {
        return (React.createElement("div", { className: this.props.className, style: this.props.style }, this.getStack().map(this.renderModal)));
    };
    return ModalStack;
}(React.Component));
exports.ModalStack = ModalStack;
