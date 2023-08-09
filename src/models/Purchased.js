const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Purchased', {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false  
    },
  
    idPurchased: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: false
    },
    price:{
      type: DataTypes.INTEGER
    },
   size:{
      type:DataTypes.STRING,
      allowNull:true
    },
    estate:{
      type: DataTypes.STRING,
      allowNull:false,
      defaultValue: 'Pagado'
    },
    quantity:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue:1
    },
    purchaseDate:{
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }

  }, {timestamps: false});
};
