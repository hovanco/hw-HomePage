"use strict";
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
exports.Payment = void 0;
var react_1 = __importStar(require("react"));
var state_1 = require("../../state");
var sidebar_1 = require("../sidebar");
var payment_content_1 = require("./payment-content");
var Payment = function () {
    var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
    var _b = react_1.useState(window.innerWidth), width = _b[0], setWidth = _b[1];
    var toggle = function () {
        setVisible(!visible);
    };
    react_1.useEffect(function () {
        var handleResize = function () { return setWidth(window.innerWidth); };
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    });
    var isMobile = width < 768;
    var renderSidebar = function () {
        if (isMobile) {
            if (visible) {
                return react_1.default.createElement(sidebar_1.Sidebar, null);
            }
            return react_1.default.createElement(react_1.default.Fragment, null);
        }
        return react_1.default.createElement(sidebar_1.Sidebar, null);
    };
    return (react_1.default.createElement(state_1.ToastProvider, null,
        react_1.default.createElement(state_1.AuthProvider, null,
            react_1.default.createElement(state_1.StoreProvider, null,
                react_1.default.createElement(state_1.PackageProvider, null,
                    isMobile && (react_1.default.createElement("div", { className: 'border-b px-5 py-6' },
                        react_1.default.createElement("div", { className: 'flex items-center justify-between' },
                            react_1.default.createElement("img", { src: 'images/logo_v2.png', alt: 'Insa', className: 'h-4 block' }),
                            react_1.default.createElement("div", { onClick: toggle },
                                react_1.default.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', className: 'h-6 w-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                                    react_1.default.createElement("path", { "stroke-linecap": 'round', "stroke-linejoin": 'round', "stroke-width": '2', d: 'M4 6h16M4 12h16M4 18h16' })))))),
                    react_1.default.createElement("div", { className: 'flex min-h-screen' },
                        renderSidebar(),
                        isMobile && visible && (react_1.default.createElement("div", { className: 'fixed z-20 top-0 left-0 right-0 bottom-0 bg-gray-500 opacity-70', onClick: toggle })),
                        react_1.default.createElement("div", { className: 'flex-1 ' },
                            react_1.default.createElement("div", { className: 'pt-16' },
                                react_1.default.createElement(payment_content_1.PaymentContent, null)))))))));
};
exports.Payment = Payment;
