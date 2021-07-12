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
exports.PaymentForm = void 0;
var react_1 = __importStar(require("react"));
var constants_1 = require("../../constants");
var state_1 = require("../../state");
var utils_1 = require("../../utils");
var add_more_package_1 = require("../add-more-package");
var billing_cycle_1 = require("./billing-cycle");
var package_1 = require("./package");
var submit_billing_1 = require("./submit-billing");
var PaymentForm = function () {
    var _a = state_1.usePackages(), packages = _a.packages, transactionCode = _a.transactionCode, genTransationCode = _a.genTransationCode, period = _a.period, success = _a.success;
    react_1.useEffect(function () {
        if (packages.length > 0) {
            genTransationCode();
        }
    }, [packages]);
    var totalPrice = utils_1.formatMoney(packages.reduce(function (value, item) {
        return (period || 0) * item.price + value;
    }, 0));
    var existOmniPackage = packages.find(function (item) { return item.code === constants_1.EBillingPackageType.Omni; });
    var isShowAddPackage = !existOmniPackage && constants_1.packagesFilter.length - 1 > packages.length;
    return (react_1.default.createElement("div", { className: 'max-w-xl md:max-w-7xl bg-ink mx-4 md:mx-14 scale-0' },
        react_1.default.createElement("div", { className: 'mb-8 text-xl' }, "H\u00ECnh th\u1EE9c thanh to\u00E1n"),
        success ? (react_1.default.createElement("div", { className: 'text-center max-w-lg mx-auto px-5' },
            react_1.default.createElement("img", { src: '/images/success-payment.png', alt: '', className: 'mx-auto block m-w-full mb-8' }),
            react_1.default.createElement("div", { className: 'text-4xl font-medium text-blue-700 mb-6' }, "Thanh to\u00E1n th\u00E0nh c\u00F4ng"),
            react_1.default.createElement("a", { className: 'inline-block  bg-blue-700 px-20 py-3 text-white mx-auto ', href: '/' }, "X\u00E1c nh\u1EADn"))) : (react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: 'grid grid-cols-1 gap-8 lg:grid-cols-2 gap-8' },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: 'border' },
                        react_1.default.createElement("div", { className: 'font-medium py-4 border-b text-center bg-gray-100 font=semibold' }, "Chi ti\u1EBFt thanh to\u00E1n"),
                        react_1.default.createElement("div", null, packages.map(function (item) { return (react_1.default.createElement(package_1.Package, { item: item })); })),
                        isShowAddPackage && (react_1.default.createElement("div", { className: 'py-4 px-5' },
                            react_1.default.createElement(add_more_package_1.AddMorePackage, null))))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", { className: 'border' },
                            react_1.default.createElement("div", { className: 'font-medium py-4 border-b text-center bg-gray-100 font=semibold' }, "Ch\u1ECDn chu k\u00EC thanh to\u00E1n"),
                            react_1.default.createElement("div", { className: 'p-5' },
                                react_1.default.createElement(billing_cycle_1.BillingCycle, null))),
                        react_1.default.createElement("div", { className: 'border mt-8' },
                            react_1.default.createElement("div", { className: 'font-medium py-4 border-b text-center bg-gray-100' }, "Thanh to\u00E1n"),
                            react_1.default.createElement("div", { className: 'bg-gray-100 p-5' },
                                react_1.default.createElement("ul", { className: 'grid gap-2' },
                                    react_1.default.createElement("li", { className: 'grid grid-cols-2' },
                                        react_1.default.createElement("div", null, "M\u00E3 \u0111\u01A1n h\u00E0ng"),
                                        react_1.default.createElement("div", null,
                                            ":",
                                            ' ',
                                            react_1.default.createElement("span", { className: 'text-color-main' }, transactionCode))),
                                    react_1.default.createElement("li", { className: 'grid grid-cols-2' },
                                        react_1.default.createElement("div", null, "T\u1EA1m t\u00EDnh"),
                                        react_1.default.createElement("div", null,
                                            ": ",
                                            totalPrice,
                                            "\u0111")),
                                    react_1.default.createElement("li", null,
                                        react_1.default.createElement("div", { className: 'mb-3' }, "Code gi\u1EA3m gi\u00E1/ Coupon"),
                                        react_1.default.createElement("div", { className: 'flex' },
                                            react_1.default.createElement("input", { className: 'py-2 px-3 md:py-2 md:px-5 border-none flex-1 border-gray-200', placeholder: 'Coupon/code' }),
                                            react_1.default.createElement("button", { className: 'py-2 px-3 md:py-2 md:px-5 bg-color-main ml-4 text-white' }, "\u00C1p d\u1EE5ng"))))),
                            react_1.default.createElement("div", { className: 'py-4 border-t text-center bg-gray-100' },
                                "T\u1ED4NG THANH TO\u00C1N: ",
                                totalPrice,
                                "\u0111")),
                        react_1.default.createElement("div", { className: 'border border-blue-100 bg-blue-50 mt-8' },
                            react_1.default.createElement("div", { className: 'font-medium py-4 border-b border-blue-100 bg-blue-100 text-center cursor-pointer' }, "Chuy\u1EC3n kho\u1EA3n ng\u00E2n h\u00E0ng"),
                            react_1.default.createElement("div", { className: 'p-5' },
                                react_1.default.createElement("div", { className: 'mb-4' },
                                    react_1.default.createElement("div", { className: 'font-medium' }, "Kh\u00E1ch h\u00E0ng chuy\u1EC3n kho\u1EA3n theo c\u00FA ph\u00E1p:"),
                                    react_1.default.createElement("span", { className: 'text-color-main' }, "M\u00E3 \u0111\u01A1n h\u00E0ng + S\u0110T \u0111\u1EB7t h\u00E0ng")),
                                react_1.default.createElement("div", { className: 'grid gap-3' },
                                    react_1.default.createElement("div", { className: 'font-medium' }, "Th\u00F4ng tin chuy\u1EC3n kho\u1EA3n ng\u00E2n h\u00E0ng"),
                                    react_1.default.createElement("div", null,
                                        react_1.default.createElement("div", { className: 'font-medium mb-2' }, "Tr\u1EA7n Ho\u00E0ng Hi\u1EC7p"),
                                        react_1.default.createElement("ul", { className: 'grid gap-1', style: { color: '#222a46' } },
                                            react_1.default.createElement("li", null, "- Ng\u00E2n h\u00E0ng: Techcombank chi nh\u00E1nh \u0110\u00E0 N\u1EB5ng"),
                                            react_1.default.createElement("li", null, "- S\u1ED1 t\u00E0i kho\u1EA3n: 19033620454213"))),
                                    react_1.default.createElement("div", null,
                                        react_1.default.createElement("div", { className: 'font-medium mb-2' }, "Tr\u1EA7n Ho\u00E0ng Hi\u1EC7p"),
                                        react_1.default.createElement("ul", { className: 'grid gap-1', style: { color: '#222a46' } },
                                            react_1.default.createElement("li", null, "- Ng\u00E2n h\u00E0ng: Vietcombank chi nh\u00E1nh \u0110\u00E0 N\u1EB5ng"),
                                            react_1.default.createElement("li", null, "- S\u1ED1 t\u00E0i kho\u1EA3n: 041000555475"))))))))),
            react_1.default.createElement("div", { className: 'border-t py-8 text-right mt-8' },
                react_1.default.createElement("a", { href: '/', className: 'inline-block py-2 px-6 md:py-4 md:px-10 mr-4 border' }, "H\u1EE7y"),
                react_1.default.createElement(submit_billing_1.SubmitBilling, null))))));
};
exports.PaymentForm = PaymentForm;
