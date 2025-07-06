import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300} className="border-2 border-gray-700 rounded-md bg-white shadow-md">
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#4f46e5" />
      </BarChart>
    </ResponsiveContainer>
  );
}
