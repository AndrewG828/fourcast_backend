module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Prediction', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      station_id: { type: DataTypes.INTEGER, allowNull: false },
      predictionType: { type: DataTypes.STRING(50), allowNull: false },
      predictionValue: { type: DataTypes.JSONB, allowNull: false },
      targetDate: { type: DataTypes.DATEONLY, allowNull: false },
      confidence: { type: DataTypes.DECIMAL(3, 2), validate: { min: 0, max: 1 } },
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    });
  };
  