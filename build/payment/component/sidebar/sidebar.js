"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidebar = void 0;
var react_1 = __importDefault(require("react"));
var packages_list_1 = require("./packages-list");
var Sidebar = function () {
    return (react_1.default.createElement("div", { className: 'bg-white border-r max-w-sm fixed md:relative top-0 left-0 bottom-0 z-50' },
        react_1.default.createElement("div", { className: 'border-b pl-10 py-5 pr-5' },
            react_1.default.createElement("a", { href: '/' },
                react_1.default.createElement("img", { src: 'images/logo_v2.png', alt: 'Insa', className: 'h-4 block' })),
            react_1.default.createElement("div", { className: 'mt-2 text-sm text-gray-500' }, "B\u1EA0N \u0110ANG CH\u1ECCN")),
        react_1.default.createElement(packages_list_1.PackagesList, null)));
};
exports.Sidebar = Sidebar;
