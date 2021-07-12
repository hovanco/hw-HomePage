"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.posController = void 0;
var services_1 = require("../../services");
function posController(req, res) {
    var user = req.user;
    var questions = services_1.getQuestionsService(services_1.ETypeQuestion.Pos);
    return res.render('pages/pos', { questions: questions, user: user });
}
exports.posController = posController;
