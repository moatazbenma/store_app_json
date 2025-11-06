import express from 'express';
import path from 'path';
import { readJSON, writeJSON } from '../../utils/fileHelper.js';

const router = express.Router();
const ordersPath = path.join(process.cwd(), 'backend', 'data', 'orders.json');

// GET all orders
router.get('/orders', (req, res) => {
  const orders = readJSON(ordersPath);
  res.json(orders);
});

// POST a new order
router.post('/orders', (req, res) => {
  const orders = readJSON(ordersPath);
  const newOrder = {
    id: Date.now(),
    user: req.body.user || 'Guest',
    items: req.body.items || [],
    total: req.body.total || 0,
    date: new Date().toISOString()
  };
  orders.push(newOrder);
  writeJSON(ordersPath, orders);
  res.status(201).json({ message: 'Order placed successfully', order: newOrder });
});

export default router;
