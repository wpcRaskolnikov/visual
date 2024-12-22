import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Top10Chart from '../components/Top10Chart';
import { getTop10AnimeData } from '../services/Data';

const Top10ChartPage: React.FC = () => {
    const navigate = useNavigate();
    const top10AnimeData = getTop10AnimeData();

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', height: '95vh', width: '95vw' }}>
            <Button onClick={() => navigate('/')} sx={{ marginTop: 2 }}>
                返回首页
            </Button>
            <Typography variant="h4" gutterBottom>
                Top 10 动漫
            </Typography>
            <Top10Chart data={top10AnimeData} />
        </Container>
    );
};

export default Top10ChartPage;