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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
var error_message_1 = require("@hookform/error-message");
var lodash_1 = require("lodash");
var react_1 = __importStar(require("react"));
var react_hook_form_1 = require("react-hook-form");
var api_1 = require("../../api");
var token_1 = require("../../api/token");
var state_1 = require("../../state");
var constants_1 = require("./constants");
var error_text_1 = require("./error-text");
var state_2 = require("./state");
var input_pasword_1 = require("./input-pasword");
var Login = function () {
    var toast = state_1.useToast().toast;
    var loadUserDone = state_1.useAuth().loadUserDone;
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var setType = state_2.useFormAuth().setType;
    var _b = react_hook_form_1.useForm(), handleSubmit = _b.handleSubmit, register = _b.register, errors = _b.formState.errors;
    var onSubmit = handleSubmit(function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var response, user, error_1, errorMessage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, 5, 6]);
                    setLoading(true);
                    return [4 /*yield*/, api_1.loginWithEmail(__assign({}, data))];
                case 1:
                    response = _a.sent();
                    if (!response.accessToken) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, token_1.setToken({ token: response, remember: true })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, api_1.getUser()];
                case 3:
                    user = _a.sent();
                    loadUserDone(user);
                    toast.success('Đăng nhập thành công');
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _a.sent();
                    errorMessage = lodash_1.get(error_1, 'response.data.message') === 'EMAIL_OR_PASSWORD_INCORRECT'
                        ? constants_1.errorWrongEmailPassword
                        : constants_1.errorCommon;
                    toast.error(errorMessage);
                    return [3 /*break*/, 6];
                case 5:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); });
    return (react_1.default.createElement("div", { className: 'w-full px-5', style: { maxWidth: 400 } },
        react_1.default.createElement("div", { className: 'text-center mb-6' },
            react_1.default.createElement("h3", { className: 'text-3xl' }, "\u0110\u0103ng nh\u1EADp"),
            react_1.default.createElement("div", { className: 'mt-1 text-gray-500' },
                "B\u1EA1n ch\u01B0a c\u00F3 t\u00E0i kho\u1EA3n?",
                ' ',
                react_1.default.createElement("span", { onClick: function () { return setType(state_2.ITypeFormAuth.SIGNUP); }, className: 'text-blue-600 cursor-pointer' }, "\u0110\u0103ng k\u00FD"))),
        react_1.default.createElement("form", { className: 'grid gap-5', onSubmit: onSubmit, autoComplete: 'off' },
            react_1.default.createElement("fieldset", null,
                react_1.default.createElement("input", __assign({}, register('email', {
                    required: {
                        value: true,
                        message: 'Không bỏ trống ô này',
                    },
                    pattern: {
                        value: /\S+@\S+.\S+/,
                        message: 'Email không đúng',
                    },
                }), { placeholder: 'Email', className: 'block border border-gray-200 py-3 px-3 w-full' })),
                react_1.default.createElement(error_message_1.ErrorMessage, { errors: errors, name: 'email', render: function (_a) {
                        var message = _a.message;
                        return react_1.default.createElement(error_text_1.ErrorText, { message: message });
                    } })),
            react_1.default.createElement("fieldset", null,
                react_1.default.createElement(input_pasword_1.InputPassword, __assign({}, register('password', {
                    required: {
                        value: true,
                        message: 'Không bỏ trống ô này',
                    },
                }), { placeholder: 'M\u1EADt kh\u1EA9u' })),
                react_1.default.createElement(error_message_1.ErrorMessage, { errors: errors, name: 'password', render: function (_a) {
                        var message = _a.message;
                        return react_1.default.createElement(error_text_1.ErrorText, { message: message });
                    } })),
            react_1.default.createElement("fieldset", { className: 'text-right' },
                react_1.default.createElement("span", { className: 'text-blue-600 cursor-pointer', onClick: function () { return setType(state_2.ITypeFormAuth.FORGOT); } }, "Qu\u00EAn m\u1EADt kh\u1EA9u?")),
            react_1.default.createElement("fieldset", { className: 'pt-1' },
                react_1.default.createElement("button", { className: "block text-white py-3 px-3 w-full " + (loading ? 'bg-gray-500' : 'bg-blue-700'), disabled: loading }, "\u0110\u0103ng nh\u1EADp")))));
};
exports.Login = Login;
