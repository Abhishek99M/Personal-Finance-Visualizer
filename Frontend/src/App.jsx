import { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import ExpensesChart from './components/ExpensesChart';
import CategoryPieChart from './components/CategoryPieChart';
import DashboardSummary from './components/DashboardSummary';
import BudgetForm from './components/BudgetForm';
import BudgetVsActualChart from './components/BudgetVsActualChart';
import SpendingInsights from './components/SpendingInsights';


// Use environment variable for backend URL, fallback to local if not set
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7)); // month in YYYY-MM format

  //Fetch budgets
  const fetchTransactions = async () => {
    const res = await axios.get(`${API_BASE_URL}/api/transactions`);
    setTransactions(res.data);
  };
  const fetchBudgets = async () => {
    const res = await axios.get(`${API_BASE_URL}/api/budgets`);
    setBudgets(res.data);
  };

  useEffect(() => {
    fetchTransactions();
    fetchBudgets();
  }, []);

  // Chart data: Total per month (ExpensesChart)
  const monthlyTotals = {}; 
  transactions.forEach(txn => {
    const month = new Date(txn.date).toLocaleString('default', { month: 'short' });
    monthlyTotals[month] = (monthlyTotals[month] || 0) + txn.amount;
  });

  const chartData = Object.entries(monthlyTotals).map(([month, total]) => ({ month, total }));

  const currentMonth = selectedMonth; // Get current month in YYYY-MM format
  const budgetVsActualData = [];
  const filteredTransactions = transactions.filter(txn => txn.date.startsWith(currentMonth));
  const actualByCategory = {};
  filteredTransactions.forEach(txn => {
    actualByCategory[txn.category] = (actualByCategory[txn.category] || 0) + txn.amount;
  });

  const currentBudgets = budgets.filter(b => b.month === currentMonth);
  currentBudgets.forEach(b => {
    budgetVsActualData.push({
      category: b.category,
      budget: b.amount,
      actual: actualByCategory[b.category] || 0
    });
  });

  return (
    <div className="bg-[url('/BG.png')] bg-no-repeat bg-top-center bg-cover bg-fixed">
      <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-7xl mx-auto">
         {/* LEFT: Tracker */}
        <div className="flex-1 space-y-6 min-w-0">
          <h1 className="text-2xl font-extrabold mb-4">Personal Finance Tracker</h1>
          <DashboardSummary transactions={transactions} />
          <TransactionForm fetchTransactions={fetchTransactions} />
          <TransactionList transactions={transactions} fetchTransactions={fetchTransactions} />
          <ExpensesChart data={chartData} />
          <CategoryPieChart transactions={transactions} />
        </div>
        {/* RIGHT: Budgeting */}

        <div className="flex-1 space-y-6 min-w-0">
          <div className="p-6 bg-white rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">💰 Budget Management</h2>
            <BudgetForm fetchBudgets={fetchBudgets} />
            <label className="block mt-6 mb-6 ">
              📅 Select Month: &nbsp;
              <input
                type="month"
                value={selectedMonth}
                onChange={e => setSelectedMonth(e.target.value)}
                className="border p-2 border-gray-700 rounded-md bg-white shadow-md"
              />
            </label>

            <div className="p-4 border-2 border-gray-300 rounded-md bg-white shadow-md w-full overflow-x-auto">
              <div className="w-full max-w-full">
                <BudgetVsActualChart data={budgetVsActualData} />
              </div>
            </div>

            <SpendingInsights
              transactions={transactions}
              budgets={budgets}
              selectedMonth={selectedMonth}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
