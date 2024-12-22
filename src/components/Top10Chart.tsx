import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

type TopAnimeData = {
  title: string;
  score: number;
};

interface Top10AnimeBarChartProps {
  data: TopAnimeData[];
}

const Top10Chart: React.FC<Top10AnimeBarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="title" type="category" hide={true}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="score" fill="#8884d8">
          <LabelList dataKey="title" position="insideLeft" offset={10} fill="#FF5733"/>
          <LabelList dataKey="score" position="right" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Top10Chart;
