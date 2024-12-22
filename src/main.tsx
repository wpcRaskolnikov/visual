import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import YearChartPage from './pages/YearChartPage';
import RatingChartPage from './pages/RatingChartPage';
import ScatterChartPage from './pages/ScatterChartPage';
import Top10ChartPage from './pages/Top10ChartPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/scatter-chart" element={<ScatterChartPage />} />
      <Route path="/year-chart" element={<YearChartPage />} />
      <Route path="/rating-chart" element={<RatingChartPage />} />
      <Route path="/top10-chart" element={<Top10ChartPage />} />
    </Routes>
  </Router>
);
