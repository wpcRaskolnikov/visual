import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

interface RatingChartProps {
  data: {
    year: string;
    average_score: number;
    highest_score: number;
    lowest_score: number;
  }[];
}

const RatingChart: React.FC<RatingChartProps> = ({ data }) => {
  const [showHighLow, setShowHighLow] = useState(false);

  const handleChartClick = () => {
    setShowHighLow((prev) => !prev);
  };

  return (
    <ResponsiveContainer>
      <LineChart data={data} onClick={handleChartClick}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis domain={[0, 10]} />
        <Tooltip />
        {!showHighLow && (
          <Line
            type="monotone"
            dataKey="average_score"
            stroke="#8884d8"
            name="平均评分"
          />
        )}
        {showHighLow && (
          <>
            <Line
              type="monotone"
              dataKey="highest_score"
              stroke="#82ca9d"
              name="最高评分"
            />
            <Line
              type="monotone"
              dataKey="lowest_score"
              stroke="#ff7300"
              name="最低评分"
            />
          </>
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RatingChart;
