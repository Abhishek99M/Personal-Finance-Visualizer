export default function SpendingInsights({ transactions = [], budgets = [], selectedMonth }) {
  // Filter transactions for the selected month
  const filteredTransactions = transactions.filter((txn) =>
    txn.date.startsWith(selectedMonth) // txn.date should be 'YYYY-MM-DD'
  );

  // Group actual spending by category
  const spendingByCategory = filteredTransactions.reduce((acc, txn) => {
    acc[txn.category] = (acc[txn.category] || 0) + txn.amount;
    return acc;
  }, {});

  // Prepare budget mapping by category
  const budgetMap = budgets
    .filter((b) => b.month === selectedMonth)
    .reduce((acc, b) => {
      acc[b.category] = b.amount;
      return acc;
    }, {});

  const insights = [];

  for (const category in spendingByCategory) {
    const actual = spendingByCategory[category];
    const budget = budgetMap[category] || 0;

    insights.push({
      category,
      actual,
      budget,
      status: actual > budget ? 'Over Budget' : 'Within Budget',
      difference: actual - budget,
    });
  }

  // Find max overspent category
  const overspent = insights.filter(i => i.status === 'Over Budget');
  const maxOverspent = overspent.reduce((max, curr) => curr.difference > max.difference ? curr : max, { difference: 0 });

  return (
    <div className="mt-6 p-4 border border-gray-300 rounded bg-gray-50 shadow">
      <h2 className="text-lg font-bold mb-4">💡 Spending Insights ({selectedMonth})</h2>
      
      {insights.length === 0 && (
        <p className="text-gray-500">No transactions or budgets available for this month.</p>
      )}

      {insights.map((insight) => (
        <div
          key={insight.category}
          className={`p-3 my-2 rounded border ${
            insight.status === 'Over Budget' ? 'border-red-500 bg-red-50' : 'border-green-500 bg-green-50'
          }`}
        >
          <p className="font-semibold">{insight.category}</p>
          <p>Spent: ₹{insight.actual} / Budget: ₹{insight.budget}</p>
          <p>Status: <span className="font-medium">{insight.status}</span></p>
        </div>
      ))}

      {overspent.length > 0 && (
        <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-600 rounded">
          <strong>🚨 Most Overspent Category:</strong> {maxOverspent.category} (₹{maxOverspent.difference} over)
        </div>
      )}
    </div>
  );
}
