import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chartbar() {
  const options = {
    plugins: {
      title: {
        display: false,
        text: "Chart.js Bar Chart - Stacked",
      },
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.yLabel;
          },
        },
      },
    },
    responsive: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = [
    "Apr 2",
    "Apr 4",
    "Apr 6",
    "Apr 8",
    "Apr 10",
    "Apr 12",
    "Apr 14",
    "Apr 16",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [5, 15, 5, 40, 5, 50, 10],
        backgroundColor: "#5C5AFC",
      },
      {
        label: "Dataset 2",
        data: [15, 15, 5, 40, 5, 50, 10],
        backgroundColor: "#F09670",
      },
    ],
  };
  return <Bar height="201px" width="550px" options={options} data={data} />;
}
