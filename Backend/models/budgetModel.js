import mongoose from 'mongoose';

const budgetSchema = new mongoose.Schema({
  category: { type: String, required: true },
  month: { type: String, required: true }, // e.g., '2025-07'
  amount: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.models.Budget || mongoose.model('Budget', budgetSchema);
