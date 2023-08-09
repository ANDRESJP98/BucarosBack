const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('PurchasedProduct', {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    size:{
      type:DataTypes.STRING,
      allowNull:true
    }
  }, {timestamps: false});
};