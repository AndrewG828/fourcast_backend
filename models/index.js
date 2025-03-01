const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.development);

const User = require('./User')(sequelize, Sequelize.DataTypes);
const Product = require('./Product')(sequelize, Sequelize.DataTypes);

// Define relationships (if any)
// User.hasMany(Product, { foreignKey: 'user_id' });

module.exports = {
  sequelize,
  User,
  Product,
};