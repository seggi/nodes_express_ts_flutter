"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequelize = void 0;
const index_1 = __importDefault(require("sequelize/index"));
const db = 'nk-btms';
const username = "root";
const password = "";
exports.Sequelize = new index_1.default(db, username, password, {
    dialect: "mysql",
    port: 3306
});
exports.Sequelize.authenticate();
//# sourceMappingURL=sequelize.js.map