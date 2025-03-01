module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Station', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING(100), allowNull: false },
      location: { type: DataTypes.STRING(255) },
      latitude: { type: DataTypes.DECIMAL(9, 6) },
      longitude: { type: DataTypes.DECIMAL(9, 6) },
      regionType: { type: DataTypes.STRING(50) },
      isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    });
  };
  