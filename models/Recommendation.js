module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Recommendation', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      station_id: { type: DataTypes.INTEGER, allowNull: false },
      crop_id: { type: DataTypes.INTEGER },
      action: { type: DataTypes.STRING(255), allowNull: false },
      reasoning: { type: DataTypes.TEXT },
      resourceSavings: { type: DataTypes.STRING(255) },
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    });
  };
  