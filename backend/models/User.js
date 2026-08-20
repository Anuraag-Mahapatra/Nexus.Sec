import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  designation: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });

// Modern async hook (no 'next' parameter required)
UserSchema.pre('save', async function() {
  // If the password hasn't been changed, stop and move on
  if (!this.isModified('password')) return;
  
  // Hash the password
  this.password = await bcrypt.hash(this.password, 12);
});

export default mongoose.model('User', UserSchema);