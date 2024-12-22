import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RatingChart from '../components/RatingChart';
import scoresSummary from '../assets/bangumi_scores_summary.json';

const RatingChartPage: React.FC = () => {
  const navigate = useNavigate();
  const chartData = Object.entries(scoresSummary).map(
    ([year, { average_score, highest_score, lowest_score }]) => ({
      year,
      average_score,
      highest_score,
      lowest_score,
    })
  );

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', height: '95vh', width: '95vw' }}>
      <Button onClick={() => navigate('/')} sx={{ marginTop: 2 }}>
        返回首页
      </Button>
      <Typography variant="h4" gutterBottom>
        评分变化
      </Typography>
      <RatingChart data={chartData} />
    </Container>
  );
};

export default RatingChartPage;
