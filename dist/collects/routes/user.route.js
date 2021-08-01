"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.Router();
const userController = new user_controller_1.UserController();
router.post("/auth");
router.get("/", "");
router.get("/auth", userController.create);
exports.default = router;
//# sourceMappingURL=user.route.js.map