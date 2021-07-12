"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormAuth = void 0;
var react_1 = __importDefault(require("react"));
var login_1 = require("./login");
var signup_1 = require("./signup");
var forgot_password_1 = require("./forgot-password");
var state_1 = require("./state");
var FormAuth = function () {
    var type = state_1.useFormAuth().type;
    var renderForm = function () {
        if (type === state_1.ITypeFormAuth.LOGIN) {
            return react_1.default.createElement(login_1.Login, null);
        }
        if (type === state_1.ITypeFormAuth.FORGOT) {
            return react_1.default.createElement(forgot_password_1.ForgotPassword, null);
        }
        return react_1.default.createElement(signup_1.Signup, null);
    };
    return react_1.default.createElement("div", { className: 'flex justify-center' }, renderForm());
};
exports.FormAuth = FormAuth;
