import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./components/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false`
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
      <div className="coin-options">
        <div className="coin-dropdown">
          Slect Currency
          <select
            value={currency}
            onChange={handleChange}
            className="dropdown-menu"
          >
            <option value="usd">US Dollar</option>
            <option value="idr">Indonesian Dollar</option>
            <option value="twd">New Taiwan Dollar</option>
            <option value="eur">Euro</option>
            <option value="krw">South Korean Won</option>
            <option value="jpy">Japanese Yen</option>
            <option value="rub">Russian Ruble</option>
            <option value="cny">Chinese Yuan</option>
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
