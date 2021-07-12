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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelectPackage = exports.SelectPackageProvider = exports.getPackagesFilter = void 0;
var lodash_1 = require("lodash");
var react_1 = __importStar(require("react"));
var constants_1 = require("../../constants");
var state_1 = require("../../state");
var initialState = {
    loading: true,
    packages: [],
};
var types = {
    LOADING: 'SELECT_PACKAGE/LOADING',
    SELECT_PACKAGE_DONE: 'SELECT_PACKAGE/SELECT_PACKAGE_DONE',
};
var reducer = function (state, action) {
    switch (action.type) {
        case types.LOADING:
            return __assign(__assign({}, state), { loading: true });
        case types.SELECT_PACKAGE_DONE:
            return __assign(__assign({}, state), { packages: action.payload, loading: false });
        default:
            return state;
    }
};
var initialContext = {
    state: initialState,
    dispatch: function () { },
    toggle: function () { },
};
var SelectPackageContext = react_1.createContext(initialContext);
var getPackagesFilter = function (packages) {
    var packagesFilter = lodash_1.differenceBy(constants_1.packagesFilter.filter(function (item) { return item.code !== constants_1.EBillingPackageType.Omni; }), packages, function (item) { return item.code; });
    return packagesFilter;
};
exports.getPackagesFilter = getPackagesFilter;
var SelectPackageProvider = function (_a) {
    var children = _a.children, toggle = _a.toggle;
    var _b = react_1.useReducer(reducer, initialState), state = _b[0], dispatch = _b[1];
    var packages = state_1.usePackages().packages;
    react_1.useEffect(function () {
        var packagesFilter = exports.getPackagesFilter(packages);
        dispatch({
            type: types.SELECT_PACKAGE_DONE,
            payload: packagesFilter,
        });
    }, [packages]);
    var value = react_1.useMemo(function () { return ({ state: state, dispatch: dispatch, toggle: toggle }); }, [state, dispatch, toggle]);
    return react_1.default.createElement(SelectPackageContext.Provider, { value: value }, children);
};
exports.SelectPackageProvider = SelectPackageProvider;
var useSelectPackage = function () {
    var _a = react_1.useContext(SelectPackageContext), state = _a.state, dispatch = _a.dispatch, toggle = _a.toggle;
    var packages = state_1.usePackages().packages;
    var packagesFilter = exports.getPackagesFilter(packages);
    var selectAllPackage = function () {
        var omniPackage = constants_1.packagesFilter.filter(function (item) { return item.code !== constants_1.EBillingPackageType.Omni; });
        dispatch({
            type: types.SELECT_PACKAGE_DONE,
            payload: omniPackage,
        });
    };
    var selectPackage = function (code) {
        var packagesExist = packagesFilter.filter(function (item) { return item.code === code; });
        dispatch({
            type: types.SELECT_PACKAGE_DONE,
            payload: packagesExist,
        });
    };
    return __assign(__assign({}, state), { selectAllPackage: selectAllPackage, selectPackage: selectPackage, toggle: toggle });
};
exports.useSelectPackage = useSelectPackage;
