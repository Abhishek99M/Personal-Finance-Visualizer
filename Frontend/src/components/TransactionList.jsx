import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://personal-finance-visualizer-backend.vercel.app/";

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
        <li key={txn._id} className="flex justify-between items-center border p-2">
          <div>
            ₹{txn.amount} | {new Date(txn.date).toLocaleDateString()} | {txn.description}
          </div>
          <button onClick={() => handleDelete(txn._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
