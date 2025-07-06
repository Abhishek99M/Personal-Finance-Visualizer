import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  amount: Number,
  date: Date,
  description: String,

});
   
export default mongoose.model('Transaction', transactionSchema);
