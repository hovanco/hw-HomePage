"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToast = exports.ToastProvider = void 0;
var react_1 = __importStar(require("react"));
var react_toastify_1 = require("react-toastify");
var initialContext = {
    toast: react_toastify_1.toast,
};
var ToastContext = react_1.createContext(initialContext);
var ToastProvider = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(ToastContext.Provider, { value: { toast: react_toastify_1.toast } },
        children,
        react_1.default.createElement(react_toastify_1.ToastContainer, null)));
};
exports.ToastProvider = ToastProvider;
var useToast = function () {
    var value = react_1.useContext(ToastContext);
    return __assign({}, value);
};
exports.useToast = useToast;
