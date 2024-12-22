import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ScoreScatterChart from '../components/ScoreScatterChart';
import { useScatterChartData } from '../services/Data';

const ScatterChartPage: React.FC = () => {
  const navigate = useNavigate();
  const scatterChartData = useScatterChartData();
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', height: '95vh', width: '95vw' }}>
      <Button onClick={() => navigate('/')} sx={{ marginTop: 2 }}>
        返回首页
      </Button>

      <Typography variant="h4" gutterBottom>
        评分人数与评分的散点图
      </Typography>
      <ScoreScatterChart data={scatterChartData} />

    </Container>
  );
};

export default ScatterChartPage;

