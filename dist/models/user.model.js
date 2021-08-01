"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const db_config_1 = require("../config/db.config");
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
// Create the table
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true
    },
    lastname: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true
    },
    username: {
        type: new sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true
    },
    password: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true
    },
    sex: {
        type: new sequelize_1.DataTypes.STRING(10),
        allowNull: true
    },
    phone: {
        type: new sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    address: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true
    },
    birthdate: {
        type: new sequelize_1.DataTypes.STRING(10),
        allowNull: true
    }
}, {
    tableName: "users",
    sequelize: db_config_1.sequelize
});
// User.sync({force: true}).then(() => console.log("User table created"));
//# sourceMappingURL=user.model.js.map