"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionsController = void 0;
var services_1 = require("../../services");
function questionsController(req, res) {
    var user = req.user;
    var questions = services_1.getQuestionsService(services_1.ETypeQuestion.All);
    return res.render('pages/questions', {
        questions: questions,
        user: user,
    });
}
exports.questionsController = questionsController;
