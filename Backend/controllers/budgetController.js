import Budget from '../models/budgetModel.js';

export const addBudget = async (req, res) => {
  try {
    const { category, month, amount } = req.body;

    if (!category || !month || typeof amount !== 'number') {
      return res.status(400).json({ error: "Invalid input" });
    }

    const budget = new Budget({ category, month, amount });
    await budget.save();
    res.status(201).json(budget);
  } catch (err) {
    console.error("💥 Error in addBudget:", err);
    res.status(400).json({ error: "Failed to add budget", details: err.message });
  }
};

export const getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find();
    res.json(budgets);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch budgets", details: err.message });
  }
};
