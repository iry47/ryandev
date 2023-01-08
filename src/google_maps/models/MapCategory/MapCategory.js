module.exports = (sequelize, DataTypes) => {
  const MapCategory = sequelize.define("MapCategory", {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    icon: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
  });

  return MapCategory;
};
