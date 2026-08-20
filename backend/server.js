// backend/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
// Allow requests from the Vite frontend (typically running on port 5173)
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Parse incoming JSON requests
app.use(express.json());

// Basic health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'active', message: 'NEXUS.SEC Backend is online.' });
});

app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[SERVER] Tactical backend running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});