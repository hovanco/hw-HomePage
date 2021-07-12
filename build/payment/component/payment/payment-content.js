"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentContent = void 0;
var react_1 = __importDefault(require("react"));
var state_1 = require("../../state");
var create_store_1 = require("../create-store");
var form_auth_1 = require("../form-auth");
var state_2 = require("../form-auth/state");
var payment_form_1 = require("../payment-form");
var PaymentContent = function () {
    var user = state_1.useAuth().user;
    var store = state_1.useStore().store;
    if (!user) {
        return (react_1.default.createElement(state_2.FormProvider, null,
            react_1.default.createElement(form_auth_1.FormAuth, null)));
    }
    if (!store) {
        return react_1.default.createElement(create_store_1.CreateStore, null);
    }
    return react_1.default.createElement(payment_form_1.PaymentForm, null);
};
exports.PaymentContent = PaymentContent;
