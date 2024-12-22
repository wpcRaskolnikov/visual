import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface YearChartProps {
  data: { year: string; total: number }[];
  onClick: (year: string) => void;
}

const YearChart: React.FC<YearChartProps> = ({ data, onClick }) => {
  return (
    <ResponsiveContainer>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="total"
          fill="#8884d8"
          onClick={(data) => {
            if (data && data.payload) {
              onClick(data.payload.year);
            }
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default YearChart;
