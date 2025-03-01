const express = require('express');
const { Prediction } = require('../models');
const router = express.Router();

// Create new prediction
router.post('/', async (req, res) => {
  try {
    const newPrediction = await Prediction.create(req.body);
    res.status(201).json(newPrediction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating prediction' });
  }
});

// Get all predictions
router.get('/', async (req, res) => {
  try {
    const predictions = await Prediction.findAll();
    res.status(200).json(predictions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching predictions' });
  }
});

// Get prediction by ID
router.get('/:id', async (req, res) => {
  try {
    const prediction = await Prediction.findByPk(req.params.id);
    if (!prediction) {
      return res.status(404).json({ message: 'Prediction not found' });
    }
    res.status(200).json(prediction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching prediction' });
  }
});

// Update prediction by ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Prediction.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ message: 'Prediction not found' });
    }
    const updatedPrediction = await Prediction.findByPk(req.params.id);
    res.status(200).json(updatedPrediction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating prediction' });
  }
});

// Delete prediction by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Prediction.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Prediction not found' });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting prediction' });
  }
});

module.exports = router;
