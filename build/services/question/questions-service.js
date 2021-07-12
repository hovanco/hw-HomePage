"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionsService = exports.ETypeQuestion = void 0;
var constants_1 = require("./constants");
var ETypeQuestion;
(function (ETypeQuestion) {
    ETypeQuestion["All"] = "all";
    ETypeQuestion["Facebook"] = "facebook";
    ETypeQuestion["Pos"] = "pos";
    ETypeQuestion["Shopee"] = "shopee";
    ETypeQuestion["Website"] = "website";
})(ETypeQuestion = exports.ETypeQuestion || (exports.ETypeQuestion = {}));
function getQuestionsService(type) {
    if (type === ETypeQuestion.All) {
        return {
            facebookQuestions: constants_1.facebookQuestions,
            shopeeQuestions: constants_1.shopeeQuestions,
            websiteQuestions: constants_1.websiteQuestions,
            posQuestions: constants_1.posQuestions,
        };
    }
    if (type === ETypeQuestion.Facebook) {
        return constants_1.facebookQuestions;
    }
    if (type === ETypeQuestion.Pos) {
        return constants_1.posQuestions;
    }
    if (type === ETypeQuestion.Website) {
        return constants_1.websiteQuestions;
    }
    if (type === ETypeQuestion.Shopee) {
        return constants_1.shopeeQuestions;
    }
    return [];
}
exports.getQuestionsService = getQuestionsService;
