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
exports.useFormAuth = exports.FormProvider = exports.ITypeFormAuth = void 0;
var react_1 = __importStar(require("react"));
var ITypeFormAuth;
(function (ITypeFormAuth) {
    ITypeFormAuth["LOGIN"] = "login";
    ITypeFormAuth["SIGNUP"] = "signup";
    ITypeFormAuth["FORGOT"] = "forgot";
})(ITypeFormAuth = exports.ITypeFormAuth || (exports.ITypeFormAuth = {}));
var FormContext = react_1.createContext({
    type: ITypeFormAuth.SIGNUP,
    setType: function () { },
});
var FormProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(ITypeFormAuth.LOGIN), type = _b[0], setType = _b[1];
    var value = react_1.useMemo(function () { return ({ type: type, setType: setType }); }, [type, setType]);
    return react_1.default.createElement(FormContext.Provider, { value: value }, children);
};
exports.FormProvider = FormProvider;
var useFormAuth = function () {
    var _a = react_1.useContext(FormContext), type = _a.type, setType = _a.setType;
    return {
        type: type,
        setType: setType,
    };
};
exports.useFormAuth = useFormAuth;
