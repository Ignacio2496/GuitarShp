"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Guitar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Guitar.init(
    {
      model: DataTypes.STRING,
      brand: DataTypes.STRING,
      price: DataTypes.INTEGER,
      year: DataTypes.INTEGER,
      img: DataTypes.STRING,
      color: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Guitar",
    }
  );
  return Guitar;
};
