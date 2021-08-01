"use strict";
// src/models/user.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../instances/sequelize");
exports.User = sequelize_2.sequelize.define('user', {
    id: sequelize_1.DataTypes.INTEGER,
    email: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.STRING
});
//# sourceMappingURL=user.js.map