import "./HomeScreen.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Coin from "../components/Coin";

function HomeScreen() {
  const [coins, setCoins] = useState([]);

  const [search, setSearch] = useState("");
  const availableCurrency = [
    { id: "1", name: "Indian Rupees", value: "inr" },
    {
      id: "2",
      name: "US Dollar",
      value: "usd",
    },
    { id: "3", name: "Indonesian Dollar", value: "idr" },
    { id: "4", name: "New Taiwan Dollar", value: "twd" },
    { id: "5", name: "Euro", value: "eur" },
    { id: "6", name: "South Korean Won", value: "krw" },
    { id: "7", name: "Japanese Yen", value: "jpy" },
    { id: "8", name: "Russian Ruble", value: "rub" },
    { id: "9", name: "Chinese Yuan", value: "cny" },
  ];

  const availableSorting = [
    { id: "1", name: "Name", value: "name" },
    { id: "2", name: "Price", value: "current_price" },
    { id: "3", name: "Volume", value: "total_volume" },
    { id: "4", name: "Market Cap", value: "market_cap" },
  ];

  const [currency, setCurrency] = useState("usd");
  const [sort, setSort] = useState("market_cap");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=250&page=1&sparkline=false`
      )
      .then((response) => {
        // handle success
        console.log(response.data);
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

  const handleChangeSort = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
  };

  // filter coins based on search
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  // sort
  switch (sort) {
    case "name":
      filteredCoins.sort((a, b) => (a.name > b.name ? 1 : -1));
      break;
    case "current_price":
      filteredCoins.sort((a, b) =>
        a.current_price < b.current_price ? 1 : -1
      );
      break;
    case "total_volume":
      filteredCoins.sort((a, b) => (a.total_volume < b.total_volume ? 1 : -1));
      break;
    case "market_cap":
      filteredCoins.sort((a, b) => (a.market_cap < b.market_cap ? 1 : -1));
      break;

    default:
      break;
  }

  return (
    <div className="main-container">
      {/* search box */}
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

      {/* dropdown menus */}
      <div className="coin-options">
        <div className="coin-dropdown">
          Select Currency
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

        <div className="coin-dropdown">
          Sort By
          <select
            value={sort}
            onChange={handleChangeSort}
            className="dropdown-menu"
          >
            {availableSorting.map((item) => (
              <option value={item.value} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* list of coins */}
      <div className="coins-container">
        { coins && filteredCoins.map((coin) => {
          return (
            <Coin
              id={coin.id}
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

export default HomeScreen;
