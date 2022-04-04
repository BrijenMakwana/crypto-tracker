import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import "./CoinGraph.css";

function CoinGraph() {
  const [chartData, setChartData] = useState();

  const getPrices = async () => {
    await axios
      .get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1"
      )
      .then((response) => {
        // handle success
        // set chart data
        setChartData({
          labels: response.data.prices.map((data) => data[0]),
          datasets: [
            {
              label: "Price Variation",
              data: response.data.prices.map((data) => data[1]),
              backgroundColor: ["#40916c"],
              borderColor: "#1b4332",
              borderWidth: 1,
              color: "##fff",
              pointStyle: "line",
            },
          ],
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  let params = useParams();

  useEffect(() => {
    // getTrendingCoins();
    getPrices();
  }, []);
  return (
    <div className="coin-chart">
      {/* chart */}
      {chartData && <BarChart data={chartData} />}
    </div>
  );
}

export default CoinGraph;
