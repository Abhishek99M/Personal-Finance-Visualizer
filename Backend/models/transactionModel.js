import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true, default: 'Uncategorized' }, // Default category if not provided
}, { timestamps: true });

export default mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);
