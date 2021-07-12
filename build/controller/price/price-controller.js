"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.priceController = void 0;
var services_1 = require("../../services");
function priceController(req, res) {
    var user = req.user;
    var channels = services_1.getChannels();
    return res.render('pages/price', { user: user, channels: channels });
}
exports.priceController = priceController;
