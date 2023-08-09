const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Product', {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    description:{
      type: DataTypes.TEXT
    },
    sizes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
    category:{
        type:DataTypes.STRING,
        allowNull:false
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
        validate:{
          isUrl:true
        }
      },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    stock:{
        type:DataTypes.INTEGER
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    colours: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    details:{
      type:DataTypes.TEXT

    }
  }, {timestamps: false});
};