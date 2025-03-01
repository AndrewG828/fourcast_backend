module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Crop', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING(100), allowNull: false },
      minTemp: { type: DataTypes.DECIMAL(5, 2) },
      maxTemp: { type: DataTypes.DECIMAL(5, 2) },
      waterNeeds: { type: DataTypes.STRING(50) },
      growingDays: { type: DataTypes.INTEGER, validate: { min: 1 } },
    });
  };
  