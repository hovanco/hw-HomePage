"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesSelectList = void 0;
var react_1 = __importDefault(require("react"));
var package_row_1 = require("./package-row");
var state_1 = require("./state");
var PackagesSelectList = function () {
    var packages = state_1.useSelectPackage().packages;
    return (react_1.default.createElement(react_1.default.Fragment, null, packages.map(function (item) {
        return react_1.default.createElement(package_row_1.PackageRow, { packageItem: item, key: item.code });
    })));
};
exports.PackagesSelectList = PackagesSelectList;
