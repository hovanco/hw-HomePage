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
exports.PackageItem = void 0;
var react_1 = __importStar(require("react"));
var utils_1 = require("../../utils");
var PackageItem = function (_a) {
    var packageItem = _a.packageItem;
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var toggle = function () {
        setOpen(!open);
    };
    var desc = utils_1.formatDescription(packageItem.description);
    return (react_1.default.createElement("div", { className: 'border-b' },
        react_1.default.createElement("div", { className: 'flex items-center justify-between pl-10 py-4 pr-4 cursor-pointer hover:bg-gray-50', onClick: toggle },
            react_1.default.createElement("div", { className: 'flex-1', style: { color: packageItem.color } },
                react_1.default.createElement("div", { className: 'text-md xl:text-lg' }, packageItem.alias + " - " + utils_1.formatMoney(packageItem.price) + "\u0111/ Th\u00E1ng"),
                react_1.default.createElement("span", { className: 'text-gray-500 text-sm' }, "L\u1EADp h\u00F3a \u0111\u01A1n h\u00E0ng th\u00E1ng")),
            react_1.default.createElement("div", { className: 'ml-8' },
                react_1.default.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5', viewBox: '0 0 20 20', fill: 'currentColor' },
                    react_1.default.createElement("path", { "fill-rule": 'evenodd', d: 'M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z', "clip-rule": 'evenodd' })))),
        open && (react_1.default.createElement("ul", null, desc.map(function (text, index) {
            var className = "pl-10 py-3 pr-5 flex items-center justify-between " + (index % 2 === 0 ? 'bg-gray-100' : '');
            return (react_1.default.createElement("li", { className: className, key: text },
                react_1.default.createElement("span", null, text)));
        })))));
};
exports.PackageItem = PackageItem;
