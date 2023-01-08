const { sequelize } = require("..");

module.exports = (sequelize, DataTypes) => {
  const Map = sequelize.define("Map", {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    coordinates: {
      type: DataTypes.STRING,
    },
    link: {
      type: DataTypes.STRING,
    },
  });

  Map.associate = function (models) {
    Map.belongsTo(models.Categories);
  };

  return Map;
};
