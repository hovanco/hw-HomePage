"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loading = void 0;
var react_1 = __importDefault(require("react"));
var LoadingCom = function () { return (react_1.default.createElement("div", { className: 'lds-ripple' },
    react_1.default.createElement("div", null),
    react_1.default.createElement("div", null))); };
var Loading = function (_a) {
    var _b = _a.full, full = _b === void 0 ? true : _b;
    if (full) {
        return (react_1.default.createElement("div", { className: 'absolute top-0 left-0 bottom-0 right-0 bg-pink flex items-center justify-center' },
            react_1.default.createElement(LoadingCom, null)));
    }
    return react_1.default.createElement(LoadingCom, null);
};
exports.Loading = Loading;
