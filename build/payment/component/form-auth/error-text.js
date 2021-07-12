"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorText = void 0;
var react_1 = __importDefault(require("react"));
var ErrorText = function (_a) {
    var message = _a.message;
    return (react_1.default.createElement("span", { role: 'alert', className: 'text-sm text-red-600 mt-1' }, message));
};
exports.ErrorText = ErrorText;
