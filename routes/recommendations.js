const express = require('express');
const { Recommendation } = require('../models');
const router = express.Router();

// Create new recommendation
router.post('/', async (req, res) => {
  try {
    const newRecommendation = await Recommendation.create(req.body);
    res.status(201).json(newRecommendation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating recommendation' });
  }
});

// Get all recommendations
router.get('/', async (req, res) => {
  try {
    const recommendations = await Recommendation.findAll();
    res.status(200).json(recommendations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching recommendations' });
  }
});

// Get recommendation by ID
router.get('/:id', async (req, res) => {
  try {
    const recommendation = await Recommendation.findByPk(req.params.id);
    if (!recommendation) {
      return res.status(404).json({ message: 'Recommendation not found' });
    }
    res.status(200).json(recommendation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching recommendation' });
  }
});

// Update recommendation by ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Recommendation.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ message: 'Recommendation not found' });
    }
    const updatedRecommendation = await Recommendation.findByPk(req.params.id);
    res.status(200).json(updatedRecommendation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating recommendation' });
  }
});

// Delete recommendation by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Recommendation.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Recommendation not found' });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting recommendation' });
  }
});

module.exports = router;
