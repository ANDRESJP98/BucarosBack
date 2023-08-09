const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('CartProducts', {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue:1,
      allowNull: true,
    }, 
    size:{
      type:DataTypes.STRING,
      allowNull:true
    },
    totalprice:{
      type: DataTypes.INTEGER,
      allowNull: true,

    }
  }, {timestamps: false});
};