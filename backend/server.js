import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api/index.js';
import publicRoutes from './routes/public/index.js';

const app = express();
app.use(cors());
app.use(express.json());

// Routing separation
app.use('/api', apiRoutes);   // JSON API routes
app.use('/', publicRoutes);   // HTML public routes

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
