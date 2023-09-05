'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProdOrder extends Model {
    static associate({ Order, Product }) {
      this.belongsTo(Order, { foreignKey: 'order_id' });
      this.belongsTo(Product, { foreignKey: 'product_id' });
    }
  }
  ProdOrder.init(
    {
      order_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { 
          model: 'Orders', 
          key: 'id', 
        }, 
        onDelete: 'CASCADE',
      },
      product_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { 
          model: 'Products', 
          key: 'id', 
        }, 
        onDelete: 'CASCADE',
      },
      count: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'ProdOrder',
    }
  );
  return ProdOrder;
};
