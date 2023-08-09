const { DataTypes } = require('sequelize');
const moment = require("moment")

module.exports = (sequelize) => {
  sequelize.define('Review', {
    comment:{
        type: DataTypes.TEXT
    },
    califications:{
        type:DataTypes.INTEGER
    },
    date:{
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
   
  }, {timestamps: false});
};