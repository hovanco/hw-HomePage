"use strict";
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
exports.useWards = exports.useDistricts = exports.useProvices = void 0;
var react_1 = require("react");
var api_1 = require("../api");
var useProvices = function () {
    var _a = react_1.useState([]), provinces = _a[0], setProvinces = _a[1];
    var _b = react_1.useState(true), loadingProvince = _b[0], setLoadingProvince = _b[1];
    react_1.useEffect(function () {
        function getListProvinces() {
            return __awaiter(this, void 0, void 0, function () {
                var response, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, 3, 4]);
                            return [4 /*yield*/, api_1.getProvinces()];
                        case 1:
                            response = _a.sent();
                            setProvinces(response);
                            return [3 /*break*/, 4];
                        case 2:
                            error_1 = _a.sent();
                            setProvinces([]);
                            return [3 /*break*/, 4];
                        case 3:
                            setLoadingProvince(false);
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        getListProvinces();
    }, []);
    return {
        provinces: provinces,
        loadingProvince: loadingProvince,
    };
};
exports.useProvices = useProvices;
var useDistricts = function (province, loading) {
    var _a = react_1.useState([]), districts = _a[0], setDistricts = _a[1];
    var _b = react_1.useState(loading || false), loadingDistrict = _b[0], setLoadingDistrict = _b[1];
    react_1.useEffect(function () {
        function getListDistricts() {
            return __awaiter(this, void 0, void 0, function () {
                var response, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!province) {
                                setLoadingDistrict(false);
                                return [2 /*return*/];
                            }
                            setLoadingDistrict(true);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, 4, 5]);
                            return [4 /*yield*/, api_1.getDistricts(province)];
                        case 2:
                            response = _a.sent();
                            setDistricts(response);
                            return [3 /*break*/, 5];
                        case 3:
                            error_2 = _a.sent();
                            setDistricts([]);
                            return [3 /*break*/, 5];
                        case 4:
                            setLoadingDistrict(false);
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        }
        getListDistricts();
    }, [province]);
    return {
        districts: districts,
        loadingDistrict: loadingDistrict,
    };
};
exports.useDistricts = useDistricts;
var useWards = function (_a) {
    var province = _a.province, district = _a.district, loading = _a.loading;
    var _b = react_1.useState([]), wards = _b[0], setWards = _b[1];
    var _c = react_1.useState(loading || false), loadingWard = _c[0], setLoadingWard = _c[1];
    react_1.useEffect(function () {
        function getListWard() {
            return __awaiter(this, void 0, void 0, function () {
                var response, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!province || !district) {
                                setLoadingWard(false);
                                return [2 /*return*/];
                            }
                            setLoadingWard(true);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, 4, 5]);
                            return [4 /*yield*/, api_1.getWards({
                                    provinceId: province,
                                    districtId: district,
                                })];
                        case 2:
                            response = _a.sent();
                            setWards(response);
                            return [3 /*break*/, 5];
                        case 3:
                            error_3 = _a.sent();
                            setWards([]);
                            return [3 /*break*/, 5];
                        case 4:
                            setLoadingWard(false);
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        }
        getListWard();
    }, [district, province]);
    return {
        wards: wards,
        loadingWard: loadingWard,
    };
};
exports.useWards = useWards;
