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
exports.DropdownSelectPackage = void 0;
var react_1 = __importStar(require("react"));
var constants_1 = require("../../constants");
var hook_1 = require("../../hook");
var state_1 = require("../../state");
var state_2 = require("./state");
var DropdownSelectPackage = function () {
    var elRef = react_1.useRef();
    var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
    var _b = react_1.useState(), packageSelect = _b[0], setPackageSelect = _b[1];
    var _c = state_2.useSelectPackage(), selectAllPackage = _c.selectAllPackage, selectPackage = _c.selectPackage, packagesSelect = _c.packages;
    var packages = state_1.usePackages().packages;
    hook_1.useClickOutside(elRef, function () {
        setVisible(false);
    });
    var packagesFilter = state_2.getPackagesFilter(packages);
    return (react_1.default.createElement("div", { className: 'relative package-select', ref: elRef },
        react_1.default.createElement("div", { className: 'inline-block font-medium cursor-pointer package-select-label', onClick: function () { return setVisible(true); } }, packagesSelect.length === constants_1.packagesFilter.length - 1
            ? 'Tất cả'
            : packageSelect
                ? packageSelect.package
                : 'Tất cả'),
        react_1.default.createElement("ul", { className: 'absolute left-0 py-1 bg-white border border-gray-200 grid package-list -top-full', style: {
                opacity: visible ? 1 : 0,
                visibility: visible ? 'visible' : 'hidden',
                transform: "translateY(" + (visible ? 0 : 10) + "px)",
            } },
            react_1.default.createElement("li", { className: 'p-2 cursor-pointer hover:bg-blue-700 hover:text-white', onClick: function () {
                    setVisible(false);
                    selectAllPackage();
                } }, "T\u1EA5t c\u1EA3"),
            packagesFilter.map(function (item) {
                var handleClick = function () {
                    setPackageSelect(item);
                    selectPackage(item.code);
                    setVisible(false);
                };
                return (react_1.default.createElement("li", { key: item.code, className: 'p-2 cursor-pointer hover:bg-blue-700 hover:text-white', onClick: handleClick }, item.package));
            }))));
};
exports.DropdownSelectPackage = DropdownSelectPackage;
