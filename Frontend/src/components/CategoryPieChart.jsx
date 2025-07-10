import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F'];

export default function CategoryPieChart({ transactions }) {
  const categoryTotals = {};

  transactions.forEach(txn => {
    // Normalize category: trim, fallback to "Uncategorized" if missing or empty
    let category = (txn.category || "").trim();
    if (!category) category = "Uncategorized";
    categoryTotals[category] = (categoryTotals[category] || 0) + txn.amount;
  });

  const data = Object.entries(categoryTotals).map(([category, total]) => ({
    name: category,
    value: total,
  }));

  return (
    <PieChart width={350} height={300}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}