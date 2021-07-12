"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.websiteController = void 0;
var services_1 = require("../../services");
function websiteController(req, res) {
    var user = req.user;
    var questions = services_1.getQuestionsService(services_1.ETypeQuestion.Website);
    return res.render('pages/web', { questions: questions, user: user });
}
exports.websiteController = websiteController;
