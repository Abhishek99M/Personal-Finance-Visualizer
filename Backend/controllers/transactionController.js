import Transaction from "../models/transactionModel.js";

export const getTransactions = async (req, res) => {
  
  const data = await Transaction.find();
  res.json(data);
};

export const addTransaction = async (req, res) => {

  try {
    const txn = new Transaction(req.body); // ✅ req.body should contain category
    await txn.save();
    res.status(201).json(txn);
  } catch (err) {
    res.status(400).json({ error: "Transaction creation failed", details: err });
  }
};

export const deleteTransaction = async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
