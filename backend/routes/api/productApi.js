import express from 'express';
import { readJSON } from '../../utils/fileHelper.js';

const router = express.Router();

// Get all products
router.get('/products', (req, res) => {
  const products = readJSON('products.json');
  res.json(products);
});

// Get product by ID
router.get('/product/:id', (req, res) => {
  const products = readJSON('products.json');
  const product = products.find(p => p.id === parseInt(req.params.id));

  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

export default router;
