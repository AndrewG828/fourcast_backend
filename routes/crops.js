const express = require('express');
const { Crop } = require('../models');
const router = express.Router();

// Create a new crop
router.post('/', async (req, res) => {
  try {
    const newCrop = await Crop.create(req.body);
    res.status(201).json(newCrop);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating crop' });
  }
});

// Get all crops
router.get('/', async (req, res) => {
  try {
    const crops = await Crop.findAll();
    res.status(200).json(crops);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching crops' });
  }
});

// Get a single crop by ID
router.get('/:id', async (req, res) => {
  try {
    const crop = await Crop.findByPk(req.params.id);
    if (!crop) {
      return res.status(404).json({ message: 'Crop not found' });
    }
    res.status(200).json(crop);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching crop' });
  }
});

// Update a crop by ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Crop.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ message: 'Crop not found' });
    }
    const updatedCrop = await Crop.findByPk(req.params.id);
    res.status(200).json(updatedCrop);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating crop' });
  }
});

// Delete a crop by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Crop.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Crop not found' });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting crop' });
  }
});

module.exports = router;
