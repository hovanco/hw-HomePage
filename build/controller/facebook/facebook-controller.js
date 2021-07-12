"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facebookController = void 0;
var services_1 = require("../../services");
function facebookController(req, res) {
    var questions = services_1.getQuestionsService(services_1.ETypeQuestion.Facebook);
    return res.render('pages/social', { questions: questions });
}
exports.facebookController = facebookController;
