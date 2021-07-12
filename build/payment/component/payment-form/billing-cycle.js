"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingCycle = void 0;
var react_1 = __importDefault(require("react"));
var constants_1 = require("../../constants");
var state_1 = require("../../state");
var utils_1 = require("../../utils");
var BillingCycle = function () {
    var _a = state_1.usePackages(), period = _a.period, setPeriods = _a.setPeriods, packages = _a.packages;
    var omniExist = packages.find(function (item) { return item.code === constants_1.EBillingPackageType.Omni; });
    var periodsCycles = omniExist ? omniExist.cycles : constants_1.packages[0].cycles;
    return (react_1.default.createElement("div", { className: 'p-5' }, periodsCycles.map(function (item) {
        var handleClick = function () {
            setPeriods(item.id);
        };
        return (react_1.default.createElement("div", { key: item.id, className: 'flex items-center cursor-pointer' },
            react_1.default.createElement("input", { type: 'radio', id: item.id, name: 'cycles', value: item.id, onClick: handleClick, checked: period === item.id }),
            react_1.default.createElement("label", { htmlFor: item.id, className: 'ml-2' }, utils_1.formatMoney(item.price) + "\u0111 / " + item.name)));
    })));
};
exports.BillingCycle = BillingCycle;
