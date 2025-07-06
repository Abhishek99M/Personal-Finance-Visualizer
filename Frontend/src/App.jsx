import { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Chart from './components/ExpensesChart';

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const res = await axios.get("http://localhost:4000/api/transactions");
    setTransactions(res.data);
  };

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
    <div className="p-6 max-w-xl mx-auto">
      <h1 className=" flex text-xl font-bold mb-4">Personal Finance Tracker</h1>
      <TransactionForm fetchTransactions={fetchTransactions} />
      <TransactionList transactions={transactions} fetchTransactions={fetchTransactions} />
      <Chart data={chartData} />
    </div>
  );
}

export default App;
