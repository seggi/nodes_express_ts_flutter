import { sequelize } from "../config/db.config";
import { Sequelize, DataTypes,Model, BuildOptions } from "sequelize";

export interface UserInterface {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    sex: string;
    phone: string;
    address: string;
    birthdate: string; 
}

export class User extends Model {
    public id!: number;
    public firstname!: string;
    public lastname!: string;
    public username!: string;
    public email!: string;
    public password!: string;
    public sex!: string;
    public phone!: string;
    public address!: string;
    public birthdate!: string; 
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}


// Create the table
User.init (
   {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: new DataTypes.STRING(128),
        allowNull: true
    },
    lastname: {
        type: new DataTypes.STRING(128),
        allowNull: true
    },
    username: {
        type: new DataTypes.STRING(50),
        allowNull: true
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: true
    },
    password: {
        type: new DataTypes.STRING(128),
        allowNull: true
    },
    sex: {
        type: new DataTypes.STRING(10),
        allowNull: true
    },
    phone: {
        type: new DataTypes.STRING(50),
        allowNull: true
    },
    address: {
        type: new DataTypes.STRING(128),
        allowNull: true
    },
    birthdate: {
        type: new DataTypes.STRING(10),
        allowNull: true
    }
   }, 
   {
       tableName: "users",
       sequelize: sequelize
   }
)


// User.sync({force: true}).then(() => console.log("User table created"));
