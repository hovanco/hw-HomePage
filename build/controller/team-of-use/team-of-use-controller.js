"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamOfUseController = void 0;
function teamOfUseController(req, res) {
    var user = req.user;
    return res.render('pages/team-of-use', { user: user });
}
exports.teamOfUseController = teamOfUseController;
