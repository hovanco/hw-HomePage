"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessageError = exports.formatMoney = exports.formatDescription = void 0;
var lodash_1 = require("lodash");
function formatDescription(description) {
    var listDes = description.split('\n').map(function (item) { return item.trim(); });
    return listDes;
}
exports.formatDescription = formatDescription;
function formatMoney(numberString) {
    var number = parseFloat(numberString.toString());
    return number.toLocaleString('VND');
}
exports.formatMoney = formatMoney;
function getMessageError(error) {
    var messageText = lodash_1.get(error, 'response.data.status');
    if (messageText === 409) {
        return 'Tài khoản đã tồn tại';
    }
    return 'Đăng ký không thành công.';
}
exports.getMessageError = getMessageError;
