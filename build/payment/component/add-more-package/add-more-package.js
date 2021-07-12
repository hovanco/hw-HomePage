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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMorePackage = void 0;
var react_1 = __importStar(require("react"));
var react_modal_1 = __importDefault(require("react-modal"));
var select_package_1 = require("../select-package");
var customStyles = {
    overlay: {
        background: 'rgb(17 17 17 / 25%)',
    },
    content: {
        border: 'none',
        borderRadius: 0,
        padding: 0,
        width: '100%',
        maxWidth: 960,
        left: '50%',
        bottom: 40,
        transform: 'translateX(-50%)',
        zIndex: 100,
    },
};
react_modal_1.default.setAppElement('#paymentRoot');
var AddMorePackage = function () {
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    var toggle = function () {
        setOpen(!open);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'flex text-color-main cursor-pointer', onClick: toggle },
            react_1.default.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5', viewBox: '0 0 20 20', fill: 'currentColor' },
                react_1.default.createElement("path", { "fill-rule": 'evenodd', d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z', "clip-rule": 'evenodd' })),
            react_1.default.createElement("span", { className: 'ml-1' }, "Mua th\u00EAm g\u00F3i ")),
        react_1.default.createElement(react_modal_1.default, { isOpen: open, onAfterOpen: function () { }, onRequestClose: toggle, contentLabel: 'Example Modal', style: customStyles },
            react_1.default.createElement("div", { className: 'bg-gray-100 relative text-center py-3' },
                react_1.default.createElement("span", null, "Mua th\u00EAm g\u00F3i"),
                react_1.default.createElement("span", { className: 'absolute right-4', onClick: toggle },
                    react_1.default.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5', viewBox: '0 0 20 20', fill: 'currentColor' },
                        react_1.default.createElement("path", { "fill-rule": 'evenodd', d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z', "clip-rule": 'evenodd' })))),
            react_1.default.createElement("div", { className: 'p-5' },
                react_1.default.createElement(select_package_1.SelectPackage, { toggle: toggle })))));
};
exports.AddMorePackage = AddMorePackage;
