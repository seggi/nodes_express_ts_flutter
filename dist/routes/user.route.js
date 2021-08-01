"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const filter_1 = require("express-validator/filter");
const check_1 = require("express-validator/check");
const user_rules_1 = require("../rules/user.rules");
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.Router();
const userController = new user_controller_1.UserController();
userRouter.post('/register', user_rules_1.userRules['forRegister'], (req, res) => {
    const errors = check_1.validationResult(req.body);
    console.log(req.body, "KKK");
    if (!errors.isEmpty())
        return res.status(422).json(errors.array());
    // const payload: any = matchedData(req.body)
    const user = userController.register(req.body);
    return user.then(u => {
        res.json(u);
    });
});
userRouter.post('/login', user_rules_1.userRules['forLogin'], (req, res) => {
    const errors = check_1.validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json(errors.array());
    const payload = filter_1.matchedData(req);
    const token = userController.login(payload);
    return token.then(t => res.json(t));
});
exports.default = userRouter;
//# sourceMappingURL=user.route.js.map