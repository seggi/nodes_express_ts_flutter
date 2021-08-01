"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
class UserController {
    constructor() {
        this._saltRounds = 12;
        this._jwtSecret = 'nankim45_#';
    }
    static get userAttributes() {
        return ['id', 'email'];
    }
    static get user() {
        return UserController._user;
    }
    register({ email, password }) {
        return bcrypt_1.default.hash(password, this._saltRounds)
            .then(hash => {
            return user_model_1.User.create({ email, password: hash })
                .then(u => this.getUserById(u.id));
        });
    }
    login({ email }) {
        return user_model_1.User.findOne({ where: { email } })
            .then(u => {
            const { id, email } = u;
            return { token: jsonwebtoken_1.default.sign({ id, email }, this._jwtSecret) };
        });
    }
    verifyToken(token) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(token, this._jwtSecret, (err, decoded) => {
                if (err) {
                    resolve(false);
                    return;
                }
                UserController._user = user_model_1.User.findByPk(decoded?.id);
                resolve(true);
                return;
            });
        });
    }
    getUserById(id) {
        return user_model_1.User.findByPk(id, {
            attributes: UserController.userAttributes
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map