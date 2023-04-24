const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("dog", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    weight: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(500),
    },
  });
};
