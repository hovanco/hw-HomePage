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
exports.ForgotPassword = void 0;
var error_message_1 = require("@hookform/error-message");
var react_1 = __importStar(require("react"));
var react_hook_form_1 = require("react-hook-form");
var api_1 = require("../../api");
var state_1 = require("../../state");
var error_text_1 = require("./error-text");
var state_2 = require("./state");
var ForgotPassword = function () {
    var toast = state_1.useToast().toast;
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var setType = state_2.useFormAuth().setType;
    var _b = react_hook_form_1.useForm(), handleSubmit = _b.handleSubmit, register = _b.register, errors = _b.formState.errors;
    var onSubmit = handleSubmit(function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setLoading(true);
                    return [4 /*yield*/, api_1.forgotPassword(__assign({}, data))];
                case 1:
                    _a.sent();
                    toast.success('Đã gửi email đến địa chỉ email của bạn');
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    toast.error('Đã xảy ra lỗi, vui lòng thử lại');
                    return [3 /*break*/, 4];
                case 3:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    return (react_1.default.createElement("div", { className: 'w-full px-5', style: { maxWidth: 400 } },
        react_1.default.createElement("div", { className: 'text-center mb-6' },
            react_1.default.createElement("h3", { className: 'text-3xl' }, "Qu\u00EAn m\u1EADt kh\u1EA9u"),
            react_1.default.createElement("div", { className: 'mt-1 text-gray-500' }, "Vui l\u00F2ng \u0111i\u1EC1n \u0111\u1ECBa ch\u1EC9 email c\u1EE7a b\u1EA1n")),
        react_1.default.createElement("form", { className: 'grid gap-5', onSubmit: onSubmit },
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
            react_1.default.createElement("fieldset", { className: 'pt-1' },
                react_1.default.createElement("button", { className: "block text-white py-3 px-3 w-full " + (loading ? 'bg-gray-500' : 'bg-blue-700'), disabled: loading }, "G\u1EEDi y\u00EAu c\u1EA7u")),
            react_1.default.createElement("fieldset", { className: 'text-center' },
                react_1.default.createElement("span", { className: 'text-gray-500 cursor-pointer', onClick: function () { return setType(state_2.ITypeFormAuth.LOGIN); } }, "\u0110\u0103ng nh\u1EADp")))));
};
exports.ForgotPassword = ForgotPassword;
