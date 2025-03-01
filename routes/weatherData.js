const express = require('express');
const { WeatherData } = require('../models');
const router = express.Router();

// Create new weather data entry
router.post('/', async (req, res) => {
  try {
    const newWeatherData = await WeatherData.create(req.body);
    res.status(201).json(newWeatherData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating weather data' });
  }
});

// Get all weather data for a station
router.get('/', async (req, res) => {
  try {
    const weatherData = await WeatherData.findAll();
    res.status(200).json(weatherData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});

// Get weather data by ID
router.get('/:id', async (req, res) => {
  try {
    const weather = await WeatherData.findByPk(req.params.id);
    if (!weather) {
      return res.status(404).json({ message: 'Weather data not found' });
    }
    res.status(200).json(weather);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});

// Update weather data entry
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await WeatherData.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ message: 'Weather data not found' });
    }
    const updatedWeather = await WeatherData.findByPk(req.params.id);
    res.status(200).json(updatedWeather);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating weather data' });
  }
});

// Delete weather data by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await WeatherData.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Weather data not found' });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting weather data' });
  }
});

module.exports = router;
