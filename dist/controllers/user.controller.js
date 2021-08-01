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
        this._jwtSecret = 'nankim45';
    }
    static get userAttributes() {
        return ['id', 'email', 'firstname', 'lastname',
            'username', 'sex', 'phone', 'address', 'birthdate'];
    }
    static get user() {
        return UserController._user;
    }
    async register({ firstname, lastname, username, sex, phone, address, birthdate, email, password }) {
        const hash = await bcrypt_1.default.hash(password, this._saltRounds);
        const u = await user_model_1.User.create({
            firstname, lastname, username,
            sex, phone, address, birthdate,
            email, password: hash
        });
        return this.getUserById(u.id);
    }
    async login({ email }) {
        return await user_model_1.User.findOne({ where: { email } }).then(u => {
            const { id, email } = u;
            return { token: jsonwebtoken_1.default.sign({ id, email }, this._jwtSecret) };
        });
    }
    async verifyToken(token) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(token, this._jwtSecret, (err, decoded) => {
                if (err) {
                    resolve(false);
                    return;
                }
                UserController._user = user_model_1.User.findByPk(decoded['id']);
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