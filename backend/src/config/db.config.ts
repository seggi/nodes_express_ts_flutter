import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
	host: "localhost",
    database: "nk-btms",
	username: "root",
	password: "",
	dialect: "mysql",
});

export default sequelize;