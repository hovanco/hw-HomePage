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
exports.PackageRow = void 0;
var react_1 = __importStar(require("react"));
var PackageRow = function (_a) {
    var packageItem = _a.packageItem;
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var toggle = function () {
        setOpen(!open);
    };
    return (react_1.default.createElement("div", { className: 'package social' },
        react_1.default.createElement("div", { className: 'flex items-center border-b border-gray-200 cursor-pointer' },
            react_1.default.createElement("div", { className: 'flex-1 py-4 package-title', onClick: toggle },
                react_1.default.createElement("div", { className: 'grid grid-cols-3 gap-5' },
                    react_1.default.createElement("div", { className: 'flex items-center text-lg font-medium' },
                        react_1.default.createElement("img", { className: 'inline-block w-4 h-4 mr-1 icon-plus', src: 'images/plus.svg', alt: '', style: {
                                transform: "rotate(" + (open ? '45deg' : '0deg') + ")",
                            } }),
                        packageItem.package),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("img", { className: 'inline-block w-6 h-6 mr-1', src: 'images/check.svg', alt: '' })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("img", { className: 'inline-block w-6 h-6 mr-1', src: 'images/check.svg', alt: '' }))))),
        open && (react_1.default.createElement("div", { className: 'border-b border-gray-200 package-detail' }, packageItem.features.map(function (item, index) {
            var className = "flex items-center py-3 " + (index % 2 === 0 ? 'bg-gray-100' : '');
            return (react_1.default.createElement("div", { className: className },
                react_1.default.createElement("div", { className: 'flex-1' },
                    react_1.default.createElement("div", { className: 'grid grid-cols-3 gap-5' },
                        react_1.default.createElement("div", { className: 'px-5' }, item.label),
                        react_1.default.createElement("div", null, item.month === 'check' ? (react_1.default.createElement("img", { className: 'inline-block w-4 h-4 mr-1', src: 'images/check.svg', alt: '' })) : (item.month)),
                        react_1.default.createElement("div", null, item.year === 'check' ? (react_1.default.createElement("img", { className: 'inline-block w-4 h-4 mr-1', src: 'images/check.svg', alt: '' })) : (item.year))))));
        })))));
};
exports.PackageRow = PackageRow;
