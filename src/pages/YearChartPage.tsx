import React, { useState } from 'react';
import { Container, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import YearChart from '../components/YearChart';
import QuarterChart from '../components/QuarterChart';
import yearQuarterStats from '../assets/year_quarter_stats.json';

const YearChartPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const yearData = Object.keys(yearQuarterStats).map((year) => ({
    year,
    total: yearQuarterStats[year].total,
  }));

  const handleOpenDialog = (year: string) => {
    setSelectedYear(year);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedYear(null);
    setOpen(false);
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', height: '95vh', width: '95vw' }}>
      <Button onClick={() => navigate('/')} sx={{ marginTop: 2 }}>
        返回首页
      </Button>
      <Typography variant="h4" gutterBottom>
        年度动漫总数
      </Typography>
      <YearChart data={yearData} onClick={handleOpenDialog} />

      {/* 弹窗 */}
      <Dialog open={open} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>{selectedYear} 年数据</DialogTitle>
        <DialogContent sx={{ padding: 2, height: '80vh', maxHeight: '250pt' }}>
          {selectedYear && (
            <>
              <Typography variant="h6" gutterBottom>
                季度动漫分布
              </Typography>
              <QuarterChart year={selectedYear} data={yearQuarterStats[selectedYear]} />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            关闭
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default YearChartPage;

