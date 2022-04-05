import React from "react";
import "./LineChart.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function LineChart(props) {
  return (
    <div className="chart-container">
      <Line data={props.data} />
    </div>
  );
}
