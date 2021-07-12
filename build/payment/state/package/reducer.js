"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.initialState = void 0;
var constants_1 = require("../../constants");
var types = __importStar(require("./types"));
exports.initialState = {
    loading: true,
    packages: constants_1.packagesFilter,
    transactionCode: undefined,
    period: constants_1.BillingPeriods.OneMonth,
    success: false,
};
var reducer = function (state, action) {
    switch (action.type) {
        case types.LOADING:
            return __assign(__assign({}, state), { loading: true });
        case types.LOAD_PACKAGES_DONE:
            return __assign(__assign({}, state), { packages: action.payload, loading: false });
        case types.SET_TRANSACTION_CODE:
            return __assign(__assign({}, state), { transactionCode: action.payload });
        case types.ADD_PACKAGE:
            return __assign(__assign({}, state), { packages: action.payload });
        case types.ADD_PACKAGES:
            return __assign(__assign({}, state), { packages: __spreadArray(__spreadArray([], state.packages), action.payload) });
        case types.REMOVE_PACKAGE:
            return __assign(__assign({}, state), { packages: action.payload });
        case types.SET_PERIODS:
            return __assign(__assign({}, state), { period: action.payload });
        case types.CHANGE_SUCCESS:
            return __assign(__assign({}, state), { success: action.payload });
        default:
            return state;
    }
};
exports.reducer = reducer;
