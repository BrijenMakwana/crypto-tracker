import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./components/Coin";
import BarChart from "./components/BarChart";

function App() {
  const [coins, setCoins] = useState([]);
  const [chartData, setChartData] = useState();
  const [search, setSearch] = useState("");
  const availableCurrency = [
    {
      id: "1",
      name: "US Dollar",
      value: "usd",
    },
    { id: "2", name: "Indonesian Dollar", value: "idr" },
    { id: "3", name: "New Taiwan Dollar", value: "twd" },
    { id: "4", name: "Euro", value: "eur" },
    { id: "5", name: "South Korean Won", value: "krw" },
    { id: "6", name: "Japanese Yen", value: "jpy" },
    { id: "7", name: "Russian Ruble", value: "rub" },
    { id: "8", name: "Chinese Yuan", value: "cny" },
  ];

  const [currency, setCurrency] = useState("usd");

  const getCoinsMarket = async () => {
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=%20market_cap_desc&per_page=250&page=1&sparkline=false`
      )
      .then((response) => {
        // handle success
        setCoins(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const getTrendingCoins = async () => {
    await axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        // handle success
        // set chart dat
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
        // setTrendingCoins();
        console.log(response.data.coins);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getCoinsMarket();
    getTrendingCoins();
  }, [currency]);

  // search coin

  const searchCoin = (e) => {
    setSearch(e.target.value);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setCurrency(e.target.value);
  };

  // filter coins based on search
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main-container">
      <div className="coin-search">
        <h1 className="main-heading">Cryptocurrency Tracking</h1>
        <form>
          <input
            type="text"
            placeholder="search"
            className="coin-input"
            onChange={searchCoin}
          ></input>
        </form>
      </div>
      {chartData && <BarChart data={chartData} />}

      <div className="coin-options">
        <div className="coin-dropdown">
          Slect Currency
          <select
            value={currency}
            onChange={handleChange}
            className="dropdown-menu"
          >
            {availableCurrency.map((item) => (
              <option value={item.value} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="coins-container">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              volume={coin.total_volume}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              marketCap={coin.market_cap}
              currency={currency}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
