export default function DashboardSummary({ transactions }) {
  const total = transactions.reduce((sum, txn) => sum + txn.amount, 0);
  const recent = transactions.slice(-10).reverse(); // last 5 transactions

  return (
    <div className="grid grid-cols-1 gap-4 my-6">
      <div className="p-4 bg-blue-100 rounded shadow">
        <h2 className="font-semibold">Total Expenses</h2>
        <p>₹{total}</p>
      </div>
      <div className="p-4 bg-green-100 rounded shadow">
        <h2 className="font-semibold">Recent Transactions</h2>
        <ul>
          {recent.map(txn => (
            <li key={txn._id}>
              ₹{txn.amount} - {txn.category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}