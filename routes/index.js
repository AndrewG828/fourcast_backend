const express = require('express');
const authRoutes = require('./auth');
const productRoutes = require('./products');
const stationRoutes = require('./stations');
const weatherDataRoutes = require('./weatherData');
const cropRoutes = require('./crops');
const predictionRoutes = require('./predictions');
const recommendationRoutes = require('./recommendations');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/stations', stationRoutes);
router.use('/weather-data', weatherDataRoutes);
router.use('/crops', cropRoutes);
router.use('/predictions', predictionRoutes);
router.use('/recommendations', recommendationRoutes);

module.exports = router;
