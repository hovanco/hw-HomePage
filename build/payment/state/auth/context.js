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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = exports.AuthProvider = void 0;
var lodash_1 = require("lodash");
var query_string_1 = __importDefault(require("query-string"));
var react_1 = __importStar(require("react"));
var api_1 = require("../../api");
var token_1 = require("../../api/token");
var loading_1 = require("../../component/loading");
var reducer_1 = require("./reducer");
var types = __importStar(require("./types"));
var initialContext = {
    state: reducer_1.initialState,
    dispatch: function () { },
};
var AuthContext = react_1.createContext(initialContext);
var AuthProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useReducer(reducer_1.reducer, reducer_1.initialState), state = _b[0], dispatch = _b[1];
    react_1.useEffect(function () {
        var tokens = document.cookie.replace('tokens=', '');
        var tokensObj = query_string_1.default.parse(decodeURIComponent(tokens));
        var accessToken = lodash_1.get(tokensObj, 'accessToken');
        var refreshToken = lodash_1.get(tokensObj, 'refreshToken');
        if (accessToken && refreshToken) {
            var token = __assign(__assign({}, token_1.getTokenLocal()), { accessToken: accessToken, refreshToken: refreshToken });
            token_1.setToken({
                token: token,
                remember: true,
            });
        }
    }, []);
    react_1.useEffect(function () {
        function loadUser() {
            return __awaiter(this, void 0, void 0, function () {
                var user, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, api_1.getUser()];
                        case 1:
                            user = _a.sent();
                            dispatch({
                                type: types.LOAD_USER_DONE,
                                payload: user,
                            });
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            dispatch({
                                type: types.LOAD_USER_DONE,
                            });
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        loadUser();
    }, []);
    var value = react_1.useMemo(function () { return ({ state: state, dispatch: dispatch }); }, [state, dispatch]);
    if (state.loading) {
        return react_1.default.createElement(loading_1.Loading, null);
    }
    return react_1.default.createElement(AuthContext.Provider, { value: value }, children);
};
exports.AuthProvider = AuthProvider;
var useAuth = function () {
    var _a = react_1.useContext(AuthContext), state = _a.state, dispatch = _a.dispatch;
    var loadUserDone = function (user) {
        dispatch({
            type: types.LOAD_USER_DONE,
            payload: user,
        });
    };
    return __assign(__assign({}, state), { loadUserDone: loadUserDone });
};
exports.useAuth = useAuth;
