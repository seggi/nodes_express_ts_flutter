'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var sequelize_1 = require("sequelize");
// interface CreateTradersAttributes extends Optional<TradersInterface, "id"> {}
exports["default"] = (function (sequelize, DataTypes) {
    var Trader = /** @class */ (function (_super) {
        __extends(Trader, _super);
        function Trader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Trader.associate = function (models) {
            // define association here
        };
        return Trader;
    }(sequelize_1.Model));
    ;
    Trader.init({
        //   id: {
        //     type: DataTypes.INTEGER.UNSIGNED,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
        firstName: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        lastName: {
            type: new DataTypes.STRING(128),
            allowNull: true
        },
        contacts: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        sex: {
            type: new DataTypes.STRING(10),
            allowNull: false
        },
        address: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        birthdate: {
            type: new DataTypes.DATE,
            allowNull: false
        },
        businessid: {
            type: new DataTypes.INTEGER,
            allowNull: false
        },
        userid: {
            type: new DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize: sequelize,
        modelName: 'Trader'
    });
    return Trader;
});
