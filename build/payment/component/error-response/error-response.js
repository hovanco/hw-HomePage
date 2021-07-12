"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = void 0;
var react_1 = __importDefault(require("react"));
var ErrorResponse = function (_a) {
    var message = _a.message, onClose = _a.onClose;
    return (react_1.default.createElement("div", { className: 'border flex justify-between items-center border-red-300  bg-red-200 p-3 text-red-500' },
        react_1.default.createElement("div", { className: 'pl-4 text-sm' }, message),
        react_1.default.createElement("span", { onClick: onClose, className: 'cursor-pointer hover:opacity-80' },
            react_1.default.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5', viewBox: '0 0 20 20', fill: 'currentColor' },
                react_1.default.createElement("path", { "fill-rule": 'evenodd', d: 'M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z', "clip-rule": 'evenodd' })))));
};
exports.ErrorResponse = ErrorResponse;
