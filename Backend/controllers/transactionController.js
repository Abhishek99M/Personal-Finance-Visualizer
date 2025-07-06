import Transaction from "../models/transactionModel.js";

export const getTransactions = async (req, res) => {
  const data = await Transaction.find();
  res.json(data);
};

export const addTransaction = async (req, res) => {
  const txn = new Transaction(req.body);
  await txn.save();
  res.status(201).json(txn);
};

export const deleteTransaction = async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
