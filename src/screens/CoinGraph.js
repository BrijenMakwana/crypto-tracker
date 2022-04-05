import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LineChart from "../components/LineChart";
import "./CoinGraph.css";
import moment from "moment";

function CoinGraph() {
  const [chartData, setChartData] = useState();
  let params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=1`
      )
      .then((response) => {
        // handle success
        // set chart data
        setChartData({
          labels: response.data.prices.map((data) =>
            moment(data[0]).format("LT")
          ),
          datasets: [
            {
              label: "Price Variation (in US Dollar)",
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
  }, [params.id]);
  return (
    <div className="coin-chart">
      {/* chart */}
      <h1 className="graph-title">{params.id} Price Variation in last 24hr</h1>
      {chartData && <LineChart data={chartData} />}
      <p className="back-btn" onClick={() => navigate(-1)}>
        Go Back
      </p>
    </div>
  );
}

export default CoinGraph;
