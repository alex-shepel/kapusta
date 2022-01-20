import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import s from './Chart.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement);

export function ChartComp({ chartData }) {
  const [widthS, setWidthS] = useState(window.screen.width);

  const handleResizeWindow = () => setWidthS(window.screen.width);

  const options = {
    aspectRatio: widthS <= 320 ? 0.8 : 2,
    plugins: {
      datalabels: {
        color: '#52555F',
        align: widthS <= 320 ? 'right' : 'top',
        anchor: 'end',
        padding: {
          top: widthS <= 320 ? -15 : 15,
          right: 10,
          bottom: 0,
        },
        formatter: function (value, context) {
          return value + 'грн';
        },
      },
    },
    indexAxis: widthS > 320 ? 'x' : 'y',

    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          LayoutPosition: 'top',
          display: widthS > 320,
        },
      },
      y: {
        grid: {
          display: widthS > 320,
          drawBorder: false,
        },

        ticks: {
          LayoutPosition: 'top',
          display: widthS <= 320,
        },
      },
    },
  };

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);

    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, [widthS, options]);

  const chooseBgColor = arr => {
    return arr.map((_, index) => (index % 3 === 0 ? '#FF751D' : '#FFDAC0'));
  };

  const { total, ...gettingData } = chartData === undefined ? {} : chartData;

  const labels = Object.keys(gettingData);
  const incomeData = Object.values(gettingData);

  const data = {
    labels,
    datasets: [
      {
        data: incomeData,
        maxBarThickness: widthS <= 320 ? 20 : 30,
        backgroundColor: chooseBgColor(labels),
        borderRadius: 10,
        inflateAmount: widthS <= 320 ? 2 : 10,
      },
    ],
  };

  return (
    <div className={s.barWrapper}>
      <Bar options={options} data={data} plugins={[ChartDataLabels]} />
    </div>
  );
}
