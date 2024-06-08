import React from "react";
import { Bar, Chart } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  Chart as ChartJS,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-chart-financial";
import {
  OhlcController,
  OhlcElement,
  CandlestickElement,
  CandlestickController,
} from "chartjs-chart-financial";

ChartJS.register(
  CategoryScale,
  LinearScale,
  OhlcController,
  OhlcElement,
  Tooltip,
  Legend,
  CandlestickElement,
  CandlestickController
);

const OhlcChart = ({ data }) => {
  const options = {
    responsive: true,
    scales: {
      x: {
        type: "category",
        labels: data.labels,
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          maxTicksLimit: 6,
        },
      },
      y: {
        type: "linear",
        position: "right",
        display: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        type: "candlestick",
        label: "Stock Data",
        // data: data.ohlcData,
        data: [
          {
            Date: "2024-05-31",
            Open: 4.8,
            High: 5.18,
            Low: 4.7301,
            Close: 4.89,
          },
          {
            Date: "2024-05-30",
            Open: 4.9,
            High: 5.04,
            Low: 4.815,
            Close: 4.87,
          },
          {
            Date: "2024-05-29",
            Open: 4.78,
            High: 4.91,
            Low: 4.64,
            Close: 4.81,
          },
          { Date: "2024-05-28", Open: 4.9, High: 5.24, Low: 4.7, Close: 4.92 },
          { Date: "2024-05-24", Open: 4.76, High: 5.2, Low: 4.71, Close: 4.9 },
          { Date: "2024-05-23", Open: 4.74, High: 5.02, Low: 4.5, Close: 4.7 },
        ],
        borderColor: "rgba(0, 0, 0, 1)",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      },
    ],
  };
  console.log("hi", chartData);

  return (
    <div>
      <Bar type="candlestick" data={chartData} options={options} />
    </div>
  );
};

export default OhlcChart;
