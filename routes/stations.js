const express = require('express');
const { Station } = require('../models');
const router = express.Router();

// Create a station
router.post('/', async (req, res) => {
  try {
    const newStation = await Station.create(req.body);
    res.status(201).json(newStation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating station' });
  }
});

// Get all created stations
router.get('/', async (req, res) => {
  try {
    const stations = await Station.findAll();
    res.status(200).json(stations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching stations' });
  }
});

// Get a single station by ID
router.get('/:id', async (req, res) => {
  try {
    const station = await Station.findByPk(req.params.id);
    if (!station) {
      return res.status(404).json({ message: 'Station not found' });
    }
    res.status(200).json(station);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching station' });
  }
});

// Update a station by ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Station.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ message: 'Station not found' });
    }
    const updatedStation = await Station.findByPk(req.params.id);
    res.status(200).json(updatedStation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating station' });
  }
});

// Delete a station by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Station.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Station not found' });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting station' });
  }
});

module.exports = router;
