import React from "react";
import "./BarChart.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function BarChart(props) {
  return (
    <div className="chart-container">
      <Bar data={props.data} />
    </div>
  );
}
