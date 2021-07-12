"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationPeriods = void 0;
var react_1 = __importDefault(require("react"));
var state_1 = require("./state");
var constants_1 = require("../../constants");
var utils_1 = require("../../utils");
var InformationPeriods = function () {
    var packages = state_1.useSelectPackage().packages;
    var existOmniPackage = constants_1.packagesFilter.find(function (item) { return item.code === constants_1.EBillingPackageType.Omni; });
    var isOminiPackage = packages.length === constants_1.packagesFilter.length - 1;
    var totalPriceMonth = isOminiPackage
        ? existOmniPackage.price
        : packages.reduce(function (value, item) {
            return item.price + value;
        }, 0);
    var totalPriceYear = isOminiPackage
        ? existOmniPackage.price * 12
        : packages.reduce(function (value, item) {
            return item.price * 12 + value;
        }, 0);
    return (react_1.default.createElement("div", { className: 'flex border-b border-gray-200 py-4' },
        react_1.default.createElement("div", { className: 'flex-1' },
            react_1.default.createElement("div", { className: 'grid grid-cols-3 gap-5' },
                react_1.default.createElement("div", null),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: 'inline-flex inline-block bg-purple-50 text-color-main px-2 py-2 md:px-10 font-medium ', id: 'price-month' },
                        utils_1.formatMoney(totalPriceMonth),
                        react_1.default.createElement("sup", { className: 'top-0' }, "\u0111")),
                    react_1.default.createElement("div", { className: 'font-light text-sm my-4', id: 'price-month-describe' },
                        "Thanh to\u00E1n \u0111\u1ECBnh k\u1EF3 h\u00E0ng th\u00E1ng ",
                        utils_1.formatMoney(totalPriceMonth),
                        "\u0111")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: 'inline-flex inline-block bg-purple-50 text-color-main px-2 py-2 md:px-10 font-medium ', id: 'price-year' },
                        utils_1.formatMoney(totalPriceYear),
                        react_1.default.createElement("sup", { className: 'top-0' }, "\u0111")),
                    react_1.default.createElement("div", { className: 'font-light text-sm my-4', id: 'price-year-describe' },
                        "Thanh to\u00E1n \u0111\u1ECBnh k\u1EF3 h\u00E0ng n\u0103m ",
                        utils_1.formatMoney(totalPriceYear),
                        "\u0111"))))));
};
exports.InformationPeriods = InformationPeriods;
