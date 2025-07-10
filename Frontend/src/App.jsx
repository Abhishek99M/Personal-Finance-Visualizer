import { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import ExpensesChart from './components/ExpensesChart';
import CategoryPieChart from './components/CategoryPieChart';
import DashboardSummary from './components/DashboardSummary';

// Use environment variable for backend URL, fallback to local if not set
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

function App() {
  const [transactions, setTransactions] = useState([]);
  //console.log("Hi i am here");
  const fetchTransactions = async () => {
    const res = await axios.get(`${API_BASE_URL}/api/transactions`);
    setTransactions(res.data);
  };
  //console.log("Hi i am here 2");

  useEffect(() => {
    fetchTransactions();
  }, []);

  const monthlyTotals = {}; // prepare data for Chart

  transactions.forEach(txn => {
    const month = new Date(txn.date).toLocaleString('default', { month: 'short' });
    monthlyTotals[month] = (monthlyTotals[month] || 0) + txn.amount;
  });

  const chartData = Object.entries(monthlyTotals).map(([month, total]) => ({ month, total }));

  return (
    <div className="bg-[url('/BG.png')] bg-no-repeat bg-top-center bg-cover bg-fixed">
      <div className="p-6 max-w-xl mx-auto">
        <h1 className=" flex text-2xl font-extrabold mb-4">Personal Finance Tracker</h1>
        <DashboardSummary transactions={transactions} />
        <TransactionForm fetchTransactions={fetchTransactions} />
        <TransactionList transactions={transactions} fetchTransactions={fetchTransactions} />
        <ExpensesChart data={chartData} />
        <CategoryPieChart transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
