"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectPackage = void 0;
var react_1 = __importDefault(require("react"));
var add_package_btn_1 = require("./add-package-btn");
var dropdown_select_package_1 = require("./dropdown-select-package");
var information_periods_1 = require("./information-periods");
var packages_select_list_1 = require("./packages-select-list");
var state_1 = require("./state");
var SelectPackage = function (_a) {
    var toggle = _a.toggle;
    return (react_1.default.createElement(state_1.SelectPackageProvider, { toggle: toggle },
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: 'flex border-b border-gray-200 py-4' },
                react_1.default.createElement("div", { className: 'flex-1' },
                    react_1.default.createElement("div", { className: 'grid grid-cols-3 gap-5' },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement(dropdown_select_package_1.DropdownSelectPackage, null)),
                        react_1.default.createElement("div", { className: 'font-medium' }, "Theo th\u00E1ng"),
                        react_1.default.createElement("div", { className: 'font-medium' }, "Theo n\u0103m")))),
            react_1.default.createElement(information_periods_1.InformationPeriods, null),
            react_1.default.createElement(packages_select_list_1.PackagesSelectList, null),
            react_1.default.createElement("div", { className: 'grid grid-cols-3 py-4 gap-5 ' },
                react_1.default.createElement("div", { className: 'px-4 flex items-center font-medium' }),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(add_package_btn_1.AddPackageBtn, { type: add_package_btn_1.ETypePeriod.Month })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(add_package_btn_1.AddPackageBtn, { type: add_package_btn_1.ETypePeriod.Year }))))));
};
exports.SelectPackage = SelectPackage;
