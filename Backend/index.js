import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import transactionRoutes from './routes/transactionRoutes.js';
import budgetRoutes from './routes/budgetRoutes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const allowedOrigins = [
  'http://localhost:5173',
  'https://personal-finance-visualizer-lake.vercel.app'
];

app.use(cors({
  origin: allowedOrigins, // Vite's default port for frontend
  credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

app.use('/api/transactions', transactionRoutes);
app.use('/api/budgets', budgetRoutes);

app.get("/", (req, res) => {
  res.send("Personal Finance Visualizer Backend is running ✅");
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

