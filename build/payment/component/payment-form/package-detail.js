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
exports.PackageDetail = void 0;
var react_1 = __importStar(require("react"));
var utils_1 = require("../../utils");
var PackageDetail = function (_a) {
    var content = _a.content;
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var toggle = function () {
        setOpen(!open);
    };
    var styleArrow = open
        ? {
            transform: 'rotate(90deg)',
        }
        : {};
    var stringArr = utils_1.formatDescription(content);
    return (react_1.default.createElement("div", { className: 'bg-gray-100' },
        react_1.default.createElement("div", { className: 'flex justify-between items-center p-4 cursor-pointer', onClick: toggle },
            react_1.default.createElement("span", { className: 'font-medium text-sm' }, "Chi ti\u1EBFt g\u00F3i s\u1EA3n ph\u1EA9m"),
            react_1.default.createElement("span", { style: styleArrow },
                react_1.default.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5', viewBox: '0 0 20 20', fill: 'currentColor' },
                    react_1.default.createElement("path", { "fill-rule": 'evenodd', d: 'M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z', "clip-rule": 'evenodd' })))),
        open && (react_1.default.createElement("div", { className: 'px-4 pb-4' },
            react_1.default.createElement("ul", { style: { color: '#222a46' }, className: 'grid gap-2 text-sm' }, stringArr.map(function (string) { return (react_1.default.createElement("li", { key: string },
                "- ",
                string)); }))))));
};
exports.PackageDetail = PackageDetail;
