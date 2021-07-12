"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactController = void 0;
function contactController(req, res) {
    var user = req.user;
    return res.render('pages/contact', { user: user });
}
exports.contactController = contactController;
