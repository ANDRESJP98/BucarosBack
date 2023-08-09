const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('User', {
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
    address: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
   email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    password: {
      type: DataTypes.STRING },
    type:{
      type:DataTypes.BOOLEAN,
      allowNull:false
    },
    googleToken:{
      type: DataTypes.STRING
    },
    refreshToken:{
      type: DataTypes.STRING
    },
    enable:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true,
    }

  }, {timestamps: false});
};
