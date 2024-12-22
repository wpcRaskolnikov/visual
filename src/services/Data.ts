import { useEffect, useState } from 'react';
import bangumiData from '../assets/bangumi_data.json';

export type ScatterChartData = { score: number; count: number };
export type TopAnimeData = { title: string; score: number };

export const useScatterChartData = () => {
  const [scatterChartData, setScatterChartData] = useState<ScatterChartData[]>([]);

  useEffect(() => {
    // 处理bangumi数据，提取评分人数和评分
    const processedData = bangumiData.map((item) => ({
      score: parseFloat(item.score),
      count: parseInt(item.rating_count, 10),
    }));
    setScatterChartData(processedData);
  }, []);

  return scatterChartData;
};

// 获取评分最高的前10部动漫
export const getTop10AnimeData = (): TopAnimeData[] => {
  return bangumiData
    .map((item) => ({
      title: item.title,
      score: parseFloat(item.score), 
    }))
    .sort((a, b) => b.score - a.score) 
    .slice(0, 10); 
};
