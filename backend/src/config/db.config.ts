import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
	host: "localhost",
    database: "nk-btms",
	username: "root",
	password: "",
	dialect: "mysql",
});