module.exports = (sequelize, DataTypes) => {
    return sequelize.define('WeatherData', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      station_id: { type: DataTypes.INTEGER, allowNull: false },
      timestamp: { type: DataTypes.DATE, allowNull: false },
      temperature: { type: DataTypes.DECIMAL(5, 2) },
      humidity: { type: DataTypes.DECIMAL(5, 2) },
      pressure: { type: DataTypes.DECIMAL(8, 2) },
      windSpeed: { type: DataTypes.DECIMAL(6, 2) },
      precipitation: { type: DataTypes.DECIMAL(6, 2) },
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    });
  };
  