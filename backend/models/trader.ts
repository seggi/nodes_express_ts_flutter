'use strict';

import { Sequelize, DataTypes, Model, BuildOptions, Optional } from "sequelize";


export interface TradersInterface {
  // id: number;
  firstName: string;
  lastName: string;
  contacts: string;
  sex: string;
  address: string;
  birthdate: Date;
  businessid: number;
  userid: number;
}

// interface CreateTradersAttributes extends Optional<TradersInterface, "id"> {}


export default (sequelize: any, DataTypes: any) => {
  class Trader extends Model<TradersInterface> 
    implements TradersInterface{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public contacts!: string;
    public sex!: string;
    public address!: string;
    public birthdate!: Date;
    public businessid!: number;
    public userid!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: any) {
      this.belongsTo(models.User, {
        foreignKey: "userid",
        onDelete: 'CASCADE'
      })
    }
  };
  Trader.init({
  
        firstName: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
        lastName: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        },
        contacts: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        sex: {
            type: new DataTypes.STRING(10),
            allowNull: false,
        },
        address: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        birthdate: {
            type: new DataTypes.DATE,
            allowNull: false,
        },
        businessid: {
            type: new DataTypes.INTEGER,
            allowNull: false,
        },
        userid: {
            type: new DataTypes.INTEGER,
            allowNull: false
        }
    }, {
    sequelize,
    modelName: 'Trader',
  });
  return Trader;
};