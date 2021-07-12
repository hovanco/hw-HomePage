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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePackages = exports.PackageProvider = void 0;
var query_string_1 = __importDefault(require("query-string"));
var react_1 = __importStar(require("react"));
var constants_1 = require("../../constants");
var api_1 = require("../../api");
var loading_1 = require("../../component/loading");
var store_1 = require("../store");
var reducer_1 = require("./reducer");
var types = __importStar(require("./types"));
var initialContext = {
    state: reducer_1.initialState,
    dispatch: function () { },
};
var PackageContext = react_1.createContext(initialContext);
var PackageProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useReducer(reducer_1.reducer, reducer_1.initialState), state = _b[0], dispatch = _b[1];
    react_1.useEffect(function () {
        function getPackages() {
            return __awaiter(this, void 0, void 0, function () {
                var search, packageIds, packageIdsExist, packagesSelect, url, packageOmni, periodParam;
                return __generator(this, function (_a) {
                    search = query_string_1.default.parse(window.location.search);
                    if (!search.packages) {
                        dispatch({
                            type: types.LOAD_PACKAGES_DONE,
                            payload: [],
                        });
                        return [2 /*return*/];
                    }
                    packageIds = search.packages.split(',');
                    packageIdsExist = [];
                    packagesSelect = [];
                    packageIds.forEach(function (code) {
                        var packageExist = state.packages.find(function (item) { return item.type === code; });
                        if (packageExist) {
                            packagesSelect.push(packageExist);
                            packageIdsExist.push(code);
                        }
                    });
                    if (packageIdsExist.length !== packageIds.length) {
                        url = window.location.origin + "/error?packages=" + search;
                        window.location.href = url;
                    }
                    if (packageIdsExist.length === 2) {
                        packageOmni = constants_1.packagesFilter.filter(function (item) { return item.type === 'all'; });
                        dispatch({
                            type: types.LOAD_PACKAGES_DONE,
                            payload: packageOmni,
                        });
                    }
                    else {
                        dispatch({
                            type: types.LOAD_PACKAGES_DONE,
                            payload: packagesSelect,
                        });
                    }
                    periodParam = search.period === 'year' ? constants_1.BillingPeriods.OneYear : constants_1.BillingPeriods.OneMonth;
                    dispatch({
                        type: types.SET_PERIODS,
                        payload: periodParam,
                    });
                    return [2 /*return*/];
                });
            });
        }
        getPackages();
    }, []);
    var value = react_1.useMemo(function () { return ({ state: state, dispatch: dispatch }); }, [state, dispatch]);
    if (state.loading) {
        return react_1.default.createElement(loading_1.Loading, null);
    }
    return react_1.default.createElement(PackageContext.Provider, { value: value }, children);
};
exports.PackageProvider = PackageProvider;
var usePackages = function () {
    var store = store_1.useStore().store;
    var _a = react_1.useContext(PackageContext), state = _a.state, dispatch = _a.dispatch;
    var genTransationCode = function () { return __awaiter(void 0, void 0, void 0, function () {
        var transactionCode, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (!store._id)
                        return [2 /*return*/];
                    return [4 /*yield*/, api_1.createTransactionCode(store._id, null)];
                case 1:
                    transactionCode = _a.sent();
                    dispatch({
                        type: types.SET_TRANSACTION_CODE,
                        payload: transactionCode,
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var removePackage = function (code) {
        var newPackges = state.packages.filter(function (item) { return item.code !== code; });
        dispatch({
            type: types.REMOVE_PACKAGE,
            payload: newPackges,
        });
    };
    var addPackage = function (code) {
        var packageExist = constants_1.packagesFilter.find(function (item) { return item.code === code; });
        if (!packageExist) {
            return;
        }
        var newPackges = __spreadArray(__spreadArray([], state.packages), [packageExist]);
        dispatch({
            type: types.ADD_PACKAGE,
            payload: newPackges,
        });
    };
    var addPackages = function (items) {
        var omniPackage = items.find(function (item) { return item.code === constants_1.EBillingPackageType.Omni; });
        if (!!omniPackage) {
            return dispatch({
                type: types.LOAD_PACKAGES_DONE,
                payload: [omniPackage],
            });
        }
        var newPackges = state.packages.filter(function (item) { return item.code !== constants_1.EBillingPackageType.Omni; });
        if (__spreadArray(__spreadArray([], newPackges), items).length === constants_1.packagesFilter.length - 1) {
            omniPackage = constants_1.packagesFilter.find(function (item) { return item.code === constants_1.EBillingPackageType.Omni; });
            return dispatch({
                type: types.LOAD_PACKAGES_DONE,
                payload: [omniPackage],
            });
        }
        dispatch({
            type: types.LOAD_PACKAGES_DONE,
            payload: __spreadArray(__spreadArray([], newPackges), items),
        });
    };
    var setPeriods = function (period) {
        dispatch({
            type: types.SET_PERIODS,
            payload: period,
        });
    };
    var changeSuccess = function (value) {
        dispatch({
            type: types.CHANGE_SUCCESS,
            payload: value,
        });
    };
    return __assign(__assign({}, state), { genTransationCode: genTransationCode,
        addPackage: addPackage,
        removePackage: removePackage,
        addPackages: addPackages,
        setPeriods: setPeriods,
        changeSuccess: changeSuccess });
};
exports.usePackages = usePackages;
