import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface ScoreScatterChartProps {
  data: { score: number; count: number }[];
}

const ScoreScatterChart: React.FC<ScoreScatterChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer>
      <ScatterChart>
        <CartesianGrid />
        <XAxis type="number" dataKey="count" name="评分人数" unit="人" />
        <YAxis type="number" dataKey="score" name="评分" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="评分数据" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScoreScatterChart;
