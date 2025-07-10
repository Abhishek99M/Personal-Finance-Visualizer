import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function BudgetVsActualChart({ data }) {
  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="budget" fill="#8884d8" />
      <Bar dataKey="actual" fill="#82ca9d" />
    </BarChart>
  );
}
