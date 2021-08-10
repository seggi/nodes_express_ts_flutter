'use strict';
import { Model } from 'sequelize';



export interface BusinessInterface {
  businessname: string;
  userid: number;
}


export default (sequelize: any, DataTypes: any) => {
  class Business extends Model<BusinessInterface> 
  implements BusinessInterface {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    public id!: number;
    public businessname!: string;
    public userid!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
    static associate(models: any) {
      this.belongsTo(models.User, {
        foreignKey: "userid",
        onDelete: 'CASCADE'
      })
    }
  };
  Business.init({
    businessname: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    userid: {
        type: new DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Business',
  });
  return Business;
};
