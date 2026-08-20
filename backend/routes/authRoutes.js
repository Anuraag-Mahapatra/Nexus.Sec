// backend/routes/authRoutes.js
import express from 'express';
import { registerOperator, loginOperator } from '../controllers/authController.js';

const router = express.Router();

// Route for generating a new identity
router.post('/register', registerOperator);

// Route for initializing a connection (login)
router.post('/login', loginOperator);

export default router;