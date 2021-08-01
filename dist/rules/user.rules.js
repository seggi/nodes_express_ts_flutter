"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRules = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const check_1 = require("express-validator/check");
const user_model_1 = require("../models/user.model");
exports.userRules = {
    forRegister: [
        check_1.check('email')
            .isEmail().withMessage('Invalid email format')
            .custom(email => user_model_1.User.findAll({ where: { email } }).then(u => !u)).withMessage('Email exists'),
        check_1.check('password')
            .isLength({ min: 8 }).withMessage('Invalid password'),
        check_1.check('confirmPassword')
            .custom((confirmPassword, { req }) => req.body.password === confirmPassword).withMessage('Password are different')
    ],
    forLogin: [
        check_1.check('email')
            .isEmail().withMessage('Invalid email format')
            .custom(email => user_model_1.User.findOne({ where: { email } }).then(u => !!u)).withMessage('Invalid email or password'),
        check_1.check('password')
            .custom((password, { req }) => {
            return user_model_1.User.findOne({ where: { email: req.body.email } })
                .then(u => bcrypt_1.default.compare(password, u.password));
        }).withMessage('Invalid email or password')
    ]
};
//# sourceMappingURL=user.rules.js.map