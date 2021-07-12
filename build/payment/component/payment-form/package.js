"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Package = void 0;
var react_1 = __importDefault(require("react"));
var state_1 = require("../../state");
var package_detail_1 = require("./package-detail");
var package_heading_1 = require("./package-heading");
var Package = function (_a) {
    var item = _a.item;
    var removePackage = state_1.usePackages().removePackage;
    var handleRemovePackage = function () {
        removePackage(item.code);
    };
    return (react_1.default.createElement("div", { className: 'p-5 border-b' },
        react_1.default.createElement(package_heading_1.PackageHeading, { removePackage: handleRemovePackage, title: item.alias, price: item.price }),
        react_1.default.createElement(package_detail_1.PackageDetail, { content: item.description })));
};
exports.Package = Package;
