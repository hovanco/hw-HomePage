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
exports.authMiddleware = exports.saveTokenMiddleware = void 0;
var axios_1 = __importDefault(require("axios"));
var jwt_decode_1 = __importDefault(require("jwt-decode"));
var lodash_1 = require("lodash");
var query_string_1 = __importDefault(require("query-string"));
function checkToken(token) {
    if (!token) {
        return false;
    }
    var tokenDecode = jwt_decode_1.default(token);
    var expToken = lodash_1.get(tokenDecode, 'exp');
    if (!expToken) {
        return false;
    }
    var dateNow = Math.floor(Date.now() / 1000);
    return expToken - dateNow > 0;
}
function getUser(token) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default({
                        method: 'GET',
                        url: 'https://dev.insa.app/api/authentication/v1/users/info',
                        headers: {
                            'content-type': 'application/json',
                            Authorization: 'Bearer ' + token,
                        },
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function requestAccessToken(refreshToken) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default({
                        method: 'POST',
                        url: "https://dev.insa.app/api/authentication/v1/auth/refresh-token",
                        data: {
                            refreshToken: refreshToken,
                        },
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function requestUser(accessToken, refreshToken, res) {
    return __awaiter(this, void 0, void 0, function () {
        var user, error_1, isValidRefreshToken, response, user, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 8]);
                    return [4 /*yield*/, getUser(accessToken)];
                case 1:
                    user = _a.sent();
                    return [2 /*return*/, {
                            user: user,
                            accessToken: accessToken,
                        }];
                case 2:
                    error_1 = _a.sent();
                    isValidRefreshToken = checkToken(refreshToken);
                    if (!isValidRefreshToken) {
                        res.clearCookie('tokens');
                        return [2 /*return*/, {
                                user: undefined,
                                accessToken: undefined,
                            }];
                    }
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 6, , 7]);
                    return [4 /*yield*/, requestAccessToken(refreshToken)];
                case 4:
                    response = _a.sent();
                    return [4 /*yield*/, getUser(lodash_1.get(response, 'accessToken'))];
                case 5:
                    user = _a.sent();
                    return [2 /*return*/, {
                            user: user,
                            accessToken: lodash_1.get(response, 'accessToken'),
                        }];
                case 6:
                    error_2 = _a.sent();
                    res.clearCookie('tokens');
                    return [2 /*return*/, {
                            user: undefined,
                            accessToken: undefined,
                        }];
                case 7: return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function getTokens(req) {
    var accessToken = lodash_1.get(req.query, 'accessToken');
    var refreshToken = lodash_1.get(req.query, 'refreshToken');
    return {
        accessToken: accessToken,
        refreshToken: refreshToken,
    };
}
function saveTokenMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            next();
            return [2 /*return*/];
        });
    });
}
exports.saveTokenMiddleware = saveTokenMiddleware;
function authMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, accessToken, refreshToken, user, error_3, newAccessToken, user, error_4, tokens, _b, accessToken_1, refreshToken_1, response;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = getTokens(req), accessToken = _a.accessToken, refreshToken = _a.refreshToken;
                    if (!(accessToken && refreshToken)) return [3 /*break*/, 10];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 9]);
                    res.cookie('tokens', query_string_1.default.stringify({ accessToken: accessToken, refreshToken: refreshToken }));
                    return [4 /*yield*/, getUser(accessToken)];
                case 2:
                    user = _c.sent();
                    req.user = user;
                    next();
                    return [3 /*break*/, 9];
                case 3:
                    error_3 = _c.sent();
                    _c.label = 4;
                case 4:
                    _c.trys.push([4, 7, , 8]);
                    return [4 /*yield*/, requestAccessToken(refreshToken)];
                case 5:
                    newAccessToken = _c.sent();
                    return [4 /*yield*/, getUser(newAccessToken.accessToken)];
                case 6:
                    user = _c.sent();
                    req.user = user;
                    next();
                    return [3 /*break*/, 8];
                case 7:
                    error_4 = _c.sent();
                    res.clearCookie('tokens');
                    next();
                    return [3 /*break*/, 8];
                case 8: return [3 /*break*/, 9];
                case 9: return [3 /*break*/, 13];
                case 10:
                    tokens = req.cookies.tokens;
                    if (!tokens) return [3 /*break*/, 12];
                    _b = query_string_1.default.parse(tokens), accessToken_1 = _b.accessToken, refreshToken_1 = _b.refreshToken;
                    return [4 /*yield*/, requestUser(accessToken_1, refreshToken_1, res)];
                case 11:
                    response = _c.sent();
                    req.user = response.user;
                    res.cookie('tokens', query_string_1.default.stringify(__assign(__assign({}, tokens), { accessToken: response.accessToken })));
                    next();
                    return [3 /*break*/, 13];
                case 12:
                    next();
                    _c.label = 13;
                case 13: return [2 /*return*/];
            }
        });
    });
}
exports.authMiddleware = authMiddleware;
