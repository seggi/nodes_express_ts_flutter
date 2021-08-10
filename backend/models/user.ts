// 'use strict';

import sequelize from "../src/config/db.config";

import { Model, DataTypes } from 'sequelize';


export interface UserAttributes {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  sex: string;
  phone: number | null;
  address: string;
  birthdate: string;  
}


// const UserModel = (sequelize: any) => {
  class User extends Model<UserAttributes> implements UserAttributes{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    public id!: number;
    public firstname!: string;
    public lastname!: string;
    public username!: string;
    public email!: string;
    public password!: string;
    public sex!: string;
    public phone!: number;
    public address!: string;
    public birthdate!: string; 
    
    static associate(models: any) {
      // define association here
      this.hasMany(models.Traders, {
        sourceKey: "id",
        foreignKey: "userid"
      })
    }
  };

  User.init({
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
        type: new DataTypes.INTEGER(),
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
    sequelize: sequelize,
    modelName: 'User',
  });
//   return User;
// };

// export default UserModel
export default User;
