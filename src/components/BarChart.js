import React from "react";
import "./BarChart.css";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function BarChart(props) {
  return (
    <div className="chart-container">
      <Line data={props.data} />
    </div>
  );
}
