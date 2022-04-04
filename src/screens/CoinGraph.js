import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import BarChart from "../components/BarChart";

function CoinGraph() {
  const [chartData, setChartData] = useState();

  const getTrendingCoins = async () => {
    await axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        // handle success
        // set chart data
        setChartData({
          labels: response.data.coins.map((data) => data.item.name),
          datasets: [
            {
              label: "Top Trending Coins Market Cap",
              data: response.data.coins.map(
                (data) => data.item.market_cap_rank
              ),
              backgroundColor: ["#40916c", "#fff"],
              borderColor: "#000",
              borderWidth: 1,
              color: "##fff",
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
    getTrendingCoins();
  }, []);
  return (
    <div>
      {/* chart */}
      {chartData && <BarChart data={chartData} />}
    </div>
  );
}

export default CoinGraph;
