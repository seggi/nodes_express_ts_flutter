"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminRouter = express_1.Router();
adminRouter.get('/', (req, res) => {
    return res.json("nk-auth-admin");
});
exports.default = adminRouter;
//# sourceMappingURL=admin.route.js.map