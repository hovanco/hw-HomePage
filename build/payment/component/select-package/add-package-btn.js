"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPackageBtn = exports.ETypePeriod = void 0;
var react_1 = __importDefault(require("react"));
var state_1 = require("../../state");
var state_2 = require("./state");
var ETypePeriod;
(function (ETypePeriod) {
    ETypePeriod["Month"] = "month";
    ETypePeriod["Year"] = "year";
})(ETypePeriod = exports.ETypePeriod || (exports.ETypePeriod = {}));
var AddPackageBtn = function (_a) {
    var type = _a.type;
    var addPackages = state_1.usePackages().addPackages;
    var _b = state_2.useSelectPackage(), packages = _b.packages, toggle = _b.toggle;
    var handleClick = function () {
        addPackages(packages);
        toggle();
    };
    return (react_1.default.createElement("button", { className: 'py-2 px-6 lg:px-20 text-white btn', onClick: handleClick }, "Th\u00EAm g\u00F3i"));
};
exports.AddPackageBtn = AddPackageBtn;
