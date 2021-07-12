"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.privacyPolicyController = void 0;
function privacyPolicyController(req, res) {
    var user = req.user;
    return res.render('pages/privacy-policy', { user: user });
}
exports.privacyPolicyController = privacyPolicyController;
