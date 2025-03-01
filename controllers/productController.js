const { Product } = require('../models');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const product = await Product.create({ name, description, price });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};