import React from "react";
import "./Coin.css";

export default function Coin(props) {
  return (
    <div className="coin-container">
      <img src={props.image} alt="crypto" />
      <h1 className="coin-name">{props.name}</h1>
      <p className="coin-data">{props.symbol}</p>

      <p className="coin-heading">Price</p>
      <p className="coin-data">$ {props.price}</p>

      <p className="coin-heading">Volume</p>
      <p className="coin-data">$ {props.volume.toLocaleString()}</p>

      <p className="coin-heading">Price Change</p>
      {props.priceChange < 0 ? (
        <p className="coin-data red">{props.priceChange.toFixed(2)}%</p>
      ) : (
        <p className="coin-data green">{props.priceChange.toFixed(2)}%</p>
      )}

      <p className="coin-heading">Market Cap</p>
      <p className="coin-data">$ {props.marketCap.toLocaleString()}</p>
    </div>
  );
}
