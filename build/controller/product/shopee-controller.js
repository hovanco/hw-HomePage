"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopeeController = void 0;
var services_1 = require("../../services");
function shopeeController(req, res) {
    var user = req.user;
    var questions = services_1.getQuestionsService(services_1.ETypeQuestion.Shopee);
    return res.render('pages/ecom', { questions: questions, user: user });
}
exports.shopeeController = shopeeController;
