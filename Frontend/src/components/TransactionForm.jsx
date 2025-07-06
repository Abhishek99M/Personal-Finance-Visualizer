import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function TransactionForm({ fetchTransactions }) {
  const [form, setForm] = useState({ amount: '', date: '', description: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/transactions`, form);
      setForm({ amount: '', date: '', description: '' });
      fetchTransactions();
    } catch (err) {
      console.error('Failed to add transaction:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 my-8 space-y-4 border-2 border-gray-700 rounded-md bg-white shadow-md">
      <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} required className="p-4 my-6 space-y-2 border-2 border-gray-700 rounded-md bg-white shadow-md"/>
      <input name="date" type="date" value={form.date} onChange={handleChange} required 
      className="w-full p-2 border border-gray-500 rounded"/>
      <input name="description" type="text" placeholder="Description" value={form.description} onChange={handleChange} required 
      className="w-full p-2 border border-gray-500 rounded"/>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-green-700">Add Transaction</button>
    </form>
  );
}