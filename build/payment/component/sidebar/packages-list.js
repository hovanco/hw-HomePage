"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesList = void 0;
var react_1 = __importDefault(require("react"));
var state_1 = require("../../state");
var package_item_1 = require("./package-item");
var PackagesList = function () {
    var packages = state_1.usePackages().packages;
    if (packages.length === 0) {
        return (react_1.default.createElement("div", { className: 'text-center px-2 py-4 text-xs text-gray-400' }, "B\u1EA1n ch\u01B0a ch\u1ECDn g\u00F3i n\u00E0o"));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null, packages.map(function (item) { return (react_1.default.createElement(package_item_1.PackageItem, { key: item.id, packageItem: item })); })));
};
exports.PackagesList = PackagesList;
