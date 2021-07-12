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
exports.Signup = void 0;
var error_message_1 = require("@hookform/error-message");
var lodash_1 = require("lodash");
var react_1 = __importStar(require("react"));
var react_hook_form_1 = require("react-hook-form");
var api_1 = require("../../api");
var token_1 = require("../../api/token");
var hook_1 = require("../../hook");
var state_1 = require("../../state");
var utils_1 = require("../../utils");
var error_text_1 = require("./error-text");
var input_pasword_1 = require("./input-pasword");
var state_2 = require("./state");
var Signup = function () {
    var loadUserDone = state_1.useAuth().loadUserDone;
    var _a = state_1.useStore(), store = _a.store, loadStoreDone = _a.loadStoreDone;
    var toast = state_1.useToast().toast;
    var setType = state_2.useFormAuth().setType;
    var _b = react_hook_form_1.useForm(), handleSubmit = _b.handleSubmit, register = _b.register, errors = _b.formState.errors, setValue = _b.setValue;
    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];
    var _d = react_1.useState(), province = _d[0], setProvince = _d[1];
    var _e = react_1.useState(), district = _e[0], setDistrict = _e[1];
    var _f = hook_1.useProvices(), loadingProvince = _f.loadingProvince, provinces = _f.provinces;
    var _g = hook_1.useDistricts(province, true), loadingDistrict = _g.loadingDistrict, districts = _g.districts;
    var _h = hook_1.useWards({ province: province, district: district, loading: true }), loadingWard = _h.loadingWard, wards = _h.wards;
    var onChangeProvince = function (value) {
        setProvince(value);
        setDistrict(undefined);
        setValue('district', '-1');
        setValue('ward', '-1');
        setValue('address', '');
    };
    var onChangeDistrict = function (value) {
        setDistrict(value);
    };
    var onSubmit = handleSubmit(function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var dataSignup;
        return __generator(this, function (_a) {
            setLoading(true);
            dataSignup = lodash_1.pick(values, 'name', 'email', 'password');
            api_1.signupWithEmail(dataSignup)
                .then(function () { return __awaiter(void 0, void 0, void 0, function () {
                var response, dataCreateStore;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api_1.loginWithEmail(__assign({}, lodash_1.pick(values, ['email', 'password'])))];
                        case 1:
                            response = _a.sent();
                            if (!response.accessToken) {
                                toast.error('Xảy ra lỗi, vui lòng kiểm tra lại');
                                setType(state_2.ITypeFormAuth.LOGIN);
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, token_1.setToken({ token: response, remember: true })];
                        case 2:
                            _a.sent();
                            dataCreateStore = __assign(__assign({}, lodash_1.pick(values, 'province', 'district', 'ward', 'phoneNo', 'address')), { name: values.nameStore });
                            api_1.createStore(dataCreateStore)
                                .then(function (store) { return __awaiter(void 0, void 0, void 0, function () {
                                var user;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, api_1.updateUserStorePreference({
                                                storeId: store._id,
                                                hideNewUserGuide: false,
                                            })];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, api_1.getUser()];
                                        case 2:
                                            user = _a.sent();
                                            loadUserDone(user);
                                            loadStoreDone(store);
                                            toast.success('Đăng ký thành công');
                                            return [2 /*return*/];
                                    }
                                });
                            }); })
                                .catch(function (error) {
                                if (lodash_1.get(error, 'response.status') === 409) {
                                    return toast.erro('Tên cửa hàng đã tồn tại. Vui lòng nhập tên khác');
                                }
                                return toast.error('Lỗi tạo cửa hàng');
                            });
                            return [2 /*return*/];
                    }
                });
            }); })
                .catch(function (error) {
                var messageError = utils_1.getMessageError(error);
                toast.error(messageError);
            })
                .finally(function () {
                setLoading(false);
            });
            return [2 /*return*/];
        });
    }); });
    return (react_1.default.createElement("div", { className: 'w-full px-5', style: { maxWidth: 700 } },
        react_1.default.createElement("div", { className: 'text-center mb-6' },
            react_1.default.createElement("h3", { className: 'text-3xl' }, "T\u1EA1o t\u00E0i kho\u1EA3n"),
            react_1.default.createElement("div", { className: 'mt-1 text-gray-500' },
                "B\u1EA1n \u0111\u00E3 c\u00F3 t\u00E0i kho\u1EA3n?",
                ' ',
                react_1.default.createElement("span", { onClick: function () { return setType(state_2.ITypeFormAuth.LOGIN); }, className: 'text-blue-600 cursor-pointer' }, "\u0110\u0103ng nh\u1EADp"))),
        react_1.default.createElement("form", { className: 'grid gap-5', onSubmit: onSubmit },
            react_1.default.createElement("div", { className: 'grid grid-cols-2 gap-5' },
                react_1.default.createElement("fieldset", null,
                    react_1.default.createElement("input", __assign({ autoComplete: 'false', placeholder: 'H\u1ECD v\u00E0 t\u00EAn', className: 'block border border-gray-200 py-3 px-3 w-full' }, register('name', {
                        required: {
                            value: true,
                            message: 'Không bỏ trống ô này',
                        },
                    }))),
                    react_1.default.createElement(error_message_1.ErrorMessage, { errors: errors, name: 'name', render: function (_a) {
                            var message = _a.message;
                            return react_1.default.createElement(error_text_1.ErrorText, { message: message });
                        } })),
                react_1.default.createElement("fieldset", null,
                    react_1.default.createElement("input", __assign({ autoComplete: 'false', placeholder: 'S\u1ED1 \u0111i\u1EC7n tho\u1EA1i', className: 'block border border-gray-200 py-3 px-3 w-full' }, register('phoneNo', {
                        required: {
                            value: true,
                            message: 'Không bỏ trống ô này',
                        },
                    }))),
                    react_1.default.createElement(error_message_1.ErrorMessage, { errors: errors, name: 'name', render: function (_a) {
                            var message = _a.message;
                            return react_1.default.createElement(error_text_1.ErrorText, { message: message });
                        } })),
                react_1.default.createElement("fieldset", null,
                    react_1.default.createElement("input", __assign({ placeholder: 'Email', className: 'block border border-gray-200 py-3 px-3 w-full', autoComplete: 'off' }, register('email', {
                        required: {
                            value: true,
                            message: 'Không bỏ trống ô này',
                        },
                        pattern: {
                            value: /\S+@\S+.\S+/,
                            message: 'Email không đúng',
                        },
                    }))),
                    react_1.default.createElement(error_message_1.ErrorMessage, { errors: errors, name: 'email', render: function (_a) {
                            var message = _a.message;
                            return react_1.default.createElement(error_text_1.ErrorText, { message: message });
                        } })),
                react_1.default.createElement("fieldset", null,
                    react_1.default.createElement(input_pasword_1.InputPassword, __assign({ autoComplete: 'off' }, register('password', {
                        required: {
                            value: true,
                            message: 'Không bỏ trống ô này',
                        },
                    }), { placeholder: 'M\u1EADt kh\u1EA9u' })),
                    react_1.default.createElement(error_message_1.ErrorMessage, { errors: errors, name: 'password', render: function (_a) {
                            var message = _a.message;
                            return react_1.default.createElement(error_text_1.ErrorText, { message: message });
                        } })),
                react_1.default.createElement("fieldset", null,
                    react_1.default.createElement("input", __assign({ placeholder: 'T\u00EAn c\u1EEDa h\u00E0ng', autoComplete: 'off', className: 'block border border-gray-200 py-3 px-3 w-full' }, register('nameStore', {
                        required: {
                            value: true,
                            message: 'Không bỏ trống ô này',
                        },
                    }))),
                    react_1.default.createElement(error_message_1.ErrorMessage, { errors: errors, name: 'name', render: function (_a) {
                            var message = _a.message;
                            return react_1.default.createElement(error_text_1.ErrorText, { message: message });
                        } })),
                react_1.default.createElement("fieldset", null,
                    react_1.default.createElement("select", __assign({ placeholder: 'T\u1EC9nh/TP' }, register('province', {
                        required: {
                            value: true,
                            message: 'Không bỏ trống ô này',
                        },
                        validate: function (value) {
                            return value !== '-1' ? true : 'Không bỏ trống ô này';
                        },
                    }), { className: 'block border border-gray-200 py-3 px-3 w-full', onChange: function (e) { return onChangeProvince(e.target.value); }, disabled: loadingProvince }),
                        react_1.default.createElement("option", { value: '-1', disabled: true, selected: true }, "Ch\u1ECDn T\u1EC9nh/TP"),
                        lodash_1.map(provinces, function (province) { return (react_1.default.createElement("option", { value: province.code, key: province.code }, province.name_with_type)); })),
                    react_1.default.createElement(error_message_1.ErrorMessage, { errors: errors, name: 'province', render: function (_a) {
                            var message = _a.message;
                            return react_1.default.createElement(error_text_1.ErrorText, { message: message });
                        } })),
                react_1.default.createElement("fieldset", null,
                    react_1.default.createElement("select", __assign({ placeholder: 'Qu\u1EADn/Huy\u1EC7n' }, register('district', {
                        required: {
                            value: true,
                            message: 'Không bỏ trống ô này',
                        },
                        validate: function (value) {
                            return value !== '-1' ? true : 'Không bỏ trống ô này';
                        },
                    }), { className: 'block border border-gray-200 py-3 px-3 w-full', onChange: function (e) { return onChangeDistrict(e.target.value); }, disabled: !province || loadingDistrict }),
                        react_1.default.createElement("option", { value: '-1', disabled: true, selected: true }, "Ch\u1ECDn qu\u1EADn/huy\u1EC7n"),
                        lodash_1.map(districts, function (district) { return (react_1.default.createElement("option", { value: district.code, key: district.code }, district.name_with_type)); })),
                    react_1.default.createElement(error_message_1.ErrorMessage, { errors: errors, name: 'district', render: function (_a) {
                            var message = _a.message;
                            return react_1.default.createElement(error_text_1.ErrorText, { message: message });
                        } })),
                react_1.default.createElement("fieldset", null,
                    react_1.default.createElement("select", __assign({ defaultValue: '-1', placeholder: 'X\u00E3/Ph\u01B0\u1EDDng' }, register('ward', {
                        required: {
                            value: true,
                            message: 'Không bỏ trống ô này',
                        },
                        validate: function (value) {
                            return value !== '-1' ? true : 'Không bỏ trống ô này';
                        },
                    }), { className: 'block border border-gray-200 py-3 px-3 w-full', disabled: !district || district === '-1' || loadingWard, onChange: function (e) {
                            // onChangeProvince(e.target.value)
                        } }),
                        react_1.default.createElement("option", { value: '-1', disabled: true }, "Ch\u1ECDn x\u00E3/Ph\u01B0\u1EDDng"),
                        lodash_1.map(wards, function (ward) { return (react_1.default.createElement("option", { value: ward.code, key: ward.code }, ward.name_with_type)); })),
                    react_1.default.createElement(error_message_1.ErrorMessage, { errors: errors, name: 'ward', render: function (_a) {
                            var message = _a.message;
                            return react_1.default.createElement(error_text_1.ErrorText, { message: message });
                        } }))),
            react_1.default.createElement("fieldset", null,
                react_1.default.createElement("textarea", __assign({ placeholder: '\u0110\u1ECBa ch\u1EC9', className: 'block border border-gray-200 py-3 px-3 w-full' }, register('address', {
                    required: {
                        value: true,
                        message: 'Không bỏ trống ô này',
                    },
                }), { rows: 3 })),
                react_1.default.createElement(error_message_1.ErrorMessage, { errors: errors, name: 'address', render: function (_a) {
                        var message = _a.message;
                        return react_1.default.createElement(error_text_1.ErrorText, { message: message });
                    } })),
            react_1.default.createElement("div", { className: 'grid gap-5 max-w-sm mx-auto' },
                react_1.default.createElement("fieldset", { className: 'text-sm' },
                    "B\u1EB1ng c\u00E1ch \u0111\u0103ng k\u00FD, t\u00F4i \u0111\u1ED3ng \u00FD \u0111\u00E3 \u0111\u1ECDc v\u00E0 ch\u1EA5p nh\u1EADn",
                    react_1.default.createElement("br", { className: 'hidden sm:block' }),
                    ' ',
                    react_1.default.createElement("a", { href: "/dieu-khoan-su-dung", target: "_blank", rel: "noreferrer", className: 'text-blue-600' }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng"),
                    " v\u00E0",
                    ' ',
                    react_1.default.createElement("a", { href: "/chinh-sach-bao-mat", target: "_blank", rel: "noreferrer", className: 'text-blue-600' }, "Ch\u00EDnh s\u00E1ch quy\u1EC1n ri\u00EAng t\u01B0.")),
                react_1.default.createElement("fieldset", null,
                    react_1.default.createElement("button", { className: "block text-white py-3 px-3 w-full " + (loading ? 'bg-gray-500' : 'bg-blue-700'), disabled: loading }, "\u0110\u0103ng k\u00FD"))))));
};
exports.Signup = Signup;
