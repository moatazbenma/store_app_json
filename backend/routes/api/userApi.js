import express from 'express';
import { readJSON } from '../../utils/fileHelper.js';

const router = express.Router();

// Get all users
router.get('/users', (req, res) => {
  const users = readJSON('users.json');
  res.json(users);
});

// Get user by ID
router.get('/user/:id', (req, res) => {
  const users = readJSON('users.json');
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

export default router;
