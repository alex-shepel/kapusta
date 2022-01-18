import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Container from '../Container/Container';
import s from './Chart.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement);

console.dir(ChartJS);
const windowWidth = window.innerWidth;
console.log('✈️ ~ windowWidth', windowWidth);

const options = {
  //   responsive: false,
  aspectRatio: 0.8,
  plugins: {
    datalabels: {
      color: '#52555F',
      align: 'top',
      anchor: 'end',
      padding: {
        top: windowWidth <= 320 ? -15 : 15,
        left: 0,
        bottom: 0,
      },
      formatter: function (value, context) {
        return value + 'грн';
      },
    },
  },
  indexAxis: windowWidth > 320 ? 'x' : 'y',

  scales: {
    position: 'bottom',
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        LayoutPosition: 'top',
        display: windowWidth > 320,
      },
    },
    y: {
      grid: {
        display: windowWidth > 320,
        drawBorder: false,
      },

      ticks: {
        LayoutPosition: 'top',
        // mirror: true,
        display: windowWidth <= 320,
      },
    },
  },
};

console.log(windowWidth > 320);

const chooseBgColor = arr => {
  return arr.map((_, index) => (index % 3 === 0 ? '#FF751D' : '#FFDAC0'));
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const incomeData = [5, 6, 10, 2, 5, 6, 8];

const data = {
  labels,
  datasets: [
    {
      data: [5, 6, 10, 2, 5, 6, 8],
      maxBarThickness: 30,
      //   categoryPercentage: 0.1,
      //   barPercentage: 0.01,
      backgroundColor: chooseBgColor(labels),
      borderRadius: 10,
      inflateAmount: 2,

      //   barThickness: 5,
    },
  ],
};

console.dir(data);
export function ChartComp() {
  return (
    <Container>
      <div className={s.barWrapper}>
        <Bar
          options={options}
          data={data}
          plugins={[
            ChartDataLabels,
            { options: { datalabels: { color: 'red' } } },
          ]}
        />
      </div>
    </Container>
  );
}
