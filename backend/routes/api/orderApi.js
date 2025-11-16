import express from 'express';
import { readJSON, writeJSON } from '../../utils/fileHelper.js';

const router = express.Router();
const ordersFile = 'orders.json'; // ONLY the filename

// GET all orders
router.get('/orders', (req, res) => {
  const orders = readJSON(ordersFile);
  res.json(orders);
});

// POST a new order
router.post('/orders', (req, res) => {
  try {
    const orders = readJSON(ordersFile);
    const newOrder = {
      id: Date.now(),
      user: req.body.user || 'Guest',
      items: req.body.items || [],
      total: req.body.total || 0,
      date: new Date().toISOString()
    };
    orders.push(newOrder);
    writeJSON(ordersFile, orders);
    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to place order.' });
  }
});

export default router;
