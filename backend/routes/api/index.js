import express from 'express';
import productApi from './productApi.js';
import userApi from './userApi.js';
import orderApi from './orderApi.js';

const router = express.Router();

router.use('/', productApi);
router.use('/', userApi);
router.use('/', orderApi);


export default router;
