const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.development);

const User = require('./User')(sequelize, Sequelize.DataTypes);
const Product = require('./Product')(sequelize, Sequelize.DataTypes);
const Station = require('./Station')(sequelize, Sequelize.DataTypes);
const WeatherData = require('./WeatherData')(sequelize, Sequelize.DataTypes);
const Crop = require('./Crop')(sequelize, Sequelize.DataTypes);
const Prediction = require('./Prediction')(sequelize, Sequelize.DataTypes);
const Recommendation = require('./Recommendation')(sequelize, Sequelize.DataTypes);


User.hasMany(Product, { foreignKey: 'user_id' });

Station.hasMany(WeatherData, { foreignKey: 'station_id' });
WeatherData.belongsTo(Station, { foreignKey: 'station_id' });

Station.hasMany(Prediction, { foreignKey: 'station_id' });
Prediction.belongsTo(Station, { foreignKey: 'station_id' });

Station.hasMany(Recommendation, { foreignKey: 'station_id' });
Recommendation.belongsTo(Station, { foreignKey: 'station_id' });

Crop.hasMany(Recommendation, { foreignKey: 'crop_id' });
Recommendation.belongsTo(Crop, { foreignKey: 'crop_id' });

module.exports = {
  sequelize,
  User,
  Product,
  Station,
  WeatherData,
  Crop,
  Prediction,
  Recommendation,
};