"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkToken = exports.removeToken = exports.getToken = exports.getTokenLocal = exports.setToken = void 0;
var jwt_decode_1 = __importDefault(require("jwt-decode"));
var lodash_1 = require("lodash");
var setToken = function (_a) {
    var token = _a.token, _b = _a.remember, remember = _b === void 0 ? true : _b;
    if (!token) {
        return;
    }
    var tokenString = JSON.stringify(token);
    if (remember) {
        return localStorage.setItem('token', tokenString);
    }
    return sessionStorage.setItem('token', tokenString);
};
exports.setToken = setToken;
var removeToken = function () {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
};
exports.removeToken = removeToken;
var getTokenLocal = function () {
    var tokenString = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!tokenString) {
        return null;
    }
    var token = JSON.parse(tokenString);
    return token;
};
exports.getTokenLocal = getTokenLocal;
var getToken = function (type) {
    var tokenLocal = getTokenLocal();
    if (!tokenLocal) {
        return null;
    }
    return lodash_1.get(tokenLocal, type || 'accessToken');
};
exports.getToken = getToken;
var checkToken = function (token) {
    var tokenDecode = jwt_decode_1.default(token);
    var expToken = lodash_1.get(tokenDecode, 'exp');
    if (!expToken) {
        return false;
    }
    var dateNow = Math.floor(Date.now() / 1000);
    return expToken - dateNow > 0;
};
exports.checkToken = checkToken;
