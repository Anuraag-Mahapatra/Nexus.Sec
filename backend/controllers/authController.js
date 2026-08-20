// backend/controllers/authController.js
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Helper function to generate JWT
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: '8h',
  });
};

// @desc    Register a new operator
// @route   POST /api/auth/register
export const registerOperator = async (req, res) => {
  try {
    const { designation, email, password } = req.body;

    // Check if the user already exists in the database
    const operatorExists = await User.findOne({ email });
    if (operatorExists) {
      return res.status(400).json({ message: 'Operator email already registered in the network.' });
    }

    // Create the new user (password hashing is handled by the User.js model pre-save hook)
    const user = await User.create({
      designation,
      email,
      password
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        designation: user.designation,
        email: user.email,
        role: user.role,
        token: generateToken(user._id, user.role),
      });
    } else {
      res.status(400).json({ message: 'Invalid operator data received.' });
    }
  } catch (error) {
    console.error(`[AUTH ERROR] Registration failed: ${error.message}`);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// @desc    Authenticate an operator (Login)
// @route   POST /api/auth/login
export const loginOperator = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Locate the user by email
    const user = await User.findOne({ email });

    // Compare the plain text password with the hashed password in the database
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        _id: user.id,
        designation: user.designation,
        email: user.email,
        role: user.role,
        token: generateToken(user._id, user.role),
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials or unauthorized access.' });
    }
  } catch (error) {
    console.error(`[AUTH ERROR] Login failed: ${error.message}`);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};