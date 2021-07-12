"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageHeading = void 0;
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../utils");
var PackageHeading = function (_a) {
    var title = _a.title, price = _a.price, removePackage = _a.removePackage;
    return (react_1.default.createElement("div", { className: 'flex items-baseline justify-between mb-3' },
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: 'font-medium mb-1' },
                "G\u00F3i ",
                title),
            react_1.default.createElement("div", null,
                utils_1.formatMoney(price),
                "\u0111/1 th\u00E1ng (\u0111\u00E3 bao g\u1ED3m thu\u1EBF)")),
        react_1.default.createElement("span", { className: 'block cursor-pointer', onClick: removePackage },
            react_1.default.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                react_1.default.createElement("path", { "stroke-linecap": 'round', "stroke-linejoin": 'round', "stroke-width": '2', d: 'M6 18L18 6M6 6l12 12' })))));
};
exports.PackageHeading = PackageHeading;
