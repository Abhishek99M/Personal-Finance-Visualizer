import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://personal-finance-visualizer-backend.vercel.app";//"http://localhost:4000";

export default function TransactionList({ transactions, fetchTransactions }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/transactions/${id}`);
      fetchTransactions();
    } catch (err) {
      console.error("Failed to delete:", err);
    }
  };

  return (
    <ul className="mt-4">
      {transactions.map((txn) => (
        <li key={txn._id} className="flex justify-between items-center border-gray-700 p-2">
          <div className='border-2 border-gray-700 p-2 rounded font-semibold'>
            ₹{txn.amount} | {new Date(txn.date).toLocaleDateString()} | {txn.description} | {txn.category}
          </div>
          <button
            onClick={() => handleDelete(txn._id)}
            className="p-2 border border-gray-700 font-bold rounded hover:bg-red-700 transition duration-200"
            >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
