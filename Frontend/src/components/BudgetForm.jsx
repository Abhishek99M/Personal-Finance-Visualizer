import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function BudgetForm({ fetchBudgets }) {
  const [form, setForm] = useState({ category: '', month: '', amount: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post(`${API_BASE_URL}/api/budgets`,{ 
        ...form,
        amount: parseFloat(form.amount),
      });
      setForm({ category: '', month: '', amount: '' });
      fetchBudgets();
    } catch (err) {
      console.error('Failed to add budget:', err.response?.data || err.message);
      alert('Failed to add budget. Please try again.');
    }
    
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-4 p-6 my-8 space-y-4 border-2 border-gray-700 rounded-md bg-white shadow-md">
      <input name="month" type="month" value={form.month} onChange={handleChange} required className="w-50 p-2 border-2 border-gray-700 rounded-md bg-white shadow-md" />
      <select name="category" value={form.category} onChange={handleChange} required className="w-50 p-2 border-2 border-gray-700 rounded-md bg-white shadow-md">
        <option value="" >Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Travelling">Travelling</option>
        <option value="Health">Health</option>
        <option value="Shopping">Shopping</option>
        <option value="Room Rent">Room Rent</option>
        <option value="Others">Others</option>
        {/* add more as needed */}
      </select>
      <input name="amount" type="number" placeholder="Budget Amount" value={form.amount} onChange={handleChange} required className="p-2 my-6 space-y-2 border-2 border-gray-700 rounded-md bg-white shadow-md"/>
      <button type="submit" className="px-14 py-2.5 bg-blue-600 text-white rounded hover:bg-green-700">Add Budget</button>
    </form>
  );
}
