'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  client.init({
    clientName: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'client',
    timestamps:false
  });
  return client;
};