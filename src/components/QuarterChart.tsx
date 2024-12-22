import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts';

interface QuarterChartProps {
  year: string;
  data: { spring: number; summer: number; autumn: number; winter: number };
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#d0ed57'];

const QuarterChart: React.FC<QuarterChartProps> = ({ year, data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const chartData = [
    { name: '春季', value: data.spring },
    { name: '夏季', value: data.summer },
    { name: '秋季', value: data.autumn },
    { name: '冬季', value: data.winter },
  ];

  const totalValue = chartData.reduce((acc, curr) => acc + curr.value, 0);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const renderActiveShape = (props: any) => {
    const {
      cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload,
    } = props;
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    const percentage = ((payload.value / totalValue) * 100).toFixed(2);

    // 中间位置
    const valueX = cx + (innerRadius + outerRadius) / 2 * cos;
    const valueY = cy + (innerRadius + outerRadius) / 2 * sin;

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 10} // 外扩 10 像素
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
          {`${percentage}%`}
        </text>
        <text
          x={valueX}
          y={valueY}
          textAnchor="middle"
          fill="#555"
          fontSize="14px"
          fontWeight="bold"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          onMouseEnter={onPieEnter}
          onMouseLeave={onPieLeave}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default QuarterChart;
