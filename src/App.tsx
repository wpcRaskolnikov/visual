// src/App.tsx
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';  // 使用 Grid2 进行布局
import { useNavigate } from 'react-router-dom';
import YearBarChart from './components/YearChart';
import RatingChart from './components/RatingChart';
import ScoreScatterChart from './components/ScoreScatterChart';
import Top10Chart from './components/Top10Chart';
import yearQuarterStats from './assets/year_quarter_stats.json';
import scoresSummary from './assets/bangumi_scores_summary.json';
import { getTop10AnimeData, useScatterChartData } from './services/Data';

// 类型定义
type ChartData = { year: string; average_score: number; highest_score: number; lowest_score: number };

const ChartCard: React.FC<{
  title: string;
  chartComponent: React.ReactNode;
  onClick: () => void;
}> = ({ title, chartComponent, onClick }) => (
  <Paper
    elevation={3}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      padding: 2,
      textAlign: 'center',
      cursor: 'pointer',
      height: '40vh'
    }}
    onClick={onClick}
  >
    <Typography gutterBottom>
      {title}
    </Typography>
    <Box
      sx={{
        width: '95%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {chartComponent}
    </Box>
  </Paper>
);

const App: React.FC = () => {
  const navigate = useNavigate();
  const scatterChartData = useScatterChartData();

  // 获取评分最高的前10部动漫
  const top10AnimeData = getTop10AnimeData();

  // 数据处理
  const chartData: ChartData[] = Object.entries(scoresSummary).map(
    ([year, { average_score, highest_score, lowest_score }]) => ({
      year,
      average_score,
      highest_score,
      lowest_score,
    })
  );

  const yearData = Object.keys(yearQuarterStats).map((year) => ({
    year,
    total: yearQuarterStats[year].total,
  }));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '95vh', width: '95vw' }}>
      {/* 内容区域 */}
      <Grid
        container
        spacing={2}
        sx={{
          padding: 2,
          flex: 1,
        }}
      >
        <Grid size={6}>
          <ChartCard
            title="年度动漫总数（点击查看详情）"
            chartComponent={<YearBarChart data={yearData} onClick={() => { }} />}
            onClick={() => navigate('/year-chart')}
          />
        </Grid>

        <Grid size={6}>
          <ChartCard
            title="评分变化（点击查看详情）"
            chartComponent={<RatingChart data={chartData} />}
            onClick={() => navigate('/rating-chart')}
          />
        </Grid>

        <Grid size={6}>
          <ChartCard
            title="评分人数与评分的散点图（点击查看详情）"
            chartComponent={<ScoreScatterChart data={scatterChartData} />}
            onClick={() => navigate('/scatter-chart')}
          />
        </Grid>

        <Grid size={6}>
          <ChartCard
            title="Top 10 动漫（点击查看详情）"
            chartComponent={<Top10Chart data={top10AnimeData} />}
            onClick={() => navigate('/top10-chart')}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
