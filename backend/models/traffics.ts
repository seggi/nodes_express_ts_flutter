'use strict';
import { Model } from 'sequelize';

export interface TrafficInterface {
  userid: number;
  traderid: number;
  status: boolean;
}



module.exports = (sequelize: any, DataTypes: any) => {
  class Traffics extends Model<TrafficInterface>
  implements TrafficInterface{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    public id!: number;
    public userid!: number;
    public traderid!: number;
    public status!: boolean;
    public createdAt!: Date;
    public updatedAt!: Date
    static associate(models: any) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "userid",
        onDelete: 'CASCADE'
      })

      this.belongsTo(models.Traders, {
        foreignKey: "traderid",
        onDelete: 'CASCADE'
      })
    }
  };
  Traffics.init({
    userid: {
        type: new DataTypes.INTEGER,
        allowNull: false
    },
    traderid: {
        type: new DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Traffics',
  });
  return Traffics;
};