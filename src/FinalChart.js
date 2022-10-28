import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Radar, Pie, Bar } from "react-chartjs-2";

function FinalChart({ chartData, chartType }) {
  switch (chartType) {
    case true:
      return <Bar data={chartData} />;
    case false:
      return <Line data={chartData} />;
  }
}

export default FinalChart;
